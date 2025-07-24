import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from 'react';
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import LayoutWrapper from "@/components/LayoutWrapper";
import WhatsAppChat from "@/components/whatsapp";
import Chatbot from "@/components/chatbot";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TecnoGo",
  description: "Bienvenidos a TecnoGo",
};
interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps){
  return (
    <>
    <html lang="en" suppressHydrationWarning >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader 
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={100}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              />
              <LayoutWrapper >
              {children}
              <WhatsAppChat />
              <Chatbot /> 
              <Toaster />
              </LayoutWrapper >
          </ThemeProvider>
      </body>
    </html>
    </>
  );
}
