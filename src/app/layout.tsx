import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import '@/styles/globals.css';
import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChronoProject",
  description: "ChronoProject is a collection of tools to help you generate ideas for your next project.",
};

export const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin-ext'],
});

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex justify-center">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
