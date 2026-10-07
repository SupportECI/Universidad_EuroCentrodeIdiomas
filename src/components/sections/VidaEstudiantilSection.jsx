import {
  MapPin,
  Award,
  MessageSquare,
  Theater,
  GraduationCap,
  Plane,
  MonitorCheck,
  Headphones,
  Library,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function VidaEstudiantilSection({ onOpenLeadModal }) {
  const facilities = [
    {
      name: "Aulas Multimedia Climatizadas",
      desc: "Espacios ergonómicos diseñados con acústica controlada, proyección láser interactiva y conectividad de alta velocidad.",
      tag: "Espacios de Inmersión",
      icon: MonitorCheck,
      spec: "Capacidad: 25 alumnos máx.",
      accent: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-euro-blue",
    },
    {
      name: "Laboratorios Fonéticos & Cabinas",
      desc: "Cabinas individuales de interpretación simultánea y software acústico para corrección prosódica en inglés, francés e italiano.",
      tag: "Tecnología Especializada",
      icon: Headphones,
      spec: "Equipamiento CAT & Audio Hi-Fi",
      accent: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-600",
    },
    {
      name: "Centro de Acervo & Biblioteca",
      desc: "Colección especializada en lingüística teórica, diccionarios bilingües técnicos, literatura europea y bases de datos digitales.",
      tag: "Investigación Lingüística",
      icon: Library,
      spec: "Acervo Físico + Biblioteca Virtual",
      accent: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-500",
    },
    {
      name: "Campus Digital & LMS 24/7",
      desc: "Plataforma educativa institucional para entrega de proyectos, retroalimentación fonética personalizada y foros de debate.",
      tag: "Entorno Conectado",
      icon: Layers,
      spec: "Sincronización Multiplataforma",
      accent: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-600",
    },
  ];

  const activities = [
    {
      title: "Clubes de Conversación Guiados",
      desc: "Sesiones semanales dinámicas moderadas por profesores nativos en inglés, francés e italiano para desarrollar fluidez coloquial e idiomatismos.",
      icon: MessageSquare,
      badge: "Práctica Semanal",
    },
    {
      title: "Jornadas Culturales & Cine-Debate",
      desc: "Muestras gastronómicas, ciclos de cine internacional y semanas dedicadas a las tradiciones de países francófonos, anglosajones e itálicos.",
      icon: Theater,
      badge: "Inmersión Cultural",
    },
    {
      title: "Talleres de Oratoria & Subtitulaje",
      desc: "Talleres prácticos de traducción audiovisual, doblaje, expresión oral en foros públicos y preparación para certificaciones internacionales.",
      icon: GraduationCap,
      badge: "Habilidades Profesionales",
    },
    {
      title: "Movilidad Estudiantil & Vinculación",
      desc: "Convenios de vinculación académica e intercambios con instituciones bilingües y organismos de cooperación cultural en gestión continua.",
      icon: Plane,
      badge: "Proyección Exterior",
      isPending: true,
    },
  ];

  return (
    <div id="vida-estudiantil" className="w-full bg-slate-50 space-y-24">
      {/* 9.0 Hero de Vida Estudiantil & Comunidad - Expansive Panorama */}
      <section className="relative w-full text-white overflow-hidden min-h-[75vh] flex items-center bg-[#070a26] py-20 lg:py-28">
        {/* Fondo fotográfico con estudiantes universitarios conviviendo en campus */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-vida-estudiantil.jpg"
            alt="Comunidad Universitaria en el Campus Plantel Bicentenario"
            className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-glow"
            style={{ animationDuration: "16s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/80 to-[#070a26]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a26] via-transparent to-[#070a26]/60" />
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
              <span>{INSTITUTION_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span>Comunidad & Cultura Bicentenario</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span className="bg-[#c8963e]/20 text-white px-2.5 py-0.5 rounded font-mono border border-[#e6c15c]/30">
                Experiencia Universitaria
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] font-serif">
              Una comunidad universitaria que <span className="italic text-[#e6c15c]">vive y respira</span> idiomas.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
              Más allá del aula: clubes de conversación con catedráticos nativos, cine-debate en versión original, semanas de inmersión cultural internacional y espacios diseñados para inspirar tu crecimiento personal y profesional.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2 text-xs">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  CLUBES DE CHARLA
                </span>
                <span className="font-bold text-white text-base font-serif">Semanal</span>
                <span className="text-[11px] text-slate-300 block">Inglés, Francés, Italiano</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  CULTURA
                </span>
                <span className="font-bold text-[#e6c15c] text-base font-serif">Jornadas Europeas</span>
                <span className="text-[11px] text-slate-300 block">Festivales gastronómicos</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  ACERVO
                </span>
                <span className="font-bold text-white text-base font-serif">Biblioteca Bilingüe</span>
                <span className="text-[11px] text-slate-300 block">Colección especializada</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  AMBIENTE
                </span>
                <span className="font-bold text-white text-base font-serif">Plantel Bicentenario</span>
                <span className="text-[11px] text-slate-300 block">Tuxtla Gutiérrez, Chiapas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenLeadModal}
                className="btn-tactile py-3.5 px-7 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all text-center cursor-pointer"
              >
                Agenda un Recorrido por el Plantel
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("instalaciones");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-tactile py-3.5 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explorar Instalaciones & Laboratorios</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9.1 Instalaciones en Plantel Bicentenario Stitch */}
      <section id="instalaciones" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-[11px] font-bold text-[#7e5700] uppercase tracking-widest block font-mono">
            Entornos de Alto Rendimiento
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0b1d3a] tracking-tight font-serif">
            Instalaciones Diseñadas para la Inmersión Lingüística
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            El Plantel Bicentenario en Tuxtla Gutiérrez cuenta con infraestructura creada específicamente para la práctica activa, cabinas de traducción y laboratorios acústicos.
          </p>
        </div>

        {/* Bento Cards de Instalaciones Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#7e5700] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7e5700] bg-[#fef3c7] px-2.5 py-1 rounded-md">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0b1d3a] font-serif leading-snug">
                    {f.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[10.5px] text-slate-500 font-mono">
                  <span>{f.spec}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mapa y Ficha de Ubicación del Plantel Stitch */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef3c7] text-[#7e5700] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-euro-gold" />
              Ubicación Estratégica en Tuxtla Gutiérrez
            </div>

            <h3 className="text-2xl font-extrabold text-euro-dark font-display">
              Plantel Bicentenario
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Ubicado en una zona céntrica y de fácil acceso en la capital chiapaneca, con conectividad a las principales rutas de transporte urbano y áreas comerciales.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div>
                <strong className="block text-euro-dark">Dirección Oficial:</strong>
                <span className="text-slate-600">{INSTITUTION_INFO.address}</span>
              </div>
              <div>
                <strong className="block text-euro-dark">Atención Presencial:</strong>
                <span className="text-slate-600">Lunes a Viernes de 8:00 a 18:00 hrs</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Av.+2a+Sur+Poniente+1417+Tuxtla+Gutierrez+Chiapas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-euro-blue hover:text-euro-royal transition-colors"
            >
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-200 border-2 border-slate-200 shadow-inner relative">
            <iframe
              title="Mapa Plantel Bicentenario"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5369687483664!2d-93.125!3d16.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2760a927c3ab%3A0x6bfa3311666!2sAv%202a%20Sur%20Pte%2C%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 9.2 Vida Estudiantil & Actividades de Comunidad */}
      <section id="vida-comunidad" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
            Comunidad Universitaria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-euro-dark tracking-tight font-display">
            Vida Estudiantil, Cultura y Clubes de Lenguas
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            El dominio de un idioma trasciende el salón de clases: se alimenta del intercambio cultural, la convivencia y los desafíos grupales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-euro-blue/10 text-euro-royal flex items-center justify-center group-hover:bg-euro-dark group-hover:text-euro-gold transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-euro-royal bg-euro-blue/10 px-2.5 py-1 rounded-full border border-euro-blue/20">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-euro-dark font-display leading-snug">
                    {act.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  {act.isPending ? (
                    <span className="text-[10px] font-mono font-bold text-euro-gold bg-euro-gold/10 px-2 py-0.5 rounded">
                      Convenios en gestión
                    </span>
                  ) : (
                    <span className="text-slate-500 font-medium">Actividad Continua</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-euro-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9.3 Programa de Becas y Apoyos Económicos */}
      <section id="becas-apoyos" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-euro-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-euro-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-euro-gold via-amber-300 to-euro-blue" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-euro-gold/20 text-euro-gold text-xs font-bold uppercase tracking-wider border border-euro-gold/30 font-display">
              <Award className="w-4 h-4" />
              Impulso al Talento Académico
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Programa de Becas y Convenios Institucionales
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Reconocemos el esfuerzo y la excelencia académica de los aspirantes mediante esquemas de beca al mérito escolar, convenios empresariales y apoyos para la primera generación del Plantel Bicentenario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-euro-gold font-display font-black text-2xl block">
                  Hasta 40%
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Beca al Mérito Académico
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white font-display font-black text-2xl block">
                  Convenios
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Descuentos para Colegios
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-euro-gold font-display font-black text-2xl block">
                  Generación 1
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Inscripción Preferencial 2026
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="btn-tactile px-8 py-4 bg-gradient-to-r from-euro-gold to-amber-500 text-euro-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl cursor-pointer"
              >
                Solicitar Diagnóstico de Beca
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
