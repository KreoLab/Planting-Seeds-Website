'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SembrarEsperanza() {
    const t = useTranslations('SembrarEsperanza');

    return (
        <section className="w-full bg-[#031A19] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#083531] via-[#031A19] to-[#010E0D] py-20 px-6 sm:px-10 lg:px-16 text-white font-sans flex items-center justify-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">

                {/* Icono de Comillas idéntico a la imagen (Burbuja turquesa/verde con SVG estilizado) */}
                <div className="w-12 h-12 rounded-full bg-[#008B99]/20 border border-[#008B99]/40 flex items-center justify-center mb-8 shadow-inner">
                    <svg className="w-5 h-5 text-[#008B99] fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                {/* Frase Inspiradora Principal (Cursiva Serif) */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-normal tracking-wide leading-snug sm:leading-tight mb-6 max-w-3xl drop-shadow-sm">
                    {t('quote')}
                </h2>

                {/* Texto descriptivo secundario */}
                <p className="text-xs sm:text-sm lg:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
                    {t('description')}
                </p>

                {/* Botones de Llamado a la Acción (CTA) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/volunteer"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-[#008B99] hover:bg-[#007380] text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-cyan-900/30 transition-all text-xs sm:text-sm tracking-wider uppercase"
                    >
                        {t('volunteerButton')}
                    </Link>

                    <Link
                        href="/donate"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C3A352] hover:bg-[#B09247] text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-amber-900/30 transition-all text-xs sm:text-sm tracking-wider uppercase"
                    >
                        {t('donorButton')}
                    </Link>
                </div>

            </div>
        </section>
    );
}