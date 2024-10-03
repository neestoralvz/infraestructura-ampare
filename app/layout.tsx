import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientInit from './ClientInit'; 
// import Diagnostics from './Diagnostics'; // Eliminar esta línea
import ErrorSuppressor from '../components/ErrorSuppressor';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Plantilla Proyectos",
  description: "Crear una plantilla base para proyectos de desarrollo de software frontend, utilizando shadcn/ui como la herramienta principal para la interfaz de usuario. La plantilla estará lista para ser desplegada en Vercel, con una página de índice preconfigurada.",
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
        suppressHydrationWarning
      >
        <ErrorSuppressor />
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
