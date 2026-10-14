import { useState } from "react";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  ArrowUp,
  Sparkles,
  ChevronRight,
  Award,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function Footer({
  onNavigate,
  onOpenPrivacy,
  onOpenLegal,
  onOpenLeadModal,
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

      {/* 1. Franja Superior de Acción Rápida & Respaldo Institucional */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#070a26] via-[#0b1d3a] to-[#070a26] px-4 sm:px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c8963e] to-[#7e5700] p-0.5 shadow-lg shrink-0 hidden sm:flex items-center justify-center">
              <div className="w-full h-full bg-[#070a26] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#e6c15c]" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#c8963e]/15 border border-[#c8963e]/30 text-[#e6c15c] text-[11px] font-bold uppercase tracking-wider font-mono">
                Ciclo 2027-1 • Admisiones Abiertas
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif mt-1">
                ¿Listo para iniciar tu formación universitaria en idiomas?
              </h3>
              <p className="text-xs text-slate-300 font-light max-w-xl">
                Agenda tu examen diagnóstico sin costo y conoce los apoyos y becas académicas vigentes en el Plantel Bicentenario.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#c8963e] via-[#e6c15c] to-[#c8963e] hover:brightness-110 text-[#070a26] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Solicitar información</span>
              <ChevronRight className="w-4 h-4 text-[#070a26]" />
            </button>
            <button
              onClick={() => onNavigate("admisiones")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wide transition-all duration-200 border border-white/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-[#e6c15c]" />
              <span>Ver Proceso de Admisión</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Cuerpo Principal de 4 Columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Columna 1: Identidad y Prestigio */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0b1d3a] border border-[#c8963e]/40 flex items-center justify-center text-[#e6c15c] shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
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
            {INSTITUTION_INFO.trustPhrase}. Formando licenciados trilingües con
            rigor académico, acreditaciones internacionales y alta competitividad profesional.
          </p>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Incorporación Oficial SEP</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Acuerdo RVOE No. {INSTITUTION_INFO.rvoeNumber}. Título y Cédula Profesional Federal con validez nacional e internacional.
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
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm group"
                aria-label="Página oficial de Facebook"
              >
                <span className="font-bold text-xs font-mono group-hover:scale-110 transition-transform">fb</span>
              </a>
              <a
                href={INSTITUTION_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm group"
                aria-label="Perfil oficial de Instagram"
              >
                <span className="font-bold text-xs font-mono group-hover:scale-110 transition-transform">ig</span>
              </a>
              <button
                onClick={onOpenLeadModal}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm group cursor-pointer"
                aria-label="Atención y orientación por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Columna 2: Navegación Académica */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#e6c15c] uppercase tracking-widest block font-mono">
              Programas &amp; Campus
            </span>
            <h4 className="text-sm font-bold text-white font-serif">
              Oferta Universitaria
            </h4>
          </div>

          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate("licenciatura")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Licenciatura en Idiomas (9 Cuatrimestres)</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("licenciatura", "plan-estudios")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Plan Curricular &amp; 58 Asignaturas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("licenciatura", "certificaciones")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Catálogo de Certificaciones Oficiales</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("modelo-educativo")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Modelo Educativo por Competencias</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "becas-apoyos")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Programa de Becas y Apoyos Económicos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "instalaciones")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Instalaciones &amp; Cabinas de Idiomas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("nosotros")}
                className="group flex items-center gap-2 text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e6c15c] group-hover:translate-x-1 transition-all" />
                <span>Historia, Respaldo &amp; Claustro Docente</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Ubicación y Contacto Directo */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#e6c15c] uppercase tracking-widest block font-mono">
              Sede Universitaria
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
                <span className="text-[11px] text-slate-400 block">
                  Módulo de Admisiones y Nuevo Ingreso
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 4: Certeza Jurídica & Enlace Oficial */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#e6c15c] uppercase tracking-widest block font-mono">
              Certeza Jurídica
            </span>
            <h4 className="text-sm font-bold text-white font-serif">
              Transparencia Institucional
            </h4>
          </div>

          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={onOpenPrivacy}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Aviso de Privacidad Integral</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenLegal}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Aviso Legal y Condiciones de Uso</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("nosotros")}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Respaldo Euro Centro (25 Años)</span>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("admisiones")}
                className="group flex items-center justify-between text-slate-300 hover:text-[#e6c15c] transition-colors text-left w-full cursor-pointer py-1"
              >
                <span>Requisitos de Admisión SEP</span>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#e6c15c]" />
              </button>
            </li>
          </ul>

          <div className="pt-3 space-y-2">
            <button
              onClick={onOpenLeadModal}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#1211ab]/50 to-[#344cb7]/50 hover:from-[#1211ab] hover:to-[#344cb7] text-white rounded-xl text-xs font-bold border border-[#c8963e]/40 transition-all text-center cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#e6c15c]" />
              <span>Solicitar Asesoría de Admisión</span>
            </button>
            <p className="text-[10px] text-slate-400 text-center">
              Atención personalizada para aspirantes y padres de familia.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Franja Inferior Obligatoria de Validez Oficial RVOE SEP & Copyright */}
      <div className="border-t border-white/10 bg-[#030514] py-8 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1.5 text-center md:text-left max-w-3xl">
            <p className="text-slate-300 font-medium text-xs leading-relaxed flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 inline" />
              <span>{INSTITUTION_INFO.rvoeFullText}</span>
            </p>
            <p className="text-[11px] text-slate-500">
              © 2026 {INSTITUTION_INFO.companyName} • {INSTITUTION_INFO.name}. Todos los derechos reservados. Tuxtla Gutiérrez, Chiapas.
            </p>
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
