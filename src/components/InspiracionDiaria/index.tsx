'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function InspiracionDiaria() {
    const t = useTranslations('InspiracionDiaria');

    return (
        <section className="w-full bg-[#E3EBE3] py-16 sm:py-20 px-6 sm:px-12 lg:px-16 font-sans flex items-center justify-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                {/* Subtítulo Superior */}
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#008B99] uppercase block mb-4 sm:mb-6">
                    {t('subtitle')}
                </span>

                {/* Cita Inspiradora Principal (Cursiva Serif) */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-slate-900 tracking-wide leading-snug sm:leading-tight mb-6 sm:mb-8 max-w-3xl">
                    {t('quote')}
                </h2>

                {/* Firma / Autor de la Cita */}
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-slate-600 uppercase">
                    — {t('author')}
                </span>

            </div>
        </section>
    );
}