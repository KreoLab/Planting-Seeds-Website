'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface ValueItem {
    icon: string;
    title: string;
    description: string;
}

export default function ValoresInstitucionales() {
    const t = useTranslations('ValoresInstitucionales');

    const values = t.raw('values') as ValueItem[];

    // Función helper para renderizar los iconos exactos de la imagen
    const renderIcon = (type: string) => {
        switch (type) {
            case 'shield':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
                    </svg>
                );
            case 'heart':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                );
            case 'check-shield':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'hand-heart':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875c-1.575-1.875-4.5-1.875-6 0s-1.5 4.5 0 6.375L12 17.25l6-6c1.5-1.875 1.5-4.5 0-6.375s-4.425-1.875-6 0z" />
                    </svg>
                );
            case 'sprout':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M12 12.75C12 7.5 7.5 6 7.5 6s1.5 6.75 4.5 6.75zm0 0c0-5.25 4.5-6.75 4.5-6.75s-1.5 6.75-4.5 6.75z" />
                    </svg>
                );
            case 'users':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section className="w-full bg-[#E3EBE3] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera Principal */}
                <div className="text-center max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#008B99] uppercase block mb-2">
            {t('subtitle')}
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-slate-900 mb-4 uppercase">
                        {t('titlePart1')}{' '}
                        <span className="text-[#008B99]">{t('titleHighlight')}</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#008B99] mx-auto mb-5 rounded-full"></div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Cuadrícula de Valores (1 col en móvil, 2 en tablet, 3 en laptop/PC) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 sm:p-8 border border-slate-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Burbuja Verde Clara del Icono */}
                            <div className="w-11 h-11 rounded-xl bg-[#008B99]/15 flex items-center justify-center mb-5 shrink-0">
                                {renderIcon(item.icon)}
                            </div>

                            {/* Título del Valor */}
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}