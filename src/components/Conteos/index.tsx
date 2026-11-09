'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Conteos() {
    const t = useTranslations('Conteos');

    const stats = [
        {
            value: '12,500+',
            label: t('meals'),
        },
        {
            value: '850+',
            label: t('workshops'),
        },
        {
            value: '350+',
            label: t('volunteers'),
        },
        {
            value: '100%',
            label: t('transparency'),
        },
    ];

    return (
        <section className="w-full bg-[#008B99] text-white py-12 sm:py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:divide-x md:divide-y lg:divide-y-0 divide-white/25">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center justify-center text-center py-6 px-4 min-h-[140px] sm:min-h-[160px] 
                            /* Líneas divisorias verticales para PC (lg en adelante) */
                            ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/25 lg:border-y-0' : ''}
                            /* Quitamos la línea derecha al 850+ (index 1) y la línea inferior al 350+ (index 2) solo en tablet (md a lg) */
                            ${index === 1 ? 'md:max-lg:border-r-0' : ''}
                            ${index === 2 ? 'md:max-lg:border-b-0' : ''}
                        `}
                    >
                        {/* Valor numérico en tono dorado */}
                        <span className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-[#E2C683] tracking-tight mb-3">
                            {stat.value}
                        </span>

                        {/* Texto descriptivo */}
                        <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase max-w-[240px] leading-relaxed">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}