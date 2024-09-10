import type { Metadata } from "next";
import "./globals.css";
import{ ContextProvider } from "@/providers/ContextProvider";

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
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
