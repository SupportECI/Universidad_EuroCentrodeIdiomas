import {
  Target,
  Compass,
  Users,
  GraduationCap,
  Sparkles,
  Quote,
  Clock,
  Award,
  Globe2,
  Scale,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Building2,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function NosotrosSection({ onOpenLeadModal }) {
  const timeline = [
    {
      period: "Más de 25 años de trayectoria",
      badge: "Pilar Histórico",
      title: "Consolidación en la Enseñanza de Idiomas",
      desc: "Euro Centro nace con la convicción de que dominar una lengua extranjera debe ser accesible, dinámico y con impacto directo en el crecimiento profesional y humano, convirtiéndose en el gran referente formador de Chiapas.",
      icon: Clock,
      stats: "25+ Años",
    },
    {
      period: "Año 2026",
      badge: "Hito Institucional",
      title: "Nace Euro Centro de Estudios Superiores",
      desc: "Evolución institucional al nivel superior con la obtención formal del Reconocimiento de Validez Oficial de Estudios (RVOE SEP Federal Acuerdo No. 20263560) para impartir la Licenciatura en Idiomas en modalidad escolarizada.",
      icon: GraduationCap,
      stats: "RVOE SEP",
    },
    {
      period: "Ciclo 2026-1",
      badge: "Generación Fundadora",
      title: "Primera Generación de Licenciatura",
      desc: "Apertura de la carrera en el Plantel Bicentenario de Tuxtla Gutiérrez, formando profesionistas trilingües de élite con competencias avanzadas en traducción, interpretación simultánea y didáctica lingüística.",
      icon: Sparkles,
      stats: "Convocatoria Activa",
    },
  ];

  const institutionalValues = [
    {
      title: "Excelencia Académica",
      desc: "Exigencia continua en cada clase, laboratorio y evaluación bajo estándares del Marco Común Europeo.",
      icon: Award,
      accent: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-500",
    },
    {
      title: "Respeto Intercultural",
      desc: "Valoración profunda de la diversidad lingüística, tradiciones y mentalidades de la comunidad global.",
      icon: Globe2,
      accent: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-euro-blue",
    },
    {
      title: "Ética & Deontología",
      desc: "Rigor profesional, confidencialidad y honestidad intelectual en traducción, peritaje y docencia.",
      icon: Scale,
      accent: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-600",
    },
    {
      title: "Compromiso Formativo",
      desc: "Acompañamiento cercano desde el diagnóstico vocacional hasta la titulación e inserción laboral.",
      icon: Handshake,
      accent: "from-indigo-500/20 to-indigo-500/5",
      iconColor: "text-indigo-600",
    },
    {
      title: "Innovación Metodológica",
      desc: "Integración de laboratorios acústicos, herramientas de traducción CAT y pedagogías activas.",
      icon: Lightbulb,
      accent: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-500",
    },
    {
      title: "Espíritu Emprendedor",
      desc: "Impulso para crear agencias de traducción, consultorías lingüísticas e iniciativas educativas de alcance global.",
      icon: Rocket,
      accent: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-euro-blue",
    },
  ];

  const facultyColleges = [
    {
      area: "Colegio de Inglés",
      desc: "Catedráticos nativos y lingüistas con certificaciones Cambridge C2 Proficiency y metodología comunicativa avanzada.",
      credential: "C1 / C2 Cambridge",
      subjects: "Inglés I a IX • Fonética Anglosajona",
    },
    {
      area: "Colegio de Francés",
      desc: "Especialistas acreditados bajo estándares del CIEP / France Éducation International con experiencia en literatura y traducción.",
      credential: "DELF B2 / DALF C1",
      subjects: "Francés I a IX • Cultura Francófona",
    },
    {
      area: "Colegio de Italiano",
      desc: "Profesores certificados en lengua y civilización italiana, enfocados en inmersión comunicativa y traducción jurídica.",
      credential: "PLIDA / CILS B2",
      subjects: "Italiano I a VI • Traducción Directa",
    },
    {
      area: "Lingüística & Didáctica",
      desc: "Investigadores en adquisición de lenguas, fonología experimental y diseño de programas curriculares bilingües.",
      credential: "Posgrados en Lingüística",
      subjects: "Sintaxis • Semántica • Prácticas Docentes",
    },
  ];

  return (
    <div id="nosotros" className="w-full bg-slate-50 py-16 sm:py-24 space-y-24">
      {/* 6.1 Hero de Identidad Institucional Stitch */}
      <section className="relative w-full overflow-hidden bg-[#0b1d3a] text-white rounded-2xl py-14 sm:py-20 px-6 sm:px-12 shadow-2xl max-w-7xl mx-auto border border-white/10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c8963e]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#e6c15c]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
                {INSTITUTION_INFO.name} • Plantel Bicentenario
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white font-serif leading-tight">
              Más de 25 años formando líderes en idiomas en Chiapas
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-light">
              Consolidamos un legado pedagógico riguroso, transformando la enseñanza lingüística en una plataforma de trascendencia internacional, diplomática y ejecutiva para el sureste de México.
            </p>

            {/* Indicadores Clave en Strip Stitch */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-[#e6c15c] font-serif leading-none">25+</span>
                <div className="w-6 h-0.5 bg-[#e6c15c] my-2" />
                <span className="text-[10.5px] uppercase tracking-wider text-slate-300 font-medium">Años de Trayectoria</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-[#e6c15c] font-serif leading-none">100%</span>
                <div className="w-6 h-0.5 bg-[#e6c15c] my-2" />
                <span className="text-[10.5px] uppercase tracking-wider text-slate-300 font-medium">RVOE SEP Federal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-[#e6c15c] font-serif leading-none">3</span>
                <div className="w-6 h-0.5 bg-[#e6c15c] my-2" />
                <span className="text-[10.5px] uppercase tracking-wider text-slate-300 font-medium">Idiomas Globales</span>
              </div>
            </div>
          </div>

          {/* Imagen de Liderazgo Académico Stitch */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#070a26]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNJ8-5sc7xMl7gPWjRwGiyFN0QDhm4u7FZseB_FFLsFJIOeAsiTAj2YqBXh6_9f-G1F0USP_MRNZoTZj6CmlIcYH5UNVM-n7Y-t7wrzB5pPutI80LX0E9MnvzE5ZKMrObCy2ThRFx5Ekv5xcO7aPSHZtHeQ9Jq1dgLmGugUkDngxQB_m1q0Wi0mghNVkmORXw6jmJ_Qi_RVRldMof4l7mgPbqQGEo_8lAV4_esRqCf"
                alt="Consejo Académico y Directivo Bicentenario"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/90 via-[#0b1d3a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e6c15c]">Gobernanza y Visión</span>
                <p className="text-sm font-bold text-white font-serif mt-0.5">Colegio Directivo y Académico Bicentenario</p>
                <p className="text-xs text-slate-300">Sesión de Planeación Curricular y Acreditación SEP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Mensaje de Bienvenida de la Dirección Institucional Stitch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-14 shadow-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative overflow-hidden">
          {/* Mensaje de la Dirección Stitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef3c7] text-[#7e5700] text-xs font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              <span>Mensaje Institucional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium text-[#0b1d3a] tracking-tight font-serif leading-tight">
              Bienvenido a una nueva etapa académica en Chiapas
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              <p className="text-sm sm:text-base text-slate-800 font-normal">
                Durante más de 25 años hemos acompañado a miles de estudiantes a dominar un nuevo idioma. Comprobamos día con día que hablar una lengua extranjera no es solo una materia más: es un vehículo transformador de oportunidades, carreras profesionales y proyectos de vida.
              </p>
              <p>
                Hoy damos el paso definitivo en nuestra evolución institucional. Hemos consolidado la <strong className="text-[#0b1d3a] font-semibold">Licenciatura en Idiomas</strong> como un programa de educación superior con validez oficial federal ante la Secretaría de Educación Pública, estructurado para formar profesionales de alto perfil en inglés, francés e italiano.
              </p>
              <p>
                No formamos aprendices de idiomas: formamos licenciados capaces de traducir con precisión terminológica, interpretar en cabina, liderar procesos educativos modernos y competir en mercados globales. Te damos la más cordial bienvenida a nuestra casa de estudios.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#7e5700]" />
                <span className="font-semibold text-slate-800">
                  Dirección General Colegiada • {INSTITUTION_INFO.razonSocial}
                </span>
              </div>
              <span className="text-[#7e5700] font-bold tracking-wide">
                Tuxtla Gutiérrez, Chiapas
              </span>
            </div>
          </div>

          {/* Tarjeta de Gobernanza Institucional (Ficha Stitch) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-[#0b1d3a] text-white p-7 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e6c15c]">
                  Acreditación Oficial
                </span>
                <ShieldCheck className="w-5 h-5 text-[#e6c15c]" />
              </div>

              <h3 className="text-lg font-bold text-white font-serif mt-4 mb-3">
                Ficha de Gobernanza Jurídica
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Razón Social Legal</span>
                  <span className="text-white font-medium">{INSTITUTION_INFO.razonSocial}</span>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Reconocimiento SEP</span>
                  <span className="text-[#e6c15c] font-bold">RVOE SEP {INSTITUTION_INFO.rvoeNumber}</span>
                  <span className="text-[10.5px] text-slate-300 block mt-0.5">Acuerdo Federal del 11 de agosto de 2026</span>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Campus Bicentenario</span>
                  <span className="text-white font-medium">{INSTITUTION_INFO.address}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#e6c15c]">
                <span>Validez en toda la República</span>
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Historia & Línea de Tiempo */}
      <section id="historia" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
            Trayectoria y Evolución
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-euro-dark tracking-tight font-display">
            Más de 25 años consolidando la educación en idiomas
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            Euro Centro nació con un propósito determinante: democratizar la enseñanza de lenguas mediante metodologías activas y prácticas. Esa madurez institucional es hoy el cimiento de nuestra licenciatura.
          </p>
        </div>

        {/* Línea de Tiempo Visual en Tarjetas Elevadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {timeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-euro-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-euro-blue/10 text-euro-royal flex items-center justify-center group-hover:bg-euro-dark group-hover:text-euro-gold transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-euro-royal bg-euro-blue/10 px-3 py-1 rounded-full border border-euro-blue/20">
                      {step.stats}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-euro-gold uppercase tracking-wider block font-display">
                      {step.badge}
                    </span>
                    <h3 className="font-bold text-lg text-euro-dark font-display leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-500">{step.period}</span>
                  <ChevronRight className="w-4 h-4 text-euro-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6.3 Misión y 6.4 Visión (Bento Cards Asimétricas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión Institucional */}
          <div className="bg-euro-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-euro-blue/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-euro-gold to-euro-blue" />

            <div className="space-y-5 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-euro-gold to-amber-500 text-euro-dark flex items-center justify-center font-bold shadow-lg">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
                  Nuestra Razón de Ser
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                  Misión Institucional
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Formar profesionales de excelencia en idiomas con dominio integral de inglés, francés e italiano, altamente capacitados para comunicar, traducir, interpretar y enseñar con rigor ético, sensibilidad intercultural y liderazgo práctico, respaldados por más de dos décadas de solvencia pedagógica en la enseñanza de lenguas.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Euro Centro de Estudios Superiores</span>
              <span className="text-euro-gold font-semibold">Formación para el Mundo</span>
            </div>
          </div>

          {/* Visión de Futuro */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-euro-blue/40 transition-colors">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-euro-blue/10 text-euro-royal flex items-center justify-center font-bold shadow-sm group-hover:bg-euro-royal group-hover:text-white transition-colors duration-300">
                <Compass className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
                  Nuestro Horizonte 2030
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-euro-dark">
                  Visión de Futuro
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Consolidarnos como la institución de educación superior referente indiscutible en la formación de profesionales en idiomas en el sureste de México, distinguida por el rigor de sus egresados, la acreditación internacional de sus competencias y su contribución estratégica a un entorno laboral interconectado y globalizado.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Liderazgo en el Sureste</span>
              <span className="text-euro-blue font-semibold">Plantel Bicentenario</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Valores Institucionales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-display">
            Principios Éticos Rectores
          </span>
          <h2 className="text-3xl font-extrabold text-euro-dark font-display tracking-tight">
            Valores que Guían a Nuestra Comunidad
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Seis compromisos que fundamentan el desempeño de alumnos, docentes y directivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionalValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.accent} ${val.iconColor} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-euro-dark font-display">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6.6 Planta Docente & Claustro Académico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-euro-dark text-white rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-euro-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-display block">
                Cuerpo Académico Especializado
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                Claustro Académico Colegiado
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Nuestro cuerpo docente está integrado por hablantes nativos, traductores en activo, peritos intérpretes y maestros en lingüística aplicada con acreditaciones oficiales de reconocimiento mundial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {facultyColleges.map((col, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-euro-gold/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-euro-gold/15 text-euro-gold flex items-center justify-center font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-euro-gold uppercase tracking-wider block">
                        {col.credential}
                      </span>
                      <h4 className="font-bold text-sm text-white font-display mt-0.5">
                        {col.area}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {col.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[10px] text-slate-400 font-mono">
                    {col.subjects}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-euro-gold shrink-0" />
                <p className="text-xs text-slate-300">
                  ¿Te interesa unirte al claustro docente o conocer las líneas de investigación?
                </p>
              </div>
              <button
                onClick={onOpenLeadModal}
                className="btn-tactile px-6 py-2.5 bg-gradient-to-r from-euro-gold to-amber-500 text-euro-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shrink-0 cursor-pointer"
              >
                Contactar a Coordinación
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

