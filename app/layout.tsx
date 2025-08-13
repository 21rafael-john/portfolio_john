import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Rafael John — Portfolio", description: "Data Analytics portfolio of Rafael John" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen antialiased bg-gradient-to-b from-slate-50 to-white text-slate-900">{children}</body></html>);
}
