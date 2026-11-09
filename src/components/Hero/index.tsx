'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Slider1 from '@/assets/Slider-1.jpeg';
import Slider2 from '@/assets/Slider-2.jpeg';
import Slider3 from '@/assets/Slider-3.jpeg';

export default function Hero() {
    const t = useTranslations('Hero');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Slider1, Slider2, Slider3];

    const slides = t.raw('slides') as Array<{
        topText: string;
        titlePart1: string;
        titleHighlight: string;
        description: string;
    }>;

    const causes = t.raw('causes') as Array<{
        badge: string;
        titlePart1: string;
        titleHighlight: string;
        raised: string;
        goal: string;
        percentage: string;
    }>;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const currentSlide = slides[currentIndex] || slides[0];
    const currentCause = causes[currentIndex] || causes[0];

    return (
        <section className="relative w-full bg-[#031A19] overflow-hidden font-sans pb-16">
            {/* Contenedor Principal del Hero con Carrusel y Gradiente de Difuminado */}
            <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[680px] flex items-center justify-center pb-20">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            fill
                            priority={idx === 0}
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#031A19]/60 to-[#031A19]"></div>
                    </div>
                ))}

                {/* Botones de navegación laterales del fondo con mejor margen en laptop/tablet */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 sm:left-12 lg:left-16 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 sm:p-3.5 rounded-sm transition-colors"
                    aria-label="Anterior"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-6 sm:right-12 lg:right-16 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 sm:p-3.5 rounded-sm transition-colors"
                    aria-label="Siguiente"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Contenido de Texto Central del Hero con margen de seguridad lateral */}
                <div className="relative z-20 text-center text-white px-8 sm:px-16 max-w-4xl mx-auto -mt-14 sm:-mt-18">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80 block mb-2">
            {currentSlide.topText}
          </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight mb-4 uppercase leading-tight">
                        {currentSlide.titlePart1}{' '}
                        <span className="text-[#008B99]">{currentSlide.titleHighlight}</span>
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
                        {currentSlide.description}
                    </p>

                    {/* Indicadores de puntos (Dots) */}
                    <div className="flex justify-center items-center gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 transition-all rounded-full ${
                                    currentIndex === idx ? 'w-8 bg-[#008B99]' : 'w-2 bg-white/50'
                                }`}
                                aria-label={`Ir a diapositiva ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Tarjeta de Donación con ancho optimizado y márgenes seguros para tablet/laptop */}
            <div className="relative z-30 w-full px-6 sm:px-12 -mt-28 sm:-mt-32">
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative">

                        {/* Botones deslizadores laterales ajustados para no salirse de la pantalla */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-slate-100 text-slate-800 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center border border-slate-100 transition-transform hover:scale-105"
                            aria-label="Causa anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-slate-100 text-slate-800 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center border border-slate-100 transition-transform hover:scale-105"
                            aria-label="Causa siguiente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Miniatura de la Causa */}
                        <div className="relative w-full lg:w-[290px] h-44 sm:h-48 rounded-xl overflow-hidden shrink-0 shadow-inner">
                            <Image
                                src={images[currentIndex]}
                                alt="Causa activa"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-2.5 left-2.5 bg-[#008B99] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                                {currentCause.badge}
                            </div>
                        </div>

                        {/* Información de la Causa */}
                        <div className="flex-1 w-full flex flex-col justify-between py-1">
                            <div>
                                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 uppercase leading-snug mb-3">
                                    {currentCause.titlePart1}{' '}
                                    <span className="text-[#008B99]">{currentCause.titleHighlight}</span>
                                </h3>

                                {/* Barra de Progreso */}
                                <div className="relative w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-3.5">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-[#C3A352] rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                                        style={{ width: currentCause.percentage }}
                                    >
                    <span className="text-[9px] font-bold text-white drop-shadow">
                      {currentCause.percentage}
                    </span>
                                    </div>
                                </div>
                            </div>

                            {/* Metas y Botón */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#008B99]">
                    {currentCause.raised}
                  </span>
                                    <span className="text-xs sm:text-sm font-medium text-slate-500">
                    raised of <span className="text-slate-700 font-semibold">{currentCause.goal}</span> goal
                  </span>
                                </div>

                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center bg-[#C3A352] hover:bg-[#B09247] text-white font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm tracking-wider uppercase"
                                >
                                    {t('donateButton')}
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}