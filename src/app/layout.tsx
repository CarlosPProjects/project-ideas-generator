import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

import '@/styles/globals.css';
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "NextIdea",
  description: "NextIdea is a collection of tools to help you generate ideas for your next project.",
};

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin-ext'],
});

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
          <div className="flex flex-col min-h-screen sm:px-4">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
