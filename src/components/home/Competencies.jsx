import {
  Languages,
  Activity,
  Headphones,
  Users2,
  ChevronRight,
  Mic,
  Cpu,
} from "lucide-react";

export default function Competencies() {
  return (
    <section className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-[#f2f4f7] border-t border-slate-200/80" id="competencias">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado Editorial Stitch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7e5700] block">
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

        {/* Bento Grid Stitch: 5 Bloques Asimétricos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Bloque 1: Dominio Trilingüe Simultáneo (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl bg-[#0b1d3a] text-white flex items-center justify-center shadow-xs">
                  <Languages className="w-6 h-6 text-[#e6c15c]" />
                </span>
                <span className="text-[11px] font-bold text-[#7e5700] bg-[#fef3c7] px-3 py-1 rounded-md">
                  Núcleo Central
                </span>
              </div>

              <div className="my-4 space-y-2">
                <h3 className="font-bold text-xl sm:text-2xl text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors">
                  Trilingüismo Operativo: Inglés, Francés e Italiano
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Desarrollo progresivo hasta niveles C1 y C2 con énfasis en redacción ejecutiva, argumentación retórica y adaptación cultural profunda para diplomacia, comercio exterior y academia.
                </p>
              </div>
            </div>

            {/* Visualizador de Lenguas / Niveles (Stitch) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <div className="flex justify-between items-center text-xs text-slate-600 mb-1.5">
                  <span className="font-semibold text-slate-800">Inglés</span>
                  <span className="text-[#7e5700] font-bold">Nivel C2</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[95%] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs text-slate-600 mb-1.5">
                  <span className="font-semibold text-slate-800">Francés</span>
                  <span className="text-[#7e5700] font-bold">Nivel C1</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[85%] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs text-slate-600 mb-1.5">
                  <span className="font-semibold text-slate-800">Italiano</span>
                  <span className="text-[#7e5700] font-bold">Nivel C1</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8963e] h-full w-[80%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 2: Fonética y Laboratorio Acústico (4 Cols) */}
          <div className="lg:col-span-4 bg-[#0b1d3a] text-white rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-xl bg-white/10 text-[#e6c15c] flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-medium text-slate-300">
                  Entrenamiento Fonético
                </span>
              </div>
              <div className="my-3 space-y-2">
                <h3 className="font-bold text-xl text-white font-serif">
                  Laboratorio de Acústica y Prosodia
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Software de corrección fonológica para eliminar acentos de interferencia y lograr pronunciación neutra profesional en cabina.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#e6c15c] pt-4 border-t border-white/10">
              <Headphones className="w-4 h-4" />
              <span>Estaciones de escucha asistida 100% equipadas</span>
            </div>
          </div>

          {/* Bloque 3: Interpretación en Cabina Simultánea (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
            <div>
              <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center mb-4">
                <Mic className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors mb-2">
                Interpretación en Cabina Simultánea
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Técnicas de síntesis inmediata, toma de notas consecutivas (Stenomask) y traducción a la vista para foros gubernamentales e internacionales.
              </p>
            </div>
            <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-5">
              <span>Simulación en tiempo real</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>

          {/* Bloque 4: Tecnologías de la Traducción y CAT Tools (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
            <div>
              <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors mb-2">
                CAT Tools &amp; Localización Digital
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Dominio de memorias de traducción, subtitulaje audiovisual, gestión de glosarios terminológicos y pos-edición de motores neuronales.
              </p>
            </div>
            <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-5">
              <span>SDL Trados &amp; MemoQ</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>

          {/* Bloque 5: Liderazgo y Diplomacia Intercultural (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all">
            <div>
              <span className="w-12 h-12 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-[#0b1d3a] font-serif group-hover:text-[#7e5700] transition-colors mb-2">
                Diplomacia &amp; Protocolo Internacional
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Manejo de códigos culturales, negociación transfronteriza y consultoría editorial para empresas globales y organismos multilaterales.
              </p>
            </div>
            <span className="text-xs text-[#7e5700] font-bold flex items-center gap-1 mt-5">
              <span>Enfoque Geopolítico</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
