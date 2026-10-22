import {
  Languages,
  Users2,
  ChevronRight,
  Mic,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function Competencies() {
  return (
    <section className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-[#f2f4f7] border-t border-slate-200/80" id="competencias">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado Editorial Stitch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7e5700] block font-mono">
              Matriz Académica Diferenciadora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0b1d3a] tracking-tight font-serif leading-tight">
              Competencias de alto impacto para liderar en{" "}
              <span className="italic text-[#7e5700]">entornos globales</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-md">
            Nuestro mapa curricular fusiona la precisión filológica con la tecnología de procesamiento lingüístico y la práctica corporativa.
          </p>
        </div>

        {/* Estructura Organizada y Balanceada */}
        <div className="flex flex-col gap-6">
          {/* 1. Bloque Destacado de Ancho Completo: Núcleo Central Trilingüe */}
          <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm hover:shadow-md border border-slate-200/80 transition-all flex flex-col gap-6 group">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-[#0b1d3a] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Languages className="w-6 h-6 text-[#e6c15c]" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold text-[#7e5700] bg-[#fef3c7] px-2.5 py-0.5 rounded-md inline-block uppercase tracking-wider font-mono">
                      Núcleo Central Curricular
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors mt-0.5">
                      Trilingüismo Operativo: Inglés, Francés e Italiano
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pt-1">
                  Desarrollo progresivo hasta niveles C1 con énfasis en redacción ejecutiva, argumentación retórica y adaptación cultural profunda para diplomacia, comercio exterior y academia. Formación simultánea calibrada bajo estándares internacionales del MCER.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 self-start px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                <Sparkles className="w-4 h-4 text-[#c8963e]" />
                <span>Titulación Trilingüe Oficial</span>
              </div>
            </div>

            {/* Visualizador de Lenguas / Niveles MCER */}
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
                  Dominio operativo eficaz para negocios y diplomacia.
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
                  Fluidez profesional para negociación y cultura jurídica.
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
                  Competencia comunicativa y traducción institucional.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Trilogía de Especialización: 3 Columnas Perfectamente Balanceadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Tarjeta 1: Interpretación en Cabina Simultánea */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Mic className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Técnica Oral
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Interpretación Simultánea y Consecutiva
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Técnicas de síntesis inmediata, toma de notas consecutivas (Stenomask) y traducción a la vista para foros gubernamentales e internacionales.
                </p>
              </div>

              <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-6 pt-3 border-t border-slate-100 group-hover:gap-1.5 transition-all">
                <span>Simulación en tiempo real</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            {/* Tarjeta 2: Tecnologías de la Traducción y CAT Tools */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Cpu className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Herramientas Digitales
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Tecnología Lingüística &amp; CAT Tools
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Dominio de memorias de traducción, subtitulaje audiovisual, gestión de glosarios terminológicos y pos-edición de motores neuronales.
                </p>
              </div>

              <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-6 pt-3 border-t border-slate-100 group-hover:gap-1.5 transition-all">
                <span>SDL Trados &amp; MemoQ</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            {/* Tarjeta 3: Liderazgo y Diplomacia Intercultural */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-[#e6c15c] transition-colors">
                    <Users2 className="w-6 h-6" />
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    Relaciones Globales
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Diplomacia y Negociación Intercultural
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Manejo de códigos culturales, negociación transfronteriza y consultoría editorial para empresas globales y organismos multilaterales.
                </p>
              </div>

              <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-6 pt-3 border-t border-slate-100 group-hover:gap-1.5 transition-all">
                <span>Enfoque Geopolítico</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
