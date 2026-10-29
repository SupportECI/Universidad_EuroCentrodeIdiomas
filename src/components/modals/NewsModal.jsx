import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { NOTICIAS_DATA } from "../../data/newsData";

export default function NewsModal({
  isOpen,
  news,
  onClose,
  onSelectNews,
  onOpenLeadModal,
}) {
  // Encontrar índice actual para navegación previa / siguiente
  const currentIndex = news ? NOTICIAS_DATA.findIndex((item) => item.id === news.id) : -1;
  const totalNews = NOTICIAS_DATA.length;

  const handlePrev = useCallback(() => {
    if (!onSelectNews || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + totalNews) % totalNews;
    onSelectNews(NOTICIAS_DATA[prevIndex]);
  }, [currentIndex, onSelectNews, totalNews]);

  const handleNext = useCallback(() => {
    if (!onSelectNews || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % totalNews;
    onSelectNews(NOTICIAS_DATA[nextIndex]);
  }, [currentIndex, onSelectNews, totalNews]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onSelectNews) {
        handlePrev();
      }
      if (e.key === "ArrowRight" && onSelectNews) {
        handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onSelectNews, handlePrev, handleNext]);

  if (!isOpen || !news) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Dividir el texto en párrafos para renderizado limpio
  const paragraphs = news.texto
    ? news.texto.split("\n\n").filter(Boolean)
    : [];

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-news-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl sm:max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 max-h-[92vh] flex flex-col animate-fade-in"
      >
        {/* ====================================================================
            1. IMAGEN COMO IMAGEN PRINCIPAL (Encabezado fotográfico)
            ==================================================================== */}
        <div className="relative w-full h-56 sm:h-72 md:h-84 shrink-0 bg-slate-900 overflow-hidden select-none">
          <img
            src={news.imagen}
            alt={news.titulo}
            className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
          />

          {/* Gradiente protector de legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

          {/* Badges superiores de categoría */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2 pointer-events-none">
            {news.categoria && (
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#c8963e] text-[#070a26] shadow-md font-mono">
                {news.categoria}
              </span>
            )}
            {news.tag && (
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white border border-white/30 font-mono hidden sm:inline-block">
                {news.tag}
              </span>
            )}
          </div>

          {/* Botón de cierre en esquina superior derecha */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal de noticia"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Indicador de posición de noticia */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono">
            {currentIndex + 1} de {totalNews}
          </div>
        </div>

        {/* ====================================================================
            2. CONTENIDO DEL TEXTO DE LA NOTICIA (Scrolleable)
            ==================================================================== */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-10 sm:py-8 space-y-6">
          {/* Título de la noticia */}
          <h2
            id="modal-news-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#070a26] leading-tight tracking-tight"
          >
            {news.titulo}
          </h2>

          {/* Subtítulo de la noticia */}
          {news.subtitulo && (
            <div className="border-l-4 border-[#c8963e] pl-4 sm:pl-5 py-1">
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed italic">
                {news.subtitulo}
              </p>
            </div>
          )}

          {/* Divisor sutil institucional */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="w-12 h-1 bg-[#c8963e] rounded-full" />
            <span className="w-2.5 h-1 bg-[#070a26] rounded-full" />
            <span className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>

          {/* Todo el texto completo de la noticia */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* ====================================================================
              3. FECHA HASTA EL FINAL (Bloque institucional de cierre de noticia)
              ==================================================================== */}
          <div className="pt-6 border-t border-slate-200 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#c8963e]/15 text-[#c8963e] flex items-center justify-center shrink-0 border border-[#c8963e]/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                  Fecha de Publicación Oficial
                </span>
                <span className="text-sm sm:text-base font-bold text-[#070a26] font-display">
                  {news.fecha}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Euro Centro de Estudios Superiores • Plantel Bicentenario</span>
            </div>
          </div>
        </div>

        {/* ====================================================================
            4. BARRA INFERIOR DE NAVEGACIÓN ENTRE NOTICIAS
            ==================================================================== */}
        <div className="px-6 py-4 sm:px-10 bg-slate-100/90 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Navegación Anterior / Siguiente entre modales */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="btn-tactile inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-[#070a26] hover:border-[#c8963e] text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Ver noticia anterior"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <button
              onClick={handleNext}
              className="btn-tactile inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-[#070a26] hover:border-[#c8963e] text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Ver siguiente noticia"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Acciones de contacto / cerrar */}
          <div className="flex items-center gap-2.5">
            {onOpenLeadModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="btn-tactile inline-flex items-center gap-2 bg-[#070a26] hover:bg-[#c8963e] hover:text-[#070a26] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <span>Solicitar Informes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c8963e] group-hover:text-[#070a26]" />
              </button>
            )}
            <button
              onClick={onClose}
              className="btn-tactile px-4 py-2.5 rounded-xl bg-white hover:bg-slate-200 border border-slate-300 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
