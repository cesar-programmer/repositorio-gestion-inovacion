const pdfUrl = (file) => new URL(`../pdfs/${file}`, import.meta.url).href;

const evidenceGroups = [
  {
    id: "unidad-1",
    label: "Unidad 1",
    title: "Propiedad intelectual y transferencia de conocimiento",
    description:
      "Bloque inicial de la materia enfocado en propiedad intelectual, derechos de autor, vinculación universidad-empresa y bases del ecosistema de innovación.",
    items: [
      {
        title: "Entrega de Reporte de Prácticas de Taller Práctica 1",
        type: "Reporte",
        date: "3 feb 2026",
        summary:
          "Primer ejercicio aplicado sobre protección legal de software con IMPI e INDAUTOR usando ElotApp como caso de estudio.",
        file: "Entrega de Reporte de Practicas de Taller. Practica1.  (2) (1).pdf",
      },
      {
        title: "Cuestionario 1",
        type: "Cuestionario",
        date: "9 feb 2026",
        summary:
          "Respuestas sobre IMPI, INDAUTOR, licencias, derechos patrimoniales y límites legales del software en México.",
        file: "Cuestionario 1 (1).pdf",
      },
      {
        title: "Cuestionario 1.3 - Transferencia del conocimiento entre ciencia e industria",
        type: "Cuestionario",
        date: "16 feb 2026",
        summary:
          "Análisis de modelos de transferencia tecnológica, I+D universitaria y aplicación al contexto local.",
        file: "CUESTIONARIO 1_3 (1) (1).pdf",
      },
      {
        title: "Práctica 1 - Propiedad Intelectual y Derechos de Autor",
        type: "Práctica",
        date: "23 feb 2026",
        summary:
          "Desarrollo más amplio del marco jurídico del software, simulación de registro y reflexión sobre la titularidad en contextos laborales.",
        file: "Practica 1 Propiedad Intelectual y Derechos de Autor (2) (1).pdf",
      },
      {
        title: "Práctica 2 - Transferencia de conocimiento científico-industrial",
        type: "Práctica",
        date: "23 feb 2026",
        summary:
          "Estudio de modelos como Triple Hélice, Cuádruple Hélice, innovación abierta y sistema nacional de innovación.",
        file: "Práctica 2  TRANSFERENCIA DE CONOCIMIENTO CIENTÍFICO - INDUSTRIAL EN INGENIERÍA DE SOFTWARE (1).pdf",
      },
      {
        title: "Ensayo Unidad 1",
        type: "Ensayo",
        date: "4 mar 2026",
        summary:
          "Postura crítica sobre el marco legal mexicano para software, derechos del programador y burocracia de protección intelectual.",
        file: "Ensayo Unidad 1 (1).pdf",
      },
    ],
  },
  {
    id: "unidad-2",
    label: "Unidad 2",
    title: "Estrategia de protección e impacto tecnológico",
    description:
      "Evidencias que profundizan en portafolios de PI, cronogramas de registro, evolución tecnológica y análisis del desarrollo de software en México.",
    items: [
      {
        title: "Práctica 3 - Portafolio de evidencias",
        type: "Práctica en equipo",
        date: "13 mar 2026",
        summary:
          "Trabajo colaborativo sobre protección de propiedad intelectual para una plataforma SaaS con enfoque regional en Tijuana.",
        file: "Reporte Practica 3 (1) (1).pdf",
        resources: [
          {
            label: "Repositorio GitHub",
            url: "https://github.com/cesar-programmer/gestion-de-la-inovacion",
          },
          {
            label: "Sitio publicado",
            url: "https://cesar-programmer.github.io/gestion-de-la-inovacion/",
          },
        ],
      },
      {
        title: "Práctica 4 - Plan de trabajo para el registro de propiedad intelectual de software en México",
        type: "Práctica",
        date: "6 abr 2026",
        summary:
          "Diseño de expediente, cronograma, presupuesto y matriz de riesgos para registrar ElotApp ante INDAUTOR.",
        file: "Enterga de Reporte de Taller Practica 4 (1) (1).pdf",
      },
      {
        title: "Práctica 5 - Análisis del impacto de la evolución tecnológica en la ingeniería de software",
        type: "Práctica",
        date: "14 abr 2026",
        summary:
          "Entrega compuesta por el análisis histórico y la línea de tiempo sobre propiedad intelectual, patentes e innovación industrial.",
        file: "ANÁLISIS DEL IMPACTO DE LA EVOLUCIÓN TECNOLÓGICA EN LA INGENIERÍA DE SOFTWARE (1) (1).pdf",
        resources: [
          {
            label: "Infografía de apoyo",
            url: pdfUrl("Blue organic timeline infographic (1).pdf"),
          },
        ],
      },
      {
        title: "Ensayo Unidad 2",
        type: "Ensayo",
        date: "21 abr 2026",
        summary:
          "Análisis del panorama mexicano de innovación tecnológica, nearshoring, IA y perspectivas del software a cinco años.",
        file: "Entrega de Reporte Taller Practica 6.pdf",
      },
    ],
  },
  {
    id: "unidad-3",
    label: "Prácticas Finales",
    title: "IA generativa e industria de software",
    description:
      "Cierre del curso con trabajos enfocados en la evolución reciente de los modelos de lenguaje y en el desarrollo de la industria de software en México.",
    items: [
      {
        title: "Práctica 7 - Evolución de los grandes modelos de lenguaje hasta abril de 2026",
        type: "Práctica",
        date: "28 abr 2026",
        summary:
          "Análisis sobre GPT, Claude, Gemini, modelos open source, multimodalidad, agentes, seguridad y retos de gobernanza de los LLMs.",
        file: "Entrega de Reporte Taller Practica 7.pdf",
      },
      {
        title: "Práctica 8 - Desarrollo de la industria de software en México",
        type: "Práctica",
        date: "5 may 2026",
        summary:
          "Revisión de ecosistemas regionales, nearshoring, talento, empresas mexicanas de software y oportunidades para fortalecer el sector nacional.",
        file: "Entrega de Reporte Taller Practica 8.pdf",
      },
      {
        title: "Práctica 9 - Innovación y desarrollo tecnológico en Baja California",
        type: "Práctica",
        date: "12 may 2026",
        summary:
          "Análisis del ecosistema regional de Baja California, empresas locales de software, transformación digital e impacto económico en la región Tijuana-San Diego.",
        file: "Entrega de Reporte Taller Practica 9.pdf",
      },
      {
        title: "Tabla comparativa Práctica 9",
        type: "Matriz técnica",
        date: "12 may 2026",
        summary:
          "Comparativa técnica entre ArkusNexus, ITJ y Advancio con enfoque en stack, certificaciones, métricas DORA y ventajas competitivas.",
        file: "Tabla Comparativa Practica 9.pdf",
      },
    ],
  },
  {
    id: "proyecto-integrador",
    label: "Proyecto Integrador",
    title: "ElotApp como caso aplicado",
    description:
      "Conjunto de documentos técnicos y funcionales que muestran el proyecto móvil utilizado como ejemplo en varias prácticas de la materia.",
    items: [
      {
        title: "Diseño de proyecto - ElotApp",
        type: "Diseño",
        date: "2026",
        summary:
          "Documento técnico con arquitectura general, capas del sistema, navegación e integración con los módulos del curso.",
        file: "M5.2_Diseño de proyecto (2).pdf",
      },
      {
        title: "Manual de Usuario - ElotApp",
        type: "Manual",
        date: "2026",
        summary:
          "Guía funcional de inventario, ventas, reportes, búsqueda, notificaciones y asistente con IA para el negocio.",
        file: "Manual_de_Usuario_ElotApp.pdf",
      },
      {
        title: "Código fuente - ElotApp",
        type: "Código",
        date: "2026",
        summary:
          "Compilación del código fuente y recursos de la aplicación Android desarrollada como soporte del proyecto.",
        file: "codigo fuente ElotApp.pdf",
      },
    ],
  },
];

