import { X } from "lucide-react";

export default function SubjectModal({ subject, isOpen, onClose, cuatrimestreNumber }) {
  if (!isOpen || !subject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-400 text-slate-950">
                {subject.code}
              </span>
              <span className="text-xs text-blue-200">
                Cuatrimestre {cuatrimestreNumber || "Oficial"}
              </span>
            </div>
            <h3 className="text-lg font-bold font-sans text-white">
              {subject.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="block text-xl font-bold text-blue-950">
                {subject.cr.toFixed(1)}
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500">
                Créditos SEP
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="block text-xl font-bold text-blue-950">
                {subject.ha} hrs
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500">
                Horas Aula (HA)
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="block text-xl font-bold text-blue-950">
                {subject.hi} hrs
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500">
                Independientes (HI)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Área Formativa:</span>
              <span className="font-semibold text-slate-800">{subject.area}</span>
            </div>
            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Carácter:</span>
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {subject.type}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Modalidad de Impartición:</span>
              <span className="font-semibold text-slate-800">
                Aula
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 leading-relaxed">
            Asignatura curricular con validez oficial conforme al Acuerdo Federal SEP
            No. 20263560, integrada al plan formativo trilingüe del Euro Centro de
            Estudios Superiores.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-900 text-white rounded-lg text-xs font-semibold hover:bg-blue-800"
          >
            Cerrar Detalle
          </button>
        </div>
      </div>
    </div>
  );
}
