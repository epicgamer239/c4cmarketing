import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Code4Community | Professional Websites Built & Managed",
  description:
    "Student-led team building professional websites for local nonprofits and small businesses. Built, managed, and optimized at low cost.",
  icons: {
    icon: "/c4c.png",
    apple: "/c4c.png",
  },
  openGraph: {
    title: "Code4Community | Professional Websites Built & Managed",
    description:
      "Student-led team building professional websites for local nonprofits and small businesses. Built, managed, and optimized at low cost.",
    url: "https://code4community.net",
    siteName: "Code4Community",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
