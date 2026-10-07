import { useState } from "react";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Building2,
  Send,
  Award,
  BookOpen,
  GraduationCap,
  Percent,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function Hero({ onOpenLeadModal, onNavigate }) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    promedio: "40",
    modalidad: "Matutino Presencial (Lunes a Jueves)",
  });
  const [calculado, setCalculado] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getBecaTexto = (valor) => {
    switch (valor) {
      case "40":
        return "Beca del 40% (Promedio 9.5 a 10.0)";
      case "30":
        return "Beca del 30% (Promedio 9.0 a 9.4)";
      case "20":
        return "Beca del 20% (Promedio 8.5 a 8.9)";
      case "15":
        return "Beca del 15% (Promedio 8.0 a 8.4)";
      default:
        return "Beca de hasta 40%";
    }
  };

  const handleSimularSubmit = (e) => {
    e.preventDefault();
    setCalculado(true);
    setSubmitted(true);
    setTimeout(() => {
      onOpenLeadModal();
      setSubmitted(false);
    }, 900);
  };

  return (
    <section className="relative w-full bg-[#0b1d3a] text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Fondo con textura fotográfica y scrim graduado Stitch */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida/AEtjO1V1R0HSHysu8Kqv_u14YdszTuJfhGwWW7BxU8IjED-03lUDBWh2r2c07lBw2aNErjYTBCn9THZAxCNW18UKgtuSPLwT5-LRUq9Ic-81nZtoocAvqY0nHL-uXuu3GlksnsXqOo4fH4K9lN5l0rOxahl3P45DNnj5slFsYMBmlf05JDRhLkmIPfGjUgc33AzG-EXWqmg1QBquVk2GiVe4S2JE2iAo2FtUtycRecwMs8IO"
          alt="Comunidad estudiantil en el centro de aprendizaje"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d3a] via-[#0b1d3a]/92 to-[#0b1d3a]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-transparent to-[#0b1d3a]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Columna Izquierda: Editorial Stitch */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Badges de Convocatoria y RVOE */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#c8963e] text-[#070a26] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#070a26] animate-pulse" />
                Convocatoria 2026-2027
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 backdrop-blur-md text-white/90 text-xs font-medium tracking-wide border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e6c15c]" />
                RVOE SEP {INSTITUTION_INFO.rvoeNumber}
              </span>
            </div>

            {/* Titular Principal Editorial con Newsreader */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08] font-serif">
              Domina el mundo en{" "}
              <span className="italic text-[#e6c15c]">tres lenguas vivas</span> con
              rigor académico.
            </h1>

            {/* Subtítulo descriptivo */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
              En <strong>{INSTITUTION_INFO.name}</strong> formamos licenciados de élite mediante un modelo simultáneo y práctico en{" "}
              <strong className="text-white font-semibold">Inglés, Francés e Italiano</strong> con titulación oficial y cédula profesional federal avalada por la Secretaría de Educación Pública.
            </p>

            {/* Badges de Beneficios Rápidos Stitch */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-xl pt-1">
              <div className="flex flex-col p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] flex items-center gap-1">
                  MCER C1/C2
                </span>
                <span className="text-[11px] text-slate-300">Estándar europeo</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] flex items-center gap-1">
                  3 Años
                </span>
                <span className="text-[11px] text-slate-300">9 Cuatrimestres</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <span className="text-xs sm:text-sm font-bold text-[#e6c15c] flex items-center gap-1">
                  Práctica Real
                </span>
                <span className="text-[11px] text-slate-300">Cabinas en vivo</span>
              </div>
            </div>

            {/* CTAs Principales */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#simulador"
                className="btn-tactile inline-flex items-center gap-2.5 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] font-bold text-xs uppercase tracking-wider py-4 px-7 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <span>Iniciar Preinscripción</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate("licenciatura", "plan-estudios")}
                className="btn-tactile inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-4 px-7 rounded-xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#e6c15c]" />
                <span>Explorar Retícula Oficial (58 Materias)</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Simulador de Beca & Admisión Directa (Stitch) */}
          <div className="lg:col-span-5 w-full" id="simulador">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#7e5700] block">
                    Admisión Directa
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1d3a] tracking-tight font-serif">
                    Calcula tu Beca de Ingreso
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#7e5700] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Conoce el estímulo aplicable a tu colegiatura con base en tu promedio actual de bachillerato o preparatoria (Hasta 40% otorgable).
              </p>

              <form onSubmit={handleSimularSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Nombre y Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    placeholder="Ej. Mariana Solís Castellanos"
                    className="w-full text-xs px-3.5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      WhatsApp / Celular
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      placeholder="(961) 000 0000"
                      className="w-full text-xs px-3.5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Promedio Escolar
                    </label>
                    <select
                      value={formData.promedio}
                      onChange={(e) =>
                        setFormData({ ...formData, promedio: e.target.value })
                      }
                      className="w-full text-xs px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:bg-white transition-all cursor-pointer font-medium"
                    >
                      <option value="40">9.5 a 10.0 (Beca 40%)</option>
                      <option value="30">9.0 a 9.4 (Beca 30%)</option>
                      <option value="20">8.5 a 8.9 (Beca 20%)</option>
                      <option value="15">8.0 a 8.4 (Beca 15%)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Modalidad de tu Interés
                  </label>
                  <select
                    value={formData.modalidad}
                    onChange={(e) =>
                      setFormData({ ...formData, modalidad: e.target.value })
                    }
                    className="w-full text-xs px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] focus:bg-white transition-all cursor-pointer font-medium"
                  >
                    <option value="Matutino Presencial (Lunes a Jueves)">
                      Matutino Presencial (Lunes a Jueves)
                    </option>
                    <option value="Vespertino Ejecutivo (Lunes a Jueves)">
                      Vespertino Ejecutivo (Lunes a Jueves)
                    </option>
                    <option value="Sabatino Concentrado con Laboratorio">
                      Sabatino Concentrado con Laboratorio
                    </option>
                  </select>
                </div>

                {/* Resultado interactivo dinámico de beca */}
                <div className="p-3 bg-[#fef3c7]/60 border border-[#fde68a] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#7e5700]" />
                    <span className="text-xs font-medium text-[#7e5700]">
                      Beca estimada autorizable:
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#7e5700]">
                    {getBecaTexto(formData.promedio)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-tactile w-full py-3.5 rounded-lg bg-[#0b1d3a] hover:bg-[#112a52] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitted ? (
                    <span>Abriendo registro completo...</span>
                  ) : (
                    <>
                      <span>Registrar Solicitud Oficial</span>
                      <Send className="w-4 h-4 text-[#e6c15c]" />
                    </>
                  )}
                </button>

                <p className="text-[10.5px] text-center text-slate-500 leading-tight">
                  Tus datos quedan protegidos conforme a la ley mexicana y serán utilizados únicamente para trámites del ciclo escolar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
