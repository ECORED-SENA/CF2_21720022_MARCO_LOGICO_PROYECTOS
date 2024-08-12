export default {
  global: {
    componenteFormativo: 'Metodología del árbol de objetivos',
    descripcionCurso:
      'Este componente  explica la metodología del árbol de objetivos, transformando problemas identificados en objetivos claros y alcanzables. Detalla el proceso de convertir el problema central en un objetivo general, unificando resultados deseados y guiando acciones. La metodología asegura soluciones efectivas y sostenibles, impactando positivamente al sector o comunidad involucrada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Árbol de objetivos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de alternativas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Árbol de objetivos',
      referencia:
        'Legalidad Por México (2017). 03 Árbol de objetivos [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MqrFhCn9AOs&ab_channel=LegalidadPorM%C3%A9xico',
    },
    {
      tema: 'Árbol de objetivos',
      referencia:
        'Ingenio Empresa (2018). Cómo hacer un ÁRBOL de problemas y objetivos - Metodología Marco Lógico (parte 2 y 3)  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=t4MVDbLXe5A&ab_channel=IngenioEmpresa',
    },
    {
      tema: 'Árbol de objetivos',
      referencia:
        'CONEVAL. (2013). Árbol del Problema y Árbol de Objetivos. Consejo Nacional de Evaluación de la Política de Desarrollo Social.',
      tipo: 'Articulo',
      link:
        'https://www.coneval.org.mx/Informes/boletin_coneval/boletin_monitoreo_01_2013/nota3.html',
    },
    {
      tema: 'Análisis de alternativas',
      referencia:
        'Ingenio Empresa (2018). Cómo hacer un Análisis de alternativas - Marco lógico (paso 4)  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ii-zmx-3Wp0&ab_channel=IngenioEmpresa',
    },
    {
      tema: 'Análisis de alternativas',
      referencia: 'UPC. (2013). Análisis de alternativas. Portal Camins.',
      tipo: 'Presentación',
      descarga:
        'https://portal.camins.upc.edu/materials_guia/250441/2013/Analisis%20de%20alternativas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Evaluación',
      significado:
        'proceso de análisis de alternativas y selección de estrategias más adecuadas para el proyecto.',
    },
    {
      termino: 'Impacto',
      significado:
        'efecto positivo que el proyecto tiene sobre el sector o comunidad involucrada.',
    },
    {
      termino: 'Medios-fines',
      significado:
        'relación entre las acciones necesarias (medios) y los resultados deseados (fines) del proyecto.',
    },
    {
      termino: 'Metodología',
      significado:
        'enfoque estructurado utilizado para transformar problemas en objetivos y desarrollar el proyecto.',
    },
    {
      termino: 'Objetivos',
      significado:
        'metas claras y alcanzables que se derivan de los problemas identificados y guían las acciones del proyecto.',
    },
    {
      termino: 'Problemas',
      significado:
        'situaciones negativas o desafíos identificados que requieren soluciones a través del proyecto.',
    },
    {
      termino: 'Soluciones',
      significado:
        'resultados deseados que se buscan alcanzar mediante la implementación de acciones específicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aragón Valley. (2015, 25 de febrero). El árbol de objetivos (goal tree) como método para establecer criterios.',
      link:
        'http://www.aragonvalley.com/es/arbol-de-objetivos-goal-tree-metodo-establecer-criterios/',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Cauca. (2007). La metodología del marco lógico del proyecto. Popayán. CRC. Cauca biosostenible.Subdirección General de Programación. Gerencia de Planeación.',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Cauca.(2007). La metodología del marco lógico del proyecto. Popayán. CRC. Cauca biosostenible.',
    },
    {
      referencia:
        'Hidráulica. (2000). Planeación de Proyectos Orientada a Objetivos. Método ZOPP. Comisión Nacional de Agua.',
    },
    {
      referencia:
        'INSADISA. (s.f.). Episodio 12. MML. Paso # 3. Árbol de objetivos.',
      link:
        ' https://insadisa.com/podcast/episodio-12-mml-paso-3-arbol-de-objetivos/',
    },
    {
      referencia: 'PMConsul. (s.f.). El Árbol de Objetivos.',
      link: ' https://www.pmconsul.com/el-arbol-de-objetivos/',
    },
    {
      referencia:
        'SDS Nayarit. (s.f.). III.1 Árbol de Objetivos. Secretaría de Desarrollo Sustentable de Nayarit. Recuperado de',
      link:
        'https://sds.nayarit.gob.mx/Content/files/Transparencia/GuiaMIR/III.1_Arbol_Objetivos.pdf',
    },
    {
      referencia:
        'SSWM.info. (2018, 4 de julio). Análisis con el Árbol de Problemas.',
      link: 'https://sswm.info/es/taxonomy/term/2647/problem-tree-analysis',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Yesid Mendoza Jerez',
          cargo: 'Experto temático',
          centro:
            'Centro de Fecha Gestión Agroempresarial de Oriente - Regional Santander',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Edgar Mauricio Cortes Garcia',
        //  cargo: 'Actividad didáctica',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
