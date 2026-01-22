import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import AdminShell from "./components/AdminShell";

const heading = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const body = Sora({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Lotly Admin",
  description: "Admin controls for the Lotly platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
