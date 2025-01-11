import type { Metadata } from "next";
import { Konkhmer_Sleokchher } from "next/font/google";
import "./globals.css";

const konkhmer = Konkhmer_Sleokchher({
  weight: "400",
  variable: "--font-konkhmer",
  subsets: ["khmer","latin"]
})

export const metadata: Metadata = {
  title: "Key Spring",
  description: "KeySpring is a Spring Boot-based authentication solution for developers,"+ 
  " businesses, and teams. It offers secure, reusable, and easy-to-implement authentication workflows," + 
  " including API integration and Google authentication support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${konkhmer.variable}`}>
        {children}
      </body>
    </html>
  );
}
