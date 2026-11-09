'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Slider1 from "@/assets/Slider-1.jpeg";
import Slider2 from "@/assets/Slider-3.jpeg";
import Slider3 from "@/assets/Slider-4.jpeg";
import Slider4 from "@/assets/Slider-5.jpeg";
import Slider5 from "@/assets/Slider-6.jpeg";

interface ProgramItem {
    image: StaticImageData;
    badge: string;
    number: string;
    title: string;
    description: string;
    progressText: string;
    goalText: string;
    button: string;
}

export default function SiembramosEsperanza() {
    const t = useTranslations('SiembramosEsperanza');

    const programData = t.raw('programs') as Array<{
        badge: string;
        number: string;
        title: string;
        description: string;
        progressText: string;
        goalText: string;
        button: string;
    }>;

    const proposal = t.raw('proposal') as {
        title: string;
        description: string;
        button: string;
    };

    // Arreglo de programas vinculados a sus respectivas imágenes
    const programs: ProgramItem[] = [
        { image: Slider1, ...programData[0] },
        { image: Slider2, ...programData[1] },
        { image: Slider3, ...programData[2] },
        { image: Slider4, ...programData[3] },
        { image: Slider5, ...programData[4] },
    ];

    return (
        <section className="w-full bg-[#EBF3ED] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera Principal */}
                <div className="text-center max-w-3xl mb-14">
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

                {/* Cuadrícula de Tarjetas (1 col en móvil, 2 en tablet, 3 en laptop/PC) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">

                    {/* Renderizado de las 5 tarjetas de programas */}
                    {programs.map((prog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between border border-slate-100 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div>
                                {/* Imagen del programa con insignia */}
                                <div className="relative w-full h-52 sm:h-56 bg-slate-200">
                                    <Image
                                        src={prog.image}
                                        alt={prog.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-[#008B99] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                        {prog.badge}
                                    </div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-6">
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-3 leading-snug">
                                        <span className="text-slate-500 mr-1.5">{prog.number}</span>
                                        {prog.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                        {prog.description}
                                    </p>

                                    {/* Barra de Progreso y Metas */}
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500 mb-1.5">
                                            <span>{prog.progressText}</span>
                                            <span>{prog.goalText}</span>
                                        </div>
                                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                                            <div className="bg-[#C3A352] h-full rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botón de Apoyo */}
                            <div className="px-6 pb-6 pt-0">
                                <Link
                                    href="/support-program"
                                    className="w-full inline-flex items-center justify-center border-2 border-[#008B99] hover:bg-[#008B99] text-[#008B99] hover:text-white font-bold py-2.5 px-4 rounded-xl transition-all text-xs tracking-wider uppercase shadow-sm"
                                >
                                    {prog.button}
                                </Link>
                            </div>

                        </div>
                    ))}

                    {/* Tarjeta Especial Final: Proponer Colaboración */}
                    <div className="bg-[#008B99] text-white rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
                        <div>
                            {/* Icono superior */}
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-[#E2C683]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 leading-snug">
                                {proposal.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6">
                                {proposal.description}
                            </p>
                        </div>

                        {/* Botón de Colaboración */}
                        <div className="pt-4">
                            <Link
                                href="/propose"
                                className="w-full inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#008B99] font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm tracking-wider uppercase"
                            >
                                {proposal.button}
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}