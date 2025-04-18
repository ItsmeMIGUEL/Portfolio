import type { Metadata } from "next";
import "./globals.css";
import { Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my work and skills.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* If using a PNG favicon */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
