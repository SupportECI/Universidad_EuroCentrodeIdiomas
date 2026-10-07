import { useState } from "react";
import {
  X,
  ShieldCheck,
  Check,
  MessageCircle,
} from "lucide-react";

export default function FloatingControls({ onOpenLeadModal, onOpenPrivacy }) {
  const [cookieConsentDismissed, setCookieConsentDismissed] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    // Al no tener número definitivo aún, abrimos el formulario institucional
    onOpenLeadModal();
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
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
