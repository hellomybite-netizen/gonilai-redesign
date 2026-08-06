import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the GoNilai redesign", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>GoNilai — Pembayaran online makin mudah dan murah<\/title>/i);
  assert.match(html, /Pembayaran online makin/);
  assert.match(html, /Cara Membeli di GoNilai/i);
  assert.match(html, /Kebijakan GoNilai/i);
  assert.match(html, /FAQ GoNilai/i);
  assert.match(html, /\/gonilai\/logo\.png/);
  assert.match(html, /\/gonilai\/app-mockup\.webp/);
  assert.doesNotMatch(html, /codex-preview|Building your site|myKedai/i);
});

test("keeps required brand assets and metadata", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/gonilai/logo.png", import.meta.url)),
    access(new URL("../public/gonilai/app-mockup.webp", import.meta.url)),
    access(new URL("../public/og-gonilai.png", import.meta.url)),
  ]);

  assert.match(page, /\/gonilai\/logo\.png/);
  assert.match(page, /\/gonilai\/app-mockup\.webp/);
  assert.match(page, /https:\/\/gonilai\.app\//);
  assert.match(layout, /og-gonilai\.png/);
  assert.match(layout, /locale:\s*"id_ID"/);
});
