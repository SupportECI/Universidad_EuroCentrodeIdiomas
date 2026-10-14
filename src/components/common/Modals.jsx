import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  CheckCircle2,
  Send,
  ShieldCheck,
  Play,
  Sparkles,
  Video,
  Award,
  BookOpen,
  GraduationCap,
  Globe2,
  Building,
} from "lucide-react";
import {
  INSTITUTION_INFO,
  FACULTY_COLLEGES,
  CERTIFICATIONS_DATA,
} from "../../data/curriculumData";

const getInitialFormData = () => {
  let utm_source = "directo";
  let utm_medium = "web";
  let utm_campaign = "organico";

  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    utm_source = urlParams.get("utm_source") || "directo";
    utm_medium = urlParams.get("utm_medium") || "web";
    utm_campaign = urlParams.get("utm_campaign") || "organico";
  }

  return {
    nombre: "",
    apellidos: "",
    correo: "",
    celular: "",
    ciudad: "Tuxtla Gutiérrez",
    situacionActual: "cursando_bachillerato",
    medioEnterado: "redes_sociales",
    aceptaPrivacidad: false,
    utm_source,
    utm_medium,
    utm_campaign,
  };
};

// Modal 1: Formulario Oficial de Prospectos ("Solicita información")
export function LeadModal({ isOpen, onClose, onOpenPrivacy }) {
  const [formData, setFormData] = useState(getInitialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) {
      alert("Por favor acepta el Aviso de Privacidad para continuar.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 p-6 text-white flex items-start justify-between relative">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Convocatoria Abierta Ciclo 2026-1
            </div>
            <h3 className="text-xl font-bold font-sans">
              Solicita Información Académica
            </h3>
            <p className="text-xs text-blue-200 mt-1">
              Licenciatura en Idiomas • Plantel Bicentenario Tuxtla Gutiérrez
            </p>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Gracias, <strong>{formData.nombre}</strong>. Hemos recibido tu registro.
                Un asesor académico del{" "}
                <span className="font-semibold text-blue-950">
                  {INSTITUTION_INFO.name}
                </span>{" "}
                se pondrá en contacto contigo en breve para brindarte el plan de
                estudios detallado y asesoría sobre becas.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-blue-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-800 transition-colors shadow-md"
                >
                  Entendido y Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre(s) *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Sofía"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    required
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Ej. Morales Gómez"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="nombre@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="celular"
                    required
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="(961) 123 4567"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ciudad de Residencia *
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    value={formData.ciudad}
                    onChange={handleChange}
                    placeholder="Tuxtla Gutiérrez, Chiapas"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Situación Académica Actual *
                  </label>
                  <select
                    name="situacionActual"
                    value={formData.situacionActual}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent bg-white transition"
                  >
                    <option value="cursando_bachillerato">
                      Cursando último año de Bachillerato
                    </option>
                    <option value="bachillerato_concluido">
                      Bachillerato concluido
                    </option>
                    <option value="cambio_carrera">
                      Cambio de institución / carrera
                    </option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ¿Cómo te enteraste de nosotros?
                </label>
                <select
                  name="medioEnterado"
                  value={formData.medioEnterado}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent bg-white transition"
                >
                  <option value="redes_sociales">Redes Sociales (Facebook / Instagram)</option>
                  <option value="recomendacion">Recomendación de familiar o amigo</option>
                  <option value="alumnos_eurocentro">Trayectoria en Euro Centro Idiomas</option>
                  <option value="google">Búsqueda en Google</option>
                  <option value="feria_vocacional">Feria Universitaria / Vocacional</option>
                  <option value="otro">Otro medio</option>
                </select>
              </div>

              {/* Casilla obligatoria con enlace */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-snug">
                  <input
                    type="checkbox"
                    name="aceptaPrivacidad"
                    required
                    checked={formData.aceptaPrivacidad}
                    onChange={handleChange}
                    className="mt-0.5 rounded border-slate-300 text-blue-900 focus:ring-blue-800"
                  />
                  <span>
                    He leído y acepto el{" "}
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenPrivacy) onOpenPrivacy();
                      }}
                      className="text-blue-800 font-semibold underline hover:text-blue-950"
                    >
                      Aviso de Privacidad
                    </button>
                    . Euro Centro de Idiomas de México, S.C. utilizará mis datos
                    para atender mi solicitud de información académica.
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
                >
                  {isSubmitting ? (
                    <span className="animate-spin border-2 border-slate-900 border-t-transparent rounded-full w-4 h-4" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud de Información</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Tus datos están protegidos bajo estricto secreto escolar.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Modal 2: Aviso de Privacidad Integral
export function PrivacyModal({ isOpen, onClose }) {
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

// Modal 3: Aviso Legal
export function LegalModal({ isOpen, onClose }) {
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

// Modal 4: Video Institucional / Tour de Instalaciones
export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col">
        <div className="flex items-center justify-between p-4 bg-slate-950 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-euro-gold" />
            <span className="text-sm font-semibold">
              Tour Institucional • Plantel Bicentenario Tuxtla Gutiérrez
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8fM2fITmTDkOCIkdH8Jlkaj-oRmRm9_5ytjYWa8aZ5knxG0eMUl_vz1VWnLsGrKrEKBC8Ep2ZNmpAnipqNC20InR_T5ZflZV82VLl4PfO_Wo3xZdwxBoI1MMFdFlj4U0quHWMUW7fY3fh0JHY5LnxJOKSZnrwwE7J-geYR9AOYl0MSAxFAAndn00lmr5Kz0K2jDUxex5jjHDFXw8Etei8bhVWSOhB80X5RiBayHXN')",
            }}
          />
          <div className="relative z-10 text-center p-6 max-w-md space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Recorrido Guiado por el Plantel Bicentenario
            </h4>

            <div className="inline-block px-3 py-1 rounded bg-white/10 text-amber-300 text-[11px] font-mono">
              Video en proceso de producción oficial (Espacio habilitado)
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Duración estimada: 2:45 min</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Cerrar Reproductor
          </button>
        </div>
      </div>
    </div>
  );
}

// Modal 5: Detalle de Asignatura del Plan de Estudios
export function SubjectModal({ subject, isOpen, onClose, cuatrimestreNumber }) {
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

// Subcomponent: Avatar con fallback para docentes (sin emojis, diseño limpio y sobrio)
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
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white/10 bg-slate-800">
      {!imgError && photo ? (
        <img
          src={photo}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center text-white">
          <span className="text-2xl font-bold font-serif text-amber-300">
            {initials}
          </span>
          <span className="text-[9px] text-slate-300 uppercase tracking-wider mt-1">
            Euro Centro
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

// Modal 6: Claustro Académico por Academia (Inglés, Francés, Italiano, Lingüística)
export function FacultyModal({
  isOpen,
  academyId = "ingles",
  onClose,
  onOpenLeadModal,
}) {
  const [activeTab, setActiveTab] = useState(academyId || "ingles");

  useEffect(() => {
    if (isOpen && academyId) {
      (academyId);
    }
  }, [isOpen, academyId]);

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

  const currentCollege =
    FACULTY_COLLEGES.find((c) => c.id === activeTab) || FACULTY_COLLEGES[0];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Renderizado a través de Portal para evitar trampas de stacking context de padres con transform
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-faculty-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#070a26] text-white rounded-3xl shadow-2xl overflow-hidden border border-white/10 max-h-[92vh] flex flex-col animate-fade-in"
      >
        {/* Barra superior institucional */}
        <div className="bg-gradient-to-r from-[#0b1d3a] via-[#11184a] to-[#070a26] p-5 sm:p-6 border-b border-white/10 flex flex-col gap-4 relative">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#e6c15c] animate-pulse" />
                <span className="text-[#e6c15c] font-bold uppercase tracking-wider text-[11px]">
                  Claustro Académico • Plantel Bicentenario
                </span>
              </div>
              <h3
                id="modal-faculty-title"
                className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2.5 mt-1"
              >
                <div className="w-8 h-8 rounded-xl bg-euro-gold/20 text-[#e6c15c] flex items-center justify-center shrink-0">
                  {getAcademyIcon(currentCollege.id, "w-4 h-4 text-[#e6c15c]")}
                </div>
                <span>{currentCollege.area}</span>
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/15 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Selector de Academias (Tabs con iconos formales) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline mr-1">
              Academia:
            </span>
            {FACULTY_COLLEGES.map((college) => {
              const isActive = college.id === activeTab;
              return (
                <button
                  key={college.id}
                  onClick={() => setActiveTab(college.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${isActive
                    ? "bg-[#c8963e] text-[#070a26] shadow-md font-bold scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                >
                  {getAcademyIcon(
                    college.id,
                    `w-3.5 h-3.5 ${isActive ? "text-[#070a26]" : "text-[#e6c15c]"
                    }`
                  )}
                  <span>{college.shortName}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive
                      ? "bg-[#070a26] text-[#e6c15c]"
                      : "bg-white/10 text-slate-300"
                      }`}
                  >
                    {college.faculty.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resumen de la academia seleccionada */}
        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#e6c15c] uppercase text-[10.5px] font-bold">
                {currentCollege.badge || currentCollege.credential}
              </span>
            </div>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {currentCollege.desc}
            </p>
          </div>

          <div className="bg-[#0b1d3a] px-3.5 py-2 rounded-xl border border-white/10 text-slate-300 text-[11px] shrink-0 font-mono">
            <span className="text-[#e6c15c] font-bold block mb-0.5">
              Materias impartidas:
            </span>
            <span>{currentCollege.subjects}</span>
          </div>
        </div>

        {/* Listado de Docentes */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentCollege.faculty.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#c8963e]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  {/* Encabezado del docente: Foto + Datos principales */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <TeacherAvatar
                      photo={teacher.photo}
                      name={teacher.name}
                    />

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {teacher.nativeSpeaker && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Hablante Nativo
                          </span>
                        )}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                          {teacher.origin}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c8963e]/15 text-[#e6c15c] border border-[#c8963e]/20">
                          {teacher.experience}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-serif text-white group-hover:text-[#e6c15c] transition-colors leading-snug">
                        {teacher.name}
                      </h4>

                      <p className="text-xs text-[#e6c15c] font-medium leading-tight">
                        {teacher.title}
                      </p>

                      <p className="text-[11px] text-slate-400 font-sans">
                        {teacher.role}
                      </p>
                    </div>
                  </div>

                  {/* Semblanza biográfica */}
                  <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-white/10 pt-3">
                    {teacher.bio}
                  </p>

                  {/* Acreditaciones y Certificaciones */}
                  {teacher.certifications && teacher.certifications.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold block flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#e6c15c]" />
                        Certificaciones & Acreditaciones
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.certifications.map((cert, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200 font-mono"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Asignaturas a su cargo */}
                  {teacher.subjects && teacher.subjects.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold block flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                        Materias que imparte
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-200"
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

        {/* Footer institucional con acciones */}
        <div className="p-4 sm:p-5 bg-[#0b1d3a] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <GraduationCap className="w-4 h-4 text-[#e6c15c] shrink-0" />
            <span>
              Cuerpo académico certificado con validez oficial SEP • RVOE No. {INSTITUTION_INFO.rvoeNumber}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              Cerrar
            </button>
            {onOpenLeadModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="px-5 py-2 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] rounded-xl text-xs font-bold transition shadow-md cursor-pointer"
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

// Modal 7: Catálogo de Certificaciones Oficiales e Internacionales
export function CertificatesModal({
  isOpen,
  categoryId = "ingles",
  onClose,
  onOpenLeadModal,
}) {
  const [activeTab, setActiveTab] = useState(categoryId || "ingles");

  useEffect(() => {
    if (isOpen && categoryId) {
      (categoryId);
    }
  }, [isOpen, categoryId]);

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
    CERTIFICATIONS_DATA.find((c) => c.id === activeTab) ||
    CERTIFICATIONS_DATA[0];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-certifications-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#070a26] text-white rounded-3xl shadow-2xl overflow-hidden border border-white/10 max-h-[92vh] flex flex-col animate-fade-in"
      >
        {/* Barra superior institucional */}
        <div className="bg-gradient-to-r from-[#0b1d3a] via-[#11184a] to-[#070a26] p-5 sm:p-6 border-b border-white/10 flex flex-col gap-4 relative">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#e6c15c] animate-pulse" />
                <span className="text-[#e6c15c] font-bold uppercase tracking-wider text-[11px] font-mono">
                  Acreditaciones Oficiales • Licenciatura en Idiomas
                </span>
              </div>
              <h3
                id="modal-certifications-title"
                className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2.5 mt-1"
              >
                <div className="w-8 h-8 rounded-xl bg-euro-gold/20 text-[#e6c15c] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#e6c15c]" />
                </div>
                <span>Certificaciones con Reconocimiento Internacional</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-3xl">
                Al cursar la Licenciatura en Idiomas en Euro Centro de Estudios Superiores,
                tu formación curricular te prepara directamente para acreditar las certificaciones más prestigiosas ante instancias globales.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer shrink-0"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Selector de pestañas por idioma / área */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none border-t border-white/10">
            {CERTIFICATIONS_DATA.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border ${isActive
                    ? "bg-[#c8963e] text-[#070a26] border-[#e6c15c] shadow-lg font-bold"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <span className="text-sm">{category.flag}</span>
                  <span>{category.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive
                      ? "bg-[#070a26]/20 text-[#070a26]"
                      : "bg-white/10 text-slate-300"
                      }`}
                  >
                    {category.certificates.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido desplazable de certificaciones */}
        <div className="overflow-y-auto max-h-[calc(92vh-190px)] p-5 sm:p-7 space-y-6 bg-gradient-to-b from-[#070a26] via-[#090e33] to-[#070a26]">
          {/* Banner descriptivo de la academia activa */}
          <div
            className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${currentCategory.color.primary} border ${currentCategory.color.border} shadow-lg relative overflow-hidden`}
          >
            <div className="relative z-10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                <span className="text-base">{currentCategory.flag}</span>
                <span className="uppercase tracking-wider font-mono">
                  {currentCategory.tagline}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {currentCategory.description}
              </p>
            </div>
          </div>

          {/* Grid de Certificaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {currentCategory.certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#c8963e]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between gap-5 relative group"
              >
                <div className="space-y-4">
                  {/* Encabezado de la tarjeta con badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#c8963e]/15 text-[#e6c15c] border border-[#c8963e]/30 font-mono">
                      {cert.levelBadge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-400/25">
                      {cert.validity}
                    </span>
                  </div>

                  {/* Título y Organismo Emisor */}
                  <div className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-white font-serif group-hover:text-[#e6c15c] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <Building className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{cert.institution}</span>
                    </div>
                    <div className="text-[11px] text-[#e6c15c] font-mono">
                      {cert.level}
                    </div>
                  </div>

                  {/* Alcance y Validez Profesional */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {cert.scope}
                  </p>

                  {/* Competencias Evaluadas */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold block">
                        Competencias evaluadas y acreditadas:
                      </span>
                      <ul className="space-y-1.5">
                        {cert.skills.map((skill, skIdx) => (
                          <li
                            key={skIdx}
                            className="flex items-start gap-2 text-xs text-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Caja de Preparación en Euro Centro */}
                <div className="mt-2 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-400/20 text-xs text-blue-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#e6c15c] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-white text-[11px] block">
                      Preparación curricular en Euro Centro:
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                      {cert.euroPreparation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer institucional con acciones */}
        <div className="p-4 sm:p-5 bg-[#0b1d3a] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Certificaciones alineadas al Marco Común Europeo (MCER) • Validez Oficial SEP RVOE No. {INSTITUTION_INFO.rvoeNumber}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              Cerrar
            </button>
            {onOpenLeadModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="px-5 py-2 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] rounded-xl text-xs font-bold transition shadow-md cursor-pointer"
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


