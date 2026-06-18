import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Code4Community | Custom Software for Community Organizations",
  description:
    "Student-led engineering club building custom websites, tools, and software for nonprofits and small businesses at low cost.",
  openGraph: {
    title: "Code4Community | Custom Software for Community Organizations",
    description:
      "Student-led engineering club building custom digital tools for nonprofits and community organizations at low cost.",
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
