'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Logo from '@/assets/Logo-PlantingSeeds.png'; // Asegúrate de ajustar la ruta de tu logo

export default function Footer() {
    const t = useTranslations('Footer');
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Suscrito:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#031A19] text-white font-sans pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto">

                {/* Sección Superior: 4 Columnas Adaptables */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                    {/* Columna 1: Marca, Descripción y Redes Sociales */}
                    <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
                                <Image
                                    src={Logo}
                                    alt="Planting Seeds of Hope Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-serif text-xl font-bold tracking-tight text-white">
                Planting Seeds of Hope
              </span>
                        </div>

                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
                            {t('brandDescription')}
                        </p>

                        {/* Iconos de Redes Sociales */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#008B99] transition-colors flex items-center justify-center text-white/80 hover:text-white"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </Link>

                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#008B99] transition-colors flex items-center justify-center text-white/80 hover:text-white"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>

                            <Link
                                href="#"
                                aria-label="YouTube"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#008B99] transition-colors flex items-center justify-center text-white/80 hover:text-white"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 flex items-center gap-2">
                            <span className="w-1 h-3.5 bg-[#008B99] rounded-full inline-block"></span>
                            {t('navigationTitle')}
                        </h3>

                        <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    {t('navLinks.home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    {t('navLinks.aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/mission" className="hover:text-white transition-colors">
                                    {t('navLinks.missionVision')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/what-we-do" className="hover:text-white transition-colors">
                                    {t('navLinks.whatWeDo')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/values" className="hover:text-white transition-colors">
                                    {t('navLinks.ourValues')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-to-help" className="hover:text-white transition-colors">
                                    {t('navLinks.howToHelp')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Directo */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 flex items-center gap-2">
                            <span className="w-1 h-3.5 bg-[#008B99] rounded-full inline-block"></span>
                            {t('contactTitle')}
                        </h3>

                        <ul className="space-y-3 text-xs sm:text-sm text-white/70">
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99] shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>{t('contactLocation')}</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99] shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:info@plantingseedsofhope.org" className="hover:text-white transition-colors">
                                    info@plantingseedsofhope.org
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99] shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.585-6.586l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <a href="tel:+18005554673" className="hover:text-white transition-colors">
                                    +1 (800) 555-HOPE (4673)
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99] shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('contactHours')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Newsletter */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 flex items-center gap-2">
                            <span className="w-1 h-3.5 bg-[#008B99] rounded-full inline-block"></span>
                            {t('newsletterTitle')}
                        </h3>

                        <p className="text-xs text-white/70 leading-relaxed mb-4">
                            {t('newsletterDescription')}
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('placeholderEmail')}
                                className="w-full bg-[#072422] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#008B99] transition-all"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#008B99] hover:bg-[#007380] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-xs tracking-wider uppercase"
                            >
                                {t('subscribeButton')}
                            </button>
                        </form>
                    </div>

                </div>

                {/* Línea Divisoria Inferior */}
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                {/* Sección Inferior: Copyright y Enlaces Legales */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
                    <p className="text-center sm:text-left">
                        {t('copyright')}
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <Link href="/privacy" className="hover:text-white/80 transition-colors">
                            {t('legalLinks.privacy')}
                        </Link>
                        <Link href="/terms" className="hover:text-white/80 transition-colors">
                            {t('legalLinks.terms')}
                        </Link>
                        <Link href="/transparency" className="hover:text-white/80 transition-colors">
                            {t('legalLinks.transparency')}
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}