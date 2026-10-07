import { useState } from "react";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function ContactoSection({ onOpenPrivacy }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    celular: "",
    ciudad: "Tuxtla Gutiérrez",
    situacionActual: "cursando_bachillerato",
    medioEnterado: "redes_sociales",
    aceptaPrivacidad: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) {
      alert("Por favor acepta el Aviso de Privacidad.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };
  return (
    <div id="contacto" className="w-full bg-slate-50 space-y-24">
      {/* 11.0 Hero de Contacto & Plantel Bicentenario - Expansive Panorama */}
      <section className="relative w-full text-white overflow-hidden min-h-[75vh] flex items-center bg-[#070a26] py-20 lg:py-28">
        {/* Fondo fotográfico con fachada y pórtico de campus */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-contacto.jpg"
            alt="Pórtico y Acceso a Instalaciones del Plantel Bicentenario"
            className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-glow"
            style={{ animationDuration: "16s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a26]/95 via-[#070a26]/80 to-[#070a26]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a26] via-transparent to-[#070a26]/60" />
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#c8963e]/15 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
              <span>{INSTITUTION_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span>Plantel Bicentenario</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span className="bg-[#c8963e]/20 text-white px-2.5 py-0.5 rounded font-mono border border-[#e6c15c]/30">
                Atención Directa
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] font-serif">
              Estamos listos para <span className="italic text-[#e6c15c]">acompañarte</span> en tu camino.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
              Visítanos en nuestras instalaciones en Tuxtla Gutiérrez, agenda una sesión diagnóstica presencial o contáctanos por WhatsApp oficial para recibir orientación académica y cálculo de beca.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2 text-xs">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  UBICACIÓN
                </span>
                <span className="font-bold text-white text-base font-serif">Bicentenario</span>
                <span className="text-[11px] text-slate-300 block">Tuxtla Gutiérrez, Chis.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  HORARIO ATENCIÓN
                </span>
                <span className="font-bold text-[#e6c15c] text-base font-serif">Lunes a Sábado</span>
                <span className="text-[11px] text-slate-300 block">8:00 AM – 7:00 PM</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  CANAL INMEDIATO
                </span>
                <span className="font-bold text-white text-base font-serif">WhatsApp Oficial</span>
                <span className="text-[11px] text-slate-300 block">Respuesta en &lt;15 min</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  MODALIDAD
                </span>
                <span className="font-bold text-white text-base font-serif">Citas Presenciales</span>
                <span className="text-[11px] text-slate-300 block">Recorridos guiados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#7e5700] uppercase tracking-widest block font-mono">
            Atención Personalizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0b1d3a] tracking-tight font-serif">
            Envíanos un Mensaje Directo
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            Visítanos en el Plantel Bicentenario o completa el formulario para agendar una sesión informativa personalizada con el equipo académico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna Izquierda: Formulario de Prospectos Oficial */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-euro-dark">
                  ¡Gracias por comunicarte con nosotros!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-light">
                  Hemos canalizado tus datos al equipo de Admisiones del Plantel Bicentenario. Un asesor se comunicará contigo vía WhatsApp o correo electrónico para brindarte seguimiento personalizado.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-tactile px-6 py-2.5 bg-euro-dark hover:bg-euro-blue text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-bold text-xl font-display text-euro-dark">
                    Envíanos tu Solicitud de Información
                  </h3>
                  <p className="text-xs text-slate-500 font-light mt-1">
                    Recibe la malla curricular completa y los esquemas de beca vigentes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Nombre(s) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      placeholder="Ej. Sofía"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.apellidos}
                      onChange={(e) =>
                        setFormData({ ...formData, apellidos: e.target.value })
                      }
                      placeholder="Ej. Morales Gómez"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.correo}
                      onChange={(e) =>
                        setFormData({ ...formData, correo: e.target.value })
                      }
                      placeholder="correo@ejemplo.com"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Celular / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.celular}
                      onChange={(e) =>
                        setFormData({ ...formData, celular: e.target.value })
                      }
                      placeholder="(961) 123 4567"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Ciudad de Residencia *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ciudad}
                      onChange={(e) =>
                        setFormData({ ...formData, ciudad: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-display">
                      Situación Académica *
                    </label>
                    <select
                      value={formData.situacionActual}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          situacionActual: e.target.value,
                        })
                      }
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-euro-royal/30 focus:border-euro-royal transition-all bg-white"
                    >
                      <option value="cursando_bachillerato">
                        Cursando último año de Bachillerato
                      </option>
                      <option value="bachillerato_concluido">
                        Bachillerato Concluido
                      </option>
                      <option value="cambio_carrera">
                        Cambio de Carrera / Universidad
                      </option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-snug">
                    <input
                      type="checkbox"
                      required
                      checked={formData.aceptaPrivacidad}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          aceptaPrivacidad: e.target.checked,
                        })
                      }
                      className="mt-0.5 rounded border-slate-300 text-euro-blue focus:ring-euro-blue"
                    />
                    <span>
                      He leído y acepto el{" "}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-euro-blue font-semibold underline hover:text-euro-royal transition-colors"
                      >
                        Aviso de Privacidad Integral
                      </button>
                      . Euro Centro de Idiomas de México, S.C. utilizará mis datos personales para atender esta solicitud de informes.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-tactile w-full py-4 px-6 bg-gradient-to-r from-euro-gold to-amber-500 hover:from-amber-400 hover:to-amber-500 text-euro-dark font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-euro-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud a Admisiones</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Tus datos se encuentran resguardados bajo estricta confidencialidad escolar.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Columna Derecha: Información del Plantel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-euro-blue/10 text-euro-royal flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-display text-euro-dark leading-tight">
                    Plantel Bicentenario
                  </h3>
                  <span className="text-xs text-slate-400">Campus Central Tuxtla Gutiérrez</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 font-display">Dirección:</strong>
                    <span className="leading-relaxed">{INSTITUTION_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 font-display">
                      Correo Institucional:
                    </strong>
                    <a
                      href={`mailto:${INSTITUTION_INFO.email}`}
                      className="text-euro-blue hover:underline font-medium"
                    >
                      {INSTITUTION_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 font-display">
                      Atención WhatsApp / Admisiones:
                    </strong>
                    <span className="text-slate-500">
                      Asesoría en línea disponible de lunes a sábado
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 font-display">
                      Horarios de Oficina:
                    </strong>
                    <span>Lunes a Viernes 8:00 a 18:00 hrs • Sábados 8:00 a 14:00 hrs</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociales Oficiales */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  Canales Oficiales
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={INSTITUTION_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-euro-blue/10 hover:text-euro-blue text-slate-700 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={INSTITUTION_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-pink-50 hover:text-pink-600 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Embed Frame */}
            <div className="rounded-3xl overflow-hidden shadow-md h-56 border border-slate-200">
              <iframe
                title="Plantel Bicentenario Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5369687483664!2d-93.125!3d16.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2760a927c3ab%3A0x6bfa3311666!2sAv%202a%20Sur%20Pte%2C%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

