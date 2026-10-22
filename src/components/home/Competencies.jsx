import {
  Languages,
  Users2,
  Mic,
  Cpu,
  BookOpen,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Competencies({ onNavigate }) {
  return (
    <section className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-[#f2f4f7] border-t border-slate-200/80" id="competencias">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7e5700] block font-mono">
              Áreas de formación
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0b1d3a] tracking-tight font-serif leading-tight">
              Lo que vas a aprender
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-md">
            Un plan de estudios que combina el dominio de tres idiomas con las herramientas para traducir, interpretar y enseñar.
          </p>
        </div>

        {/* Estructura Organizada y Balanceada */}
        <div className="flex flex-col gap-6">
          {/* 1. Área 1: Idiomas con barras de nivel */}
          <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm hover:shadow-md border border-slate-200/80 transition-all flex flex-col gap-6 group">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-[#0b1d3a] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Languages className="w-6 h-6 text-[#e6c15c]" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold text-[#7e5700] bg-[#fef3c7] px-2.5 py-0.5 rounded-md inline-block uppercase tracking-wider font-mono">
                      Dominio Lingüístico
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors mt-0.5">
                      Idiomas
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pt-1">
                  Inglés y francés en nueve niveles, e italiano en cinco.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 self-start px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                <Sparkles className="w-4 h-4 text-[#c8963e]" />
                <span>Formación Trilingüe</span>
              </div>
            </div>

            {/* Visualizador de Lenguas / Niveles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 font-display">Inglés</span>
                  <span className="text-[#7e5700] font-bold font-mono px-2 py-0.5 rounded bg-amber-100/60 text-[11px]">
                    Nivel C1
                  </span>
                </div>
                <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[95%] rounded-full transition-all duration-500" />
                </div>
                <p className="text-[11px] text-slate-500 font-light">
                  Inglés durante toda la carrera hasta nivel profesional C1.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 font-display">Francés</span>
                  <span className="text-[#7e5700] font-bold font-mono px-2 py-0.5 rounded bg-amber-100/60 text-[11px]">
                    Nivel B2
                  </span>
                </div>
                <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[85%] rounded-full transition-all duration-500" />
                </div>
                <p className="text-[11px] text-slate-500 font-light">
                  Francés durante toda la carrera hasta nivel B2.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 font-display">Italiano</span>
                  <span className="text-[#7e5700] font-bold font-mono px-2 py-0.5 rounded bg-amber-100/60 text-[11px]">
                    Nivel B1
                  </span>
                </div>
                <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[80%] rounded-full transition-all duration-500" />
                </div>
                <p className="text-[11px] text-slate-500 font-light">
                  Italiano a partir del cuarto cuatrimestre hasta nivel B1.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Las 4 Áreas en Tarjetas Iguales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Tarjeta 2: Traducción e interpretación */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Mic className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Área Profesional
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Traducción e interpretación
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  De la traducción básica a la literaria, y de la interpretación consecutiva a la simultánea.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Didáctica y tecnología */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Cpu className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Metodología
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Didáctica y tecnología
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Aprende a enseñar idiomas con metodología y herramientas digitales, y practica en el laboratorio de idiomas.
                </p>
              </div>
            </div>

            {/* Tarjeta 4: Lingüística */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Estructura
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Lingüística
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Entiende cómo funcionan las lenguas, de la fonética al análisis del discurso.
                </p>
              </div>
            </div>

            {/* Tarjeta 5: Formación humanista */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Users2 className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Cultura
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Formación humanista
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Ética, cultura e identidad para comunicarte entre culturas.
                </p>
              </div>
            </div>
          </div>

          {/* Enlace único: Ver plan de estudios */}
          <div className="text-center pt-3">
            <button
              onClick={() => onNavigate?.("licenciatura", "plan-estudios")}
              className="btn-tactile inline-flex items-center gap-2 text-xs font-bold text-[#0b1d3a] hover:text-[#1211ab] uppercase tracking-wider transition-all group cursor-pointer bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
            >
              <span>Ver plan de estudios</span>
              <ChevronRight className="w-4 h-4 text-[#c8963e] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
