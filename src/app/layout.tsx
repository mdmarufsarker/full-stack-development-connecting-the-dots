import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ফুলস্ট্যাক ডেভেলপমেন্ট কানেকটিং দ্য ডটস্",
  description: "Full Stack Development Connecting the Dots by HM Nayem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* google fonts */}
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Delius&family=Inter:wght@400;500;600;700&family=Mukta:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Sacramento&family=Source+Code+Pro:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-bodyColor font-mukta">
        <main className="max-w-container mx-auto text-lightWhite h-full overflow-hidden">
          <Header title="Full Stack Development Connecting The Dots" />
          {children}
          <Footer title="All rights reserved" />
        </main>
      </body>
    </html>
  );
}
