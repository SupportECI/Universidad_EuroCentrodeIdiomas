import { useState } from "react";
import {
  X,
  ShieldCheck,
  Check,
} from "lucide-react";

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingControls({ onOpenPrivacy }) {
  const [cookieConsentDismissed, setCookieConsentDismissed] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/529616138049?text=" +
      encodeURIComponent(
        "Hola, me gustaría solicitar informes sobre la Licenciatura en Idiomas en el Plantel Bicentenario."
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* 1. Botón Flotante de WhatsApp / Contacto Asistido (Discreto en esquina inferior) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showWhatsAppTooltip && (
          <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-xl border border-slate-100 animate-fade-in flex items-center gap-2 max-w-xs">
            <span>¿Dudas sobre admisiones? Escríbenos directamente</span>
            <button
              onClick={() => setShowWhatsAppTooltip(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Cerrar tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          className="group w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-white cursor-pointer relative"
          aria-label="Contacto vía WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-euro-gold text-euro-dark rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black">
            1
          </span>
        </button>
      </div>

      {/* 2. Banner de Aviso de Cookies Institucionales */}
      {!cookieConsentDismissed && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-200 animate-fade-in text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-euro-blue/10 text-euro-blue shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <p className="leading-relaxed">
                Utilizamos cookies institucionales para optimizar tu experiencia y
                analítica de navegación. Consulta nuestro{" "}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="font-bold text-euro-blue underline hover:text-euro-royal transition-colors"
                >
                  Aviso de Privacidad
                </button>
                .
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setCookieConsentDismissed(true)}
                  className="px-4 py-1.5 bg-euro-dark hover:bg-euro-blue text-white rounded-lg font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-euro-gold" />
                  <span>Aceptar y Continuar</span>
                </button>
                <button
                  onClick={() => setCookieConsentDismissed(true)}
                  className="px-3 py-1.5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
