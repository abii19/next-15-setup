import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TanstackProvider } from "@/providers/tanstack-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next 15 Setup",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
