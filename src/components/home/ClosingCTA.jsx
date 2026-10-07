import { Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";

export default function ClosingCTA({ onOpenLeadModal, onNavigate }) {
  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-euro-dark via-euro-navy to-euro-surface text-white p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden border border-white/15">
        {/* Fondo con destellos de marca */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-euro-royal/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-euro-gold/15 blur-3xl pointer-events-none" />

        {/* Líneas decorativas tenues */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg className="w-full h-full" viewBox="0 0 800 300" fill="none">
            <circle cx="700" cy="150" r="200" stroke="white" strokeWidth="1" />
            <circle cx="700" cy="150" r="130" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-euro-gold text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inscripciones Abiertas • Plantel Bicentenario</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display">
              Tu carrera en idiomas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-euro-gold via-euro-gold-hover to-euro-gold">
                empieza aquí.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Solicita informes, agenda tu examen diagnóstico sin costo y conoce los
              apoyos y becas académicas vigentes para el ciclo 2026‑1.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenLeadModal}
              className="btn-tactile w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 bg-euro-gold hover:bg-euro-gold-hover text-euro-dark font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl transition-all cursor-pointer border border-euro-gold-dark/25 gold-glow"
            >
              <span>Solicita información</span>
              <ArrowRight className="w-4 h-4 text-euro-dark" />
            </button>
            <button
              onClick={() => onNavigate("admisiones")}
              className="btn-tactile w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-4 px-7 rounded-2xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <ClipboardCheck className="w-4 h-4 text-euro-gold" />
              <span>Proceso de admisión</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
