import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/header";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of netimoveis web page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={sourceSans.className}>
        <main className="flex flex-col justify-between">
          <Header />
        </main>
        {children}
      </body>
    </html>
  );
}
