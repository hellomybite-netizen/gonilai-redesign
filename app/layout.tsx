import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "mykedai.com.my";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const imageUrl = protocol + "://" + host + "/og-v3.png";

  return {
    title: "myKedai — Perniagaan sentiasa bergerak",
    description: "BM/EN — Jual reload, bayar bil dan tawarkan voucher digital kepada pelanggan melalui aplikasi myKedai.",
    openGraph: {
      title: "myKedai — Perniagaan bukan statik",
      description: "Business is always moving. Mulakan perniagaan digital dari telefon anda.",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "myKedai — Perniagaan bukan statik." }],
      locale: "ms_MY",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
