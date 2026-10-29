/**
 * ============================================================================
 * ESTRUCTURA DE NOTICIAS EN JAVASCRIPT
 * ============================================================================
 * Cada noticia está definida con la estructura requerida:
 * - imagen: ruta de la imagen principal destacada
 * - titulo: titular de la noticia
 * - subtitulo: resumen o bajada periodística
 * - texto: contenido redactado completo de la noticia (soporta párrafos)
 * - fecha: fecha oficial mostrada al final del texto
 * - categoria / tag: etiquetas complementarias
 */
export const NOTICIAS_DATA = [
  {
    id: 1,
    imagen: "/images/hero-licenciatura.jpg",
    titulo: "Euro Centro de Estudios Superiores obtiene el RVOE Federal de la SEP",
    subtitulo: "Acuerdo No. 20263560 que avala con validez oficial plena en toda la República Mexicana la Licenciatura en Idiomas.",
    texto: `La Secretaría de Educación Pública (SEP) ha otorgado formalmente el Reconocimiento de Validez Oficial de Estudios (RVOE) federal a Euro Centro de Estudios Superiores, bajo el Acuerdo No. 20263560 con fecha del 11 de agosto de 2026, para impartir la Licenciatura en Idiomas en modalidad escolarizada en el Plantel Bicentenario de Tuxtla Gutiérrez, Chiapas.

Este trascendental logro institucional corona más de 25 años de trayectoria ininterrumpida de Euro Centro transformando la enseñanza de lenguas en el sureste mexicano. La validez oficial federal garantiza que los egresados obtengan título y cédula profesional con pleno reconocimiento ante instituciones públicas, dependencias de gobierno, corporativos privados y organismos internacionales.

El plan curricular consta de 9 cuatrimestres (3 años lectivos) con un total de 58 asignaturas y 306.00 créditos oficiales. A través de este programa académico de alto rendimiento, los futuros profesionistas dominarán de manera simultánea el inglés (nivel avanzado C1), el francés (intermedio-alto B2) y el italiano (B1 interactivo), complementado con una sólida formación en traducción, interpretación simultánea, lingüística aplicada y docencia contemporánea.`,
    fecha: "11 de agosto de 2026",
    categoria: "Validez Oficial SEP",
    tag: "Institucional",
  },
  {
    id: 2,
    imagen: "/images/IMG_6485.jpg",
    titulo: "Apertura de Convocatoria para el Proceso de Admisiones y Examen Diagnóstico",
    subtitulo: "Inician las inscripciones para la primera generación de la Licenciatura en Idiomas con cupo limitado.",
    texto: `Euro Centro de Estudios Superiores anuncia formalmente la apertura del periodo de admisiones y registro al examen diagnóstico para el ciclo escolar inaugural de la Licenciatura en Idiomas en el Plantel Bicentenario.

La evaluación diagnóstica tiene un enfoque estrictamente orientativo y de nivelación pedagógica, permitiendo al claustro docente identificar las competencias comunicativas y los antecedentes lingüísticos de cada aspirante. Se enfatiza a todos los postulantes que no se requieren conocimientos previos de francés o italiano, ya que el modelo pedagógico parte desde los fundamentos estructurales en un entorno de inmersión gradual y acelerada.

El proceso de admisión incluye una sesión informativa personalizada, asesoría vocacional con directores de academia y la recepción de la documentación requerida para el cotejo oficial ante la SEP. Se invita a los aspirantes a apartar su lugar con anticipación debido al cupo limitado por aula para asegurar la atención personalizada.`,
    fecha: "28 de agosto de 2026",
    categoria: "Convocatoria Abierta",
    tag: "Admisiones",
  },
  {
    id: 3,
    imagen: "/images/IMG_6557.jpg",
    titulo: "Alianzas Estratégicas para Certificaciones Internacionales Cambridge, DELF y CILS",
    subtitulo: "Estudiantes contarán con acreditaciones lingüísticas estandarizadas con validez en el extranjero.",
    texto: `En concordancia con los rigurosos estándares del Marco Común Europeo de Referencia para las Lenguas (MCER), Euro Centro de Estudios Superiores consolida alianzas institucionales para la preparación y aplicación de exámenes de certificación de validez mundial.

Los alumnos de la Licenciatura en Idiomas tendrán acceso integrado dentro de su formación a módulos especializados de preparación para los exámenes Cambridge C1 Advanced y C2 Proficiency en idioma inglés; los diplomas DELF/DALF emitidos por el Ministerio de Educación Nacional de Francia; y las certificaciones de competencia en lengua italiana avaladas por centros universitarios europeos.

Estas certificaciones constituyen un pilar fundamental para el ejercicio profesional de los egresados, brindándoles un pasaporte académico y laboral indiscutible para postularse a maestrías en el extranjero, visados de trabajo y puestos de alta responsabilidad en organismos multilaterales, embajadas y empresas transnacionales.`,
    fecha: "15 de septiembre de 2026",
    categoria: "Acreditaciones Globales",
    tag: "Convenios",
  },
  {
    id: 4,
    imagen: "/images/IMG_6581.jpg",
    titulo: "Inauguración de Aulas Multimedia y Laboratorio de Traducción e Interpretación",
    subtitulo: "Infraestructura tecnológica de vanguardia instalada en el Plantel Bicentenario de Tuxtla Gutiérrez.",
    texto: `Como parte del plan de inversión y acondicionamiento del Plantel Bicentenario, Euro Centro de Estudios Superiores presentó las nuevas instalaciones destinadas al desarrollo práctico de las competencias lingüísticas, fonéticas y de interpretación profesional.

El nuevo laboratorio cuenta con estaciones digitales individuales equipadas con tecnología acústica de alta fidelidad, software de traducción asistida por computadora (herramientas CAT) y módulos para la práctica de interpretación consecutiva y de enlace. Asimismo, las aulas de idiomas integran sistemas audiovisuales interactivos para la simulación de conferencias diplomáticas y mesas de negociación internacional.

Esta infraestructura de primer nivel garantiza que las 3,150 horas con conducción académica y las 1,746 horas de trabajo independiente se desarrollen en un ambiente estimulante, ergonómico y perfectamente alineado a las demandas del mercado laboral contemporáneo.`,
    fecha: "02 de octubre de 2026",
    categoria: "Infraestructura",
    tag: "Campus y Tecnología",
  },
  {
    id: 5,
    imagen: "/images/galeria-evento-1.jpg",
    titulo: "Coloquio Académico: El Futuro del Lingüista e Intérprete en un Entorno Globalizado",
    subtitulo: "Especialistas y catedráticos analizan la creciente demanda de profesionistas trilingües en México y el mundo.",
    texto: `Euro Centro de Estudios Superiores llevó a cabo un enriquecedor panel de conferencias magistrales enfocado en las oportunidades profesionales para los especialistas en idiomas en la economía contemporánea y los entornos multilaterales.

Durante el coloquio se abordaron temas prioritarios como la mediación intercultural en el turismo internacional, la traducción jurídica y corporativa, la enseñanza de segundas lenguas con metodologías activas y la creciente necesidad de profesionistas capaces de supervisar tecnologías de traducción asistida e inteligencia artificial lingüística con criterio humano y terminológico.

Los ponentes destacaron que la combinación simultánea del inglés con dos de las lenguas romances más influyentes a nivel cultural y comercial (francés e italiano) coloca a los graduados de Euro Centro en una posición de excelencia indiscutible frente a carreras tradicionales que solo enseñan una sola lengua.`,
    fecha: "18 de octubre de 2026",
    categoria: "Vida Académica",
    tag: "Conferencias",
  },
];
