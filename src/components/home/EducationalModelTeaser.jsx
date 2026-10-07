import { Play, CheckCircle2, ArrowRight, Video, Sparkles } from "lucide-react";

export default function EducationalModelTeaser({ onNavigate, onOpenVideo }) {
  const points = [
    { text: "Laboratorios Fonéticos Interactivos con software de análisis acústico.", tag: "Tecnología" },
    { text: "Docentes certificados y profesores invitados nativos de cada lengua.", tag: "Claustro" },
    { text: "Práctica real de traducción e interpretación en cabinas especializadas.", tag: "Práctica" },
    { text: "Acompañamiento tutorial continuo en grupos de cupo limitado.", tag: "Atención" },
  ];

  return (
    <section className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna Izquierda: Vista previa de video / multimedia con Double Bezel */}
          <div className="lg:col-span-6 relative">
            <div className="p-2 sm:p-2.5 rounded-[2.5rem] bg-gradient-to-br from-slate-200/80 to-slate-100 border border-slate-200/80 shadow-2xl">
              <div
                onClick={onOpenVideo}
                className="relative rounded-[calc(2.5rem-0.625rem)] overflow-hidden aspect-video bg-euro-dark group cursor-pointer border border-white/20 shadow-inner"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8fM2fITmTDkOCIkdH8Jlkaj-oRmRm9_5ytjYWa8aZ5knxG0eMUl_vz1VWnLsGrKrEKBC8Ep2ZNmpAnipqNC20InR_T5ZflZV82VLl4PfO_Wo3xZdwxBoI1MMFdFlj4U0quHWMUW7fY3fh0JHY5LnxJOKSZnrwwE7J-geYR9AOYl0MSAxFAAndn00lmr5Kz0K2jDUxex5jjHDFXw8Etei8bhVWSOhB80X5RiBayHXN')",
                  }}
                />
                <div className="absolute inset-0 bg-euro-dark/40 group-hover:bg-euro-dark/20 transition-colors" />

                {/* Botón Play Frosted Glass con Ripple */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-euro-gold/30 animate-pulse pointer-events-none" />
                    <div className="w-18 h-18 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/60">
                      <Play className="w-8 h-8 text-euro-dark fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Badges de Video */}
                <div className="absolute bottom-4 right-4 bg-euro-dark/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md font-mono border border-white/10">
                  2:45 min • Full HD
                </div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-euro-dark text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-slate-100">
                  <Video className="w-3.5 h-3.5 text-euro-gold" />
                  <span>Tour de Instalaciones • Plantel Bicentenario</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-3 font-medium">
              Haz clic para reproducir el recorrido virtual del Plantel Bicentenario
            </p>
          </div>

          {/* Columna Derecha: Contenido y Enfoque */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-euro-gold/20 text-euro-dark text-xs font-bold uppercase tracking-wider border border-euro-gold/30 mb-3 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-euro-gold-dark" />
                <span>Modelo Educativo Activo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-euro-dark tracking-tight mb-4 font-display leading-tight">
                Inmersión práctica y aprendizaje activo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-euro-blue via-euro-royal to-euro-blue">
                  desde el primer día
                </span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                <strong>Aprendes el idioma usándolo.</strong> Nuestro modelo
                combina práctica real, tecnología acústica y formación humanista desde el primer
                cuatrimestre. Superamos la memorización pasiva para priorizar la
                comunicación fluida, la traducción aplicada y el debate crítico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-2xl border border-slate-200/70 hover:border-euro-royal/30 hover:shadow-md transition-all flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-xl bg-euro-gold/20 text-euro-gold-dark flex items-center justify-center shrink-0 mt-0.5 border border-euro-gold/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-euro-royal block mb-0.5 font-mono">
                      {pt.tag}
                    </span>
                    <span className="text-xs text-slate-700 leading-snug font-medium block">
                      {pt.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate("modelo-educativo")}
                className="btn-tactile inline-flex items-center gap-2.5 bg-euro-dark hover:bg-euro-navy text-white font-bold text-xs uppercase tracking-wider py-4 px-7 rounded-2xl shadow-xl transition-all cursor-pointer border border-white/10"
              >
                <span>Descubre el Modelo Educativo Completo</span>
                <ArrowRight className="w-4 h-4 text-euro-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
