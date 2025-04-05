import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";
import Providers from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - CodewithKara",
  description:
    "Explore the portfolio of Kara, a passionate developer showcasing innovative projects, skills, and expertise in web development and coding solutions.",
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
        <Providers>
          <div className="min-h-screen sm:max-w-6xl sm:mx-auto space-y-5 lg:space-y-10 p-5 sm:p-10">
            <Appbar />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
