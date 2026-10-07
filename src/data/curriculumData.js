// Datos oficiales conforme a la Orden de Trabajo - Web Euro Centro de Estudios Superiores

export const INSTITUTION_INFO = {
  name: "Euro Centro de Estudios Superiores",
  campus: "Plantel Bicentenario",
  companyName: "Euro Centro de Idiomas de México, S.C.",
  degree: "Licenciatura en Idiomas",
  modality: "Escolarizada (Presencial)",
  duration: "9 cuatrimestres (3 años lectivos)",
  credits: "306.00 créditos oficiales",
  hoursHA: "3,150 horas bajo conducción académica",
  hoursHI: "1,746 horas independientes",
  totalSubjects: 58,
  rvoeNumber: "20263560",
  rvoeDate: "11 de agosto de 2026",
  rvoeFullText:
    "Licenciatura en Idiomas con Reconocimiento de Validez Oficial de Estudios otorgado por la Secretaría de Educación Pública, Acuerdo No. 20263560, de fecha 11 de agosto de 2026. Modalidad escolarizada.",
  trustPhrase:
    "Una nueva institución con el respaldo de más de 25 años transformando la enseñanza de idiomas",
  address: "Av. 2ª Sur Poniente No. 1417, Col. La Lomita, C.P. 29060, Tuxtla Gutiérrez, Chiapas",
  email: "admisiones@eurocentrouniversidad.com.mx",
  privacyEmail: "privacidad@eurocentrouniversidad.com.mx",
  domain: "eurocentrouniversidad.com.mx",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  whatsappAvailable: true,
  whatsappDefaultMsg: "Hola, me gustaría solicitar informes sobre la Licenciatura en Idiomas en el Plantel Bicentenario.",
};

