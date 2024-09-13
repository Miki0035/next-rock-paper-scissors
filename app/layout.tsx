import type { Metadata } from "next";
import "./globals.css";
import { ContextProvider } from "@/providers/ContextProvider";

export const metadata: Metadata = {
  title: "Rock Paper Scissors App",
  description: "An Interactive Rock Paper Scissors Game play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[color:hsl(214,47%,23%)] to-[color:hsl(237,49%,15%)]">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
