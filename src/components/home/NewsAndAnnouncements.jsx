import { Bell, Calendar, ArrowRight } from "lucide-react";
import { NEWS_DATA } from "../../data/curriculumData";

export default function NewsAndAnnouncements({ onNavigate, onOpenLeadModal }) {
  return (
    <section id="avisos" className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-euro-blue/10 text-euro-dark text-xs font-bold uppercase tracking-wider mb-3 border border-euro-blue/20 font-mono">
              <Bell className="w-3.5 h-3.5 text-euro-gold" />
              <span>Gaceta &amp; Convocatorias</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-euro-dark tracking-tight font-display leading-tight">
              Avisos y Noticias{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-euro-blue via-euro-royal to-euro-blue">
                Recientes
              </span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate("vida-estudiantil", "avisos")}
            className="btn-tactile inline-flex items-center gap-2 text-xs font-bold text-euro-dark hover:text-euro-blue uppercase tracking-wider transition-colors bg-slate-100 hover:bg-slate-200/80 px-5 py-2.5 rounded-full border border-slate-200 self-start md:self-auto cursor-pointer"
          >
            <span>Ver todos los avisos del plantel</span>
            <ArrowRight className="w-4 h-4 text-euro-gold" />
          </button>
        </div>

        {/* 3 Entradas Recientes Bento Style con Miniaturas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.map((item, idx) => {
            const newsImages = [
              "/images/hero-admisiones.jpg",
              "/images/hero-licenciatura.jpg",
              "/images/hero-vida-estudiantil.jpg",
            ];
            const itemImage = newsImages[idx % newsImages.length];

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#c8963e]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                    <img
                      src={itemImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0b1d3a] font-mono border border-white/40 shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 font-mono mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c8963e]" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-[#0b1d3a] group-hover:text-[#c8963e] mb-2.5 leading-snug transition-colors font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#7e5700] font-mono text-[11px]">
                    {item.category}
                  </span>
                  <button
                    onClick={onOpenLeadModal}
                    className="btn-tactile font-bold text-[#0b1d3a] hover:text-[#c8963e] inline-flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
                  >
                    <span>Más detalles</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c8963e] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
