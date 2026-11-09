'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import FotoIliana from "@/assets/IlianaPortilla .jpeg";
import FotoPatricio from "@/assets/PatricioCervera.jpeg";

interface TeamMember {
    image?: StaticImageData | string;
    isFemale?: boolean;
    role: string;
    name: string;
    bio: string;
}

export default function TheHelpers() {
    const t = useTranslations('TheHelpers');

    // Mapeamos los datos combinando los datos estáticos (imágenes) y los textos traducidos del JSON
    const team: TeamMember[] = [
        {
            image: FotoIliana,
            isFemale: true,
            role: t('volunteers.0.role'),
            name: "Iliana Portilla",
            bio: t('volunteers.0.bio'),
        },
        {
            image: FotoPatricio,
            isFemale: false,
            role: t('volunteers.1.role'),
            name: "Patricio Cervera",
            bio: t('volunteers.1.bio'),
        },
    ];

    return (
        <section className="w-full bg-[#EBF3ED] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera Principal */}
                <div className="text-center max-w-2xl mb-12">
                    <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#008B99] uppercase block mb-2">
                        {t('subtitle')}
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-slate-900 mb-3 uppercase">
                        {t('titlePart1')} <span className="text-[#E5533D]">{t('titleHighlight')}</span>
                    </h2>

                    {/* Adorno Zig-Zag Rojo */}
                    <div className="flex justify-center mb-4">
                        <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6L7 2L12 6L17 2L22 6L26 2" stroke="#E5533D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Cuadrícula de Integrantes centrada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl justify-center">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between border border-slate-100 transition-transform duration-300 hover:-translate-y-1 text-center"
                        >
                            <div>
                                {/* Contenedor de la Imagen / Placeholder de Silueta */}
                                <div className="relative w-full h-64 sm:h-72 bg-[#EDEDED] flex items-end justify-center overflow-hidden">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-end justify-center pb-0 text-slate-400">
                                            {member.isFemale ? (
                                                <svg className="w-44 h-56 fill-current text-slate-400" viewBox="0 0 100 120">
                                                    <path d="M50 15c-12 0-20 10-20 22 0 6 3 14 5 22-5 3-10 10-15 18-5 8-8 18-10 28h80c-2-10-5-20-10-28-5-8-10-15-15-18 2-8 5-16 5-22 0-12-8-22-20-22z" />
                                                    <path d="M30 35c-2 15-8 30-14 45 4 0 8 5 10 10 2-15 8-35 14-55z" />
                                                    <path d="M70 35c2 15 8 30 14 45-4 0-8 5-10 10-2-15-8-35-14-55z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-44 h-56 fill-current text-slate-400" viewBox="0 0 100 120">
                                                    <path d="M50 15c-11 0-18 8-18 20 0 8 4 15 6 22-6 4-12 11-16 20-4 8-6 16-7 23h70c-1-7-3-15-7-23-4-9-10-16-16-20 2-7 6-14 6-22 0-12-7-20-18-20z" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Detalles del Integrante (Centrados) */}
                                <div className="p-5 flex flex-col items-center">
                                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                                        {member.role}
                                    </span>

                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                                        {member.name}
                                    </h3>

                                    <div className="w-8 h-[1px] bg-slate-200 mb-3"></div>

                                    <p className="text-xs text-slate-500 leading-relaxed mb-2">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Barra Inferior Roja con Icono Global */}
                            <div className="w-full bg-[#E5533D] py-2.5 flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                                </svg>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}