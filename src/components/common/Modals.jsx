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
  VINCULACION_DATA,
} from "../../data/curriculumData";

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
  const [whatsappLink, setWhatsappLink] = useState("");

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

    const situacionMap = {
      cursando_bachillerato: "Cursando último año de Bachillerato",
      bachillerato_concluido: "Bachillerato concluido",
      cambio_carrera: "Cambio de institución / carrera",
      otro: "Otro",
    };

    const medioMap = {
      redes_sociales: "Redes Sociales (Facebook / Instagram)",
      recomendacion: "Recomendación de familiar o amigo",
      alumnos_eurocentro: "Trayectoria en Euro Centro Idiomas",
      google: "Búsqueda en Google",
      feria_vocacional: "Feria Universitaria / Vocacional",
      otro: "Otro medio",
    };

    const message = `¡Hola! Me comunico desde el sitio web de Euro Centro de Estudios Superiores. Me gustaría solicitar información sobre la Licenciatura en Idiomas (Plantel Bicentenario).

📋 *Datos del Solicitante:*
• *Nombre:* ${formData.nombre.trim()} ${formData.apellidos.trim()}
• *Celular / WhatsApp:* ${formData.celular.trim()}
• *Correo:* ${formData.correo.trim()}
• *Ciudad:* ${formData.ciudad.trim()}
• *Situación Académica:* ${situacionMap[formData.situacionActual] || formData.situacionActual}
• *Medio de contacto:* ${medioMap[formData.medioEnterado] || formData.medioEnterado}

Agradezco su atención para orientarme sobre el plan de estudios, convocatorias y becas.`;

    const targetUrl = `https://wa.me/529616138049?text=${encodeURIComponent(message)}`;
    setWhatsappLink(targetUrl);

    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Ignorar bloqueo de popups
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
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
                Gracias, <strong>{formData.nombre}</strong>. Hemos generado tu solicitud con destino al número oficial de WhatsApp{" "}
                <span className="font-semibold text-emerald-700 font-mono">+52 (961) 613-8049</span>. Un asesor académico se pondrá en contacto contigo de inmediato.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs transition-colors shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Abrir Chat de WhatsApp</span>
                  </a>
                )}
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 text-white rounded-xl font-semibold text-xs hover:bg-slate-900 transition-colors shadow-md"
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

// Modal 6: Claustro Académico por Academia (Diseño Minimalista sin fondo azul)
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
        {/* Encabezado limpio y minimalista */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-white space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Claustro Académico • Plantel Bicentenario</span>
              </div>
              <h3
                id="modal-faculty-title"
                className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-1"
              >
                <GraduationCap className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Cuerpo Docente y Coordinación</span>
              </h3>
              <p className="text-xs text-slate-500 max-w-2xl font-normal">
                Catedráticos acreditados, examinadores oficiales y peritos de la Licenciatura en Idiomas.
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

          {/* Selector de Academias */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 scrollbar-none">
            {FACULTY_COLLEGES.map((college) => {
              const isActive = college.id === activeTab;
              return (
                <button
                  key={college.id}
                  onClick={() => setActiveTab(college.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${isActive
                      ? "bg-slate-900 text-white shadow-xs font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                >
                  {getAcademyIcon(
                    college.id,
                    `w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-slate-500"}`
                  )}
                  <span>{college.shortName}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-white/20 text-white" : "bg-slate-200/70 text-slate-600"
                      }`}
                  >
                    {college.faculty.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resumen de academia seleccionada */}
        <div className="p-3.5 px-5 sm:px-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">{currentCollege.area}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-normal">{currentCollege.desc}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
            {currentCollege.badge || currentCollege.credential}
          </span>
        </div>

        {/* Listado de Docentes: información concisa y minimalista */}
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

// Modal 7: Catálogo de Certificaciones Oficiales e Internacionales (Directo por idioma, sin selector interno)
export function CertificatesModal({
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

// Modal 8: Vinculación y Convenios de Práctica Profesional (Diseño Minimalista)
export function VinculacionModal({
  isOpen,
  sectorId = "corporativo",
  onClose,
  onOpenLeadModal,
}) {
  const [activeTab, setActiveTab] = useState(sectorId || "corporativo");

  useEffect(() => {
    if (isOpen && sectorId) {
      (sectorId);
    }
  }, [isOpen, sectorId]);

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
                  onClick={() => setActiveTab(sector.id)}
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


