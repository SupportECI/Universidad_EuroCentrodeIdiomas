import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
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

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "licenciatura", label: "Licenciatura" },
    { id: "modelo-educativo", label: "Modelo" },
    { id: "vida-estudiantil", label: "Campus" },
    { id: "admisiones", label: "Admisiones" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Micro-ticker superior institucional: sobrio, editorial y de alta legibilidad */}
      <div
        className={`w-full bg-[#070a26] text-slate-300 text-[11px] border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "hidden md:block py-1 opacity-90" : "py-1.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-4 font-normal tracking-normal text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              Plantel Bicentenario · Tuxtla Gutiérrez
            </span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#e6c15c] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              RVOE SEP {INSTITUTION_INFO.rvoeNumber}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`mailto:${INSTITUTION_INFO.email}`}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#c8963e]" />
              {INSTITUTION_INFO.email}
            </a>
            <span className="hidden md:inline text-white/20">/</span>
            <a
              href="tel:9610000000"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c8963e]" />
              Informes Plantel
            </a>
          </div>
        </div>
      </div>

      {/* 2. Barra de Navegación Principal: minimalista, precisa y balanceada */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white border-b border-slate-200/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Marca / Identidad: Tipografía sobria de corte universitario */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Ir al inicio"
          >
            <div className="w-9 h-9 rounded-lg bg-[#070a26] text-white flex items-center justify-center font-serif text-lg font-bold border border-[#070a26] transition-transform duration-200 group-hover:border-[#c8963e]">
              <span>E</span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#070a26] leading-none group-hover:text-[#1211ab] transition-colors">
                Euro Centro
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 uppercase mt-0.5 font-medium leading-none">
                Estudios Superiores
              </span>
            </div>
          </button>

          {/* Menú de enlaces desktop: enlaces limpios con indicador sutil */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer relative ${
                    isActive
                      ? "text-[#070a26] font-semibold bg-slate-100"
                      : "text-slate-600 hover:text-[#070a26] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c8963e] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Acciones principales: CTA sólido y sin sombras exageradas */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenLeadModal}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#070a26] hover:bg-[#11184a] text-white text-xs font-semibold tracking-wide transition-all cursor-pointer border border-[#070a26] active:scale-[0.98]"
            >
              Solicitar admisión
            </button>

            {/* Disparador móvil accesible */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-[#070a26] hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
              aria-label={mobileMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#070a26]" />
              ) : (
                <Menu className="w-5 h-5 text-[#070a26]" />
              )}
            </button>
          </div>
        </div>

        {/* Cajón de navegación móvil: directo, estructurado y sin saturación */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-lg animate-fade-in">
            <div className="px-3 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Licenciatura en Idiomas</span>
              <span className="text-[#c8963e] font-semibold">9 cuatrimestres</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-slate-100 text-[#070a26] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#070a26]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full py-2.5 bg-[#070a26] hover:bg-[#11184a] text-white font-semibold text-xs tracking-wide rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Solicitar admisión
              </button>
              <p className="text-center text-[10px] text-slate-400">
                RVOE SEP {INSTITUTION_INFO.rvoeNumber} · Plantel Bicentenario
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
