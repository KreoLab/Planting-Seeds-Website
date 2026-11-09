'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Logo from '@/assets/Logo-PlantingSeeds.png';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full shadow-sm font-sans sticky top-0 z-50 bg-white">
            {/* Topbar Superior Oscuro */}
            <div className="bg-[#031A19] text-white/90 text-xs sm:text-sm py-2.5 px-4 sm:px-8">
                <div className="w-full max-w-[95%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    {/* Ubicación y Correo */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
                        <div className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span>{t('location')}</span>
                        </div>

                        <a
                            href={`mailto:${t('email')}`}
                            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span>{t('email')}</span>
                        </a>
                    </div>

                    {/* Acceso a Voluntarios */}
                    <div className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-4">
                        <Link
                            href="/volunteer"
                            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span>{t('volunteer')}</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navbar Principal */}
            <nav className="py-4 px-2 lg:px-4 xl:px-8 border-b border-gray-100 bg-white">
                <div className="w-full lg:max-w-full xl:max-w-[95%] mx-auto flex justify-between items-center gap-1 lg:gap-2 xl:gap-4">

                    {/* Logo + Texto */}
                    <Link href="/" className="flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0">
                        <div className="relative w-9 h-9 lg:w-10 lg:h-10 xl:w-14 xl:h-14">
                            <Image
                                src={Logo}
                                alt="Planting Seeds Logo"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base lg:text-lg xl:text-2xl font-serif font-bold tracking-tight text-slate-900 leading-none">
                                Planting Seeds
                            </span>
                            <span className="text-[8px] lg:text-[9px] xl:text-xs font-semibold tracking-widest text-[#00897B] uppercase mt-0.5 sm:mt-1">
                                OF HOPE · NONPROFIT
                            </span>
                        </div>
                    </Link>

                    {/* Enlaces de navegación (Optimizados para Laptop lg:text-[11px] y Laptop Grande / PC xl:text-base) */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mx-1 lg:mx-2 xl:mx-8 gap-1.5 lg:gap-2 xl:gap-8 text-[11px] lg:text-[12px] xl:text-base font-medium text-slate-700">
                        <Link href="/" className="text-[#00897B] font-semibold hover:text-emerald-700 transition-colors whitespace-nowrap">
                            {t('home')}
                        </Link>
                        <Link href="/about" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('about')}
                        </Link>
                        <Link href="/mission" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('mission')}
                        </Link>
                        <Link href="/what-we-do" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('whatWeDo')}
                        </Link>
                        <Link href="/values" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('values')}
                        </Link>
                        <Link href="/how-to-help" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('howToHelp')}
                        </Link>
                        <Link href="/contact" className="hover:text-[#00897B] transition-colors whitespace-nowrap">
                            {t('contact')}
                        </Link>
                    </div>

                    {/* Botón Donar Ahora (Sujeto y contenido sin salir de pantalla en Laptop) */}
                    <div className="hidden lg:block shrink-0">
                        <Link
                            href="/donate"
                            className="inline-flex items-center gap-1 lg:gap-1.5 bg-[#C3A352] hover:bg-[#B09247] text-white font-medium px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs lg:text-xs xl:text-base whitespace-nowrap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            <span>{t('donate')}</span>
                        </Link>
                    </div>

                    {/* Menú Hamburguesa (Exclusivo para móviles y tablets < 1024px) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-700 hover:text-[#00897B] focus:outline-none rounded-lg transition-colors"
                        aria-label="Abrir menú"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menú Desplegable (Exclusivo para móviles y tablets) */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2 text-base font-medium text-slate-700 animate-in fade-in slide-in-from-top-2 pb-3">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-[#00897B] font-semibold py-2 px-3 rounded-lg bg-emerald-50"
                        >
                            {t('home')}
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('about')}</Link>
                        <Link href="/mission" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('mission')}</Link>
                        <Link href="/what-we-do" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('whatWeDo')}</Link>
                        <Link href="/values" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('values')}</Link>
                        <Link href="/how-to-help" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('howToHelp')}</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-lg hover:bg-slate-50">{t('contact')}</Link>

                        <div className="pt-2">
                            <Link
                                href="/donate"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center gap-2 bg-[#C3A352] text-white font-semibold py-3 rounded-full shadow-md text-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                <span>{t('donate')}</span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}