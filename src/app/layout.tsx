import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Polar",
    description: "En Polar, creemos que la belleza no necesita adornos, solo frescura. Nos dedicamos a curar las flores más vibrantes y delicadas para transformar tus espacios en refugios de calma y sofisticación. Desde arreglos monocromáticos hasta diseños vanguardistas, llevamos la esencia más pura del jardín directamente a tu puerta. Descubre la frescura que perdura.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
