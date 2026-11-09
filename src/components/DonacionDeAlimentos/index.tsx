'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Estadistica from "@/assets/Estadistica.jpeg";
import Slider from "@/assets/Slider-3.jpeg";

interface EventCard {
    image: StaticImageData | string;
    month: string;
    day: string;
    titlePart: string;
    titleHighlight: string;
    date: string;
    location: string;
    text: string;
    buttonText: string;
}

export default function DonacionDeAlimentos() {
    const t = useTranslations('DonacionDeAlimentos');

    const cardData = t.raw('cards') as Array<{
        month: string;
        day: string;
        titlePart: string;
        titleHighlight: string;
        date: string;
        location: string;
        text: string;
        buttonText: string;
    }>;

    // Arreglo que vincula los datos traducidos con las imágenes importadas (fácil de cambiar)
    const events: EventCard[] = [
        {
            image: Estadistica, // Puedes cambiar esta imagen cuando gustes
            ...cardData[0],
        },
        {
            image: Slider, // Puedes cambiar esta imagen cuando gustes
            ...cardData[1],
        },
    ];

    return (
        <section className="w-full bg-[#EBF3ED] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Cabecera Principal */}
                <div className="text-center max-w-2xl mb-14">
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

                {/* Cuadrícula de Tarjetas (1 col en móvil/tablet vertical, 2 cols en laptop/PC) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between border border-slate-100 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div>
                                {/* Imagen del evento */}
                                <div className="relative w-full h-64 sm:h-72 bg-slate-200">
                                    <Image
                                        src={event.image}
                                        alt={event.titleHighlight}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-6 sm:p-8">

                                    {/* Bloque de Fecha (Calendario Rojo) y Título */}
                                    <div className="flex items-start gap-4 mb-5">
                                        {/* Tarjeta de Calendario */}
                                        <div className="bg-[#E5533D] text-white rounded-xl overflow-hidden shadow-md shrink-0 w-16 text-center">
                                            <div className="bg-[#C83E2A] text-[10px] font-bold tracking-widest py-1 uppercase">
                                                {event.month}
                                            </div>
                                            <div className="text-2xl font-black py-2">
                                                {event.day}
                                            </div>
                                        </div>

                                        {/* Título bicolor del evento */}
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                                                {event.titlePart}{' '}
                                                <span className="text-[#008B99]">{event.titleHighlight}</span>
                                            </h3>

                                            {/* Hora y Ubicación con iconos */}
                                            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mt-2">
                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{event.date}</span>
                                                </div>

                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[#008B99]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Descripción del evento */}
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                                        {event.text}
                                    </p>
                                </div>
                            </div>

                            {/* Botón inferior "Buy Ticket" */}
                            <div className="px-6 sm:px-8 pb-8 pt-0">
                                <Link
                                    href="/buy-ticket"
                                    className="inline-flex items-center justify-center bg-[#E5533D] hover:bg-[#C83E2A] text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm tracking-wider uppercase">
                                    {event.buttonText}
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}