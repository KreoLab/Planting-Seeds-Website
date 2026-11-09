'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

import FotoElizabeth from '@/assets/ElizabethZuñiga.jpeg';
import FotoBlanca from '@/assets/BlancaECordova.jpeg';
import FotoArizaid from '@/assets/ArizaifValadez .jpeg';
import FotoJesus from '@/assets/JesusValdez.jpeg';

interface Volunteer {
    id: string;
    name: string;
    roleKey: string;
    descKey: string;
    image?: string | StaticImageData;
}

export default function NuestroVoluntario() {
    const t = useTranslations('NuestroVoluntario');

    // Arreglo dinámico de voluntarios con tus imágenes importadas vinculadas
    const volunteers: Volunteer[] = [
        {
            id: '1',
            name: 'Jesus A. Valadez',
            roleKey: 'director',
            descKey: 'jesus',
            image: FotoJesus,
        },
        {
            id: '2',
            name: 'Elizabeth Zuñiga',
            roleKey: 'secretary',
            descKey: 'elizabeth',
            image: FotoElizabeth,
        },
        {
            id: '3',
            name: 'Blanca E. Cordova',
            roleKey: 'treasurer',
            descKey: 'blanca',
            image: FotoBlanca,
        },
        {
            id: '4',
            name: 'Arizaid Valadez',
            roleKey: 'ceo',
            descKey: 'arizaid',
            image: FotoArizaid,
        },
    ];

    return (
        <section className="w-full bg-[#EBF3ED] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera del componente */}
                <div className="text-center max-w-2xl mb-12">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-600 uppercase">
                        {t('subtitle')}
                    </span>

                    {/* Título bilingüe con palabra resaltada en rojo */}
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-black tracking-tight text-slate-900 mt-2 mb-3">
                        {t('mainTitleFirst')}{' '}
                        <span className="text-[#EF4444]">{t('mainTitleHighlight')}</span>
                    </h2>

                    {/* Detalle decorativo de zigzag */}
                    <div className="flex justify-center items-center gap-1 text-[#EF4444] mb-4">
                        <svg className="w-8 h-2 fill-current" viewBox="0 0 40 10">
                            <path d="M0 5 L10 0 L20 10 L30 0 L40 5 L30 10 L20 0 L10 10 Z" />
                        </svg>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Tarjetas de Voluntarios (Grid adaptable: 1 en móvil, 2 en tablet, 4 en PC) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
                    {volunteers.map((person) => (
                        <div
                            key={person.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between border border-slate-100 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div>
                                {/* Marco para la Fotografía */}
                                <div className="relative w-full h-64 sm:h-72 bg-[#EFEFEF] flex items-center justify-center overflow-hidden">
                                    {person.image ? (
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    ) : (
                                        /* Silueta / Placeholder por defecto por si acaso */
                                        <svg
                                            className="w-3/4 h-3/4 text-slate-400 mt-auto"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    )}
                                </div>

                                {/* Información de la Persona */}
                                <div className="p-6">
                                    {/* Puesto / Rol */}
                                    <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                                        {t(`roles.${person.roleKey}`)}
                                    </span>

                                    {/* Nombre */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {person.name}
                                    </h3>

                                    {/* Línea divisora roja debajo del nombre */}
                                    <div className="w-8 h-0.5 bg-[#EF4444] mb-4"></div>

                                    {/* Descripción / Biografía corta */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {t(`descriptions.${person.descKey}`)}
                                    </p>
                                </div>
                            </div>

                            {/* Barra inferior roja con icono de sitio web */}
                            <div className="bg-[#EF4444] py-2.5 flex justify-center items-center text-white mt-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9 9 0 100-18 9 9 0 000 18zM2.25 12h19.5m-16.5-4.5h13.5m-13.5 9h13.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}