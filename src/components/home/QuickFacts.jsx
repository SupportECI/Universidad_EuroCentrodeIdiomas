import {
  Globe,
  Clock,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function QuickFacts({ onNavigate }) {
  const facts = [
    {
      stat: "+25",
      badge: "Experiencia",
      title: "Años en idiomas",
      desc: "La experiencia de Euro Centro en la enseñanza de idiomas, ahora en una licenciatura.",
      icon: Award,
    },
    {
      stat: "3",
      badge: "Idiomas",
      title: "Idiomas",
      desc: "Inglés hasta nivel C1, francés B2 e italiano B1. Inglés y francés durante toda la carrera, e italiano desde el cuarto cuatrimestre.",
      icon: Globe,
    },
    {
      stat: "9",
      badge: "Duración",
      title: "Cuatrimestres",
      desc: "Terminas tu licenciatura en 3 años.",
      icon: Clock,
    },
    {
      stat: "SEP",
      badge: "Validez",
      title: "Validez oficial",
      desc: "RVOE federal No. 20263560. Al titularte obtienes tu cédula profesional.",
      icon: ShieldCheck,
      highlight: true,
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-8 sm:-mt-10 lg:-mt-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {facts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${item.highlight ? "border-[#c8963e]/40 bg-gradient-to-b from-white to-[#fefce8]/30" : ""
                }`}
            >
              <div className="flex items-center justify-between text-[#c8963e] mb-2">
                <Icon className="w-6 h-6 text-[#7e5700]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  {item.badge}
                </span>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-bold text-[#0b1d3a] tracking-tight block font-serif my-1">
                  {item.stat}
                </span>
                <div className="w-8 h-1 bg-[#c8963e] rounded-full mb-3" />
                <h3 className="font-bold text-base text-[#0b1d3a] mb-1 font-serif leading-snug group-hover:text-[#1211ab] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-7">
        <button
          onClick={() => onNavigate("licenciatura")}
          className="btn-tactile inline-flex items-center gap-2.5 text-xs font-bold text-[#0b1d3a] hover:text-[#1211ab] uppercase tracking-wider transition-all group cursor-pointer bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
        >
          <span>Conoce la Licenciatura en Idiomas</span>
          <ArrowRight className="w-4 h-4 text-[#c8963e] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
