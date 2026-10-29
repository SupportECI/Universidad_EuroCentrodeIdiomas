import { useState } from "react";
import {
  Sparkles,
  Clock,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";
import { INVESTIGACIONES_DATA } from "../../data/investigacionesData";
import heroImg from "../../assets/1.jpeg";

export default function CentroInvestigacionesSection({ onOpenLeadModal }) {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos los Programas" },
    { id: "posgrado", label: "Posgrados" },
    { id: "taller", label: "Talleres" },
    { id: "curso", label: "Cursos" },
    { id: "seminario", label: "Seminarios" },
  ];

  const filteredPrograms =
    selectedCategory === "todos"
      ? INVESTIGACIONES_DATA.programs
      : INVESTIGACIONES_DATA.programs.filter(
        (p) => p.category === selectedCategory
      );

  return (
    <div
      id="centro-investigaciones"
      className="w-full bg-slate-50 space-y-16 lg:space-y-24"
    >
      {/* 1. Hero Institucional con estética idéntica a las demás ventanas */}
      <section className="relative w-full text-white overflow-hidden min-h-[75vh] flex items-center bg-[#070a26] py-20 lg:py-28">
        {/* Fondo fotográfico con imagen y scrim degradado */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end">
          <img
            src={heroImg}
            alt="Centro de Investigaciones Euro Centro de Estudios Superiores"
            className="w-full h-full object-cover object-right sm:object-contain translate-y-6 sm:translate-y-10"
            loading="eager"
            decoding="async"
          />
          {/* Scrim fotográfico para legibilidad óptima */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/80 to-[#070a26]/30 max-sm:bg-[#070a26]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a26]/60 via-transparent to-transparent" />
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-6 max-w-3xl text-left">
            {/* Eyebrow Institucional */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
              <span className="flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-[#e6c15c]" />
                {INVESTIGACIONES_DATA.hero.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span>Plantel Bicentenario</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span className="bg-[#c8963e]/20 text-white px-2.5 py-0.5 rounded font-mono border border-[#e6c15c]/30">
                Educación Continua & Posgrado
              </span>
            </div>

            {/* Titular Principal Editorial */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] font-serif">
              {INVESTIGACIONES_DATA.hero.title}{" "}
              <span className="italic text-[#e6c15c]">
                {INVESTIGACIONES_DATA.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtítulo institucional */}
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
              {INVESTIGACIONES_DATA.hero.subtitle}
            </p>

            {/* Tarjetas de hechos rápidos / estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2 text-xs">
              {INVESTIGACIONES_DATA.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors"
                >
                  <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-bold text-white text-base font-serif block mt-0.5">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-300 block">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA del Hero */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenLeadModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8963e] hover:bg-[#b58532] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Solicitar Informes de Programas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección Principal: Listado de Programas en Tarjetas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#070a26]">
              <Sparkles className="w-4 h-4 text-[#c8963e]" />
              <span>Oferta Académica & Especialización</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#070a26] tracking-tight">
              Cursos, Talleres y Posgrados
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Programas diseñados para potenciar el rigor metodológico, la práctica
              traductora de vanguardia y la profesionalización continua en lenguas
              extranjeras.
            </p>
          </div>

          {/* Filtros por Categoría */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedCategory === cat.id
                  ? "bg-[#070a26] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rejilla de Tarjetas (5 Programas Optimizados) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#c8963e]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Cabecera: Etiqueta oficial y Tag de especialidad */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${prog.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {prog.type}
                  </span>

                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100/90 px-2.5 py-0.5 rounded-md border border-slate-200/60 font-mono">
                    {prog.tag}
                  </span>
                </div>

                {/* Título y Enfoque Sintético */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#070a26] leading-snug group-hover:text-[#1211ab] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {prog.focus}
                  </p>
                </div>

                {/* Formato y Perfil Sintético */}
                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#c8963e] shrink-0" />
                    <span>{prog.modality}</span>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-snug">
                    <span className="font-semibold text-slate-700">Dirigido a:</span>{" "}
                    {prog.target}
                  </div>
                </div>
              </div>

              {/* Pie de Tarjeta Directo y Accesible */}
              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Convocatoria 2026
                </span>
                <button
                  onClick={onOpenLeadModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#070a26] group-hover:bg-[#c8963e] text-white group-hover:text-slate-950 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <span>Solicitar Informes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Banner Institucional de Respaldo y Vinculación */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-gradient-to-br from-[#070a26] to-[#1211ab] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#e6c15c] border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Respaldo Institucional Oficial SEP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              ¿Deseas información sobre la apertura de nuevas convocatorias?
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Nuestro Centro de Investigaciones mantiene un canal directo de
              orientación para profesionistas, egresados y aspirantes. Déjanos tus
              datos para recibir folletos de contenido temático y fechas de inicio.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c8963e] hover:bg-[#b58532] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer"
            >
              Contactar al Centro de Investigaciones
            </button>
          </div>

          {/* Adorno visual sutil de fondo */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#c8963e]/10 blur-2xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