export const STUDY_AREAS = [
  { id: "all", name: "Todas las áreas", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { id: "Idiomas", name: "Idiomas", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { id: "Lingüística", name: "Lingüística", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { id: "Traducción e Interpretación", name: "Traducción e Interpretación", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { id: "Didáctica y Tecnología Aplicada", name: "Didáctica y Tecnología", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "Humanística y Formación Integral", name: "Humanística y Formación Integral", color: "bg-purple-50 text-purple-700 border-purple-200" },
];

export const CURRICULUM_DATA = [
  {
    cuatrimestre: 1,
    label: "Primer Cuatrimestre",
    period: "Ciclo Inicial",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-101", name: "Inglés I", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-102", name: "Francés I", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-103", name: "Introducción a la Lingüística", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-104", name: "Fundamentos de Fonética y Fonología", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-105", name: "Cultura e Identidad", area: "Humanística y Formación Integral", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-106", name: "Psicolingüística", area: "Lingüística", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-107", name: "Teorías del Aprendizaje", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 2,
    label: "Segundo Cuatrimestre",
    period: "Ciclo Inicial",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-201", name: "Inglés II", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-202", name: "Francés II", area: "Idiomas", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-203", name: "Morfología y Sintaxis", area: "Lingüística", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-204", name: "Comprensión Auditiva I", area: "Idiomas", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-205", name: "Comunicación Intercultural", area: "Humanística y Formación Integral", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-206", name: "Filosofía", area: "Humanística y Formación Integral", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-207", name: "Tecnologías de la Información", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-208", name: "Metodología de la Enseñanza", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 3,
    label: "Tercer Cuatrimestre",
    period: "Ciclo Inicial",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-301", name: "Inglés III", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-302", name: "Francés III", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-303", name: "Semántica y Pragmática", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-304", name: "Comprensión Auditiva II", area: "Idiomas", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-305", name: "Didáctica de Idiomas I", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-306", name: "Tecnologías para Lenguas", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-307", name: "Análisis del Discurso", area: "Lingüística", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 4,
    label: "Cuarto Cuatrimestre",
    period: "Ciclo de Desarrollo",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-401", name: "Inglés IV", area: "Idiomas", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-402", name: "Francés IV", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-403", name: "Lingüística Comparada", area: "Lingüística", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-404", name: "Traducción Básica", area: "Traducción e Interpretación", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-405", name: "Didáctica de Idiomas II", area: "Didáctica y Tecnología Aplicada", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-406", name: "Italiano I", area: "Idiomas", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 5,
    label: "Quinto Cuatrimestre",
    period: "Ciclo de Desarrollo",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-501", name: "Inglés V", area: "Idiomas", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-502", name: "Francés V", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-503", name: "Traducción Especializada", area: "Traducción e Interpretación", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-504", name: "Lingüística Aplicada", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-505", name: "Italiano II", area: "Idiomas", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-506", name: "Didáctica de Idiomas III", area: "Didáctica y Tecnología Aplicada", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 6,
    label: "Sexto Cuatrimestre",
    period: "Ciclo de Especialización",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-601", name: "Inglés VI", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-602", name: "Francés VI", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-603", name: "Interpretación I", area: "Traducción e Interpretación", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-604", name: "Adquisición de Lenguas", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-605", name: "Didáctica de Idiomas IV", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-606", name: "Italiano III", area: "Idiomas", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-607", name: "Seminario de Investigación", area: "Humanística y Formación Integral", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 7,
    label: "Séptimo Cuatrimestre",
    period: "Ciclo de Especialización",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-701", name: "Inglés VII", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-702", name: "Francés VII", area: "Idiomas", ha: 56, hi: 40, cr: 6.0, type: "Obligatoria" },
      { code: "LID-703", name: "Interpretación II", area: "Traducción e Interpretación", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-704", name: "Investigación en Lingüística", area: "Lingüística", ha: 56, hi: 24, cr: 5.0, type: "Obligatoria" },
      { code: "LID-705", name: "Didáctica de Idiomas V", area: "Didáctica y Tecnología Aplicada", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-706", name: "Italiano IV", area: "Idiomas", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
      { code: "LID-707", name: "Práctica de Servicio Social y Vinculación Profesional", area: "Humanística y Formación Integral", ha: 42, hi: 22, cr: 4.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 8,
    label: "Octavo Cuatrimestre",
    period: "Ciclo de Proyección Profesional",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-801", name: "Inglés VIII", area: "Idiomas", ha: 70, hi: 58, cr: 8.0, type: "Obligatoria" },
      { code: "LID-802", name: "Francés VIII", area: "Idiomas", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-803", name: "Italiano V", area: "Idiomas", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-804", name: "Seminario de Investigación Aplicada I", area: "Humanística y Formación Integral", ha: 70, hi: 26, cr: 6.0, type: "Obligatoria" },
      { code: "LID-805", name: "Taller de Traducción Literaria e Interpretación Simultánea", area: "Traducción e Interpretación", ha: 70, hi: 26, cr: 6.0, type: "Obligatoria" },
    ],
  },
  {
    cuatrimestre: 9,
    label: "Noveno Cuatrimestre",
    period: "Ciclo de Proyección Profesional",
    ha: 350,
    hi: 194,
    creditos: 34.0,
    subjects: [
      { code: "LID-901", name: "Inglés IX", area: "Idiomas", ha: 70, hi: 58, cr: 8.0, type: "Obligatoria" },
      { code: "LID-902", name: "Francés IX", area: "Idiomas", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-903", name: "Ética e Identidad Profesional", area: "Humanística y Formación Integral", ha: 70, hi: 26, cr: 6.0, type: "Obligatoria" },
      { code: "LID-904", name: "Seminario de Investigación Aplicada II", area: "Humanística y Formación Integral", ha: 70, hi: 42, cr: 7.0, type: "Obligatoria" },
      { code: "LID-905", name: "Certificación Internacional", area: "Idiomas", ha: 70, hi: 26, cr: 6.0, type: "Obligatoria" },
    ],
  },
];

export const CAREER_PATHS = [
  {
    title: "Traductor e Intérprete Oficial",
    description: "Traducción de documentos, contenidos y textos especializados; interpretación en eventos, conferencias y negociaciones.",
    icon: "translate",
    tag: "Corporativo & Foros",
  },
  {
    title: "Perito Traductor Autorizado",
    description: "Formación de base para gestionar la acreditación pericial ante tribunales y dependencias con plena fe jurídica.",
    icon: "gavel",
    tag: "Validez Legal",
  },
  {
    title: "Docencia y Dirección Educativa",
    description: "Imparte clases de idiomas en todos los niveles y prepárate para coordinar academias y dirigir departamentos escolares.",
    icon: "school",
    tag: "Liderazgo Pedagógico",
  },
  {
    title: "Emprendimiento Lingüístico",
    description: "Crea tu propia escuela, agencia de traducción boutique o plataforma de consultoría en servicios bilingües.",
    icon: "business_center",
    tag: "Negocios Propios",
  },
  {
    title: "Trabajo Remoto Internacional",
    description: "Colabora desde cualquier lugar con empresas globales en atención multilingüe, subtitulaje y localización, generando ingresos en divisas.",
    icon: "laptop_mac",
    tag: "Global & Freelance",
  },
  {
    title: "Turismo, Comercio & Diplomacia",
    description: "Hotelería de alta gama, consulados, agencias aduanales y organismos multilaterales que demandan perfiles trilingües.",
    icon: "flight_takeoff",
    tag: "Relaciones Exteriores",
  },
];

export const MODEL_PILLARS = [
  {
    title: "Aprendizaje Comunicativo",
    description: "El idioma se usa desde el primer día en situaciones reales de diálogo y debate.",
    icon: "forum",
  },
  {
    title: "Tres Idiomas, Un Perfil",
    description: "Inglés y francés a lo largo de toda la carrera, sumando italiano a partir del 4° cuatrimestre.",
    icon: "public",
  },
  {
    title: "Práctica desde el Aula",
    description: "Traducción, interpretación y didáctica aplicadas en proyectos de inmersión.",
    icon: "record_voice_over",
  },
  {
    title: "Tecnología para Lenguas",
    description: "Herramientas de software CAT, laboratorios acústicos y plataformas LMS de última generación.",
    icon: "devices",
  },
  {
    title: "Formación Humanista",
    description: "Bases de ética profesional, filosofía y comprensión de la interculturalidad.",
    icon: "handshake",
  },
  {
    title: "Certificación Internacional",
    description: "El noveno cuatrimestre incluye la materia formal para avalar tu nivel internacional.",
    icon: "verified",
  },
];

export const FORMATION_STAGES = [
  {
    stage: "1. Bases (1° a 3°)",
    subtitle: "Fundamentos Lingüísticos",
    desc: "Inglés y francés intensivos, fundamentos de lingüística, fonética y fonología, cultura y teorías del aprendizaje.",
  },
  {
    stage: "2. Desarrollo (4° a 5°)",
    subtitle: "Integración del Tercer Idioma",
    desc: "Se suma el italiano formalmente, inician las materias de traducción directa y avanza la didáctica aplicada.",
  },
  {
    stage: "3. Especialización (6° a 7°)",
    subtitle: "Práctica Aplicada y Vinculación",
    desc: "Interpretación en cabina, adquisición de lenguas, investigación y Práctica de Servicio Social con vinculación profesional.",
  },
  {
    stage: "4. Proyección Profesional (8° a 9°)",
    subtitle: "Certificación y Titulación",
    desc: "Traducción literaria, interpretación simultánea, ética profesional, seminarios de investigación y Certificación Internacional.",
  },
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Preinscríbete en línea",
    description: "Llena el formulario institucional de prospectos y un asesor académico te contactará en menos de 24 horas.",
    icon: "how_to_reg",
  },
  {
    step: "02",
    title: "Presenta tu examen diagnóstico",
    description: "Conocemos tu nivel de partida. No es indispensable tener conocimientos previos de un segundo idioma.",
    icon: "assignment",
  },
  {
    step: "03",
    title: "Entrega tu documentación",
    description: "Cotejo de antecedentes escolares y acta oficial ante el área de Control Escolar del plantel.",
    icon: "folder_shared",
  },
  {
    step: "04",
    title: "Realiza tu pago de inscripción",
    description: "Confirmación de lugar mediante opciones bancarias seguras y asignación de matrícula institucional.",
    icon: "payments",
  },
  {
    step: "05",
    title: "Inicia tus clases",
    description: "Bienvenida oficial al ciclo cuatrimestral y acceso inmediato a laboratorios del Plantel Bicentenario.",
    icon: "school",
  },
];

export const REQUIREMENTS_DATA = [
  "Certificado de bachillerato legalizado o constancia de estudios en trámite con promedio.",
  "Acta de nacimiento en formato reciente (original y copia).",
  "Clave Única de Registro de Población (CURP) actualizada.",
  "Identificación oficial vigente (INE o pasaporte del aspirante o tutor).",
  "Comprobante de domicilio reciente (no mayor a 3 meses).",
  "Fotografías tamaño infantil recientes en blanco y negro.",
];

export const FAQ_DATA = [
  {
    q: "¿La licenciatura tiene validez oficial ante la SEP?",
    a: "Sí. Cuenta con Reconocimiento de Validez Oficial de Estudios otorgado por la Secretaría de Educación Pública (SEP), Acuerdo Federal No. 20263560, de fecha 11 de agosto de 2026, en modalidad escolarizada presencial.",
  },
  {
    q: "¿Necesito saber inglés o francés para poder ingresar?",
    a: "No es indispensable dominar un segundo idioma. El plan de estudios inicia desde bases formativas y nuestro examen diagnóstico permite conocer tu nivel de partida para acompañarte con tutorías personalizadas.",
  },
  {
    q: "¿Cuánto dura la carrera?",
    a: "La Licenciatura en Idiomas está estructurada en un régimen cuatrimestral eficiente de 9 cuatrimestres (exactamente 3 años lectivos completos), permitiéndote una pronta inserción profesional.",
  },
  {
    q: "¿Qué idiomas voy a estudiar durante la licenciatura?",
    a: "Estudiarás tres idiomas en profundidad: Inglés y Francés durante los nueve cuatrimestres de la carrera, e Italiano a partir del cuarto cuatrimestre.",
  },
  {
    q: "¿Las clases son presenciales?",
    a: "Sí, es en modalidad escolarizada presencial en nuestras instalaciones del Plantel Bicentenario, ubicado en Tuxtla Gutiérrez, Chiapas.",
  },
  {
    q: "¿En qué áreas puedo trabajar al egresar?",
    a: "Podrás desempeñarte como traductor e intérprete en conferencias y organismos, perito traductor oficial, docente y directivo en instituciones bilingües, emprendedor de tu propia agencia de idiomas, o en trabajo remoto internacional con ingresos en moneda extranjera.",
  },
  {
    q: "¿Hay opciones de becas o apoyos económicos?",
    a: "Próximamente publicaremos nuestro programa formal de becas, descuentos y convenios de financiamiento. Solicita información con un asesor para conocer los apoyos y promociones vigentes durante la convocatoria actual.",
  },
  {
    q: "¿Qué relación tiene la institución con Euro Centro?",
    a: "Euro Centro de Estudios Superiores es una institución de nueva creación respaldada por Euro Centro, una organización con más de 25 años de sólida trayectoria transformando la enseñanza de idiomas en Chiapas.",
  },
  {
    q: "¿Cuáles son los horarios y cuándo inician las clases?",
    a: "Los calendarios oficiales de examen diagnóstico, horarios de clase y fecha exacta de inicio están próximos a publicarse por Control Escolar. Puedes registrar tus datos en el formulario para recibir la notificación prioritaria.",
  },
];

export const INSTITUTIONAL_VALUES = [
  {
    title: "Excelencia",
    desc: "Buscamos el más alto nivel en cada clase, cada idioma y cada egresado.",
    icon: "workspace_premium",
  },
  {
    title: "Respeto Intercultural",
    desc: "Valoramos la diversidad de lenguas, culturas y formas de pensar en una comunidad global.",
    icon: "public",
  },
  {
    title: "Ética Profesional",
    desc: "Actuamos con honestidad, confidencialidad y rigor deontológico en la traducción y la docencia.",
    icon: "gavel",
  },
  {
    title: "Compromiso",
    desc: "Acompañamos a cada estudiante desde su ingreso hasta su plena inserción en el campo laboral.",
    icon: "handshake",
  },
  {
    title: "Innovación",
    desc: "Integramos tecnología acústica, herramientas digitales y nuevas metodologías activas.",
    icon: "lightbulb",
  },
  {
    title: "Espíritu Emprendedor",
    desc: "Impulsamos a nuestros estudiantes a crear sus propias empresas, consultorías y oportunidades.",
    icon: "rocket_launch",
  },
];

export const NEWS_DATA = [
  {
    id: 1,
    tag: "Convocatoria",
    category: "Admisiones",
    title: "Apertura oficial de la Convocatoria de Admisión 2026",
    date: "Ciclo 2026-1",
    excerpt: "Inicia el registro para aspirantes a la primera generación de la Licenciatura en Idiomas en el Plantel Bicentenario.",
    isRecent: true,
  },
  {
    id: 2,
    tag: "Institucional",
    category: "Acreditaciones",
    title: "Obtención formal del RVOE Federal SEP No. 20263560",
    date: "Agosto 2026",
    excerpt: "La Secretaría de Educación Pública avala plenamente la Licenciatura en Idiomas con 306 créditos oficiales.",
    isRecent: true,
  },
  {
    id: 3,
    tag: "Instalaciones",
    category: "Plantel",
    title: "Equipamiento de los nuevos Laboratorios Fonéticos",
    date: "Plantel Bicentenario",
    excerpt: "Cabinas acústicas de interpretación y software interactivo listos para las prácticas de la comunidad estudiantil.",
    isRecent: true,
  },
];
