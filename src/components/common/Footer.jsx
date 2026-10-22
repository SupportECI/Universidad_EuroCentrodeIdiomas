import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";
import logoFooter from "../../assets/Logotipo circular con dos estrellas doradas (1).png";

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer({
  onNavigate,
  onOpenPrivacy,
  onOpenLegal,
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(INSTITUTION_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="w-full bg-[#05071d] text-slate-300 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1211ab]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c8963e]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Cuerpo Principal de 4 Columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Columna 1: Identidad y Prestigio */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logoFooter}
              alt="Euro Centro de Estudios Superiores"
              className="w-20 h-20 rounded-full object-contain p-0.5 border border-[#c8963e]/40 shadow-lg shrink-0 bg-[#070a26]"
            />
            <div>
              <span className="font-extrabold text-sm text-white uppercase block leading-tight tracking-wide font-display">
                Euro Centro
              </span>
              <span className="font-medium text-[11px] text-[#e6c15c] uppercase tracking-wider block font-mono">
                Estudios Superiores
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Una nueva institución con el respaldo de más de 25 años transformando la enseñanza de idiomas.
          </p>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Validez oficial SEP</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              RVOE No. {INSTITUTION_INFO.rvoeNumber}, de fecha 11 de agosto de 2026.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Comunidad Digital
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={INSTITUTION_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 shadow-sm group"
                aria-label="Página oficial de Facebook"
                title="Facebook Oficial"
              >
                <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={INSTITUTION_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 shadow-sm group"
                aria-label="Perfil oficial de Instagram"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://wa.me/529616138049?text=${encodeURIComponent(INSTITUTION_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 shadow-sm group cursor-pointer"
                aria-label="Atención y orientación por WhatsApp"
                title="Atención por WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Oferta académica */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-serif">
              Oferta académica
            </h4>
          </div>

          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate("licenciatura")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Licenciatura en Idiomas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("licenciatura", "plan-estudios")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Plan de estudios</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("modelo-educativo")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Modelo Educativo</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "becas-apoyos")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Becas y apoyos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "instalaciones")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Instalaciones</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("nosotros")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Nosotros</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Sede · Plantel Bicentenario */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#e6c15c] uppercase tracking-widest block font-mono">
              Sede
            </span>
            <h4 className="text-sm font-bold text-white font-serif">
              Plantel Bicentenario
            </h4>
          </div>

          <div className="space-y-3.5 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#e6c15c] shrink-0 mt-0.5" />
              <div>
                <p className="leading-relaxed text-slate-200">{INSTITUTION_INFO.address}</p>
                <button
                  onClick={() => onNavigate("contacto")}
                  className="text-[11px] text-[#e6c15c] hover:underline font-medium mt-1 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver ubicación y mapa interactivo</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#e6c15c] shrink-0 mt-0.5" />
              <div>
                <a
                  href={`mailto:${INSTITUTION_INFO.email}`}
                  className="hover:text-white transition-colors text-slate-200 block"
                >
                  {INSTITUTION_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer mt-0.5"
                >
                  {copiedEmail ? "✓ Correo copiado" : "Copiar dirección"}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#e6c15c] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium text-xs">
                  Horario de Atención en Plantel:
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Lunes a Viernes: 8:00 a 18:00 hrs
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Sábados: 8:00 a 14:00 hrs
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#e6c15c] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium text-xs">
                  Atención Telefónica / WhatsApp:
                </span>
                <a
                  href={`tel:${INSTITUTION_INFO.phone}`}
                  className="text-[12px] text-slate-200 hover:text-[#e6c15c] font-mono font-medium block mt-0.5"
                >
                  {INSTITUTION_INFO.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/529616138049?text=${encodeURIComponent(INSTITUTION_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#25D366] hover:underline block"
                >
                  Chat directo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 4: Legal */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-serif">
              Legal
            </h4>
          </div>

          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={onOpenPrivacy}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Aviso de Privacidad</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenLegal}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Aviso Legal</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
          </ul>

          <div className="pt-3 space-y-2">
            <p className="text-[10px] text-slate-400 text-center">
              Atención personalizada para aspirantes y padres de familia.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Franja Inferior Obligatoria de Validez Oficial RVOE SEP & Copyright */}
      <div className="border-t border-white/10 bg-[#030514] py-8 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3.5 text-center md:text-left max-w-3xl">
            <img
              src={logoFooter}
              alt="Sello Euro Centro"
              className="w-10 h-10 rounded-full object-contain border border-[#c8963e]/30 shrink-0 hidden sm:block bg-[#070a26] p-0.5"
            />
            <div className="space-y-1.5">
              <p className="text-slate-300 font-medium text-xs leading-relaxed flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 inline" />
                <span>{INSTITUTION_INFO.rvoeFullText}</span>
              </p>
              <p className="text-[11px] text-slate-500">
                © 2026 {INSTITUTION_INFO.companyName} • {INSTITUTION_INFO.name}. Todos los derechos reservados. Tuxtla Gutiérrez, Chiapas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c8963e]/40 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm group"
              aria-label="Volver al inicio de la página"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#e6c15c] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
