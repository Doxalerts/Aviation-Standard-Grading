import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASG | Aviation Standard Grading",
  description:
    "Aviation Standard Grading — precision-driven card grading built on trust, discipline, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}