import { ShieldCheck, History, ArrowRight, Award, GraduationCap, Building2 } from "lucide-react";
import { INSTITUTION_INFO } from "../../data/curriculumData";

export default function InstitutionalTrust({ onNavigate }) {
  const stats = [
    { value: "+25", unit: "Años", label: "Trayectoria en idiomas", icon: History },
    { value: "+3,000", unit: "Egresados", label: "Comunidad formada", icon: GraduationCap },
    { value: "RVOE SEP", unit: "Federal", label: `Acuerdo ${INSTITUTION_INFO.rvoeNumber}`, icon: ShieldCheck },
    { value: "100%", unit: "Presencial", label: "Plantel Bicentenario", icon: Building2 },
  ];

  return (
    <section className="w-full py-20 lg:py-24 px-4 sm:px-8 bg-gradient-to-b from-euro-dark via-euro-navy to-euro-dark text-white relative overflow-hidden">
      {/* Patrón decorativo geométrico */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 1200 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1000" cy="250" r="350" stroke="white" strokeWidth="1" />
          <circle cx="1000" cy="250" r="250" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="350" r="200" stroke="white" strokeWidth="1" />
          <path
            d="M0,250 C300,100 500,400 800,250 C1000,150 1100,350 1200,250"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Destellos de color decorativos */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-euro-royal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-euro-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-euro-gold text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-white/15 shadow-xs font-mono">
          <Award className="w-4 h-4 text-euro-gold" />
          <span>Prestigio y Trayectoria en la Enseñanza de Idiomas</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight max-w-4xl font-display">
          Una nueva institución con más de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-euro-gold via-euro-gold-hover to-euro-gold">
            25 años de experiencia
          </span>{" "}
          en la enseñanza de idiomas.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-light mb-12">
          {INSTITUTION_INFO.name} nace del respaldo y trayectoria de Euro Centro,
          que por más de 25 años ha transformado la forma de aprender lenguas en
          el sureste mexicano. Hoy llevamos toda esa experiencia acumulada al nivel
          superior con rigor universitario, docentes certificados e instalaciones de
          primer nivel en el Plantel Bicentenario.
        </p>

        {/* 4 Estadísticas clave Bento Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-4xl mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-euro-gold/40 rounded-3xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 shadow-lg text-left relative overflow-hidden"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 text-euro-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-black text-2xl sm:text-3xl text-euro-gold font-display tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider font-mono">
                    {stat.unit}
                  </span>
                </div>
                <span className="text-xs text-slate-300 font-medium block leading-snug">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onNavigate("nosotros", "historia")}
            className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-euro-gold hover:bg-euro-gold-hover text-euro-dark font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl transition-all cursor-pointer border border-euro-gold-dark/25 gold-glow"
          >
            <span>Conoce nuestra historia y valores</span>
            <ArrowRight className="w-4 h-4 text-euro-dark" />
          </button>

          <button
            onClick={() => onNavigate("contacto")}
            className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-4 px-7 rounded-2xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-euro-gold" />
            <span>Agenda una visita al plantel</span>
          </button>
        </div>
      </div>
    </section>
  );
}
