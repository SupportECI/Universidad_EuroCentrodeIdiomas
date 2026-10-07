
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function Footer({
  onNavigate,
  onOpenPrivacy,
  onOpenLegal,
  onOpenLeadModal,
}) {
  return (
    <footer className="w-full bg-euro-dark text-slate-300 font-sans border-t border-white/5">
      {/* 4 Columnas Principales */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Columna 1: Institución */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-euro-blue flex items-center justify-center text-euro-gold shadow border border-euro-gold/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white uppercase block leading-tight tracking-wide font-display">
                Euro Centro
              </span>
              <span className="font-medium text-xs text-slate-400 uppercase tracking-wider block">
                de Estudios Superiores
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {INSTITUTION_INFO.trustPhrase}. Formando líderes trilingües con
            rigor académico y proyección global en Chiapas.
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Comunidad y Redes
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={INSTITUTION_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-euro-blue border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Página de Facebook"
              >
                <span className="font-bold text-xs font-mono">fb</span>
              </a>
              <a
                href={INSTITUTION_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-700 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Perfil de Instagram"
              >
                <span className="font-bold text-xs font-mono">ig</span>
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("contacto");
                }}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-euro-gold/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-euro-gold transition-all shadow-sm"
                aria-label="Ubicación y mapa"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-euro-gold uppercase tracking-widest">
            Oferta &amp; Vida Académica
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button
                onClick={() => onNavigate("licenciatura")}
                className="hover:text-white transition-colors text-left"
              >
                Licenciatura en Idiomas (Plan Oficial)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("modelo-educativo")}
                className="hover:text-white transition-colors text-left"
              >
                Modelo Educativo por Competencias
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("admisiones")}
                className="hover:text-white transition-colors text-left"
              >
                Proceso de Admisión &amp; Convocatoria
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "becas-apoyos")}
                className="hover:text-white transition-colors text-left"
              >
                Programa de Becas y Apoyos
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("vida-estudiantil", "instalaciones")}
                className="hover:text-white transition-colors text-left"
              >
                Laboratorios Fonéticos e Instalaciones
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("nosotros")}
                className="hover:text-white transition-colors text-left"
              >
                Historia &amp; Respaldo Institucional
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Ubicación y Contacto */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-euro-gold uppercase tracking-widest">
            Plantel Bicentenario
          </h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed">{INSTITUTION_INFO.address}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
              <a
                href={`mailto:${INSTITUTION_INFO.email}`}
                className="hover:text-white transition-colors"
              >
                {INSTITUTION_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-300 font-medium">
                  Atención Telefónica / WhatsApp:
                </span>
                <span className="text-[11px] text-slate-400">
                  (Espacio disponible por asignación de línea)
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-300 font-medium">
                  Horario de Atención en Plantel:
                </span>
                <span className="text-[11px] text-slate-400">
                  Lunes a Viernes 8:00 a 18:00 hrs • Sábados 8:00 a 14:00 hrs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 4: Marco Institucional y Legal */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-euro-gold uppercase tracking-widest">
            Marco Jurídico &amp; Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button
                onClick={onOpenPrivacy}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5"
              >
                <span>Aviso de Privacidad Integral</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenLegal}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5"
              >
                <span>Aviso Legal y Condiciones de Uso</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  alert(
                    "El Reglamento Escolar para alumnos matriculados se entrega durante el proceso de inducción institucional."
                  )
                }
                className="hover:text-white transition-colors text-left"
              >
                Reglamento Escolar
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  alert(
                    "Cédula de Validez Oficial: RVOE SEP Federal Acuerdo No. 20263560, expedido por la Dirección General de Educación Superior Universitaria."
                  )
                }
                className="hover:text-white transition-colors text-left"
              >
                Transparencia Académica SEP
              </button>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={onOpenLeadModal}
              className="w-full py-2.5 px-4 bg-euro-blue/40 hover:bg-euro-blue text-euro-gold rounded-xl text-xs font-bold border border-euro-gold/30 transition-all text-center cursor-pointer"
            >
              Solicitar Asesoría de Admisiones
            </button>
          </div>
        </div>
      </div>

      {/* Franja Inferior Obligatoria de Validez Oficial RVOE */}
      <div className="border-t border-white/5 bg-black/20 py-6 px-4 sm:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-2 text-[11px] text-slate-400 leading-relaxed">
          <p className="font-medium text-slate-300">
            {INSTITUTION_INFO.rvoeFullText}
          </p>
          <p className="text-slate-500">
            © 2026 {INSTITUTION_INFO.companyName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
