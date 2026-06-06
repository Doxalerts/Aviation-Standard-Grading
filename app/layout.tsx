import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASG | Aviation Standard Grading",
  description:
    "Aviation Standard Grading provides precision-focused collectible card grading, slab presentation, and online certification lookup.",
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
