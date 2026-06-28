import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "rajarshi sandilya — designer & developer",
  description:
    "a curious, slightly chaotic designer & developer from assam, currently in bangalore. websites, frames, words, and everything i got curious about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
