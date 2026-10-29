import { useState, useEffect } from "react";
import {
  Bell,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NewsModal from "../modals/NewsModal";
import { NOTICIAS_DATA } from "../../data/newsData";

export default function NewsAndAnnouncements({
  onOpenLeadModal,
  onSelectNews,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [internalSelectedNews, setInternalSelectedNews] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const total = NOTICIAS_DATA.length;

  // Rotación automática sutil cada 7 segundos si el usuario no tiene el cursor encima
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleOpenNews = (item) => {
    if (onSelectNews) {
      onSelectNews(item);
    } else {
      setInternalSelectedNews(item);
    }
  };

  if (!NOTICIAS_DATA || NOTICIAS_DATA.length === 0) {
    return null;
  }

  // Tarjetas visibles en desktop basadas en el índice actual
  // Para mostrar un flujo continuo de 3 tarjetas en pantallas grandes
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(NOTICIAS_DATA[(currentIndex + i) % total]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section
      id="avisos"
      className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fondo con detalles sutiles de luz */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c8963e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado Institucional y Controles del Carrusel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070a26]/5 text-[#070a26] text-xs font-bold uppercase tracking-wider mb-3 border border-[#070a26]/10 font-mono">
              <Bell className="w-3.5 h-3.5 text-[#c8963e]" />
              <span>Gaceta y Convocatorias</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070a26] tracking-tight font-serif leading-tight">
              Avisos y Noticias Universitarias
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Explora las novedades, convocatorias oficiales de examen diagnóstico, convenios y vida académica de nuestra institución.
            </p>
          </div>

          {/* Controles de Navegación del Carrusel (Flechas + Indicador de diapositiva) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="hidden sm:flex items-center text-xs font-mono text-slate-500 mr-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <span className="font-bold text-[#070a26]">{currentIndex + 1}</span>
              <span className="mx-1 text-slate-300">/</span>
              <span>{total}</span>
            </div>

            <button
              onClick={handlePrev}
              aria-label="Noticia anterior en carrusel"
              className="btn-tactile w-11 h-11 rounded-2xl bg-white hover:bg-[#070a26] text-slate-700 hover:text-white border border-slate-200 hover:border-[#070a26] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Siguiente noticia en carrusel"
              className="btn-tactile w-11 h-11 rounded-2xl bg-white hover:bg-[#070a26] text-slate-700 hover:text-white border border-slate-200 hover:border-[#070a26] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ====================================================================
            VISTA DE CARRUSEL DE NOTICIAS
            ==================================================================== */}
        {/* Vista Móvil: 1 Noticia destacada a la vez */}
        <div className="block md:hidden">
          {(() => {
            const item = NOTICIAS_DATA[currentIndex];
            return (
              <div
                onClick={() => handleOpenNews(item)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#c8963e]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="h-56 w-full overflow-hidden relative bg-slate-900">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <span className="absolute top-3 left-3 text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c8963e] text-[#070a26] font-mono shadow-xs">
                      {item.categoria}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg text-[#070a26] group-hover:text-[#c8963e] mb-2 leading-snug transition-colors font-serif">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3 mb-4">
                      {item.subtitulo}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#c8963e]" />
                    <span>{item.fecha}</span>
                  </div>
                  <span className="font-bold text-[#070a26] group-hover:text-[#c8963e] inline-flex items-center gap-1 transition-colors">
                    <span>Leer noticia</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c8963e] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Vista Desktop y Tablet: 3 Tarjetas en Carrusel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => handleOpenNews(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#c8963e]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Imagen destacada en cabecera de la tarjeta */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-900">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                  <span className="absolute top-3.5 left-3.5 text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c8963e] text-[#070a26] font-mono shadow-xs">
                    {item.categoria}
                  </span>
                </div>

                {/* Contenido textual */}
                <div className="p-6">
                  <h3 className="font-bold text-base lg:text-lg text-[#070a26] group-hover:text-[#c8963e] mb-2 leading-snug transition-colors font-serif line-clamp-2">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                    {item.subtitulo}
                  </p>
                </div>
              </div>

              {/* Pie de la tarjeta con fecha y botón de lectura */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-2">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-[#c8963e]" />
                  <span>{item.fecha}</span>
                </div>
                <span className="font-bold text-[#070a26] group-hover:text-[#c8963e] inline-flex items-center gap-1.5 transition-colors">
                  <span>Leer completa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8963e] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Puntos (Dots de las 5 noticias) */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {NOTICIAS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a noticia ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentIndex
                  ? "w-8 h-2.5 bg-[#c8963e]"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Modal de noticias de respaldo si no se gestiona externamente */}
      {!onSelectNews && (
        <NewsModal
          isOpen={Boolean(internalSelectedNews)}
          news={internalSelectedNews}
          onClose={() => setInternalSelectedNews(null)}
          onSelectNews={(item) => setInternalSelectedNews(item)}
          onOpenLeadModal={onOpenLeadModal}
        />
      )}
    </section>
  );
}
