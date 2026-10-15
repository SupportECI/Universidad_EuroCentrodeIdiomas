import { useState } from "react";
import {
  Camera,
  MapPin,
  Sparkles,
  ArrowRight,
  Users,
  Building,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

const GALLERY_PHOTOS = [
  {
    id: "aula-idiomas-1",
    src: "/images/IMG_6485.jpg",
    title: "Dinámica y Práctica Activa en Aulas Multimedia",
    category: "aulas",
    categoryLabel: "Aulas & Clases",
    tag: "Inmersión Lingüística",
    location: "Plantel Bicentenario • Tuxtla Gutiérrez",
    date: "Ciclo Escolar",
    description:
      "Cátedra participativa de gramática y comunicación en inglés en salones climatizados y equipados con tecnología audiovisual del Plantel Bicentenario.",
    highlight: "Metodología activa con grupos reducidos y atención personalizada.",
  },
  {
    id: "campus-pasillos-1",
    src: "/images/IMG_1127.jpg",
    title: "Vida Estudiantil y Convivencia en Campus",
    category: "comunidad",
    categoryLabel: "Comunidad & Campus",
    tag: "Vida Universitaria",
    location: "Plantel Bicentenario • Pasillo de Aulas",
    date: "Comunidad Universitaria",
    description:
      "Estudiantes conviviendo en los corredores institucionales junto al Aula París, reflejando el ambiente de compañerismo, respeto y calidez que caracteriza a nuestra casa de estudios.",
    highlight: "Espacios de encuentro, diálogo y desarrollo integral.",
  },
  {
    id: "evento-ceremonia-1",
    src: "/images/IMG_6557.jpg",
    title: "Ceremonias y Actos Académicos Oficiales",
    category: "eventos",
    categoryLabel: "Eventos & Graduaciones",
    tag: "Ceremonia Institucional",
    location: "Auditorio Institucional",
    date: "Acto Académico",
    description:
      "Reunión solemne de la comunidad estudiantil, autoridades y claustro docente durante una ceremonia oficial de entrega de reconocimientos y mérito académico.",
    highlight: "Honramos la disciplina, el esfuerzo y los logros de nuestros alumnos.",
  },
  {
    id: "evento-graduacion-1",
    src: "/images/IMG_6581.jpg",
    title: "Orgullo Euro Centro: Estudiantes y Claustro Docente",
    category: "eventos",
    categoryLabel: "Eventos & Graduaciones",
    tag: "Éxito Formativo",
    location: "Sede de Eventos Institucionales",
    date: "Generación Académica",
    description:
      "Nuestros estudiantes y profesores celebrando con orgullo la culminación de etapas académicas de alto rendimiento en lenguas extranjeras.",
    highlight: "Formamos profesionistas con proyección internacional y sólida ética humanística.",
  },
  {
    id: "comunidad-taller-1",
    src: "/images/galeria-evento-1.jpg",
    title: "Talleres Extracurriculares y Dinámica de Grupo",
    category: "comunidad",
    categoryLabel: "Comunidad & Campus",
    tag: "Integración Cultural",
    location: "Áreas de Convivencia • Plantel Bicentenario",
    date: "Actividades Estudiantiles",
    description:
      "Alumnos y docentes en jornadas formativas y actividades grupales diseñadas para estimular el liderazgo, la oratoria y la expresión lingüística.",
    highlight: "Proyectos en equipo que fortalecen lazos humanos y competencias profesionales.",
  },
  {
    id: "comunidad-grupo-2",
    src: "/images/galeria-evento-2.jpg",
    title: "Encuentros de Comunidad e Integración Universitaria",
    category: "aulas",
    categoryLabel: "Aulas & Clases",
    tag: "Colaboración",
    location: "Espacios Formativos • Euro Centro",
    date: "Vida en Aula",
    description:
      "Espacios de aprendizaje colaborativo donde estudiantes interactúan activamente, comparten retroalimentación y consolidan proyectos académicos bilingües.",
    highlight: "Inmersión constante que garantiza soltura y seguridad lingüística.",
  },
];

const CATEGORIES = [
  { id: "todas", label: "Todas las Fotografías", icon: Sparkles },
  { id: "aulas", label: "Aulas & Clases", icon: Building },
  { id: "comunidad", label: "Comunidad & Campus", icon: Users },
  { id: "eventos", label: "Eventos & Graduaciones", icon: GraduationCap },
];

export default function GaleriaSection({ onOpenLeadModal }) {
  const [activeCategory, setActiveCategory] = useState("todas");

  // Filtrado de fotos
  const filteredPhotos =
    activeCategory === "todas"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Hero Institucional con estética de Plantel Bicentenario */}
      <section className="relative overflow-hidden bg-[#070a26] text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Fondo con imagen de campus y gradiente editorial */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-vida-estudiantil.jpg"
            alt="Galería y Campus Euro Centro de Estudios Superiores"
            className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-glow"
            style={{ animationDuration: "18s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/85 to-[#070a26]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a26] via-transparent to-[#070a26]/60" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit border border-white/15">
                <Camera className="w-3.5 h-3.5 text-[#e6c15c]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
                  {INSTITUTION_INFO.name} • Memoria Gráfica
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white font-serif leading-tight">
                Galería Institucional:{" "}
                <span className="italic text-[#e6c15c]">Experiencia &amp; Comunidad</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-light">
                Descubre cómo se vive el día a día en el Plantel Bicentenario de Tuxtla Gutiérrez:
                sesiones prácticas en aulas multimedia, actos de orgullo académico,
                instalaciones de inmersión y la calidez de una comunidad con más de 25 años de trayectoria.
              </p>

              {/* Badges de soporte institucional */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#e6c15c] font-serif leading-none block">
                    Plantel
                  </span>
                  <div className="w-6 h-0.5 bg-[#e6c15c] my-1.5" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                    Bicentenario Propio
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#e6c15c] font-serif leading-none block">
                    3 Lenguas
                  </span>
                  <div className="w-6 h-0.5 bg-[#e6c15c] my-1.5" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                    Inmersión en Aula
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#e6c15c] font-serif leading-none block">
                    25+ Años
                  </span>
                  <div className="w-6 h-0.5 bg-[#e6c15c] my-1.5" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                    Trayectoria en Chiapas
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta destacada lateral */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-slate-200 space-y-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c8963e]/20 border border-[#e6c15c]/40 flex items-center justify-center text-[#e6c15c]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif">
                      Plantel Bicentenario
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      Sede oficial de Educación Superior
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Aulas climatizadas, cabinas de idiomas y espacios de convivencia diseñados para la formación de licenciados en idiomas de alto perfil profesional.
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">¿Quieres conocerlo?</span>
                  <button
                    onClick={onOpenLeadModal}
                    className="text-[#e6c15c] hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Agendar visita</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filtros y Galería Fotográfica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Barra de Filtros */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c8963e]">
              Explorar Colección
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#070a26] font-serif">
              Instantáneas de Nuestra Casa de Estudios
            </h2>
          </div>

          {/* Categorías / Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#070a26] text-white shadow-md shadow-[#070a26]/20 border border-[#070a26]"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#e6c15c]" : "text-slate-500"
                    }`}
                  />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-[#e6c15c]"
                        : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {cat.id === "todas"
                      ? GALLERY_PHOTOS.length
                      : GALLERY_PHOTOS.filter((p) => p.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Fotografías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badge de Categoría */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-[#070a26]/85 backdrop-blur-md text-[#e6c15c] text-[10.5px] font-bold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {photo.tag}
                  </span>
                </div>
              </div>

              {/* Información y Pie de Foto */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#c8963e]" />
                      <span>{photo.location}</span>
                    </span>
                    <span className="text-[#c8963e] font-semibold text-[10.5px] uppercase tracking-wider">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#070a26] font-serif leading-snug group-hover:text-[#c8963e] transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {photo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium italic">
                    {photo.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bloque de Invitación a Visitar el Campus Bicentenario */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#070a26] via-[#0b143f] to-[#070a26] rounded-3xl p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-[#e6c15c]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#e6c15c] border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiencia Vivencial • Conoce Tu Próxima Universidad</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight font-serif">
                ¿Te gustaría vivir una clase muestra en nuestras instalaciones?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-light">
                Te invitamos a recorrer el Plantel Bicentenario en Tuxtla Gutiérrez, conversar con nuestro claustro docente de inglés, francés e italiano, y conocer de primera mano el modelo de enseñanza por competencias.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#e6c15c]" />
                  <span>Sin costo ni compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#e6c15c]" />
                  <span>Atención directa de coordinadores</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#e6c15c]" />
                  <span>Orientación sobre becas disponibles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                onClick={onOpenLeadModal}
                className="w-full bg-[#c8963e] hover:bg-[#b5832d] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Cita en Campus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/529616138049?text=Hola,%20quisiera%20agendar%20una%20visita%20al%20Plantel%20Bicentenario%20de%20Euro%20Centro%20de%20Estudios%20Superiores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Admisiones</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
