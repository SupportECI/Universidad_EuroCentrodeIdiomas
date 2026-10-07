import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function Header({
  activeSection,
  setActiveSection,
  onOpenLeadModal,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Enlaces directos sin menús desplegables solicitados por el usuario
  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "licenciatura", label: "Licenciatura" },
    { id: "modelo-educativo", label: "Modelo Educativo" },
    { id: "vida-estudiantil", label: "Vida Estudiantil" },
    { id: "admisiones", label: "Admisiones" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* 1. Franja Superior Institucional (Euro Centro Deep Navy) */}
      <div className="bg-euro-dark text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Ubicación y datos de contacto */}
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-euro-gold shrink-0" />
              <span>Plantel Bicentenario • Tuxtla Gutiérrez, Chiapas</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-euro-gold shrink-0" />
              <span className="text-slate-300">
                Informes: <span className="text-euro-gold font-semibold">Línea Directa en Plantel</span>
              </span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${INSTITUTION_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-euro-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-euro-gold shrink-0" />
              <span>{INSTITUTION_INFO.email}</span>
            </a>
          </div>

          {/* RVOE y Accesos Institucionales */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-euro-gold font-bold bg-white/5 px-2.5 py-0.5 rounded-full border border-euro-gold/30">
              <ShieldCheck className="w-3.5 h-3.5 text-euro-gold" />
              RVOE SEP {INSTITUTION_INFO.rvoeNumber}
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <button
              onClick={() =>
                alert("El acceso a Campus Virtual estará activo al formalizarse tu inscripción.")
              }
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Campus Virtual
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() =>
                alert("El Portal de Alumnos se habilita con tu matrícula oficial de Control Escolar.")
              }
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Portal Alumnos
            </button>
          </div>
        </div>
      </div>

      {/* 2. Barra de Navegación Principal (Limpia, elegante, con glassmorphism moderno) */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(7,10,38,0.08)] py-2.5 border-b border-slate-200/80"
            : "bg-white/98 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo institucional Euro Centro */}
          <div
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0"
            role="button"
            tabIndex={0}
            aria-label="Ir a Inicio"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-euro-blue to-euro-navy flex items-center justify-center text-euro-gold shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 border border-euro-gold/40 relative">
              <GraduationCap className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-euro-gold border-2 border-white shadow-xs animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm sm:text-base tracking-tight text-euro-dark uppercase leading-none group-hover:text-euro-blue transition-colors font-display">
                  Euro Centro
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-euro-gold" />
              </div>
              <span className="font-semibold text-[10.5px] sm:text-[11.5px] text-slate-500 uppercase tracking-wider leading-tight mt-0.5">
                de Estudios Superiores
              </span>
              <span className="text-[9.5px] text-euro-royal font-bold uppercase tracking-widest leading-none mt-0.5">
                Plantel Bicentenario
              </span>
            </div>
          </div>

          {/* Menú de Navegación Desktop - Enlaces Directos con Indicadores de Estado */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white bg-euro-dark shadow-sm font-bold"
                      : "text-slate-600 hover:text-euro-blue hover:bg-white/80"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-euro-gold inline-block shrink-0" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CTA Destacado Euro Centro (Dorado Europeo Oficial con microinteracción táctil) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLeadModal}
              className="btn-tactile hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-euro-gold hover:bg-euro-gold-hover text-euro-dark font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-euro-gold-dark/25 gold-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-euro-dark" />
              <span>Solicita información</span>
            </button>

            {/* Botón Móvil Hamburguesa */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-euro-blue hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-euro-dark" />
              ) : (
                <Menu className="w-5 h-5 text-euro-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil - Limpio, Sin Desplegables, 100% Responsivo */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 px-4 pt-3 pb-6 space-y-1.5 animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 flex items-center justify-between">
              <span>Navegación Institucional</span>
              <span className="text-euro-gold font-bold text-[10px]">9 Cuatrimestres</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-euro-dark text-white font-bold shadow-xs"
                      : "text-slate-700 hover:bg-slate-50 hover:text-euro-blue"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-euro-gold inline-block" />
                    )}
                    {link.label}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-euro-gold translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-3 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full py-3.5 bg-euro-gold hover:bg-euro-gold-hover text-euro-dark font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer border border-euro-gold-dark/20 btn-tactile"
              >
                <Sparkles className="w-4 h-4 text-euro-dark" />
                <span>Solicita información</span>
              </button>

              <div className="text-center text-[11px] text-slate-500 py-1">
                <span>RVOE SEP {INSTITUTION_INFO.rvoeNumber} • Plantel Bicentenario</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
