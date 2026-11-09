import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import BurbujaDeIdioma from "@/components/BurbujaDeIdioma";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Planting Seeds",
    description: "Planting Seeds - Of Hope Nonprofit",
};

// 1. Genera las rutas estáticas durante el build para en y es
export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // 2. Desestructuramos el locale directamente desde los params de la ruta
    const { locale } = await params;

    // 3. Obtenemos los mensajes pasando el locale directamente
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} suppressHydrationWarning>
        <body
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-slate-50 antialiased`}
        >
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
            <BurbujaDeIdioma />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}