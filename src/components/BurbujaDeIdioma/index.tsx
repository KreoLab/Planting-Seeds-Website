'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function BurbujaDeIdioma() {
    const [mounted, setMounted] = useState(false);
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Evita discrepancias de renderizado entre el servidor y el cliente
    if (!mounted) {
        return null;
    }

    const switchLocale = (newLocale: string) => {
        if (newLocale === currentLocale) {
            setIsOpen(false);
            return;
        }

        // Reemplazar el prefijo del idioma actual en la ruta por el nuevo idioma
        const segments = pathname.split('/');
        if (segments[1] === 'en' || segments[1] === 'es') {
            segments[1] = newLocale;
        } else {
            segments.splice(1, 0, newLocale);
        }
        const newPathname = segments.join('/');

        // Establecer la cookie para persistencia y navegar a la nueva ruta
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`;

        router.push(newPathname);
        router.refresh();
        setIsOpen(false);
    };

    const languages = [
        { code: 'es', label: 'Español', flag: '🇲🇽' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
    ];

    return (
        <div
            ref={dropdownRef}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans"
        >
            {isOpen && (
                <div className="mb-3 w-40 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-md border border-slate-200/80 transition-all duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLocale(lang.code)}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                                currentLocale === lang.code
                                    ? 'bg-[#C3A352] text-white shadow-sm'
                                    : 'text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </span>
                            {currentLocale === lang.code && (
                                <span className="h-2 w-2 rounded-full bg-white" />
                            )}
                        </button>
                    ))}
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Cambiar idioma"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#C3A352] text-white shadow-lg hover:bg-[#B09247] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none sm:h-16 sm:w-16"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-7 w-7 transition-transform group-hover:rotate-12 sm:h-8 sm:w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.997 8.997 0 0 0 7.843-4.582M12 21a8.997 8.997 0 0 1-7.843-4.582M12 21m0-18a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582M12 3v18m0-18C15.216 3 17.888 6.91 17.888 12c0 5.09-2.672 9-5.888 9m0-18C8.784 3 6.112 6.91 6.112 12c0 5.09 2.672 9 5.888 9M2.25 12h19.5"
                    />
                </svg>

                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold uppercase tracking-wider text-white border-2 border-white shadow-sm">
                    {currentLocale}
                </span>
            </button>
        </div>
    );
}