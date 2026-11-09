'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface WayItem {
    icon: string;
    title: string;
    description: string;
}

export default function PuedesAyudar() {
    const t = useTranslations('PuedesAyudar');

    const ways = t.raw('ways') as WayItem[];

    const [selectedAmount, setSelectedAmount] = useState<string>('50');
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [participation, setParticipation] = useState<string>('financial');
    const [comments, setComments] = useState<string>('');

    const amounts = ['25', '50', '100', '250'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            selectedAmount,
            fullName,
            email,
            participation,
            comments,
        });
    };

    const renderIcon = (type: string) => {
        switch (type) {
            case 'box':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                );
            case 'dollar':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-9h4.5a2.25 2.25 0 010 4.5H9a2.25 2.25 0 000 4.5h4.5" />
                    </svg>
                );
            case 'user-plus':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.765z" />
                    </svg>
                );
            case 'building':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#008B99]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section className="w-full bg-[#E3EBE3] py-16 px-4 sm:px-8 lg:px-12 font-sans">
            {/* items-center centra verticalmente ambos bloques para que se vean perfectamente parejos */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Columna Izquierda: Información y Lista de Formas de Ayuda */}
                <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#008B99] uppercase block mb-2">
            {t('subtitle')}
          </span>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-black tracking-tight text-slate-900 mb-4 uppercase leading-tight">
                        {t('titlePart1')}{' '}
                        <span className="text-[#008B99]">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-xl">
                        {t('description')}
                    </p>

                    {/* Tarjetas de opciones de ayuda */}
                    <div className="flex flex-col gap-4">
                        {ways.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#008B99]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    {renderIcon(item.icon)}
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Columna Derecha: Formulario de Donación y Participación */}
                <div className="lg:col-span-6 w-full flex justify-center">
                    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 relative w-full">

                        {/* Encabezado del Formulario con Icono de Brote */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                                    {t('form.title')}
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    {t('form.subtitle')}
                                </p>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-[#008B99]/15 flex items-center justify-center text-[#008B99]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M12 12.75C12 7.5 7.5 6 7.5 6s1.5 6.75 4.5 6.75zm0 0c0-5.25 4.5-6.75 4.5-6.75s-1.5 6.75-4.5 6.75z" />
                                </svg>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Selección de Monto (USD) */}
                            <div>
                                <label className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-2">
                                    {t('form.selectAmount')}
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {amounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => setSelectedAmount(amount)}
                                            className={`py-2.5 px-4 rounded-xl text-sm font-bold border transition-all ${
                                                selectedAmount === amount
                                                    ? 'border-[#008B99] bg-[#008B99]/5 text-[#008B99] shadow-sm'
                                                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                            }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Nombre Completo y Correo Electrónico */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                                        {t('form.fullName')}
                                    </label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder={t('form.fullNamePlaceholder')}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                                        {t('form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('form.emailPlaceholder')}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Selector de Forma de Participación */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                                    {t('form.participation')}
                                </label>
                                <select
                                    value={participation}
                                    onChange={(e) => setParticipation(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:bg-white transition-all cursor-pointer"
                                >
                                    <option value="financial">{t('form.options.financial')}</option>
                                    <option value="inKind">{t('form.options.inKind')}</option>
                                    <option value="volunteer">{t('form.options.volunteer')}</option>
                                    <option value="corporate">{t('form.options.corporate')}</option>
                                </select>
                            </div>

                            {/* Comentarios / Mensaje */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                                    {t('form.comments')}
                                </label>
                                <textarea
                                    rows={3}
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    placeholder={t('form.commentsPlaceholder')}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:bg-white transition-all resize-none"
                                />
                            </div>

                            {/* Botón de Envíos Dorado */}
                            <button
                                type="submit"
                                className="w-full bg-[#C3A352] hover:bg-[#B09247] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 mt-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                {t('form.submitButton')}
                            </button>

                            {/* Leyenda legal */}
                            <p className="text-[10px] text-center text-slate-400 mt-3">
                                {t('form.disclaimer')}
                            </p>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}