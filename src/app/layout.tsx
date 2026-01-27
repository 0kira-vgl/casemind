import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Case Mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"bg-system-background text-zinc-50 antialiased"}>
        {children}
      </body>
    </html>
  );
}
