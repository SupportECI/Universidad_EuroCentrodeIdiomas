import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Award, Building, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { INSTITUTION_INFO, CERTIFICATIONS_DATA } from "../../data/curriculumData";

export default function CertificatesModal({
  isOpen,
  categoryId = "ingles",
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

  const currentCategory =
    CERTIFICATIONS_DATA.find((c) => c.id === categoryId) ||
    CERTIFICATIONS_DATA[0];

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
      aria-labelledby="modal-certifications-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 max-h-[90vh] flex flex-col animate-fade-in"
      >
        {/* Encabezado limpio y directo con los datos de la academia seleccionada */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-white space-y-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{currentCategory.badge} • Marco Común Europeo (MCER) / SEP</span>
              </div>
              <h3
                id="modal-certifications-title"
                className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-1"
              >
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{currentCategory.name}</span>
              </h3>
              <p className="text-xs text-slate-500 max-w-2xl font-normal leading-relaxed">
                {currentCategory.description}
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

        {/* Contenido scrolleable de certificaciones */}
        <div className="overflow-y-auto max-h-[calc(90vh-170px)] p-5 sm:p-6 space-y-4 bg-slate-50/60 flex-1">
          {/* Fila de acreditación */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex flex-wrap items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-900">{currentCategory.shortName}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-normal">{currentCategory.tagline}</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
              {currentCategory.badge}
            </span>
          </div>

          {/* Grid de Certificaciones: texto conciso y scannable */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-4 sm:p-5 transition-all shadow-xs flex flex-col justify-between gap-3 group"
              >
                <div className="space-y-3">
                  {/* Encabezado de la tarjeta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10.5px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {cert.levelBadge}
                    </span>
                    <span className="text-[10.5px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                      {cert.validity}
                    </span>
                  </div>

                  {/* Título y Organismo */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{cert.institution}</span>
                    </div>
                  </div>

                  {/* Alcance conciso (texto reducido) */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cert.scope.split(".")[0]}.
                  </p>

                  {/* Competencias clave en chips compactos */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.slice(0, 3).map((skill, skIdx) => (
                        <span
                          key={skIdx}
                          className="text-[10.5px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-slate-600 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate max-w-[210px]">{skill}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Preparación curricular compacta */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="leading-tight">
                    <strong className="text-slate-700 font-medium">Preparación:</strong>{" "}
                    {cert.euroPreparation.split(".")[0]}.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acreditaciones oficiales alineadas al MCER • RVOE SEP No. {INSTITUTION_INFO.rvoeNumber}</span>
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
