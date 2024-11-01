import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

const ClientProvider = dynamic(() => import('./ClientProvider'), { ssr: false });

export const metadata: Metadata = {
  title: "AI 电商文案助手",
  description: "AI 电商文案助手"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
