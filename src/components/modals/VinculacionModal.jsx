import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Building,
  Globe2,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { VINCULACION_DATA } from "../../data/curriculumData";

export default function VinculacionModal({
  isOpen,
  sectorId = "corporativo",
  onClose,
  onOpenLeadModal,
}) {
  const [userTab, setUserTab] = useState(null);
  const [prevSectorId, setPrevSectorId] = useState(sectorId);

  if (sectorId !== prevSectorId) {
    setPrevSectorId(sectorId);
    setUserTab(null);
  }

  const activeTab = userTab ?? sectorId ?? "corporativo";

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

  const currentSector =
    VINCULACION_DATA.find((s) => s.id === activeTab) || VINCULACION_DATA[0];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getSectorIcon = (name, className = "w-4 h-4") => {
    if (name === "Building") return <Building className={className} />;
    if (name === "Globe2") return <Globe2 className={className} />;
    return <BookOpen className={className} />;
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vinculacion-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 max-h-[90vh] flex flex-col animate-fade-in"
      >
        {/* Encabezado limpio y minimalista */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-white space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Práctica Profesional & Servicio Social • LID-707</span>
              </div>
              <h3
                id="modal-vinculacion-title"
                className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-1"
              >
                <span>Vinculación y Convenios</span>
              </h3>
              <p className="text-xs text-slate-500 max-w-xl font-normal">
                Convenios estratégicos y vinculación real con organizaciones antes de concluir la licenciatura.
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

          {/* Selector de pestañas por sector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 scrollbar-none">
            {VINCULACION_DATA.map((sector) => {
              const isActive = activeTab === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setUserTab(sector.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${isActive
                    ? "bg-slate-900 text-white shadow-xs font-semibold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                >
                  {getSectorIcon(sector.iconName, "w-3.5 h-3.5")}
                  <span>{sector.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido del sector */}
        <div className="overflow-y-auto max-h-[calc(90vh-190px)] p-5 sm:p-6 space-y-4 bg-slate-50/60">
          {/* Tarjeta de presentación del sector */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold font-mono uppercase text-slate-500">
                {currentSector.badge}
              </span>
              <span className="text-[11px] font-mono text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full font-semibold">
                {currentSector.term}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
              {currentSector.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {currentSector.description}
            </p>
          </div>

          {/* Grid de 2 columnas: Organizaciones y Actividades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Ámbitos de Inserción */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs space-y-2.5">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                <span>Ámbitos & Entornos</span>
              </h5>
              <ul className="space-y-2">
                {currentSector.organizations.map((org, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span className="leading-tight">{org}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actividades del Practicante */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs space-y-2.5">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Actividades Clave</span>
              </h5>
              <ul className="space-y-2">
                {currentSector.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-tight">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Respaldo de Asignatura Oficial */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-mono font-bold text-xs">
                LID
              </div>
              <div>
                <span className="font-semibold text-slate-900 block leading-tight">
                  {currentSector.subjectName} ({currentSector.subjectCode})
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Asignatura oficial curricular • 4.0 Créditos SEP
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-[11px] font-medium">
              Obligatoria
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Horas curriculares liberadas conforme a normativa de servicio SEP</span>
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
                Consultar Convenios
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
