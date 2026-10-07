import {
  Play,
  Sparkles,
  MessageSquare,
  Globe2,
  Mic2,
  Laptop,
  HeartHandshake,
  Award,
  ChevronRight,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";
import { FORMATION_STAGES, INSTITUTION_INFO } from "../../data/curriculumData";

export default function ModeloEducativoSection({
  onOpenVideo,
  onOpenLeadModal,
  onNavigate,
}) {
  const modelPillars = [
    {
      title: "Aprendizaje Comunicativo Activo",
      description: "El idioma se usa desde la primera sesión en situaciones reales de diálogo, debate e inmersión contextual, eliminando la memorización pasiva.",
      icon: MessageSquare,
      badge: "Inmersión Total",
      accent: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-euro-blue",
    },
    {
      title: "Tres Idiomas, Un Perfil Integral",
      description: "Inglés y francés se cursan durante los nueve cuatrimestres de la carrera, sumando italiano formalmente a partir del 4° cuatrimestre.",
      icon: Globe2,
      badge: "Trilingüe C1/B2",
      accent: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-euro-gold",
    },
    {
      title: "Práctica Profesional en Aula",
      description: "Traducción jurídica, subtitulaje audiovisual, interpretación consecutiva y didáctica de lenguas aplicadas en proyectos reales.",
      icon: Mic2,
      badge: "Cabinas Acústicas",
      accent: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-600",
    },
    {
      title: "Tecnología para Lenguas (CAT)",
      description: "Manejo intensivo de software de traducción asistida por computadora (SDL Trados/Smartcat), laboratorios acústicos y plataformas LMS.",
      icon: Laptop,
      badge: "Entornos Digitales",
      accent: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-600",
    },
    {
      title: "Formación Humanista & Ética",
      description: "Bases de ética profesional, deontología del perito traductor, derechos culturales y comprensión profunda de la diversidad internacional.",
      icon: HeartHandshake,
      badge: "Deontología",
      accent: "from-rose-500/20 to-rose-500/5",
      iconColor: "text-rose-600",
    },
    {
      title: "Certificación Internacional de Salida",
      description: "El noveno cuatrimestre integra materias específicas para acreditar formalmente el nivel de dominio ante organismos de Europa y EE.UU.",
      icon: Award,
      badge: "Validez Global",
      accent: "from-euro-gold/25 to-euro-gold/5",
      iconColor: "text-amber-500",
    },
  ];

  const classExperience = [
    {
      step: "01",
      title: "Interacción Diaria Obligatoria",
      desc: "Grupos estructurados para que cada estudiante participe, debata y produzca en el idioma meta en cada hora de clase.",
      highlight: "Cero Clases Pasivas",
    },
    {
      step: "02",
      title: "Docentes Nativos & Especialistas",
      desc: "Catedráticos con formación lingüística universitaria y acreditaciones pedagógicas que proporcionan retroalimentación inmediata.",
      highlight: "Acompañamiento Cercano",
    },
    {
      step: "03",
      title: "Laboratorios Acústicos & Fonética",
      desc: "Práctica asistida para neutralizar interferencias fonéticas, perfeccionar la prosodia y dominar la entonación exacta.",
      highlight: "Precisión Acústica",
    },
  ];

  return (
    <div id="modelo-educativo" className="w-full bg-slate-50 py-16 sm:py-24 space-y-24">
      {/* 8.1 Video + Introducción (Stitch Editorial Double-Bezel) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-14 shadow-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Columna Izquierda: Video Frame Stitch */}
          <div className="lg:col-span-6 relative">
            <div
              onClick={onOpenVideo}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#0b1d3a] group cursor-pointer border border-slate-200"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V1R0HSHysu8Kqv_u14YdszTuJfhGwWW7BxU8IjED-03lUDBWh2r2c07lBw2aNErjYTBCn9THZAxCNW18UKgtuSPLwT5-LRUq9Ic-81nZtoocAvqY0nHL-uXuu3GlksnsXqOo4fH4K9lN5l0rOxahl3P45DNnj5slFsYMBmlf05JDRhLkmIPfGjUgc33AzG-EXWqmg1QBquVk2GiVe4S2JE2iAo2FtUtycRecwMs8IO"
                  alt="Instalaciones Plantel Bicentenario"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-[#0b1d3a]/40 group-hover:bg-[#0b1d3a]/20 transition-colors" />

                {/* Botón Play Stitch */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -inset-3 rounded-full bg-[#c8963e]/40 animate-ping opacity-75" />
                    <div className="w-16 h-16 rounded-full bg-[#c8963e] text-[#070a26] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#0b1d3a]/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Tour Plantel Bicentenario • 2:45 min
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-3 font-medium">
              Conoce el enfoque pedagógico y las cabinas de traducción en Plantel Bicentenario
            </p>
          </div>

          {/* Columna Derecha: Texto Stitch */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef3c7] text-[#7e5700] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vanguardia Académica Aplicada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-euro-dark tracking-tight font-display">
              Un idioma no se memoriza: se vive y se practica
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-light">
              <p className="text-base text-slate-700 font-normal">
                Nuestro modelo pedagógico parte de una verdad confirmada en más de dos décadas formando hablantes competentes: <strong className="text-euro-dark font-semibold">una lengua se aprende cuando se utiliza como herramienta de interacción real.</strong>
              </p>
              <p>
                Por ello, cada cuatrimestre articula tres dimensiones interconectadas: la inmersión conversacional, el rigor de la teoría lingüística descriptiva y la práctica profesional en traducción, interpretación en cabina y docencia de vanguardia.
              </p>
              <p>
                El alumno es el protagonista. Guiado por docentes especializados, desarrolla la seguridad psicológica y la fluidez cognitiva necesarias para negociar, traducir textos técnicos y expresarse con elegancia en tres lenguas.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="btn-tactile px-6 py-3 bg-euro-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-euro-blue transition-colors cursor-pointer"
              >
                Conocer Plan de Estudios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8.2 Banner Inmersivo ("Aprender Haciendo") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-euro-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-euro-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-euro-gold to-amber-500 text-euro-dark flex items-center justify-center shrink-0 shadow-xl font-bold">
            <BookOpenCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
              Metodología Inmersiva
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              Aprender Haciendo: De la Teoría a la Cabina de Traducción
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Las sesiones en aula priorizan la producción oral, el análisis de corpus textuales y la simulación de conferencias multilingües. No esperarás al egreso para traducir o interpretar: lo haces desde los primeros semestres formativos con acompañamiento de especialistas.
            </p>
          </div>
        </div>
      </section>

      {/* 8.3 Los 6 Pilares del Modelo Educativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-display">
            Fundamentos de Excelencia
          </span>
          <h2 className="text-3xl font-extrabold text-euro-dark font-display tracking-tight">
            Los 6 Pilares del Modelo Euro Centro
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Ejes curriculares diseñados para formar profesionistas trilingües completos y competitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.accent} ${p.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-euro-royal bg-euro-blue/10 px-2.5 py-1 rounded-full border border-euro-blue/20">
                      {p.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-euro-dark font-display leading-snug">
                    {p.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8.4 La Clase Euro Centro (Dinámica en el Aula) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-display">
            Dinámica en el Aula
          </span>
          <h2 className="text-3xl font-extrabold text-euro-dark font-display tracking-tight">
            La Experiencia de la Clase Euro Centro
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Cómo se vive una sesión cotidiana dentro de nuestros espacios académicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classExperience.map((b, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-euro-gold">
                    {b.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-euro-royal bg-euro-blue/10 px-2.5 py-1 rounded-full">
                    {b.highlight}
                  </span>
                </div>
                <h4 className="font-bold text-base text-euro-dark font-display">
                  {b.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.5 Ruta de Formación (4 Etapas Progresivas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-display">
              Trayectoria de 3 Años (9 Cuatrimestres)
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-euro-dark font-display tracking-tight">
              Ruta Formativa de la Carrera
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              Progresión pedagógica continua desde los fundamentos hasta la certificación y titulación oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMATION_STAGES.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-4 group hover:border-euro-blue hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-euro-royal bg-euro-blue/10 px-2.5 py-1 rounded-md inline-block">
                    {st.stage}
                  </span>
                  <h4 className="font-bold text-sm text-euro-dark font-display">
                    {st.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Etapa {i + 1} de 4</span>
                  <ChevronRight className="w-3.5 h-3.5 text-euro-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.6 Respaldo Institucional (Franja Euro Centro) */}
      <section className="w-full bg-euro-dark text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-radial from-euro-blue/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-euro-gold/20 text-euro-gold text-xs font-bold uppercase tracking-wider border border-euro-gold/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Validez Oficial Federal SEP • Acuerdo 20263560
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
            {INSTITUTION_INFO.trustPhrase}
          </h3>

          <p className="text-sm text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Nuestra solidez académica en Chiapas avala un modelo de educación superior práctico, diseñado para que egreses con competencias de nivel internacional.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenLeadModal}
              className="btn-tactile px-8 py-4 bg-gradient-to-r from-euro-gold to-amber-500 text-euro-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl cursor-pointer"
            >
              Solicita Información de Admisión
            </button>
            <button
              onClick={() => onNavigate && onNavigate("licenciatura")}
              className="px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              Ver Malla Curricular
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

