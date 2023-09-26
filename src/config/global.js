export default {
  global: {
    componenteFormativo: 'Reproducción natural en las especies pecuarias',
    descripcionCurso:
      'La reproducción es la base fundamental en los ciclos productivos, es el pedestal de la economía animal, porque un bajo índice de natalidad genera un retraso económico, pérdida de la rentabilidad y retardo en tiempos productivos. De allí, la gran importancia de la detección de celos para cada especie, el alistamiento de los animales para la monta, el seguimiento del cronograma productivo y reproductivo, el bienestar animal y otras actividades que coordinadamente impulsen la producción pecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Reproducción natural en las especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características reproductivas de las especies pecuarias',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Bienestar animal en proceso reproductivo de las especies pecuarias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Anatomía del aparato reproductor de la hembra y el macho',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Celo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mecanismos y herramientas para la detección del celo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Bioseguridad y manejo de los animales destinados para la reproducción natural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Elementos de conducción, sujeción e inmovilización para los animales en reproducción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principales enfermedades reproductivas por especie animal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Parámetros reproductivos en las especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fisiología de la reproducción natural',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Definición y descripción de ciclo estral de los animales domésticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proceso reproductivo de la monta natural',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Cronograma de proceso de monta natural en animales domésticos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comportamiento reproductivo animal',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Gestación por especie animal',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Evaluación de parámetros reproductivos',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Procedimientos estandarizados y de seguridad en el trabajo en la explotación destinada a la reproducción animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición y aplicación del POE en reproducción natural',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Tipos, procedimiento, registros y manejo en reproducción natural',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Buenas prácticas pecuarias en reproducción natural',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Normas de salud y seguridad en el trabajo y medio ambiente en explotaciones pecuarias dedicadas a la reproducción animal',
            hash: 't_4_4',
          },
        ],
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
      tema: 'Bienestar animal de las especies pecuarias',
      referencia:
        'Organización Mundial de Sanidad Animal [OIE]. (s. f.). <em>Código sanitario para los animales terrestres.</em>',
      tipo: 'Página web',
      link:
        'https://www.oie.int/es/que-hacemos/normas/codigos-y-manuales/acceso-en-linea-al-codigo-terrestre/?id=169&L=1&htmfile=titre_1.7.htm',
    },
    {
      tema: 'Anatomía del aparato reproductor del macho y de la hembra',
      referencia:
        'Porras, A. y Páramo, R. (2009). <em>Manual de prácticas de reproducción animal</em>. Universidad Nacional Autónoma de México.',
      tipo: 'PDF',
      link:
        'https://fmvz.unam.mx/fmvz/licenciatura/coepa/archivos/manuales_2013/Manual de Practicas de Reproduccion Animal.pdf',
    },
    {
      tema: 'Anatomía del aparato reproductor del macho y de la hembra',
      referencia:
        'Cortés-Vidauri, Z., Aréchiga-Flores, C., Rincón-Delgado, M., Rochín, Berumen, F., López-Carlos, M. y Flores-Flores, G. (2018). Revisión: El Ciclo Reproductivo de la Yegua. <em>Abanico Veterinario</em>, 8(3), p. 14-41.',
      tipo: 'PDF',
      link: 'http://dx.doi.org/10.21929/abavet2018.83.1',
    },
    {
      tema: 'Mecanismos y herramientas para la detección del celo',
      referencia:
        'Celotor – Detector de Celo Bovino. (2014). CELOTOR – <em>Video de presentación</em> [     Video]     . YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/PSAgVV0XdH0',
    },
    {
      tema: 'Mecanismos y herramientas para la detección del celo',
      referencia:
        'Pueyo, D. (2017). <<em>Efectividad de los cuatro métodos para la detección de celo en vacuno de carne</em>. Universidad Zaragoza.',
      tipo: 'PDF',
      link:
        'https://citarea.cita-aragon.es/citarea/bitstream/10532/3955/1/2017_493.pdf',
    },
    {
      tema:
        'Bioseguridad y manejo de los animales destinados para la reproducción natural',
      referencia:
        'PIC North America. (2018     ). <em>Manual de manejo para centros de sementales de PIC</em>',
      tipo: 'PDF',
      link:
        'https://www.pic.com/wp-content/uploads/sites/3/2018/10/Boar-Stud-Management-Guidelines-Spanish.pdf',
    },
    {
      tema: 'Principales enfermedades reproductivas por especie animal',
      referencia:
        'Alfonso, H. (2018). <em>Enfermedades de la reproducción bovina endémicas de Colombia.</em> Universidad Cooperativa de Colombia.',
      tipo: 'PDF',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/12389/1/2018_enfermedades_reproduccion_bovina_.pdf',
    },
    {
      tema: 'Principales enfermedades reproductivas por especie animal',
      referencia:
        'TvAgro. (2015). <em>Enfermedades Reproductivas en el Hato Ganadero</em> - TvAgro por Juan Gonzalo Angel      [     Video]     . YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nUgDS7APBmA',
    },
    {
      tema: 'Parámetros reproductivos en las especies pecuarias',
      referencia:
        'Bustillo, J.      y Melo, J. (2020). <em>Parámetros reproductivos y eficiencia reproductiva en ganado bovino.</em> Universidad Cooperativa de Colombia.',
      tipo: 'PDF',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/17465/1/2020_parametros_reproductivos_eficiencia.pdf',
    },
    {
      tema: 'Cronograma de proceso de monta  natural en animales domésticos.',
      referencia:
        'García, T. (2017). <em>Manejo de registros para bovinos en el sistema de producción de doble propósito.</em> Ganaderia.com.',
      tipo: 'Artículo',
      link:
        'https://www.ganaderia.com/destacado/Manejo-de-registros-para-bovinos-en-el-sistema-de-produccion-de-doble-proposito',
    },
    {
      tema: 'Gestación por especie animal',
      referencia:
        'Smok, C., Roa, I., y Rojas, M. (2014). Desarrollo fetal en mamíferos. Int. J. Med. Surg. Sci, 1(2), p     . 139-145.',
      tipo: 'PDF',
      link:
        'https://www.researchgate.net/publication/265162066_Desarrollo_Fetal_en_Mamiferos',
    },
    {
      tema:
        'Procedimientos estandarizados      y de seguridad y salud en el trabajo en la explotación destinada a la reproducción animal',
      referencia:
        'Ministerio del Trabajo. (s. f.). Sistema de Gestión de Seguridad y Salud en el Trabajo. Gov.co.',
      tipo: 'Página web',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo',
    },
  ],
  glosario: [
    {
      termino: 'Anatomía',
      significado:
        'ciencia que estudia la estructura del cuerpo y los diferentes órganos.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'necesidades básicas de los animales y la manera en que los individuos se enfrentan al medio.',
    },
    {
      termino: 'Ciclo',
      significado:
        'fases o estados por los que pasa un acontecimiento y que suceden en el mismo orden.',
    },
    {
      termino: 'Concepción',
      significado:
        'es la unión del espermatozoide y el óvulo, siendo este último fertilizado.',
    },
    {
      termino: 'Comportamiento',
      significado:
        'conjunto de respuestas o reacciones que tienen los seres vivos con relación al medio en que se encuentran.',
    },
    {
      termino: 'Cubrición',
      significado:
        'es el proceso donde el macho fecunda a la hembra cubriéndola.  ',
    },
    {
      termino: 'Dilatación',
      significado: 'aumento de longitud o superficie.  ',
    },
    {
      termino: 'Gestación',
      significado: 'periodo comprendido entre la concepción y el nacimiento. ',
    },
    {
      termino: 'Higiene',
      significado:
        ' limpieza y/o aseo para conservar la salud o lugares limpios.  ',
    },
    {
      termino: 'Medicina preventiva',
      significado:
        ' la unión de prácticas médicas para evitar la enfermedad.  ',
    },
    {
      termino: 'Mucus',
      significado:
        ' sustancia espesa y viscosa que recubre y humedece ciertas partes.  ',
    },
    {
      termino: 'Natalidad',
      significado: ' número de crías nacidas en un periodo determinado.  ',
    },
    {
      termino: 'Placenta',
      significado:
        ' masa esponjosa, adherida al útero, y a través de la cual se establece el intercambio de oxígeno y sustancias nutritivas entre la madre y el embrión. ',
    },
    {
      termino: 'Reproductores',
      significado: ' animales que están destinados solo a la reproducción.  ',
    },
    {
      termino: 'Secado',
      significado:
        ' periodo entre dos lactaciones donde la ubre descansa y se regenera para la siguiente lactación. ',
    },
    {
      termino: 'Semen',
      significado: ' líquido corporal que lleva los espermatozoides.  ',
    },
    {
      termino: 'Unidad pecuaria',
      significado:
        ' es el terreno aprovechado total o parcialmente para la producción pecuaria.  ',
    },
  ],
  referencias: [
    {
      referencia:
        'Arthur, G., Noakes, D. y Pearson, H. (1991). <em>Reproducción y obstetricia en veterinaria.</em> McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Cortés-Vidauri, Z., Aréchiga-Flores, C., Rincón-Delgado, M., Rochín, Berumen, F., López-Carlos, M. y Flores-Flores, G. (2018). Revisión: El Ciclo Reproductivo de la Yegua. <em>Abanico Veterinario</em>, 8(3), p. 14-41.',
      link: 'http://dx.doi.org/10.21929/abavet2018.83.1 ',
    },
    {
      referencia:
        'Cruz, M., Mogollón, J., Rincón, M., Peña, N., Ruiz, S. y Lora, A. (2006). P revalencia serológica del síndrome reproductivo y respiratorio porcino (PRRS) en cerdos de explotaciones extensivas de Colombia. <em>Revista de la Facultad de Medicina Veterinaria y de Zootecnia,</em> 53(1), p. 33-41.',
      link: 'https://www.redalyc.org/pdf/4076/407639211004.pdf ',
    },
    {
      referencia:
        'Ministerio de la Protección Social. 2006.  Por el cual se expide el Reglamento Técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercializa, expenda, importe o exporte en el país. Febrero 28 de 2006.',
      link:
        'https://www.ica.gov.co/getattachment/15425e0f-81fb-4111-b215-63e61e9e9130/2006d616.aspx ',
    },
    {
      referencia:
        'Decreto 1500 de 2007. [Ministerio de la Protección Social]. Por el cual se establece el reglamento técnico a través del cual se crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos Destinados para el Consumo Humano y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación. Mayo 4 de 2007.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2007decreto1500.pdf ',
    },
    {
      referencia:
        'Díaz, E     . (2013). Epidemiología de la brucelosis causada por Brucella melitensis, <em>Brucella suis y Brucella abortus en animales domésticos.</em> Rev. s  ci. t  ech Off. i     nt. Epiz., 32(1), p.      43-51.',
      link:
        'https://doc.oie.int/dyn/portal/digidoc.xhtml?statelessToken=37UYETiZiNqrbxW7J-QTl77lyTJR-9DIWT4NOy3zYDo=&actionMethod=dyn%2Fportal%2Fdigidoc.xhtml%3AdownloadAttachment.openStateless ',
    },
    {
      referencia:
        'García, D. y González, C. (2009). <em>Manejo de las novillas de reemplazo.</em> Fundación GIRARZ.',
      link:
        'https://www.researchgate.net/publication/260870113_Edad_al_primer_servicio_y_primer_parto_de_novillas_Doble_PropositoG ',
    },
    {
      referencia:
        'Hernández, P. y Gómez,  A. (2011) Leptospirosis:  una zoonosis que afecta a la salud pública y la producción pecuaria. <em>Revista Ciencia Animal</em>, 1 (4), p.15-23.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1032&context=ca ',
    },
    {
      referencia:
        'Instituto Nacional Tecnológico [INATEC]. (2018). <em>Manejo productivo y reproductivo en bovinos, ovinos, caprinos y equinos.</em>',
      link:
        'https://www.tecnacional.edu.ni/media/Manual_Bovino_y_Caprino_opt.pdf ',
    },
    {
      referencia:
        'Ministerio del Trabajo. (s. f.). <em>Sistema de Gestión de Seguridad y Salud en el Trabajo.</em> Gov.co.',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo ',
    },
    {
      referencia:
        'Niswender, G., Schwall, R., Fitz, T., Farin, C. y Sawyer, H. (1985). <em>Regulation of luteal function in domestic ruminants: New concepts. Proceedings of the 1984  Laurentian Hormone Conference,</em> 41, p.101-151.',
      link: 'https://doi.org/10.1016/B978-0-12-571141-8.50007-X ',
    },
    {
      referencia:
        'Pérez, J., Chacón, L., Otero, R., Cardona, J. y Andrade, F.  (2014). Relación entre la circunferencia escrotal, el crecimiento testicular y parámetros de calidad de semen en toros de raza Guzerat, desde la pubertad hasta los 36 meses de edad. <em>Revista de Medicina Veterinaria</em>, (27), p. 73-87.',
      link: 'http://www.scielo.org.co/pdf/rmv/n27/n27a07.pdf       ',
    },
    {
      referencia:
        'Van Eerdenburg, F. (2009). Detección de celo en vacas lecheras: Cómo vencer al toro. XXXVII <em>Jornadas Uruguayas de Buiatría.</em>',
      link: 'https://bibliotecadigital.fvet.edu.uy/handle/123456789/94 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
