import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Lock In Lauren | Strength & Movement Coaching",
  description:
    "Build real strength, unlock new skills, and move with energy. Personal training with Lauren.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-beige text-dark-green antialiased`}>
        {children}
      </body>
    </html>
  );
}
