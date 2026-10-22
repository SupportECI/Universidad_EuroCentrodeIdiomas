import { useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Sparkles } from "lucide-react";

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

export default function LeadModal({ isOpen, onClose, onOpenPrivacy }) {
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
                  >
                  </input>
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
                  >
                  </input>
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
                  >
                  </input>
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
                  >
                  </input>
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
                  >
                  </input>
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
