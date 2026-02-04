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
  title: "Gym App | Fitness Tracker with BMI Calculator & Mail Support",
  description:
    "A modern fitness web application built with Next.js. Explore gym programs, calculate your BMI, track your health, and contact us easily with the integrated mail feature.",

  keywords: [
    "Gym App",
    "Fitness Tracker",
    "BMI Calculator",
    "Next.js Gym Website",
    "Fitness Web App",
  ],
  

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
        <div className="">
             
        {children}
        </div>
      </body>
    </html>
  );
}
