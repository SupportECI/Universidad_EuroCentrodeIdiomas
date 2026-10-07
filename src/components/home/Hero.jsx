import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative w-full text-white overflow-hidden min-h-[92vh] flex items-center bg-[#070a26]">
      {/* 1. Capa Fotográfica Notable & Scrim Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2070&q=85"
          alt="Comunidad universitaria bilingüe en aulas de estudio activo"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-glow"
          style={{ animationDuration: "14s" }}
        />
        {/* Scrim fotográfico calibrado: permite ver claramente el ambiente y a los estudiantes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/80 to-[#070a26]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a26] via-transparent to-[#070a26]/60" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#c8963e]/12 blur-3xl pointer-events-none" />
        {/* Grano sutil editorial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna Izquierda: Mensaje Central de Alto Impacto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c8963e] text-[#070a26] text-xs font-bold uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#070a26] animate-pulse" />
                Convocatoria 2026-2027
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-slate-200 text-xs font-medium tracking-wide border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e6c15c]" />
                RVOE SEP {INSTITUTION_INFO.rvoeNumber}
              </span>
            </div>

            {/* Titular Principal Editorial de Gran Escala */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] font-serif">
              Domina el mundo en{" "}
              <span className="italic font-serif text-[#e6c15c]">tres lenguas vivas</span> con
              rigor profesional.
            </h1>

            {/* Subtítulo sintético y directo */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
              Formación universitaria trilingüe simultánea en{" "}
              <strong className="text-white font-medium">Inglés, Francés e Italiano</strong>. Laboratorios acústicos, titulación oficial y cédula federal SEP en Plantel Bicentenario.
            </p>

            {/* Trilogía de Beneficios Rápidos */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] block">
                  MCER C1 / C2
                </span>
                <span className="text-[11px] text-slate-300">Estándar europeo</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] block">
                  3 Años
                </span>
                <span className="text-[11px] text-slate-300">9 Cuatrimestres</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] block">
                  Práctica Real
                </span>
                <span className="text-[11px] text-slate-300">Cabinas en vivo</span>
              </div>
            </div>

            {/* CTAs Principales con Microinteracciones Táctiles */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#simulador"
                className="btn-tactile inline-flex items-center gap-2.5 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-2xl shadow-xl transition-all cursor-pointer"
              >
                <span>Iniciar Preinscripción</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate("licenciatura", "plan-estudios")}
                className="btn-tactile inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-4 px-7 rounded-2xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#e6c15c]" />
                <span>Plan de Estudios (58 Materias)</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Simulador de Beca & Admisión Directa (Stitch) */}

        </div>
      </div>
    </section>
  );
}
