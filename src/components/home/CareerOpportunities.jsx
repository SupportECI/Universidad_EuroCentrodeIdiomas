import {
  TrendingUp,
  Languages,
  Gavel,
  School,
  Briefcase,
  Laptop,
  Plane,
  ArrowRight,
} from "lucide-react";
import { CAREER_PATHS } from "../../data/curriculumData";

export default function CareerOpportunities({ onNavigate }) {
  const iconMap = {
    translate: Languages,
    gavel: Gavel,
    school: School,
    business_center: Briefcase,
    laptop_mac: Laptop,
    flight_takeoff: Plane,
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna Izquierda: Imagen y Métrica Flotante */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-2.5 rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-slate-200/80 border border-slate-200/80 shadow-2xl">
              <div className="relative rounded-[calc(2.5rem-0.625rem)] overflow-hidden aspect-[4/5] bg-euro-dark border border-white/20 shadow-inner">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABtXpEIdEpE34bJK7e9dMqwK3Y-lqw7zFy0rMb6-3lwVobi44cEqYaVkKXfXWIBnZSeSLqKfr7tEKP2lOT-wZDm2qi3ybQUlhijLmpO_paQBC2lhyH67Sr52I3SNc4j68HwyEiNObTMzBdIyQ_XkVd9NYmYuTU6O_nrcJMHH7aY63EZCWJVY7arrIJuRMOHImdrtvj31jjbF3dDe1gYly0BjOzbad0paGIEZeVlURx')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-euro-dark via-euro-dark/40 to-transparent" />

                {/* Texto sobre la imagen */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="text-[10.5px] font-bold text-euro-gold uppercase tracking-widest block font-mono">
                    Proyección Profesional Internacional
                  </span>
                  <h3 className="font-extrabold text-xl leading-snug font-display">
                    Liderazgo trilingüe en corporativos, embajadas y foros mundiales
                  </h3>
                </div>
              </div>
            </div>

            {/* Badge Flotante con Glassmorphism */}
            <div className="absolute -top-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-slate-200/80 max-w-[220px] transform hover:scale-105 transition-all duration-300 diffusion-shadow-lg">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-xl bg-euro-gold/20 flex items-center justify-center text-euro-gold-dark">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="font-black text-3xl text-euro-dark font-display tracking-tight">+92%</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug font-medium">
                de inserción profesional en el primer año para perfiles trilingües certificados.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Caminos Laborales */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-euro-gold-dark font-extrabold text-xs uppercase tracking-widest block mb-2 font-mono">
                Campo Laboral Global
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-euro-dark tracking-tight mb-4 font-display leading-tight">
                Un idioma abre puertas.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-euro-blue via-euro-royal to-euro-blue">
                  Tres, abren el mundo.
                </span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Los egresados del Euro Centro de Estudios Superiores acceden a
                posiciones de alto perfil tanto en México como en el extranjero gracias
                a un perfil trilingüe altamente demandado. No solo vas a dar clases; vas
                a elegir tu camino.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAREER_PATHS.map((item, idx) => {
                const Icon = iconMap[item.icon] || Briefcase;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50/80 hover:bg-white p-5 rounded-2xl border border-slate-200/70 hover:border-euro-royal/40 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-euro-blue/10 text-euro-blue flex items-center justify-center shrink-0 group-hover:bg-euro-dark group-hover:text-euro-gold transition-colors shadow-xs border border-euro-blue/15">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-euro-dark leading-tight mb-1 group-hover:text-euro-blue transition-colors font-display">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate("licenciatura", "campo-laboral")}
                className="btn-tactile inline-flex items-center gap-2.5 text-xs font-bold text-euro-dark hover:text-euro-blue uppercase tracking-wider transition-colors group cursor-pointer bg-slate-100 hover:bg-slate-200/70 px-5 py-3 rounded-full border border-slate-200/80"
              >
                <span>Conoce el campo laboral detallado</span>
                <ArrowRight className="w-4 h-4 text-euro-gold group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
