import { Bell, Calendar, ArrowRight, Sparkles } from "lucide-react";
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

        {/* 3 Entradas Recientes Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-euro-royal/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-euro-blue to-euro-gold opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-euro-blue/10 text-euro-blue font-mono border border-euro-blue/20">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-euro-gold-dark" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-euro-dark group-hover:text-euro-blue mb-2.5 leading-snug transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-5 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="font-semibold text-euro-gold-dark font-mono text-[11px]">
                  {item.category}
                </span>
                <button
                  onClick={onOpenLeadModal}
                  className="btn-tactile font-bold text-euro-dark hover:text-euro-blue inline-flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
                >
                  <span>Más detalles</span>
                  <ArrowRight className="w-3.5 h-3.5 text-euro-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
