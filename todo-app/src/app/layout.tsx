import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componentes/Navbar"; 
import { TarefaProvider } from "@/data/ContextTarefa"; 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista de Tarefas", // Título ajustado para o app
  description: "Um aplicativo de lista de tarefas simples com Next.js e Context API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TarefaProvider>
          <Navbar />
          {children}
        </TarefaProvider>
      </body>
    </html>
  );
}