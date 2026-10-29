import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TOP_6_FACULTY = [
  {
    id: "ing-1",
    name: "Mtra. Sarah Jenkins",
    title: "Master of Arts in TESOL (University of Manchester)",
    role: "Coordinadora de Inglés · Catedrática Titular",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Hablante nativa con más de 14 años de trayectoria docente. Especialista en fonología avanzada, fluidez ejecutiva y preparación para Cambridge C2 Proficiency.",
    certifications: ["Cambridge DELTA / CELTA", "Examinadora Cambridge"],
    experience: "14+ años de trayectoria",
    origin: "Reino Unido",
    nativeSpeaker: true,
    academyName: "Inglés",
  },
  {
    id: "ing-2",
    name: "Lic. David Morales Rincón",
    title: "Lic. en Lenguas Modernas · Perito Traductor Oficial",
    role: "Catedrático de Lengua Inglesa y Traducción Jurídica",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Perito traductor con acreditación ante tribunales federales. Experto en traducción documental, contratos mercantiles y mediación bilateral en foros internacionales.",
    certifications: ["Perito Traductor Oficial", "TKT Master Modules"],
    experience: "11 años de trayectoria",
    origin: "México",
    nativeSpeaker: false,
    academyName: "Inglés & Traducción",
  },
  {
    id: "fra-1",
    name: "M. Jean-Luc Dubois",
    title: "Master en FLE (Université Sorbonne Nouvelle Paris 3)",
    role: "Coordinador de Francés · Catedrático Titular",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Originario de Francia con 15+ años de liderazgo pedagógico. Examinador oficial habilitado por France Éducation International para diplomaturas DALF C1/C2.",
    certifications: ["Examinateur DALF C1/C2", "Master 2 Recherche Sorbonne"],
    experience: "15+ años de trayectoria",
    origin: "Francia",
    nativeSpeaker: true,
    academyName: "Francés",
  },
  {
    id: "fra-2",
    name: "Mtra. Amélie Fontaine",
    title: "Maîtrise en Traductologie (Université de Lille)",
    role: "Catedrática de Fonética Correctiva y Traductología",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Lingüista francesa especializada en corrección fonética acústica para hispanohablantes. Desarrolla prácticas de transcripción y doblaje en laboratorio multimedia.",
    certifications: ["DALF C2 Maîtrise", "Spécialiste Méthode Verbo-Tonale"],
    experience: "9 años de trayectoria",
    origin: "Francia",
    nativeSpeaker: true,
    academyName: "Francés",
  },
  {
    id: "ita-1",
    name: "Dott. Matteo Rossi",
    title: "Laurea Magistrale con Lode (Università di Bologna)",
    role: "Coordinador de Italiano · Catedrático Titular",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Nativo de Florencia, Italia. Investigador en lingüística contrastiva italiano-español y examinador oficial acreditado para certificaciones internacionales CILS.",
    certifications: ["DITALS II (Univ. per Stranieri)", "Esaminatore CILS C2"],
    experience: "12+ años de trayectoria",
    origin: "Italia",
    nativeSpeaker: true,
    academyName: "Italiano",
  },
  {
    id: "ling-1",
    name: "Dr. Arturo Ramos Estrada",
    title: "Doctor en Lingüística (El Colegio de México)",
    role: "Coordinador de Lingüística e Investigación Curricular",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Investigador con publicaciones internacionales en adquisición trilingüe y análisis del discurso. Dirige los seminarios de investigación y proyectos de titulación.",
    certifications: ["Doctorado en Lingüística COLMEX", "Investigador Nacional SNI"],
    experience: "16+ años de trayectoria",
    origin: "México",
    nativeSpeaker: false,
    academyName: "Lingüística",
  },
];

const FACULTY_COUNT = TOP_6_FACULTY.length;
// Triplicamos el set para navegación infinita bidireccional continua
const EXTENDED_FACULTY = [
  ...TOP_6_FACULTY,
  ...TOP_6_FACULTY,
  ...TOP_6_FACULTY,
];

