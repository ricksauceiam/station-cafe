import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Trade Tracker — 20 Years of Deals",
  description: "Comprehensive database of NBA trades from 2006-2026 with outcome analysis, grades, and community discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">NBA Trade Tracker</span>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-900 transition-colors">All Trades</Link>
              <span className="text-gray-300">|</span>
              <span className="text-xs">2006 - 2025</span>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
            NBA Trade Tracker - A comprehensive database of NBA trades and their outcomes.
            Data compiled from public sources. Not affiliated with the NBA.
          </div>
        </footer>
      </body>
    </html>
  );
}
