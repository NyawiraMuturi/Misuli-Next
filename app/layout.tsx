import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const archivo = Archivo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MISULI",
  description: "Your Friendly Exercise Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      
      <html lang="en">
        <body className={archivo.className}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
