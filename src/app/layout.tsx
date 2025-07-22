import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "54 Media Group | Apps, Websites, Branding & Marketing Pros",
  description: "Grow your brand with 54 Media Group — expert app & website development, graphic design, advertising, and full-service digital marketing all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
