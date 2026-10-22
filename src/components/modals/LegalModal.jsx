import { X, ShieldCheck } from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function LegalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[85vh] flex flex-col">
        <div className="bg-blue-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">Aviso Legal Institucional</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-xs text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Titular del sitio:</strong> Este sitio web es propiedad de{" "}
            {INSTITUTION_INFO.companyName}, que opera la institución{" "}
            {INSTITUTION_INFO.name}, {INSTITUTION_INFO.campus}, con domicilio en{" "}
            {INSTITUTION_INFO.address}. Contacto: {INSTITUTION_INFO.email}.
          </p>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Validez Oficial:</h4>
            <p className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-950">
              {INSTITUTION_INFO.rvoeFullText}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Uso del sitio:</h4>
            <p>
              La información publicada es de carácter informativo. Requisitos,
              fechas, costos, becas y condiciones pueden cambiar sin previo aviso; la
              información vigente se confirma directamente con el área de Admisiones.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Propiedad Intelectual:</h4>
            <p>
              Los textos, imágenes, logotipos y contenidos de este sitio son propiedad
              de {INSTITUTION_INFO.companyName} o se usan con autorización. Queda
              prohibida su reproducción total o parcial sin autorización previa por
              escrito.
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
