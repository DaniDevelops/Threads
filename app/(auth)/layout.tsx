export const metadata = {
  title: "Shreads",
  description: "A Nextjs 14 Threads clone App",
};

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
