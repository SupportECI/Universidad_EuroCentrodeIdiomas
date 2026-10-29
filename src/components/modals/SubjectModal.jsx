import { useEffect } from "react";
import {
  X,
  ShieldCheck,
  Award,
  BookOpen,
  Globe2,
  Languages,
  Lightbulb,
  Compass,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

// Configuración estética por área formativa
function getAreaConfig(area = "") {
  const norm = area.toLowerCase();
  if (norm.includes("idioma")) {
    return {
      icon: Globe2,
      badge: "bg-blue-50 text-blue-700 border-blue-200/80",
      dot: "bg-blue-600",
    };
  }
  if (norm.includes("lingüística") || norm.includes("linguistica")) {
    return {
      icon: BookOpen,
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      dot: "bg-indigo-600",
    };
  }
  if (norm.includes("traducción") || norm.includes("traduccion") || norm.includes("interpretación")) {
    return {
      icon: Languages,
      badge: "bg-amber-50 text-amber-800 border-amber-200/80",
      dot: "bg-amber-600",
    };
  }
  if (norm.includes("didáctica") || norm.includes("didactica") || norm.includes("tecnología")) {
    return {
      icon: Lightbulb,
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
      dot: "bg-emerald-600",
    };
  }
  return {
    icon: Compass,
    badge: "bg-purple-50 text-purple-800 border-purple-200/80",
    dot: "bg-purple-600",
  };
}

// Síntesis pedagógica reflexiva y de valor real para el interesado
function getSubjectOverview(subject) {
  const name = subject.name.toLowerCase();

  // 1. Idiomas específicos
  if (name.startsWith("inglés") || name.startsWith("ingles")) {
    return "Desarrollo progresivo de competencias comunicativas en lengua inglesa bajo estándares del Marco Común Europeo (MCER). Fomenta fluidez léxica, precisión gramatical, comprensión auditiva avanzada y redacción académica y ejecutiva.";
  }
  if (name.startsWith("francés") || name.startsWith("frances")) {
    return "Formación integral en lengua francesa orientada a estándares internacionales DELF/DALF. Prioriza la corrección fonética, producción discursiva formal y dominio comunicativo en contextos diplomáticos y comerciales.";
  }
  if (name.startsWith("italiano")) {
    return "Inmersión estructurada en lengua y cultura italiana desde un enfoque comunicativo y contrastivo. Desarrolla expresión oral natural, análisis textual y fluidez para el intercambio profesional y la traducción directa.";
  }
  if (name.includes("comprensión auditiva")) {
    return "Entrenamiento intensivo en decodificación de registros orales auténticos, acentos nativos y variantes dialectales, fortaleciendo la retención y agilidad acústica indispensable para la interpretación.";
  }
  if (name.includes("certificación internacional")) {
    return "Acreditación formal y preparación estratégica para exámenes internacionales de dominio de lenguas (Cambridge C1/C2, DALF o CILS), avalando oficialmente el perfil de egreso ante organismos mundiales.";
  }

  // 2. Traducción e Interpretación
  if (name.includes("traducción básica") || name.includes("traduccion basica")) {
    return "Fundamentos metodológicos del proceso traductor. Estudio de equivalencias sintácticas y semánticas, técnicas de transferencia interlingüística y resolución de desafíos léxico-culturales entre idiomas.";
  }
  if (name.includes("traducción especializada") || name.includes("traduccion especializada")) {
    return "Traducción aplicada a textos de alta complejidad en ámbitos jurídicos, corporativos, técnicos y científicos. Dominio de bases terminológicas y herramientas CAT de traducción asistida.";
  }
  if (name.includes("traducción literaria") || name.includes("traduccion literaria")) {
    return "Traslación estética de narrativa, ensayo y dramaturgia, preservando la voz autoral, ritmo estilístico, recursos retóricos y connotaciones culturales del texto original.";
  }
  if (name.includes("interpretación")) {
    return "Entrenamiento en agilidad mental, toma de notas especializada, memoria asociativa y traslación oral simultánea y consecutiva para foros bilaterales, conferencias y negociaciones internacionales.";
  }

  // 3. Lingüística
  if (name.includes("fonética") || name.includes("fonologia")) {
    return "Estudio acústico y articulatorio de los sonidos del habla humana, análisis del Alfabeto Fonético Internacional (AFI) y técnicas de corrección fonética aplicadas al dominio multilingüe.";
  }
  if (name.includes("morfología") || name.includes("sintaxis")) {
    return "Análisis formal de las estructuras morfosintácticas del lenguaje, mecanismos de formación léxica y reglas combinatorias oracionales desde una perspectiva lingüística comparativa.";
  }
  if (name.includes("semántica") || name.includes("pragmática")) {
    return "Investigación del significado lingüístico, actos de habla, presuposiciones y la influencia del contexto social y situacional en la interpretación de los enunciados.";
  }
  if (name.includes("psicolingüística")) {
    return "Comprensión de los mecanismos cognitivos y neurológicos que hacen posible la adquisición, procesamiento mental, comprensión y producción del lenguaje en personas políglotas.";
  }
  if (name.includes("discurso")) {
    return "Herramientas metodológicas para el análisis crítico de textos e intervenciones orales, identificando ideologías, intenciones comunicativas y estructuras retóricas en el discurso público.";
  }
  if (name.includes("lingüística comparada") || name.includes("lingüística aplicada") || name.includes("introducción a la lingüística")) {
    return "Estudio sistemático del lenguaje humano, contrastando estructuras gramaticales entre lenguas para resolver problemas prácticos en traducción, mediación y enseñanza.";
  }
  if (name.includes("adquisición de lenguas")) {
    return "Modelos teóricos y empíricos sobre cómo se asimila una segunda y tercera lengua, analizando factores cognitivos, afectivos y pedagógicos para optimizar la enseñanza.";
  }

  // 4. Didáctica y Tecnología
  if (name.includes("didáctica") || name.includes("didactica") || name.includes("enseñanza")) {
    return "Metodologías activas para la enseñanza de lenguas. Diseño curricular, planeación de sesiones didácticas, selección de materiales auténticos y evaluación por competencias.";
  }
  if (name.includes("tecnología") || name.includes("tecnologias")) {
    return "Integración de laboratorios multimedia, plataformas digitales especializadas e inteligencia artificial aplicada al aprendizaje lingüístico y la gestión de recursos formativos.";
  }
  if (name.includes("teorías del aprendizaje")) {
    return "Fundamentos psicopedagógicos que explican cómo aprenden las personas, sustentando la selección de estrategias formativas coherentes con las necesidades de cada estudiante.";
  }

  // 5. Humanística y Formación Integral
  if (name.includes("cultura") || name.includes("intercultural")) {
    return "Exploración de la diversidad cultural, sistemas de valores y dinámicas de contacto intercultural, desarrollando la sensibilidad indispensable para mediar entre distintas mentalidades.";
  }
  if (name.includes("ética") || name.includes("filosofía")) {
    return "Criterios deontológicos aplicados al ejercicio profesional: confidencialidad, fidelidad traductora, responsabilidad legal del perito y compromiso con la verdad discursiva.";
  }
  if (name.includes("investigación") || name.includes("seminario")) {
    return "Rigor metodológico aplicado al campo de las lenguas. Formulación de proyectos de titulación, recopilación de corpus lingüísticos y redacción científica formal.";
  }
  if (name.includes("servicio social")) {
    return "Vinculación directa con el entorno profesional y social mediante proyectos de traducción, apoyo docente o mediación lingüística en instituciones públicas y privadas.";
  }

  return "Materia formativa curricular indispensable que aporta herramientas teóricas y prácticas orientadas a consolidar el perfil de egreso del Licenciado en Idiomas de Euro Centro.";
}

function getEtapaCarrera(cuatri) {
  const num = Number(cuatri) || 1;
  if (num <= 3) return "Ciclo Inicial (Bases Lingüísticas)";
  if (num <= 5) return "Ciclo de Desarrollo (Traducción & 3er Idioma)";
  if (num <= 7) return "Ciclo de Especialización (Interpretación)";
  return "Ciclo de Proyección (Titulación & Certificación)";
}

export default function SubjectModal({
  subject,
  isOpen,
  onClose,
  cuatrimestreNumber,
}) {
  // Manejo de tecla Escape y bloqueo suave del scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !subject) return null;

  const cuatri = cuatrimestreNumber || subject.cuatrimestreNumber || 1;
  const areaConfig = getAreaConfig(subject.area);
  const AreaIcon = areaConfig.icon;
  const overview = getSubjectOverview(subject);
  const etapa = getEtapaCarrera(cuatri);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-subject-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070a26]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 flex flex-col max-h-[90vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera Institucional sobria y nítida */}
        <div className="bg-[#070a26] text-white p-5 sm:p-6 border-b border-white/10 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8963e]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-2 min-w-0 flex-1">
              {/* Barra superior con metadatos clave en tamaño justo */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#c8963e] text-slate-950 tracking-wider">
                  {subject.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/10 text-slate-200 border border-white/10">
                  {cuatri}° Cuatrimestre
                </span>
                <span className="text-[11px] text-slate-300 font-medium truncate">
                  {etapa.split("(")[0].trim()}
                </span>
              </div>

              {/* Título de la Materia */}
              <h3
                id="modal-subject-title"
                className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight leading-snug"
              >
                {subject.name}
              </h3>
            </div>

            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer border border-white/10"
              aria-label="Cerrar ventana de materia"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenido Principal: Lo que verdaderamente importa al lector */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700">
          {/* 1. Propósito Formativo / De qué trata la materia (Información prioritaria) */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              <BookOpen className="w-3.5 h-3.5 text-[#c8963e]" />
              <span>Propósito Formativo</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
              {overview}
            </p>
          </div>

          {/* 2. Ficha Técnica Curricular Equilibrada (Créditos proporcionados, no gigantes) */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            {/* Ponderación de Créditos SEP (Elegante y en proporción armónica) */}
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/80 font-bold block">
                  Valor SEP
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  Créditos Oficiales
                </span>
              </div>
              <span className="text-sm font-bold font-mono text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded-md border border-amber-300/60">
                {subject.cr.toFixed(1)} CR
              </span>
            </div>

            {/* Área Curricular */}
            <div className={`p-3 rounded-xl border flex items-center justify-between ${areaConfig.badge}`}>
              <div className="min-w-0 pr-1">
                <span className="text-[10px] font-mono uppercase tracking-wider opacity-75 font-bold block">
                  Área
                </span>
                <span className="text-xs font-semibold truncate block">
                  {subject.area}
                </span>
              </div>
              <AreaIcon className="w-4 h-4 shrink-0 opacity-80" />
            </div>

            {/* Carácter */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-bold block">
                  Régimen
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {subject.type || "Obligatoria"}
                </span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>

            {/* Modalidad */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-bold block">
                  Modalidad
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  Escolarizada
                </span>
              </div>
              <GraduationCap className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* 3. Garantía y Respaldo Oficial SEP (Discreto, formal y confiable) */}
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/60 border border-blue-100/80 text-[11px] text-blue-950">
            <ShieldCheck className="w-4 h-4 text-[#c8963e] shrink-0" />
            <span className="font-light leading-snug">
              <strong className="font-semibold">RVOE SEP Federal Acuerdo No. {INSTITUTION_INFO.rvoeNumber}</strong> · Validez oficial plena en toda la República Mexicana.
            </span>
          </div>
        </div>

        {/* Pie con botón de cierre limpio */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#070a26] text-white rounded-xl text-xs font-semibold hover:bg-[#1211ab] transition-colors cursor-pointer active:scale-95 shadow-xs"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
