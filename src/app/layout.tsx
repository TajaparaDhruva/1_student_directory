
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Directory",
  description:
    "Browse campus students, academic departments, and specializations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-[#faf8ff] text-[#192235] font-sans text-sm leading-relaxed">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
