import {
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";
import heroImg1 from "../../assets/1Remake.jpg";

export default function Hero({ onOpenLeadModal, onNavigate }) {
  return (
    <section className="relative w-full text-white overflow-hidden min-h-[75vh] lg:min-h-[80vh] flex items-center bg-[#070a26] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28">
      {/* Fondo fotográfico con imagen 1 (estudiante a la derecha, espacio libre a la izquierda) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end">
        {/* CONTROL DE POSICIÓN EN Y: Las clases 'translate-y-...' bajan la imagen sin estirarla ni mover el texto */}
        <img
          src={heroImg1}
          alt="Estudiante universitario con reconocimiento de excelencia académica"
          className="w-full h-full object-cover object-right sm:object-contain translate-y-20 sm:translate-y-28 lg:translate-y-32"
          loading="eager"
          decoding="async"
        />
        {/* Scrim fotográfico: protege el texto a la izquierda y deja ver al estudiante y diploma a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/75 to-[#070a26]/20 max-sm:bg-[#070a26]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a26]/50 via-transparent to-transparent" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Contenido alineado a la izquierda aprovechando el espacio libre */}
        <div className="space-y-6 max-w-3xl text-left">
          {/* Eyebrow Institucional Oficial (idéntico al de las demás secciones) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
            <span>{INSTITUTION_INFO.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
            <span>Plantel Bicentenario</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
            <span className="bg-[#c8963e]/20 text-white px-2.5 py-0.5 rounded font-mono border border-[#e6c15c]/30">
              RVOE SEP {INSTITUTION_INFO.rvoeNumber}
            </span>
          </div>

          {/* Titular Principal Editorial con escala y tipografía uniforme */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] font-serif">
            Domina el mundo en{" "}
            <span className="italic text-[#e6c15c]">tres lenguas vivas</span> con
            rigor profesional.
          </h1>

          {/* Subtítulo sintético y directo */}
          <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
            Formación universitaria trilingüe simultánea en{" "}
            <strong className="text-white font-medium">Inglés, Francés e Italiano</strong>. Titulación oficial y cédula federal SEP en Plantel Bicentenario Tuxtla Gutiérrez.
          </p>

          {/* CTAs Principales con microinteracciones táctiles */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenLeadModal ? onOpenLeadModal() : onNavigate?.("admisiones")}
              className="btn-tactile inline-flex items-center gap-2.5 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl shadow-xl transition-all cursor-pointer"
            >
              <span>Iniciar Preinscripción</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate?.("licenciatura", "plan-estudios")}
              className="btn-tactile inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-4 px-7 rounded-xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#e6c15c]" />
              <span>Plan de Estudios</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