function FacultyAvatar({ photo, name }) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .replace(/^(Mtra\.|Lic\.|M\.|Dott\.|Dott\.ssa|Dr\.|Dra\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-white/20 bg-white/10 shadow-md">
      {!imgError && photo ? (
        <img
          src={photo}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-bold font-serif text-base text-[#e6c15c] bg-gradient-to-br from-[#070a26] to-[#1211ab]">
          {initials}
        </div>
      )}
    </div>
  );
}

export default function ClaustroCarousel() {
  // Iniciamos en el bloque central (índice = FACULTY_COUNT)
  const [currentIndex, setCurrentIndex] = useState(FACULTY_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Ajuste reactivo del número de tarjetas visibles por viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Control de avance y retroceso continuo
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Al finalizar la transición CSS, si salimos del rango central reajustamos silenciosamente sin transición
  const handleTransitionEnd = () => {
    if (currentIndex >= FACULTY_COUNT * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - FACULTY_COUNT);
    } else if (currentIndex < FACULTY_COUNT) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + FACULTY_COUNT);
    }
  };

  // Reactivar transiciones una vez renderizado el salto invisible
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Autoplay continuo con pausa en hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Touch Swipe para móviles
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Cálculo del indicador activo (0 a 5) y navegación por ruta más corta
  const activeDot =
    ((currentIndex % FACULTY_COUNT) + FACULTY_COUNT) % FACULTY_COUNT;

  const goToSlide = (targetDotIndex) => {
    setIsTransitioning(true);
    let diff = targetDotIndex - activeDot;
    if (diff > 3) diff -= 6;
    if (diff < -3) diff += 6;
    setCurrentIndex((prev) => prev + diff);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8">
      <div
        className="bg-[#070a26] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Adorno visual de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Cabecera del Carrusel con Controles */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-[#e6c15c] uppercase tracking-widest font-mono block">
                Cuerpo Académico Titular
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white">
                Claustro Académico
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Catedráticos hablantes nativos, peritos traductores y doctores en
                lingüística con acreditaciones internacionales oficiales.
              </p>
            </div>

            {/* Controles de Navegación del Carrusel */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c8963e] text-white hover:text-slate-950 border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                aria-label="Docente anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c8963e] text-white hover:text-slate-950 border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                aria-label="Docente siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Ventana Deslizante Infinita del Carrusel */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                transition: isTransitioning
                  ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
              }}
            >
              {EXTENDED_FACULTY.map((doc, idx) => (
                <div
                  key={`${doc.id}-${idx}`}
                  className="px-2.5 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 sm:p-6 hover:border-[#c8963e]/50 hover:bg-white/[0.08] transition-all flex flex-col justify-between h-full space-y-4 group shadow-sm hover:shadow-xl hover:-translate-y-1">
                    <div className="space-y-3.5">
                      {/* Encabezado con Foto y Datos */}
                      <div className="flex items-start gap-3.5">
                        <FacultyAvatar photo={doc.photo} name={doc.name} />
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#e6c15c] font-bold bg-[#c8963e]/15 px-2 py-0.5 rounded border border-[#e6c15c]/25">
                              {doc.academyName}
                            </span>
                            {doc.nativeSpeaker && (
                              <span className="text-[10px] font-medium text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                Nativo
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-base text-white font-serif leading-snug group-hover:text-[#e6c15c] transition-colors">
                            {doc.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-mono truncate">
                            {doc.title}
                          </p>
                        </div>
                      </div>

                      {/* Cargo y Perfil Conciso */}
                      <div className="space-y-1 text-xs">
                        <p className="text-slate-200 font-medium leading-relaxed">
                          {doc.role}
                        </p>
                        <p className="text-[11px] text-slate-300 font-light leading-relaxed line-clamp-2">
                          {doc.bio}
                        </p>
                      </div>
                    </div>

                    {/* Certificaciones y Trayectoria */}
                    <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400 font-mono">
                      <div className="flex flex-wrap gap-1">
                        {doc.certifications.slice(0, 2).map((cert, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                      <span className="text-slate-400 font-medium shrink-0">
                        {doc.experience}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de Paginación Infinitos (6 docentes) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: FACULTY_COUNT }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeDot === idx
                    ? "w-8 h-2 bg-[#c8963e]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir al docente ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
