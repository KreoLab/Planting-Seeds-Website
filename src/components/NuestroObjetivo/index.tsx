'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function NuestroObjetivo() {
    const t = useTranslations('NuestroObjetivo');
    const locale = useLocale();

    const cards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-[#008B99]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            ),
            title: t('missionTitle'),
            text: t('missionText'),
            linkText: t('missionLink'),
            href: '/mission',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-[#008B99]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: t('visionTitle'),
            text: t('visionText'),
            linkText: t('visionLink'),
            href: '/vision',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-[#008B99]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            ),
            title: t('objectiveTitle'),
            text: t('objectiveText'),
            linkText: t('objectiveLink'),
            href: '/what-we-do',
        },
    ];

    return (
        <section className="w-full bg-[#EBF3ED] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera */}
                <div className="text-center max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#008B99] uppercase">
            {t('corePurpose')}
          </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">
                        {locale === 'en' ? (
                            <>
                                OUR <span className="text-[#008B99]">MISSION</span> & IDENTITY
                            </>
                        ) : (
                            <>
                                NUESTRA <span className="text-[#008B99]">MISIÓN</span> E IDENTIDAD
                            </>
                        )}
                    </h2>
                    <div className="w-16 h-1 bg-[#008B99] mx-auto mb-6 rounded-full"></div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Tarjetas con alineación perfecta y centrado del tercer elemento en tablet */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 flex flex-col justify-between border-t-4 border-[#008B99] hover:-translate-y-1 transition-all duration-300 w-full h-full ${
                                index === 2 ? 'md:col-span-2 md:justify-self-center md:max-w-[calc(50%-1rem)] lg:col-span-1 lg:max-w-none' : ''
                            }`}
                        >
                            <div>
                                {/* Icono con fondo suave */}
                                <div className="w-14 h-14 rounded-2xl bg-[#EBF3ED] flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>

                                {/* Título de la tarjeta */}
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    {card.title}
                                </h3>

                                {/* Texto descriptivo */}
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                                    {card.text}
                                </p>
                            </div>

                            {/* Enlace inferior alineado siempre abajo */}
                            <div className="pt-4 mt-auto">
                                <Link
                                    href={card.href}
                                    className="inline-flex items-center text-xs sm:text-sm font-bold tracking-wider text-[#008B99] hover:text-[#006670] transition-colors"
                                >
                                    {card.linkText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}