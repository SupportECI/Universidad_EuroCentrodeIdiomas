import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Award,
  BookOpen,
  GraduationCap,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { INSTITUTION_INFO, FACULTY_COLLEGES } from "../../data/curriculumData";

// Subcomponent: Avatar con fallback para docentes (diseño limpio y sobrio)
function TeacherAvatar({ photo, name }) {
  const [imgError, setImgError] = useState(false);

  // Iniciales de respaldo
  const initials = name
    ? name
      .replace(/^(Mtra\.|Mtro\.|Lic\.|Dr\.|Dra\.|Dott\.|Dott\.ssa|M\.)\s*/i, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
    : "EC";

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-slate-200/90 bg-slate-100">
      {!imgError && photo ? (
        <img
          src={photo}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-white">
          <span className="text-xl font-bold font-serif text-amber-300">
            {initials}
          </span>
          <span className="text-[8px] text-slate-300 uppercase tracking-wider mt-0.5 font-mono">
            Docente
          </span>
        </div>
      )}
    </div>
  );
}

// Icono correspondiente para cada academia
function getAcademyIcon(id, className = "w-4 h-4") {
  switch (id) {
    case "ingles":
      return <BookOpen className={className} />;
    case "frances":
      return <Award className={className} />;
    case "italiano":
      return <Globe2 className={className} />;
    case "linguistica":
      return <GraduationCap className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

// Modal de Claustro Académico por Academia
// Abre directamente la academia seleccionada sin selector de navegación entre idiomas
export default function FacultyModal({
  isOpen,
  academyId = "ingles",
  onClose,
  onOpenLeadModal,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Se selecciona directamente la academia clickeada sin navegación entre idiomas
  const currentCollege =
    FACULTY_COLLEGES.find((c) => c.id === academyId) || FACULTY_COLLEGES[0];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-faculty-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 max-h-[90vh] flex flex-col animate-fade-in"
      >
        {/* Encabezado limpio y enfocado exclusivamente en la academia clickeada */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-white space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Claustro Académico • Plantel Bicentenario</span>
                <span className="text-slate-300">•</span>
                <span className="text-amber-800 font-bold">{currentCollege.area}</span>
              </div>
              <h3
                id="modal-faculty-title"
                className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-1"
              >
                {getAcademyIcon(currentCollege.id, "w-6 h-6 text-amber-600 shrink-0")}
                <span>{currentCollege.area}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-amber-50 text-amber-800 border border-amber-200/80 font-normal">
                  {currentCollege.faculty.length} {currentCollege.faculty.length === 1 ? "Catedrático" : "Catedráticos"}
                </span>
              </h3>
              <p className="text-xs text-slate-500 max-w-2xl font-normal leading-relaxed">
                {currentCollege.desc}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer shrink-0"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resumen de acreditación y materias de la academia seleccionada */}
        <div className="p-3.5 px-5 sm:px-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">{currentCollege.subjects}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
            {currentCollege.badge || currentCollege.credential}
          </span>
        </div>

        {/* Listado de Docentes de la academia clickeada */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 max-h-[calc(90vh-210px)] bg-slate-50/60 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {currentCollege.faculty.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-4 sm:p-5 transition-all shadow-xs flex flex-col justify-between gap-3 group"
              >
                <div className="space-y-3">
                  {/* Encabezado del docente */}
                  <div className="flex items-start gap-3.5">
                    <TeacherAvatar
                      photo={teacher.photo}
                      name={teacher.name}
                    />

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {teacher.nativeSpeaker && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Hablante Nativo
                          </span>
                        )}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {teacher.origin}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                          {teacher.experience}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                        {teacher.name}
                      </h4>

                      <p className="text-xs text-amber-800 font-medium leading-tight line-clamp-1">
                        {teacher.title}
                      </p>

                      <p className="text-[11px] text-slate-500 font-normal">
                        {teacher.role}
                      </p>
                    </div>
                  </div>

                  {/* Semblanza biográfica concisa */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                    {teacher.bio.split(".")[0]}.
                  </p>

                  {/* Acreditaciones y Certificaciones */}
                  {teacher.certifications && teacher.certifications.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        Certificaciones
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.certifications.slice(0, 3).map((cert, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10.5px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-slate-600 font-mono"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Materias a su cargo */}
                  {teacher.subjects && teacher.subjects.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        Materias a cargo
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.subjects.slice(0, 3).map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10.5px] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/60 text-blue-800"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer institucional minimalista */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Cuerpo académico certificado con validez oficial SEP • RVOE No. {INSTITUTION_INFO.rvoeNumber}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              Cerrar
            </button>
            {onOpenLeadModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition shadow-xs cursor-pointer"
              >
                Solicitar Informes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
