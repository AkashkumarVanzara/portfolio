import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akashkumar Vanzara — Developer & Security Enthusiast",
  description:
    "Full-stack developer, cybersecurity learner, and aspiring founder. Building web apps and exploring security.",
  keywords: ["developer", "portfolio", "next.js", "cybersecurity", "full-stack"],
  authors: [{ name: "Akashkumar Vanzara" }],
  openGraph: {
    title: "Akashkumar Vanzara",
    description: "Full-stack developer & security enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
