import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ByteSpace - Courses",
  description: "Get Access to Hundreds Courses Available",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=clash-display@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-background text-text-main`}>
        {children}
      </body>
    </html>
  );
}
