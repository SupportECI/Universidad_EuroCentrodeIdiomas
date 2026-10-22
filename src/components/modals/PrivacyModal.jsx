import { X, ShieldCheck } from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[85vh] flex flex-col">
        <div className="bg-blue-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">Aviso de Privacidad Integral</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-xs text-slate-700 space-y-4 leading-relaxed">
          <p className="font-semibold text-slate-900">
            {INSTITUTION_INFO.companyName}, que opera la institución educativa{" "}
            {INSTITUTION_INFO.name}, con domicilio en {INSTITUTION_INFO.address}, es
            responsable del tratamiento de sus datos personales, conforme a la Ley
            Federal de Protección de Datos Personales en Posesión de los Particulares
            y demás normativa aplicable.
          </p>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              Datos personales que recabamos:
            </h4>
            <p>
              A través de este sitio web, formularios, correo electrónico, redes
              sociales o de manera presencial, podemos recabar: nombre completo,
              correo electrónico, número de teléfono o celular, ciudad de
              residencia, situación académica y medio por el que conoció a la
              institución. En el proceso de inscripción, además: CURP, fecha de
              nacimiento, domicilio, antecedentes académicos, identificación oficial
              y documentación escolar. No recabamos datos personales sensibles a
              través de este sitio web.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              Finalidades primarias (necesarias para la relación con usted):
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Atender sus solicitudes de información sobre la oferta educativa.</li>
              <li>
                Gestionar los procesos de preinscripción, admisión, examen diagnóstico e
                inscripción.
              </li>
              <li>
                Integrar su expediente escolar y realizar los trámites de control
                escolar, certificación y titulación ante las autoridades educativas.
              </li>
              <li>Dar seguimiento académico y administrativo durante sus estudios.</li>
              <li>Cumplir con las obligaciones legales aplicables.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              Finalidades secundarias (opcionales):
            </h4>
            <p>
              Enviarle información sobre programas, eventos, convocatorias, becas y
              promociones, o realizar encuestas de satisfacción. Si no desea que sus
              datos se usen para finalidades secundarias, puede escribir a{" "}
              <a
                href={`mailto:${INSTITUTION_INFO.privacyEmail}`}
                className="text-blue-700 underline font-semibold"
              >
                {INSTITUTION_INFO.privacyEmail}
              </a>
              .
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Derechos ARCO:</h4>
            <p>
              Usted tiene derecho a acceder, rectificar y cancelar sus datos
              personales, así como a oponerse a su tratamiento o revocar el
              consentimiento otorgado enviando solicitud a{" "}
              <span className="font-semibold">{INSTITUTION_INFO.privacyEmail}</span>.
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900"
          >
            Cerrar Aviso
          </button>
        </div>
      </div>
    </div>
  );
}
