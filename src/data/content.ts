import { Topic, Article } from '../types/blog';

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Fundamentos de IHC',
    slug: 'fundamentos-ihc',
    description: 'Orígenes, objetivos y bases interdisciplinarias de la Interacción Humano-Computadora',
    icon: 'BookOpen'
  },
  {
    id: 2,
    title: 'Aspectos Psicológicos e Interfaces Emergentes',
    slug: 'aspectos-psicologicos',
    description: 'Percepción, cognición y nuevos paradigmas de interacción',
    icon: 'Brain'
  },
  {
    id: 3,
    title: 'Estilos, Paradigmas y Metáforas',
    slug: 'estilos-paradigmas',
    description: 'Formas de interacción y modelos conceptuales en interfaces',
    icon: 'Layers'
  },
  {
    id: 4,
    title: 'Diseño de Interfaces Gráficas',
    slug: 'diseno-interfaces',
    description: 'Principios, herramientas y mejores prácticas para el diseño de GUI',
    icon: 'Palette'
  }
];

export const articles: Article[] = [
  {
    id: 1,
    topicId: 1,
    title: 'Fundamentos de Interacción Humano-Computadora',
    slug: 'fundamentos-ihc',
    content: 'La Interacción Humano-Computadora (IHC) es una disciplina fundamental que estudia cómo las personas interactúan con las computadoras y hasta qué punto estas son desarrolladas para una interacción exitosa con usuarios humanos.',
    subsections: [
      {
        title: 'Orígenes de la disciplina',
        content: 'La IHC surgió en los años 80 como respuesta a la creciente necesidad de hacer las computadoras más accesibles. Inicialmente, solo ingenieros especializados podían usar sistemas computacionales. Con la llegada de las computadoras personales, se hizo evidente que las interfaces debían diseñarse pensando en usuarios no técnicos. Pioneros como Douglas Engelbart y su invención del mouse, o Xerox PARC con sus interfaces gráficas, sentaron las bases de esta disciplina.'
      },
      {
        title: 'Orígenes de los sistemas de interacción',
        content: 'Los primeros sistemas de interacción eran basados en texto, usando líneas de comando que requerían memorizar instrucciones precisas. La evolución llevó a las interfaces gráficas (GUI) en los años 70, revolucionadas por el Xerox Alto y popularizadas por Apple Macintosh. Posteriormente surgieron interfaces táctiles, de voz, gestuales y realidad virtual/aumentada, expandiendo constantemente las formas en que interactuamos con la tecnología.'
      },
      {
        title: 'La interfaz de usuario',
        content: 'La interfaz de usuario es el medio por el cual las personas interactúan con sistemas computacionales. Abarca componentes físicos (hardware como teclados, ratones, pantallas táctiles) y lógicos (software como menús, botones, iconos). Una buena interfaz debe ser intuitiva, eficiente, consistente y satisfactoria. Incluye aspectos visuales, auditivos y hápticos que facilitan la comunicación bidireccional entre humano y máquina.'
      },
      {
        title: 'Objetivos de la IHC',
        content: 'Los objetivos principales de la IHC incluyen: desarrollar sistemas usables, seguros y funcionales; entender cómo las personas usan la tecnología; diseñar interfaces que reduzcan errores y aumenten la productividad; mejorar la experiencia del usuario; garantizar la accesibilidad para todos; y aplicar teorías y métodos científicos al diseño de sistemas interactivos. La meta es crear tecnología centrada en el ser humano.'
      },
      {
        title: 'Interdisciplinariedad de la IHC',
        content: 'La IHC es inherentemente interdisciplinaria, integrando conocimientos de: Ciencias de la Computación (algoritmos, arquitectura de sistemas), Psicología (cognición, percepción, comportamiento humano), Diseño Gráfico (comunicación visual, estética), Ergonomía (factores humanos, confort), Sociología (interacción social, cultura), Lingüística (lenguaje natural, semántica) y Filosofía (ética, accesibilidad). Esta convergencia permite crear sistemas verdaderamente centrados en el usuario.'
      }
    ]
  },
  {
    id: 2,
    topicId: 2,
    title: 'Aspectos Psicológicos de la IHC e Interfaces Emergentes',
    slug: 'aspectos-psicologicos',
    content: 'Los aspectos psicológicos son fundamentales para comprender cómo diseñar interfaces efectivas que se alineen con las capacidades y limitaciones humanas.',
    subsections: [
      {
        title: 'Desempeño Humano',
        content: 'El desempeño humano en IHC se refiere a qué tan eficientemente y efectivamente las personas pueden completar tareas usando sistemas computacionales. Factores clave incluyen: tiempo de reacción (típicamente 200-300ms para estímulos visuales), precisión en la entrada de datos, carga cognitiva durante tareas complejas, fatiga tras uso prolongado, y curva de aprendizaje. El diseño debe minimizar errores, reducir el esfuerzo mental y físico, y optimizar la velocidad de interacción considerando estas limitaciones humanas naturales.'
      },
      {
        title: 'Percepción',
        content: 'La percepción visual es primordial en IHC. El sistema visual humano detecta patrones, colores, movimiento y profundidad. Principios de Gestalt (proximidad, similitud, continuidad, cierre) guían cómo agrupamos elementos visuales. La percepción de color es afectada por contraste, saturación y contexto. Además, existen limitaciones: campo visual útil, ceguera al cambio, y capacidad de discriminar detalles. El diseño debe usar jerarquías visuales claras, contraste adecuado, y aprovechar la atención selectiva para guiar a los usuarios.'
      },
      {
        title: 'Cognición y Memoria',
        content: 'La cognición implica procesos mentales como atención, razonamiento y toma de decisiones. La memoria tiene tres niveles: sensorial (milisegundos), corto plazo o de trabajo (7±2 elementos, segundos), y largo plazo (ilimitada, permanente). En IHC, debemos diseñar para: minimizar carga en memoria de trabajo usando reconocimiento vs. recordación; crear modelos mentales consistentes del sistema; usar chunking para agrupar información; proporcionar feedback inmediato; y mantener consistencia para facilitar el aprendizaje y recuperación de información.'
      },
      {
        title: 'Habilidades Motoras',
        content: 'Las habilidades motoras determinan cómo interactuamos físicamente con dispositivos. La Ley de Fitts establece que el tiempo para alcanzar un objetivo depende de su distancia y tamaño: objetivos más grandes y cercanos son más rápidos de alcanzar. Esto fundamenta diseños como botones grandes para acciones frecuentes, menús contextuales cercanos al cursor, y áreas táctiles amplias en móviles. También debemos considerar precisión motora, coordinación ojo-mano, acciones repetitivas que causan fatiga, y diseñar para diversas capacidades motoras.'
      },
      {
        title: 'Computación con palabras y síntesis de voz',
        content: 'El reconocimiento de voz convierte lenguaje hablado en texto o comandos, usando modelos de aprendizaje profundo que analizan patrones acústicos y contexto lingüístico. La síntesis de voz genera habla artificial a partir de texto. Estas tecnologías permiten interfaces manos libres, accesibilidad para personas con discapacidades visuales o motoras, y interacciones naturales. Desafíos incluyen dialectos, ruido ambiental, privacidad, y lograr naturalidad conversacional. Asistentes como Siri, Alexa y Google Assistant ejemplifican esta tecnología.'
      },
      {
        title: 'Interfaces Mente-Computadora',
        content: 'Las Interfaces Cerebro-Computadora (BCI) capturan señales cerebrales directamente mediante EEG, fMRI u otros métodos, permitiendo controlar sistemas con el pensamiento. Aplicaciones incluyen: ayudar a personas con parálisis a comunicarse o mover dispositivos, neuro-rehabilitación, investigación cognitiva, y gaming. Aunque prometedoras, enfrentan desafíos en precisión, velocidad de comunicación, entrenamiento requerido, portabilidad de equipos y consideraciones éticas sobre privacidad mental.'
      },
      {
        title: 'Nuevos tipos de interfaces',
        content: 'Las interfaces emergentes transforman la interacción: Realidad Virtual (VR) crea entornos inmersivos 3D; Realidad Aumentada (AR) superpone información digital al mundo real; Interfaces Gestuales interpretan movimientos corporales sin contacto; Interfaces Hápticas proporcionan feedback táctil realista; Wearables integran computación en ropa y accesorios; Interfaces Tangibles usan objetos físicos manipulables; e IoT conecta objetos cotidianos a internet. Estos paradigmas expanden posibilidades de interacción natural, intuitiva y ubicua.'
      }
    ]
  },
  {
    id: 3,
    topicId: 3,
    title: 'Estilos de Interacción, Paradigmas y Metáforas',
    slug: 'estilos-paradigmas',
    content: 'Los estilos de interacción definen cómo los usuarios se comunican con los sistemas, mientras que paradigmas y metáforas proporcionan marcos conceptuales para diseñar estas interacciones.',
    subsections: [
      {
        title: 'Estilos de Interacción',
        content: 'Existen diversos estilos de interacción: (1) Línea de comandos: texto directo, poderoso pero requiere memorización; (2) Menús: opciones visibles, fácil de aprender pero puede ser lento; (3) Formularios: entrada estructurada de datos; (4) WIMP (Windows, Icons, Menus, Pointer): interfaces gráficas tradicionales con manipulación directa; (5) Lenguaje natural: conversaciones con el sistema; (6) Manipulación directa: interacción visual con objetos (arrastrar, soltar); (7) Gestos: movimientos físicos; (8) Voz: comandos hablados. Cada estilo tiene fortalezas específicas y es apropiado para diferentes contextos y usuarios.'
      },
      {
        title: 'Paradigmas de Interacción',
        content: 'Los paradigmas de interacción son modelos fundamentales que guían el diseño: (1) Desktop computing: metáfora de escritorio con archivos y carpetas; (2) Ubiquitous computing: computación integrada en el ambiente; (3) Mobile computing: diseño para movilidad, pantallas táctiles; (4) Wearable computing: dispositivos portables constantemente accesibles; (5) Collaborative computing: sistemas multiusuario; (6) Cloud computing: acceso remoto a recursos; (7) Tangible computing: interfaces físicas manipulables. Cada paradigma implica suposiciones distintas sobre contexto de uso, dispositivos y tareas.'
      },
      {
        title: 'Metáforas',
        content: 'Las metáforas en IHC son comparaciones con objetos o conceptos familiares que facilitan comprensión: La metáfora del escritorio (archivos, carpetas, papelera) mapea conceptos digitales a oficina física; el carrito de compras en e-commerce replica experiencia de compra real; páginas web imitan documentos físicos; calendarios digitales preservan formato visual tradicional. Metáforas efectivas reducen curva de aprendizaje al aprovechar conocimiento previo, pero también pueden limitar innovación si restringen el diseño a conceptos del mundo físico. Deben ser culturalmente apropiadas y evolutivamente relevantes.'
      }
    ]
  },
  {
    id: 4,
    topicId: 4,
    title: 'Diseño de Interfaces Gráficas de Usuario',
    slug: 'diseno-interfaces',
    content: 'El diseño de interfaces gráficas requiere equilibrar estética, funcionalidad y usabilidad mediante principios establecidos y mejores prácticas.',
    subsections: [
      {
        title: 'Principios fundamentales del diseño de interfaces',
        content: 'Los principios fundamentales incluyen: (1) Consistencia: elementos similares deben verse y comportarse igual; (2) Feedback: el sistema debe informar al usuario sobre acciones y resultados; (3) Prevención de errores: diseñar para evitar equivocaciones; (4) Reversibilidad: permitir deshacer acciones; (5) Control del usuario: usuarios deben sentirse en control; (6) Reducción de carga cognitiva: simplificar decisiones; (7) Visibilidad: mostrar funcionalidades importantes; (8) Affordance: objetos deben sugerir su uso; (9) Mapeo natural: relación clara entre controles y efectos.'
      },
      {
        title: 'Reglas de oro de Mandel',
        content: 'Theo Mandel propuso tres reglas de oro: (1) Dar control al usuario: permitir personalización, ofrecer opciones, hacer acciones reversibles, responder rápidamente, y proporcionar interacción significativa; (2) Reducir carga de memoria del usuario: usar reconocimiento vs. recordación, establecer defaults significativos, ofrecer atajos intuitivos, mantener consistencia visual; (3) Hacer la interfaz consistente: estandarizar secuencias de tareas, usar terminología consistente, mantener uniformidad visual, proporcionar feedback sistemático. Estas reglas aseguran interfaces predecibles, eficientes y satisfactorias.'
      },
      {
        title: 'Diseño gráfico de interfaces',
        content: 'El diseño gráfico en interfaces integra: (1) Tipografía: legibilidad, jerarquía, espaciado apropiado; (2) Color: paletas armónicas, contraste suficiente, consideración de daltonismo; (3) Espaciado: uso de whitespace para organizar contenido; (4) Layout: grid systems, alineación, balance visual; (5) Iconografía: símbolos universalmente reconocibles; (6) Imágenes: que apoyen contenido sin distraer; (7) Animaciones: feedback visual sin exceso. El objetivo es comunicación visual clara, atractiva y funcional que guíe la atención del usuario efectivamente.'
      },
      {
        title: 'Modelos orientados a objetos y eventos',
        content: 'En programación de interfaces, el modelo orientado a objetos organiza el código en entidades (objetos) con propiedades y comportamientos, promoviendo reutilización y modularidad. Los componentes UI son objetos (botones, ventanas) que encapsulan estado y comportamiento. El modelo orientado a eventos complementa esto: la interfaz reacciona a eventos (clicks, teclas, gestos) mediante event handlers. Este paradigma permite interfaces interactivas y responsivas donde el flujo no es lineal sino dirigido por acciones del usuario, facilitando asincronía y modularidad.'
      },
      {
        title: 'UML',
        content: 'El Lenguaje Unificado de Modelado (UML) es un estándar para visualizar diseño de sistemas. En IHC, diagramas útiles incluyen: (1) Casos de uso: interacciones usuario-sistema; (2) Diagramas de secuencia: flujo temporal de interacciones; (3) Diagramas de estado: estados de componentes UI y transiciones; (4) Diagramas de clase: estructura de objetos de interfaz; (5) Diagramas de actividad: flujos de trabajo del usuario. UML facilita comunicación entre diseñadores y desarrolladores, documenta decisiones de diseño, y ayuda a identificar problemas antes de implementación.'
      },
      {
        title: 'Diseño de software web',
        content: 'El diseño web moderno implica: (1) Responsive Design: adaptación a múltiples dispositivos usando media queries, layouts flexibles, imágenes escalables; (2) Progressive Enhancement: funcionalidad básica para todos, mejoras para navegadores capaces; (3) Accessibility: WCAG compliance, ARIA labels, navegación por teclado; (4) Performance: optimización de carga, lazy loading, minificación; (5) SEO: estructura semántica, metadatos; (6) Arquitectura: separación HTML/CSS/JS, componentización, state management. Frameworks como React, Vue, Angular facilitan desarrollo de interfaces complejas, reactivas y mantenibles.'
      },
      {
        title: 'Elementos principales de una interfaz',
        content: 'Las interfaces contienen elementos fundamentales: (1) Navegación: menús, breadcrumbs, enlaces; (2) Controles de entrada: botones, campos de texto, checkboxes, sliders; (3) Contenedores: ventanas, paneles, cards, modales; (4) Feedback: mensajes, notifications, progress bars, tooltips; (5) Contenido: texto, imágenes, videos, iconos; (6) Acciones: botones primarios/secundarios, FABs, menús contextuales. Cada elemento tiene patrones de uso establecidos que usuarios reconocen, y deben implementarse consistentemente para aprovechar conocimiento previo y reducir curva de aprendizaje.'
      },
      {
        title: 'Herramientas de desarrollo de interfaces',
        content: 'El ecosistema de herramientas incluye: (1) Diseño: Figma, Sketch, Adobe XD para prototipado visual; (2) Frameworks CSS: Tailwind, Bootstrap, Material-UI para estilos consistentes; (3) Librerías JS: React, Vue, Svelte para componentes interactivos; (4) Testing: Jest, Cypress, Testing Library para asegurar calidad; (5) Accesibilidad: axe, Lighthouse, WAVE para auditorías; (6) Control de versiones: Git para colaboración; (7) Build tools: Vite, Webpack para optimización. Herramientas modernas automatizan tareas repetitivas, facilitan colaboración y aseguran mejores prácticas.'
      }
    ]
  }
];
