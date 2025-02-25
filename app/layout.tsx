import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load the custom fonts
const lora = localFont({
  src: "../public/fonts/Lora-Regular.ttf",
  variable: "--font-lora",
  display: "swap",
});

const andaleMono = localFont({
  src: "../public/fonts/Andale Mono.ttf",
  variable: "--font-andale-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Totoral - Estudio de Grabación",
  description: "Un espacio donde la música echa raíces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body
        className={`${lora.variable} ${andaleMono.variable} antialiased font-lora overflow-x-hidden m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
