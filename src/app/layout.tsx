import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit UI - Component Library",
  description: "A modern UI components library built with Next.js, Tailwind CSS, and ShadCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
