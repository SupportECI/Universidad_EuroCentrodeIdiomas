import { useState } from "react";
import {
  X,
  CheckCircle2,
  Send,
  ShieldCheck,
  Play,
  Sparkles,
  Video,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

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
            <p className="text-xs text-slate-300 leading-relaxed">
              Conoce nuestras cabinas acústicas de traducción, laboratorios
              interactivos fonéticos y áreas académicas diseñadas para la inmersión en
              idiomas.
            </p>
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
                Aula / Laboratorio Fonético
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
