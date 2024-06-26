import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Ransom",
  description: "Hi, I'm Andrew Ransom. I'm a developer and software engineer. I specialize in building web applications and websites using modern technologies like NextJS, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='fixed top-0 w-full bg-white border-b opacity-90 z-50'>
          <Navbar />
        </div>
        <div className='md:pb-16 pb-24'>
        {children}
        </div>
      <div className='md:fixed bottom-0 w-full bg-white opacity-90 border-t'>
        <Footer />
      </div>
      <Toaster />
      </body>
    </html>
  );
}
