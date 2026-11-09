import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
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

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-slate-50 antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            {children}
            <BurbujaDeIdioma />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}