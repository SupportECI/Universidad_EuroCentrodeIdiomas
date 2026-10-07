import { useState } from "react";
import {
  ChevronDown,
  CheckCircle2,
  Calendar,
  FileText,
  UserCheck,
  CreditCard,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  FileCheck2,
} from "lucide-react";
import { REQUIREMENTS_DATA, FAQ_DATA } from "../../data/curriculumData";

export default function AdmisionesSection({ onOpenLeadModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const admissionSteps = [
    {
      step: "01",
      title: "Preinscripción en Línea",
      description: "Completa el formulario oficial de aspirante para iniciar tu expediente y agendar tu cita de admisión.",
      icon: UserCheck,
      badge: "Inmediato",
    },
    {
      step: "02",
      title: "Examen Diagnóstico",
      description: "Evaluación formativa para determinar tu nivel inicial de partida. No requiere conocimientos previos de un segundo idioma.",
      icon: FileCheck2,
      badge: "Sin Costo",
    },
    {
      step: "03",
      title: "Cotejo de Documentos",
      description: "Presentación de tu certificado de bachillerato, acta de nacimiento y antecedentes en Control Escolar del plantel.",
      icon: FileText,
      badge: "Presencial",
    },
    {
      step: "04",
      title: "Inscripción & Matrícula",
      description: "Formalización de aranceles administrativos, asignación de matrícula SEP y apertura de tu cuenta institucional.",
      icon: CreditCard,
      badge: "Matrícula SEP",
    },
    {
      step: "05",
      title: "Inducción e Inicio",
      description: "Jornada de bienvenida institucional, acceso a laboratorios acústicos y arranque de clases en Plantel Bicentenario.",
      icon: GraduationCap,
      badge: "Ciclo 2026-1",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="admisiones" className="w-full bg-slate-50 py-16 sm:py-24 space-y-24">
      {/* 10.1 Proceso de Admisión: Tu Ingreso en 5 Pasos */}
      <section id="proceso-admision" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
            Ruta Oficial de Ingreso
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-euro-dark tracking-tight font-display">
            Tu Proceso de Admisión en 5 Pasos
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            Un proceso ágil, transparente y personalizado para acompañarte desde tu primer contacto hasta tu integración a las aulas del Plantel Bicentenario.
          </p>
        </div>

        {/* Pasos en Formato Secuencial Conectado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {admissionSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-display text-euro-gold">
                      {s.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-euro-royal bg-euro-blue/10 px-2 py-0.5 rounded-full border border-euro-blue/20">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-euro-blue/10 text-euro-royal flex items-center justify-center group-hover:bg-euro-dark group-hover:text-euro-gold transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-sm text-euro-dark font-display leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Paso {idx + 1} de 5</span>
                  {idx < 4 && (
                    <ArrowRight className="w-3.5 h-3.5 text-euro-gold hidden lg:block group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Calendario de Admisión */}
        <div className="bg-euro-dark text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-euro-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-euro-gold/20 text-euro-gold text-xs font-bold uppercase tracking-wider font-display border border-euro-gold/30">
              <Calendar className="w-3.5 h-3.5" />
              Convocatoria Ciclo 2026-1 Abierta
            </div>
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Calendario Oficial de Admisión &amp; Registro Prioritario
            </h4>
            <p className="text-xs text-slate-300 font-light max-w-xl">
              Asegura tu lugar en la Generación Fundadora de la Licenciatura en Idiomas. El cupo por grupo está limitado para garantizar atención interactiva personalizada.
            </p>
          </div>

          <button
            onClick={onOpenLeadModal}
            className="btn-tactile px-8 py-3.5 bg-gradient-to-r from-euro-gold to-amber-500 text-euro-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shrink-0 cursor-pointer relative z-10"
          >
            Preinscríbete Ahora
          </button>
        </div>
      </section>

      {/* 10.2 Requisitos de Inscripción */}
      <section id="requisitos" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
              Documentación Oficial Requerida
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-euro-dark font-display">
              Requisitos de Admisión e Inscripción
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              Expediente escolar requerido para cotejo y validación ante el área de Control Escolar del Plantel Bicentenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REQUIREMENTS_DATA.map((req, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-white hover:border-euro-blue/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-euro-blue/5 border border-euro-blue/15 flex items-center gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-euro-blue shrink-0" />
            <span>
              Si tu certificado de bachillerato se encuentra en trámite de legalización, puedes presentar una <strong>constancia de estudios con promedio acumulado</strong> para preinscripción condicionada.
            </span>
          </div>
        </div>
      </section>

      {/* 10.3 Costos e Inversión Educativa */}
      <section id="costos" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-euro-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-euro-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-bold text-euro-gold uppercase tracking-widest block font-display">
              Transparencia e Inversión
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Planes de Inversión, Aranceles y Opciones de Pago
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Manejamos aranceles transparentes y esquemas de pago cuatrimestrales accesibles con bonificaciones por pronto pago y apoyos por mérito académico. Un asesor te compartirá el desglose pormenorizado sin compromiso.
            </p>
          </div>

          <button
            onClick={onOpenLeadModal}
            className="btn-tactile px-8 py-4 bg-gradient-to-r from-euro-gold to-amber-500 text-euro-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shrink-0 cursor-pointer relative z-10"
          >
            Solicitar Folleto de Costos
          </button>
        </div>
      </section>

      {/* 10.4 Preguntas Frecuentes (Acordeón Modernizado) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-euro-blue/10 text-euro-royal text-xs font-bold uppercase tracking-wider font-display">
            <HelpCircle className="w-3.5 h-3.5 text-euro-gold" />
            Resolución de Dudas
          </div>
          <h2 className="text-3xl font-extrabold text-euro-dark font-display">
            Preguntas Frecuentes sobre la Licenciatura
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light">
            Todo lo que necesitas conocer antes de formalizar tu inscripción académica.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-euro-dark hover:text-euro-royal transition-colors cursor-pointer"
                >
                  <span className="font-display">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-euro-gold" : ""
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fade-in font-light">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