const bibliographyGroups = [
  {
    title: "Marco legal y registro de software",
    items: [
      { citation: "IMPI. Búsqueda rápida - MARCia.", url: "https://marcia.impi.gob.mx/" },
      {
        citation:
          "Ventanilla Única MIPYMES. Obtención de registro de marca ante el IMPI.",
        url: "https://ventanillamipymes.economia.gob.mx/obtencion-de-registro-de-marca-ante-el-impi/",
      },
      {
        citation:
          "Enbucle. ¿Mi marca dura 3 años ó 10? Lo que necesitas saber sobre la vigencia de marca y la declaración de uso.",
        url: "https://www.enbucle.mx/blog/vigencia-marca-declaracion-uso-impi",
      },
      { citation: "Secretaría de Cultura - INDAUTOR. Instituto Nacional del Derecho de Autor.", url: "https://www.indautor.gob.mx/" },
      {
        citation: "Secretaría de Cultura - INDAUTOR. Registro Público del Derecho de Autor.",
        url: "https://www.indautor.gob.mx/documentos/informacion-general/Registro.pdf",
      },
      { citation: "Secretaría de Cultura - INDAUTOR. Trámites en línea.", url: "https://tramitesindautor.cultura.gob.mx/" },
      {
        citation: "Dirección del Registro Público del Derecho de Autor. Solicitud de Registro de Obra RPDA-01.",
        url: "https://www.indautor.gob.mx/servicios/documentos_registro/RPDA01.pdf",
      },
      {
        citation: "Cámara de Diputados del H. Congreso de la Unión. Ley Federal del Derecho de Autor.",
        url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf",
      },
      {
        citation: "Cámara de Diputados del H. Congreso de la Unión. Reglamento de la Ley Federal del Derecho de Autor.",
        url: "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFDA.pdf",
      },
      {
        citation: "Instituto Nacional del Derecho de Autor. Obra literaria o artística.",
        url: "https://tramitesindautor.cultura.gob.mx/tramites-mas-informacion/01/indautor-01-001.html",
      },
      {
        citation: "Instituto Nacional del Derecho de Autor. Solicitud de Registro de Obra: Hoja adjunta (RPDA-01-A1).",
        url: "https://www.indautor.gob.mx/servicios/documentos_registro/RPDA01A1.pdf",
      },
      {
        citation: "Instituto Nacional del Derecho de Autor. Guía de llenado de formatos de registro.",
        url: "https://www.indautor.gob.mx/servicios/guias_registro.php",
      },
      {
        citation: "Instituto Mexicano de la Propiedad Industrial. Servicios que ofrece el IMPI: Patentes.",
        url: "https://www.gob.mx/impi/acciones-y-programas/servicios-que-ofrece-el-impi-patentes",
      },
      {
        citation: "Instituto Mexicano de la Propiedad Industrial. Servicios que ofrece el IMPI.",
        url: "https://www.gob.mx/impi/acciones-y-programas/servicios-que-ofrece-el-impi",
      },
      {
        citation: "Organización Mundial de la Propiedad Intelectual. WIPO Lex: Federal Law on Copyright (Mexico).",
        url: "https://www.wipo.int/wipolex/en/legislation/details/20225",
      },
      {
        citation: "Organización Mundial de la Propiedad Intelectual. WIPO Lex: Federal Law on the Protection of Industrial Property, Mexico.",
        url: "https://www.wipo.int/wipolex/en/legislation/details/20034",
      },
    ],
  },
  {
    title: "Innovación, transferencia y ecosistema regional",
    items: [
      {
        citation:
          "Castro-Galván, E., & Czares-Garrido, I. V. (2022). La transferencia del conocimiento y las capacidades de medición y calibración en laboratorios nacionales de metrología. Revista CEA.",
        url: "https://doi.org/10.22430/24223182.1834",
      },
      {
        citation:
          "Díaz Rodríguez, H. E., & Morales Sánchez, M. A. (2023). Transferencia tecnológica e innovación sectorial en México. Análisis Económico.",
        url: "https://doi.org/10.24275/uamazcdcshae2023v38n98Diaz",
      },
      {
        citation:
          "García Martínez, J. C. (2014). El entorno universitario como factor en la transferencia de conocimientos a través de incubadoras de empresas.",
      },
      {
        citation:
          "Vázquez González, E. R. (2017). Transferencia del conocimiento y tecnología en universidades.",
        url: "https://www.redalyc.org/journal/3933/393557921004",
      },
      {
        citation:
          "Chesbrough, H. (2003). Open innovation: The new imperative for creating and profiting from technology.",
      },
      {
        citation:
          "Etzkowitz, H., & Leydesdorff, L. (2000). The dynamics of innovation: From National Systems and Mode 2 to a Triple Helix of university-industry-government relations.",
        url: "https://doi.org/10.1016/S0048-7333(99)00055-4",
      },
      {
        citation: "Gobierno de Baja California. Ecosistema de innovación en Baja California.",
        url: "https://www.bajacalifornia.gob.mx/redcibaja",
      },
      { citation: "Tijuana EDC. Ecosistema de innovación: Oportunidades en Tijuana.", url: "https://es.tijuanaedc.org" },
      { citation: "Universidad Autónoma de Baja California. Unidades de vinculación e investigación.", url: "https://www.uabc.mx" },
      { citation: "INEGI. Encuesta sobre Investigación y Desarrollo Tecnológico (ESIDET).", url: "https://www.inegi.org.mx" },
      {
        citation:
          "Organización para la Cooperación y el Desarrollo Económicos. Manual de Oslo 2018.",
        url: "https://doi.org/10.1787/9789264304604-es",
      },
      {
        citation:
          "Organización Mundial de la Propiedad Intelectual. Global Innovation Index 2023.",
        url: "https://www.wipo.int/global_innovation_index/es/2023/",
      },
    ],
  },
  {
    title: "Historia tecnológica y propiedad industrial",
    items: [
      {
        citation: "Library of Congress. (2024). Invention of the telephone: Topics in Chronicling America.",
        url: "https://guides.loc.gov/chronicling-america-telephone-invention",
      },
      {
        citation: "Smithsonian National Air and Space Museum. (2022). You just invented the airplane, now what?",
        url: "https://airandspace.si.edu/stories/editorial/you-just-invented-airplane-now-what",
      },
      {
        citation: "United States Patent and Trademark Office. (2026). America's innovative history.",
        url: "https://www.uspto.gov/about-us/history/freedom250/americas-innovative-history",
      },
      {
        citation: "United States Patent and Trademark Office. (2026). Introduction.",
        url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-0020-introduction.html",
      },
      {
        citation: "World Intellectual Property Organization. (2023). Paris Convention for the Protection of Industrial Property.",
        url: "https://www.wipo.int/en/web/treaties/ip/paris/index",
      },
      {
        citation: "World Intellectual Property Organization. Summary of the Paris Convention for the Protection of Industrial Property (1883).",
        url: "https://www.wipo.int/en/web/treaties/ip/paris/summary_paris",
      },
    ],
  },
  {
    title: "Innovación tecnológica y software en México",
    items: [
      {
        citation:
          "Solleiro, J. L., Gaona, C., & Castañón, R. (2014). Políticas para el desarrollo de sistemas de innovación en México.",
      },
      { citation: "Márquez, G., & Guadalupe, M. (2014). Innovation and productivity across Mexican manufacturing firms." },
      {
        citation:
          "Trejo-Berumen, K. S., González-García, M., & García-Mexía, R. (2018). Mexico's national innovation system: A comparative analysis with Spain and the United States.",
      },
      { citation: "Casanova, L., & Rullán, M. A. (2016). A review of the Mexican national innovation system." },
      {
        citation:
          "Gómez-Merino, F. C., Trejo-Téllez, L. I., Méndez-Cadena, M. E., & Hernández-Cázares, A. S. (2017). Education, science and technology in Mexico: Challenges for innovation.",
        url: "https://doi.org/10.5539/ies.v10n5p115",
      },
      { citation: "Wainwright, O. (2022). Values and vendettas: Populist science governance in Mexico." },
      { citation: "Guerrero, A., & Grediaga, R. (1995). R&D at the Autonomous National University of Mexico." },
      { citation: "Solano, S., & Solleiro, J. L. (2016). Promoting the development of the academic path through the National System of Researchers." },
      {
        citation:
          "López, A., Martínez, J., & Ramírez, P. (2024). Bridging the digital divide in Mexico: A critical analysis of telecommunications infrastructure and predictive models for policy innovation.",
      },
      { citation: "Coria, S. R., & García-García, L. M. (2022). Digital divide among the States of Mexico: A comparison 2010-2020." },
      {
        citation:
          "Gómez-Barroso, J. L., & Marbán-Fernández, J. G. (2020). Information and communication technologies and their impact on competitiveness in Latin America.",
      },
      { citation: "Dutta, S., Lanvin, B., & Wunsch-Vincent, S. (2022). Pillars of the Global Innovation Index by income level of economies." },
      { citation: "Polyakov, E. (2024). Innovation's performance: A transnational analysis based on the Global Innovation Index." },
      { citation: "Polyakov, E. (2024). Differentiation of innovation ecosystems of the countries being the Global Innovation Index leaders in the global competitive context." },
      { citation: "Li, X. (2024). Theoretical evolution of national innovation system and the construction of its overall framework." },
      { citation: "Khan, F., Lakshmana Kumar, R., Kadry, S., & Nam, Y. (2021). The future of software engineering: Visions of 2025 and beyond." },
      { citation: "Terragni, V., Roop, P., & Blincoe, K. (2024). The future of software engineering in an AI-driven world." },
      { citation: "Dohmke, T., Iansiti, M., & Richards, G. (2023). Sea change in software development: Economic and productivity analysis of the AI-powered developer lifecycle." },
      { citation: "Wang, Y., et al. (2024). I don't use AI for everything: Exploring utility, attitude, and responsibility of AI-empowered tools in software development." },
      { citation: "Ferreira, J., et al. (2025). Expectations vs reality: A secondary study on AI adoption in software testing." },
      { citation: "Storey, M.-A., et al. (2024). AI in software engineering at Google: Progress and the path ahead." },
      { citation: "Katsaris, I., & Vidakis, N. (2024). Complex thinking and adopting artificial intelligence tools: A study of university students." },
    ],
  },
  {
    title: "Modelos de lenguaje, IA generativa y evaluación de LLMs",
    items: [
      { citation: "Chen, X., et al. (2024). Eight methods to evaluate robust unlearning in LLMs.", url: "https://arxiv.org/abs/2402.16835" },
      { citation: "Dohmke, T., Iansiti, M., & Richards, G. (2023). Sea change in software development: Economic and productivity analysis of the AI-powered developer lifecycle.", url: "https://arxiv.org/abs/2306.15033" },
      { citation: "European Parliament. (2024). The EU Artificial Intelligence Act: Implications for healthcare.", url: "https://doi.org/10.1016/S0140-6736(24)xxxxxx" },
      { citation: "Freitag, T. (2026). Open-source LLMs compared 2026 - 25+ models you should know.", url: "https://till-freitag.com/en/blog/open-source-llm-comparison" },
      { citation: "Instaclustr by NetApp. (2026). Top 7 open source LLMs for 2026.", url: "https://www.instaclustr.com/education/open-source-ai/top-7-open-source-llms-for-2026/" },
      { citation: "Katsaris, I., & Vidakis, N. (2024). Complex thinking and adopting artificial intelligence tools: A study of university students.", url: "https://doi.org/10.3389/feduc.2024.1377553" },
      { citation: "López Espejel, J., Ettifouri, E. H., Yahaya Alassan, M. S., Chouham, E. M., & Dahhane, W. (2023). GPT-3.5, GPT-4, or Bard? Evaluating LLMs reasoning ability in zero-shot setting and performance boosting through prompts.", url: "https://arxiv.org/abs/2305.12477" },
      { citation: "Minaee, S., Mikolov, T., Nikzad, N., Asgari-Chenaghlu, M., Socher, R., Amatriain, X., & Gao, J. (2024). Large language models: A survey.", url: "https://arxiv.org/abs/2402.06196" },
      { citation: "Nakagawa, K., et al. (2023). Performance of GPT-3.5 and GPT-4 on the Japanese Medical Licensing Examination: Comparison study.", url: "https://mededu.jmir.org/2023/1/e48002" },
      { citation: "NeurIPS 2024. (2024). Questioning the survey responses of large language models.", url: "https://neurips.cc/virtual/2024/poster/95348" },
      { citation: "OpenAI. (2023). GPT-4 technical report.", url: "https://arxiv.org/abs/2303.08774" },
      { citation: "OpenAI. (2023). GPT-4.", url: "https://openai.com/index/gpt-4-research/" },
      { citation: "OpenAI. (2022). ChatGPT: Optimizing language models for dialogue.", url: "https://openai.com/blog/chatgpt" },
      { citation: "Prompt Injection Working Group. (2026). Prompt injection attacks on agentic coding assistants.", url: "https://arxiv.org/abs/2601.17548" },
      { citation: "Shin, H., et al. (2023). Evaluating large language models for the national premedical exam in India.", url: "https://mededu.jmir.org/2024/1/e51523" },
      { citation: "Stanford Human-Centered AI Institute. (2026). 2026 AI Index report.", url: "https://hai.stanford.edu/ai-index/2026-ai-index-report" },
      { citation: "Stanford Human-Centered AI Institute. (2026). Technical performance (Chapter 2).", url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance" },
      { citation: "Stanford Human-Centered AI Institute. (2026). 2026 AI Index report released.", url: "https://aihub.org/2026/04/15/2026-ai-index-report-released/" },
      { citation: "Terragni, V., Roop, P., & Blincoe, K. (2024). The future of software engineering in an AI-driven world.", url: "https://arxiv.org/abs/2406.07737" },
      { citation: "U.S. MIT Technology Review. (2026). Want to understand the current state of AI? Check out these charts.", url: "https://www.technologyreview.com/2026/04/13/1135675/want-to-understand-the-current-state-of-ai-check-out-these-charts/" },
      { citation: "Vertu. (2026). Top open-source LLMs 2026: Compare Llama 3, Mistral & BentoML.", url: "https://vertu.com/lifestyle/navigating-the-world-of-open-source-large-language-models-a-comprehensive-guide" },
      { citation: "Zhang, J., et al. (2023). GPT-3.5 vs GPT-4: Evaluating ChatGPT's reasoning performance in zero-shot learning.", url: "https://www.nature.com/articles/s41598-023-46995-z" },
      { citation: "Artificial Analysis. (2024). Intelligence benchmarking methodology.", url: "https://artificialanalysis.ai/methodology/intelligence-benchmarking" },
      { citation: "BentoML. (2023). The best open-source LLMs in 2026.", url: "https://www.bentoml.com/blog/navigating-the-world-of-open-source-large-language-models" },
      { citation: "Exploding Topics. (2024). Top 50+ large language models (LLMs) in 2026.", url: "https://explodingtopics.com/blog/list-of-llms" },
    ],
  },
  {
    title: "Industria de software en México y desarrollo territorial",
    items: [
      { citation: "Alcor. (2025). Software development in Mexico: Projections for 2026.", url: "https://alcor.com/software-development-mexico/" },
      { citation: "BBVA Research. (2025). Mexico: Trade & FDI Outlook 1H 2025.", url: "https://www.bbvaresearch.com/wp-content/uploads/2025/09/mexico_trade_tariffs_1H25_fix.pdf" },
      { citation: "Rivera, M. Á., Ranfla, A., & Bátiz, J. L. (2010). Aprendizaje tecnológico en empresas de software en México. Cuatro territorios locales: Guadalajara, Tijuana, Mexicali y Distrito Federal." },
      { citation: "Rivera, M. Á., Ranfla, A., & Bátiz, J. L. (2017). Software companies in Mexico and their ties to local development.", url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-70362017000300037" },
      { citation: "Dominios.mx. (2019). The most important Mexican enterprises in the technological sector.", url: "https://www.dominios.mx/the-most-important-mexican-enterprises-in-the-technological-sector/" },
      { citation: "Friedrich-Naumann-Stiftung für die Freiheit. (2024). An industrial policy for Mexico.", url: "https://www.freiheit.org/mexico/industrial-policy-mexico" },
      { citation: "Grand View Research. (2022). Mexico business software and services market size & outlook, 2030.", url: "https://www.grandviewresearch.com/horizon/outlook/business-software-and-services-market/mexico" },
      { citation: "Grand View Research. (2022). Mexico custom software development market size & outlook, 2030.", url: "https://www.grandviewresearch.com/horizon/outlook/custom-software-development-market/mexico" },
      { citation: "Grand View Research. (2022). Mexico engineering software market size & outlook, 2025-2030.", url: "https://www.grandviewresearch.com/horizon/outlook/engineering-software-market/mexico" },
      { citation: "Grand View Research. (2022). Mexico software market size & outlook, 2024-2030.", url: "https://www.grandviewresearch.com/horizon/outlook/software-market/mexico" },
      { citation: "Hire in South. (2026). Nearshore software development in Mexico in 2026: Guide for U.S. companies.", url: "https://www.hireinsouth.com/post/nearshore-software-development-in-mexico-guide-for-u-s-companies" },
      { citation: "Linux Foundation. (2026). Open source and the future of AI: How agents are disrupting our systems, our precedent, and the human role in software.", url: "https://www.linuxfoundation.org/research/ai-exec-forum-2026" },
      { citation: "Michael Blair Associates. (2025). 7 exciting Mexican software companies.", url: "https://www.michaelblair.com/post/7-exciting-mexican-software-companies" },
      { citation: "Mordor Intelligence. (2025). Mexico IT services market size, share & 2030 trends report.", url: "https://www.mordorintelligence.com/industry-reports/mexico-it-services-market" },
      { citation: "Mordor Intelligence. (2026). Mexico IT services research - market analysis.", url: "https://www.mordorintelligence.com/market-analysis/it-services/mexico" },
      { citation: "N-iX. (2025). Nearshore software development in Mexico: 2026 guide.", url: "https://www.n-ix.com/nearshore-software-development-in-mexico/" },
      { citation: "N-iX. (2026). Nearshore to Guadalajara: A guide to Mexico's tech capital.", url: "https://www.n-ix.com/nearshore-guadalajara/" },
      { citation: "Palacios, J. (2005). La reestructuración del cluster electrónico de Guadalajara (México).", url: "http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-70362005000400005" },
      { citation: "Prodensa. (2024). Doing business in Mexico: The software development industry.", url: "https://www.prodensa.com/insights/blog/the-software-development-industry-in-mexico" },
      { citation: "Redipe. (2025). Educar para ser presenciales.", url: "https://revista.redipe.org/index.php/1/article/view/2304" },
      { citation: "Rivera, M. Á., Ranfla, A., & Bátiz, J. L. (2016). Software companies in Mexico and their ties to local development.", url: "https://www.probdes.iiec.unam.mx" },
      { citation: "ScienceSoft. (2026). The 2026 guide to nearshore software development in Mexico.", url: "https://www.scnsoft.com/software-development/nearshore/mexico" },
      { citation: "ScioDev. (2024). Top software development companies in Mexico.", url: "https://sciodev.com/blog/top-software-development-companies-in-mexico/" },
      { citation: "Softtek. (2025). Our company.", url: "https://www.softtek.com/our-company" },
      { citation: "Start-Ops. (2025). Analysis of the IT & software industry in Mexico.", url: "https://start-ops.com.mx/analysis-of-the-it-software-industry-in-mexico/" },
      { citation: "U.S. International Trade Administration. (2024). Mexico - Digital economy.", url: "https://www.trade.gov/country-commercial-guides/mexico-digital-economy" },
      { citation: "Zoolatech. (2024). Mexico software development outsourcing: All you need to know.", url: "https://zoolatech.com/blog/mexico-software-dvelopment-outsourcing/" },
      { citation: "Empresas de software en México y sus vínculos de desarrollo local. (2017). Problemas del Desarrollo, 48(190), 37-57." },
    ],
  },
  {
    title: "Empresas regionales de Baja California y evaluación técnica",
    items: [
      { citation: "Advancio. (s. f.). Advancio Inc: Custom software development & AI solutions." },
      { citation: "Advancio. (s. f.). Capabilities." },
      { citation: "ArkusNexus. (s. f.). AI-powered software development." },
      { citation: "ArkusNexus. (s. f.). About us." },
      { citation: "DevOps Research and Assessment (DORA). (s. f.). DORA's software delivery performance metrics." },
      { citation: "Google Cloud. (s. f.). Google Cloud Well-Architected Framework." },
      { citation: "International Organization for Standardization. (s. f.). ISO 9001:2015 - Quality management systems." },
      { citation: "International Organization for Standardization. (s. f.). ISO/IEC 27001 Information security management." },
      { citation: "ITJ. (s. f.). Build world-class engineering teams in Mexico." },
      { citation: "ITJ. (s. f.). About us." },
      { citation: "ITJ. (s. f.). IT services in Mexico with Build-Operate-Transfer model." },
      { citation: "LinkedIn. (s. f.). ArkusNexus." },
      { citation: "LinkedIn. (s. f.). ITJ." },
      { citation: "LinkedIn. (s. f.). Advancio." },
      { citation: "Salesforce AppExchange. (s. f.). ArkusNexus DBA Impel Consulting." },
    ],
  },
  {
    title: "Fuentes de apoyo metodológico y evaluación",
    items: [
      { citation: "Díaz Barriga, F., & Hernández, G. (2002). Estrategias docentes para un aprendizaje significativo." },
      { citation: "Barberá, E. (2005). Portafolios docentes y de aprendizaje: Una experiencia de formación en la Universidad a través de la Web." },
      { citation: "Klenowski, V. (2004). Portfolios for learning, assessment and professional development in higher education." },
      { citation: "Rodríguez León, Y. J. Guía de propiedad intelectual para la Facultad de Contaduría y Administración UABC Tijuana." },
      {
        citation: "Secretaría de Economía / Gobierno de Baja California. Instituto Estatal del Emprendedor: Servicios de apoyo en propiedad intelectual.",
        url: "https://www.bajacalifornia.gob.mx/bcemprendimiento",
      },
      { citation: "Marcapolis. Servicios de registro de marcas en Tijuana." },
      {
        citation:
          "Massuh-Villavicencio, C. (2026). Portafolios digitales con Google Sites para evaluar aprendizajes en docentes en formación inicial universitaria.",
        url: "https://doi.org/10.55040/vm811m14",
      },
      { citation: "Leal Sorriente, E. (2019). El portafolio de evidencias como herramienta de evaluación en la educación media y universitaria.", url: "https://mirincondeaprendizaje.com" },
    ],
  },
];

const totalEvidenceCount = evidenceGroups.reduce(
  (count, group) => count + group.items.length,
  0,
);

const totalReferenceCount = bibliographyGroups.reduce(
  (count, group) => count + group.items.length,
  0,
);

function App() {
  return (
    <div className="page-shell">
      <div className="page-noise" />

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Universidad Autónoma de Baja California</p>
          <h1>Repositorio de la materia Gestión de la Innovación</h1>
          <p className="hero-text">
            Repositorio académico reorganizado para mostrar los trabajos, documentos y
            bibliografía usados durante la materia de <strong>Gestión de la Innovación</strong>,
            cursada por Cesar Cordova Contreras.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#evidencias">
              Ver evidencias
            </a>
            <a className="secondary-link" href="#elotapp">
              Revisar ElotApp
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span className="hero-card-label">Ficha académica</span>
          <dl>
            <div>
              <dt>Alumno</dt>
              <dd>Cesar Cordova Contreras</dd>
            </div>
            <div>
              <dt>Matrícula</dt>
              <dd>1284551</dd>
            </div>
            <div>
              <dt>Carrera</dt>
              <dd>Ingeniería en Software y Tecnologías Emergentes</dd>
            </div>
            <div>
              <dt>Materia</dt>
              <dd>Gestión de la Innovación</dd>
            </div>
            <div>
              <dt>Profesor</dt>
              <dd>Rosas Murillo Jorge Abdon</dd>
            </div>
            <div>
              <dt>Institución</dt>
              <dd>Facultad de Ciencias Químicas e Ingeniería</dd>
            </div>
          </dl>
        </aside>
      </header>

      <main className="content-grid">
        <section className="summary-strip">
          <article>
            <span>Total de PDFs</span>
            <strong>{totalEvidenceCount}</strong>
          </article>
          <article>
            <span>Bloques organizados</span>
            <strong>{evidenceGroups.length}</strong>
          </article>
          <article>
            <span>Periodo visible</span>
            <strong>2026</strong>
          </article>
          <article>
            <span>Proyecto aplicado</span>
            <strong>ElotApp</strong>
          </article>
          <article>
            <span>Repositorio en línea</span>
            <strong>GitHub Pages</strong>
          </article>
          <article>
            <span>Fuentes reunidas</span>
            <strong>{totalReferenceCount}</strong>
          </article>
        </section>

        <section className="intro-panel">
          <div>
            <p className="section-tag">Resumen</p>
            <h2>Repositorio de la materia</h2>
          </div>
          <p>
            El sitio anterior estaba orientado a otro proyecto. Ahora la estructura se reutiliza
            como portafolio académico y concentra tus trabajos, cuestionarios, ensayos,
            prácticas, proyecto integrador y una sección nueva de documentos usados y
            bibliografía con las fuentes detectadas en los PDFs del repositorio.
          </p>
        </section>

        <section id="evidencias" className="evidence-sections">
          {evidenceGroups.map((group) => (
            <section
              key={group.id}
              id={group.id === "proyecto-integrador" ? "elotapp" : group.id}
              className="group-block"
            >
              <div className="group-heading">
                <div>
                  <p className="section-tag">{group.label}</p>
                  <h2>{group.title}</h2>
                </div>
                <p>{group.description}</p>
              </div>

              <div className="card-grid">
                {group.items.map((item) => (
                  <article className="evidence-card" key={item.file}>
                    <div className="card-meta-row">
                      <span className="card-type">{item.type}</span>
                      {item.date ? <span className="card-date">{item.date}</span> : null}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="card-links">
                      <a href={pdfUrl(item.file)} target="_blank" rel="noreferrer">
                        Abrir PDF
                      </a>
                      {item.resources?.map((resource) => (
                        <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
                          {resource.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="focus-panel">
          <div>
            <p className="section-tag">Enfoque del portafolio</p>
            <h2>Temas detectados en los documentos</h2>
          </div>

          <div className="focus-list">
            <article>
              <strong>Propiedad intelectual</strong>
              <p>IMPI, INDAUTOR, derechos patrimoniales, marcas, software y registro legal.</p>
            </article>
            <article>
              <strong>Innovación y transferencia</strong>
              <p>Triple Hélice, innovación abierta, I+D, ecosistema de Tijuana y relación academia-industria.</p>
            </article>
            <article>
              <strong>Análisis tecnológico</strong>
              <p>Evolución histórica, impacto de la IA, nearshoring y futuro del software en México.</p>
            </article>
            <article>
              <strong>Proyecto aplicado</strong>
              <p>ElotApp como ejemplo técnico con diseño, manual de usuario y compilación de código fuente.</p>
            </article>
          </div>
        </section>

        <section className="group-block" id="bibliografia">
          <div className="group-heading">
            <div>
              <p className="section-tag">Documentos usados</p>
              <h2>Bibliografía consolidada</h2>
            </div>
            <p>
              Esta sección reúne la bibliografía localizada en los trabajos revisados del
              repositorio para dejar visibles las fuentes legales, académicas y metodológicas
              que respaldan la materia.
            </p>
          </div>

          <div className="bibliography-grid">
            {bibliographyGroups.map((group, index) => (
              <details className="bibliography-card" key={group.title} open={index === 0}>
                <summary>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.items.length} referencias</p>
                  </div>
                  <span className="bibliography-toggle">Ver bloque</span>
                </summary>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.citation}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.citation}
                        </a>
                      ) : (
                        <span>{item.citation}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
