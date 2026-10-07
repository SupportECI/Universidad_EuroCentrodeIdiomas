import { useState } from "react";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Filter,
  Globe2,
  Building,
  Award,
  BookOpen,
} from "lucide-react";
import {
  CURRICULUM_DATA,
  STUDY_AREAS,
  INSTITUTION_INFO,
} from "../../data/curriculumData";

export default function LicenciaturaSection({
  onOpenLeadModal,
  onSelectSubject,
}) {
  const [selectedCuatri, setSelectedCuatri] = useState(1);
  const [selectedArea, setSelectedArea] = useState("all");
  const [activeTab, setActiveTab] = useState("descripcion");

  const subNavLinks = [
    { id: "descripcion", label: "Descripción" },
    { id: "perfil-ingreso", label: "Perfil de Ingreso" },
    { id: "perfil-egreso", label: "Perfil de Egreso" },
    { id: "plan-estudios", label: "Plan de Estudios (58 Materias)" },
    { id: "campo-laboral", label: "Campo Laboral" },
    { id: "certificaciones", label: "Certificaciones y Validez" },
    { id: "vinculacion", label: "Vinculación y Convenios" },
  ];

  const currentCuatriData = CURRICULUM_DATA.find(
    (c) => c.cuatrimestre === selectedCuatri
  );

  const filteredSubjects =
    currentCuatriData?.subjects.filter((sub) =>
      selectedArea === "all" ? true : sub.area === selectedArea
    ) || [];

  return (
    <div id="licenciatura" className="w-full bg-slate-50 py-12 sm:py-16 space-y-16 lg:space-y-20">
      {/* 7.1 Encabezado Principal Oficial (Stitch Editorial) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0b1d3a] text-white rounded-2xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#c8963e]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            {/* RVOE Eyebrow Stitch */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6c15c]">
              <span>{INSTITUTION_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span>Plantel Bicentenario</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8963e]" />
              <span className="bg-[#c8963e]/20 text-white px-2.5 py-0.5 rounded font-mono">
                RVOE SEP {INSTITUTION_INFO.rvoeNumber}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] font-serif">
              Licenciatura en Idiomas
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
              Inglés, francés e italiano para traducir, interpretar, enseñar y
              emprender con rigor metodológico y proyección mundial. Formación trilingüe estructurada para el liderazgo global.
            </p>

            {/* Datos clave / Badges Stitch */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2 text-xs">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  DURACIÓN
                </span>
                <span className="font-bold text-white text-base font-serif">9 Cuatrimestres</span>
                <span className="text-[11px] text-slate-300 block">3 años continuos</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  VALIDEZ OFICIAL
                </span>
                <span className="font-bold text-[#e6c15c] text-base font-serif">306.00 Créditos</span>
                <span className="text-[11px] text-slate-300 block">Acuerdo Federal SEP</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  MODALIDAD
                </span>
                <span className="font-bold text-white text-base font-serif">Escolarizada</span>
                <span className="text-[11px] text-slate-300 block">Presencial / Bicentenario</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="block text-slate-300 text-[10.5px] uppercase font-bold tracking-wider">
                  MAPA CURRICULAR
                </span>
                <span className="font-bold text-white text-base font-serif">58 Materias</span>
                <span className="text-[11px] text-slate-300 block">Enfoque profesionalizante</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenLeadModal}
                className="btn-tactile py-3.5 px-7 bg-[#c8963e] hover:bg-[#e6c15c] text-[#070a26] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all text-center cursor-pointer"
              >
                Solicita información
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("plan-estudios");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-tactile py-3.5 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#e6c15c]" />
                <span>Explorar Retícula Oficial (58 Materias)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Submenú Interno con Anclas - Segmented Bar Stitch */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200/80 shadow-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {subNavLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.id);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${activeTab === item.id
                ? "bg-[#0b1d3a] text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100 hover:text-[#0b1d3a]"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* 7.2 Descripción Oficial */}
      <section id="descripcion" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/80">
          <span className="text-xs font-bold text-euro-gold-dark uppercase tracking-widest block mb-2 font-mono">
            Fundamentación Curricular
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-euro-dark mb-5 font-display">
            Descripción de la Licenciatura
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl font-light">
            La Licenciatura en Idiomas forma profesionales con dominio de inglés y
            francés en nueve niveles, y de italiano en cinco, con bases sólidas en
            lingüística, traducción, interpretación y didáctica. Desde los primeros
            cuatrimestres aplicas lo que aprendes, y cierras la carrera con una
            certificación internacional y un seminario de investigación aplicada. Un
            programa respaldado por más de 25 años de experiencia de Euro Centro en la
            enseñanza de idiomas.
          </p>
        </div>
      </section>

      {/* 7.3 Perfil de Ingreso & 7.4 Perfil de Egreso */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Perfil de Ingreso */}
        <div
          id="perfil-ingreso"
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200/80 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-bold text-euro-royal uppercase tracking-widest block mb-2 font-mono">
              Aspirantes
            </span>
            <h3 className="text-2xl font-bold text-euro-dark mb-4 font-display">
              Perfil de Ingreso
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
              Buscamos aspirantes con bachillerato concluido, interés genuino por
              las lenguas y las culturas, gusto por la lectura y la comunicación, y
              disposición para el trabajo constante.
            </p>
            <div className="bg-euro-blue/5 p-5 rounded-2xl border border-euro-blue/15 text-xs text-euro-dark space-y-2">
              <div className="flex items-center gap-2 font-bold text-euro-blue">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¿No sabes un segundo idioma? No te preocupes.</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">
                No es indispensable dominar un segundo idioma: el examen
                diagnóstico permite conocer tu nivel de partida y diseñar tu ruta de
                acompañamiento tutorial personalizada sin costo.
              </p>
            </div>
          </div>
        </div>

        {/* Perfil de Egreso */}
        <div
          id="perfil-egreso"
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200/80"
        >
          <span className="text-xs font-bold text-euro-gold-dark uppercase tracking-widest block mb-2 font-mono">
            Competencias de Egreso
          </span>
          <h3 className="text-2xl font-bold text-euro-dark mb-5 font-display">
            Al egresar serás capaz de:
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            {[
              "Comunicarte con fluidez en inglés y francés, y con soltura en italiano, en contextos académicos, profesionales y cotidianos.",
              "Traducir textos generales, especializados y literarios con precisión y ética profesional.",
              "Interpretar de forma consecutiva y simultánea en cabinas y foros profesionales.",
              "Diseñar, impartir y evaluar clases de idiomas con apoyo de tecnología pedagógica LMS.",
              "Analizar las lenguas desde la lingüística y la fonética para resolver problemas de comunicación.",
              "Desarrollar proyectos de investigación aplicada y emprender agencias o servicios relacionados con los idiomas.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-euro-gold shrink-0 mt-0.5" />
                <span className="leading-snug font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7.6 Plan de Estudios Completo (58 Asignaturas, 9 Cuatrimestres) */}
      <section id="plan-estudios" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-euro-gold-dark uppercase tracking-widest block mb-1 font-mono">
                Estructura Curricular Oficial SEP (Anexo 2)
              </span>
              <h2 className="text-3xl font-black text-euro-dark font-display">
                Plan de Estudios Completo (9 Cuatrimestres • 58 Asignaturas)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">
                Total del plan: 3,150 Horas Aula (HA) • 1,746 Horas Independientes (HI) • 306.00 Créditos.
              </p>
            </div>

            {/* Filtro por Áreas */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 font-mono">
                <Filter className="w-3.5 h-3.5 text-euro-gold" /> Filtrar área:
              </span>
              {STUDY_AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`text-[11px] px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer ${selectedArea === area.id
                    ? "bg-euro-dark text-white border-euro-dark shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                >
                  {area.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de Cuatrimestres (1 al 9) */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5">
            {CURRICULUM_DATA.map((c) => (
              <button
                key={c.cuatrimestre}
                onClick={() => setSelectedCuatri(c.cuatrimestre)}
                className={`py-3.5 px-2 rounded-2xl text-center transition-all border cursor-pointer ${selectedCuatri === c.cuatrimestre
                  ? "bg-euro-dark text-white border-euro-dark shadow-md scale-102"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
              >
                <span className="block text-sm font-black font-mono">
                  {c.cuatrimestre}°
                </span>
                <span className="block text-[10px] uppercase tracking-tighter truncate font-bold text-slate-400 group-hover:text-slate-600">
                  Cuatri
                </span>
              </button>
            ))}
          </div>

          {/* Tarjeta del Cuatrimestre Activo */}
          {currentCuatriData && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-euro-blue/5 p-5 rounded-2xl border border-euro-blue/15">
                <div>
                  <h3 className="font-extrabold text-xl text-euro-dark font-display">
                    {currentCuatriData.label}
                  </h3>
                  <span className="text-xs font-bold text-euro-royal font-mono">
                    {currentCuatriData.period} • {currentCuatriData.subjects.length} Asignaturas
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700 font-mono flex-wrap">
                  <span>Horas Aula: {currentCuatriData.ha} hrs</span>
                  <span>•</span>
                  <span>Independientes: {currentCuatriData.hi} hrs</span>
                  <span>•</span>
                  <span className="text-euro-dark bg-euro-gold/30 px-3 py-1 rounded-lg font-bold border border-euro-gold/40">
                    {currentCuatriData.creditos.toFixed(1)} Créditos
                  </span>
                </div>
              </div>

              {/* Lista de Materias en el Cuatrimestre */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredSubjects.map((sub) => (
                  <div
                    key={sub.code}
                    onClick={() =>
                      onSelectSubject({
                        ...sub,
                        cuatrimestreNumber: selectedCuatri,
                      })
                    }
                    className="p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-euro-blue hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-euro-dark group-hover:text-euro-gold transition-colors">
                          {sub.code}
                        </span>
                        <span className="text-[10px] font-bold text-euro-dark bg-euro-gold/20 px-2.5 py-0.5 rounded-full font-mono border border-euro-gold/30">
                          {sub.cr.toFixed(1)} CR
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 group-hover:text-euro-blue leading-snug mb-2 font-display">
                        {sub.name}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-medium truncate max-w-[170px]">{sub.area}</span>
                      <span className="group-hover:text-euro-blue font-bold text-euro-royal shrink-0">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7.7 Campo Laboral Destacado */}
      <section id="campo-laboral" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-euro-dark via-euro-navy to-euro-surface text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl space-y-6 border border-white/10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-euro-gold uppercase tracking-widest font-mono">
              Inserción Profesional Global
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display">
              No solo vas a dar clases. Vas a elegir tu camino.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Los idiomas son una de las competencias más valoradas y mejor remuneradas en el mercado
              contemporáneo. Con tres idiomas y rigor universitario, tus opciones son ilimitadas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {[
              {
                title: "Traductor e Intérprete",
                desc: "Traducción de documentos, contenidos y textos especializados; interpretación en cabinas, congresos y foros.",
              },
              {
                title: "Perito Traductor Oficial",
                desc: "Preparación para la acreditación como perito ante tribunales y dependencias con validez legal plena.",
              },
              {
                title: "Docencia y Dirección Educativa",
                desc: "Cátedra universitaria y coordinación pedagógica en centros educativos bilingües y trinacionales.",
              },
              {
                title: "Emprendimiento Lingüístico",
                desc: "Fundación de agencias de traducción, academias de idiomas o consultorías transculturales propias.",
              },
              {
                title: "Trabajo Remoto Internacional",
                desc: "Colaboración remota con corporativos y organismos de Europa y Norteamérica con remuneración en divisa fuerte.",
              },
              {
                title: "Turismo y Diplomacia",
                desc: "Organismos internacionales, embajadas, consulados, hotelería de alto nivel y relaciones exteriores.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/10 backdrop-blur-md space-y-1.5 transition-colors"
              >
                <h4 className="font-extrabold text-sm text-euro-gold font-display">{c.title}</h4>
                <p className="text-[11.5px] text-slate-300 leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.8 Certificaciones y Validez Oficial */}
      <section id="certificaciones" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/80 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-euro-gold-dark uppercase tracking-widest block font-mono">
              Acreditación Institucional
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-euro-dark font-display">
              Certificaciones y Validez Oficial SEP
            </h3>
          </div>

          <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>{INSTITUTION_INFO.rvoeFullText}</div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            El plan de estudios incluye la asignatura de{" "}
            <strong className="text-euro-dark font-semibold">Certificación Internacional (LID-905)</strong> en el noveno
            cuatrimestre, asegurando que cada egresado concluya sus estudios con un nivel formalmente respaldado ante instancias mundiales.
          </p>

          {/* Badges de Certificaciones Internacionales de Referencia */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <Award className="w-5 h-5 text-euro-blue mx-auto" />
              <h5 className="font-bold text-xs text-euro-dark">Inglés</h5>
              <p className="text-[11px] text-slate-500">Alineación TOEFL / Cambridge / IELTS C1-C2</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <Award className="w-5 h-5 text-euro-royal mx-auto" />
              <h5 className="font-bold text-euro-dark text-xs">Francés</h5>
              <p className="text-[11px] text-slate-500">Preparación formal DELF / DALF B2</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <Award className="w-5 h-5 text-euro-gold-dark mx-auto" />
              <h5 className="font-bold text-euro-dark text-xs">Italiano</h5>
              <p className="text-[11px] text-slate-500">Preparación PLIDA / CILS B2</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.9 Vinculación y Convenios */}
      <section id="vinculacion" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/80 space-y-5">
          <span className="text-xs font-bold text-euro-royal uppercase tracking-widest block font-mono">
            Práctica y Servicio
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-euro-dark font-display">
            Vinculación y Convenios de Práctica Profesional
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            El plan de estudios incorpora la materia de <strong className="text-euro-dark font-semibold">Práctica de Servicio Social y Vinculación Profesional (LID-707)</strong> para que entres en contacto con organizaciones, consulados, escuelas e industrias antes de concluir tu carrera.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Building className="w-5 h-5 text-euro-blue" />
              <h5 className="font-bold text-xs text-euro-dark">Sector Corporativo</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Empresas globales e industrias con operaciones de exportación y enlace internacional.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Globe2 className="w-5 h-5 text-euro-royal" />
              <h5 className="font-bold text-xs text-euro-dark">Sector Diplomático y Turístico</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Organismos no gubernamentales, secretarías de turismo y representaciones culturales.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <BookOpen className="w-5 h-5 text-euro-gold-dark" />
              <h5 className="font-bold text-xs text-euro-dark">Sector Educativo</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Institutos bilingües y universidades para residencia docente y proyectos de investigación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
