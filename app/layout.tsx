import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "home.gonilai.my";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const imageUrl = protocol + "://" + host + "/og-gonilai.png";

  return {
    title: "GoNilai — Pembayaran online makin mudah dan murah",
    description: "Kirim pulsa, paket data, voucher, dan token PLN untuk orang tersayang langsung dari Malaysia bersama GoNilai.",
    openGraph: {
      title: "GoNilai — Pembayaran online makin mudah dan murah",
      description: "Pulsa, paket data, voucher, dan token PLN untuk keluarga—bayar online atau tunai melalui 7-Eleven.",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "GoNilai — Pembayaran online makin mudah dan murah." }],
      locale: "id_ID",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
