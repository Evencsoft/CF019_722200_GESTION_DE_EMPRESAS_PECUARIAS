<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Reproducción natural en las especies pecuarias
    .row.justify-content-center.mb-4
      .col-xl-12
        p(data-aos="fade-down") La reproducción es un proceso por el cual se genera una descendencia de progenie, donde intervienen factores fenotípicos y genotípicos para dar las características necesarias de cada especie animal, que requiere de un macho y una hembra para realizar la copula, acto sobre el cual no hay una intervención directa del hombre.
  
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1	 Características reproductivas de las especies pecuarias
    
    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La reproducción natural en las especies pecuarias se genera de una manera sexual, para la cual se requiere de un macho con células sexuales (espermatozoides) y una hembra con células sexuales (óvulos), sin intervención directa del hombre. La actividad reproductiva está caracterizada por una fecundación por parte del espermatozoide al óvulo, la cual genera un proceso de fecundación, embarazo o preñez, y por último, el parto. Después del parto, se da un período de amamantamiento por parte de la madre a la cría, siendo fundamental para el desarrollo de su sistema inmune, así como su desarrollo músculo esquelético; en cuanto a la madre, continúa con su ciclo reproductivo muchas veces durante su vida.
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Tanto en el macho como en la hembra, aparecen de manera cíclica las conductas de apareamiento,  en un periodo especial en el que los animales presentan características físicas, biológicas, fisiológicas y comportamentales, las cuales determinan las condiciones necesarias para la aceptación por parte de la hembra y el deseo sexual por parte del macho.


    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2	 Bienestar animal en proceso reproductivo de las especies pecuarias

    .row.justify-content-center.mb-4
      .col-xl-12
        p(data-aos="fade-down") El bienestar animal juega un papel muy importante en las diferentes producciones pecuarias, debido a  que, si se tiene un animal en condiciones no muy favorables, este no expresará su potencial genético y por ende afectará negativamente la producción pecuaria.

    .row.mb-5.justify-content-center
      .col-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-regular Según la OIE (2021), el bienestar animal se define como “el estado físico y mental de un animal en relación con las condiciones en las que vive y muere”; dentro de estas, existen unas condiciones enunciadas en 1965, que a la fecha son derechos de los animales, pero responsabilidades del productor, las cuales son llamadas “las cinco libertades”:
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 OIE (2021).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4                
                .row 
                  .col-sm.mb-5.mb-sm-0
                    ul(style="display:block")
                      li(style="display:block") 
                        i.lista-ul__vineta
                        | Libre de hambre, sed y desnutrición.
                      li(style="display:block") 
                        i.lista-ul__vineta
                        | Libre de temor y angustia.
                      li(style="display:block") 
                        i.lista-ul__vineta
                        | Libre de molestias físicas y térmicas.
                      li(style="display:block") 
                        i.lista-ul__vineta
                        | Libre de dolor, lesión y enfermedad.
                      li(style="display:block") 
                        i.lista-ul__vineta
                        | Libre de manifestar un comportamiento natural.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") El bienestar animal puede ser medible con las diferentes características productivas, de acuerdo con las explotaciones pecuarias, porque son características que con una evaluación simple pueden ser identificadas, como se presenta a continuación.
        
    .tarjeta.tarjeta--amarilla.p-4(style="background-color:#FFFAD0")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Comportamiento
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.lista-ul__vineta
                    | Disminución en la ingesta de alimento.
                  li 
                    i.lista-ul__vineta
                    | Aumento en la frecuencia cardíaca.
                  li 
                    i.lista-ul__vineta
                    | Aumento en la respiración (jadeo).
                  li 
                    i.lista-ul__vineta
                    | Agresividad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Morbilidad
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.lista-ul__vineta
                    | Enfermedad.
                  li 
                    i.lista-ul__vineta
                    | Cogera.
                  li 
                    i.lista-ul__vineta
                    | Comprender etiología de la enfermedad.                 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Mortalidad
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.lista-ul__vineta
                    | Análisis causas de muerte.
                  li 
                    i.lista-ul__vineta
                    | Frecuencia de muerte.
                  li 
                    i.lista-ul__vineta
                    | Distribución espacio temporal de muerte.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Condición corporal
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.lista-ul__vineta
                    | Baja condición corporal.
                  li 
                    i.lista-ul__vineta
                    | Pérdida de peso significativa.                    
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Eficiencia reproductiva
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.lista-ul__vineta
                    | Bajo rendimiento reproductivo.
                  li 
                    i.lista-ul__vineta
                    | Anestros prolongación intervalos postpartos.
                  li 
                    i.lista-ul__vineta
                    | Baja tasa de concepción.
                  li 
                    i.lista-ul__vineta
                    | Alta tasa de abortos.
                  li 
                    i.lista-ul__vineta
                    | Alta tasa de distocia.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3	 Anatomía del aparato reproductor de la hembra y el macho

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Los órganos reproductores y la anatomía entre el macho y la hembra tienen diferencias importantes, que se deben conocer para el establecimiento de producciones pecuarias, como se describe a continuación.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Anatomía del aparato reproductor de la hembra

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Los órganos genitales de las hembras se dividen en 2 grupos:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1.
      span  #[i  Órganos genitales hembras]
    
    .row.justify-content-center.mb-5
      .col-md-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema1/img8.png', alt='Figura 1 Órganos genitales hembras En la figura se representa los internos: ovarios, oviducto, cuernos útero, cérvix, vagina, grupo genital externo: vulva con los labios vulvares, clítoris.')

    
    .row.justify-content-center.align-items-center
      .col-xl-12
        p(data-aos="fade-down") El aparato reproductor de las hembras varía, según la especie, en tamaño, forma y, en algunos casos, estructura, pero su anatomía y características anatómicas son las mismas, siendo este un grupo de estructuras tubulares que posee capas, cada una con sus funciones específicas de adentro hacia fuera. Se observa la mucosa, la cual se encarga de la secreción de lubricación y mucus, la submucosa, que dentro de sus funciones está la de sostener la mucosa y llevar toda la irrigación e inervación; se continúa con una capa muscular, la cual ayuda a la producción de contracciones y sostenimiento; y por último se encuentra la serosa, siendo un tejido conectivo y formadores epiteliales.
    
    .row.justify-content-center.aling.items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Un recorrido por los aparatos reproductores de diferentes especies, permitirá conocer un poco más sobre éste tema:

    .tarjeta.tarjeta--amarilla.p-4.mb-5(style="background-color:#FFFAD0")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 2.
            span  #[i  Órganos genitales hembras]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img9.png', alt='Figura 2 Posición anatómica de los órganos reproductivos de las hembras. En la figura se observan la posición anatómica de los órganos reproductivos de vaca, cerda y yegua')
        
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 3.
            span  #[i  Aparato reproductor de la vaca]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Figura 3 Aparato reproductor de la vaca. En la figura se observan el recto, vulva, vestíbulo, vagina, cuerpo del útero, cervix, cuernos uterinos, oviducto, ovario, pelvis, vejiga.')

        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 4.
            span  #[i  Tracto reproductivo de la cerda]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img11.png', alt='Figura 4 Tracto reproductivo de la cerda. En la figura se observan el tracto reproductivo de la cerda.')
        
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 5.
            span  #[i  Aparato reproductivo yegua]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img12.png', alt='Figura 5 Tracto reproductivo de la yegua. En la figura se observan el tracto reproductivo de la yegua.')
        
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 6.
            span  #[i  Aparato reproductivo cabra]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img13.png', alt='Figura 6 Aparato reproductivo cabra. En la figura se observan aparato reproductivo cabra')

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Ovarios

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") En los ovarios, se producen las células productoras de los gametos femeninos, en este caso, los óvulos, los cuales serán fecundados por los espermatozoides. Dentro de sus funciones principales, se encuentra la intervención en la producción hormonal y el desarrollo de los ovocitos, como se aprecia a continuación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#FFFAD0")
          .titulo-sexto.color-acento-contenido.offset-1
              h5 Figura 7.
              span  #[i  avarios yegua]
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='Figura 7 Ovarios yegua. En la figura se observan ambos ovarios con diferentes fases Foliculares')

          h3.text-center Yegua
          p En la imagen observamos ambos ovarios con diferentes fases Foliculares.<br><br><br>          

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#FFFAD0")
          .titulo-sexto.color-acento-contenido.offset-1
              h5 Figura 8.
              span  #[i  Ovario cerda]
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='Figura 8 Ovario cerda. En la figura se observan el ovario de la cerda')

          h3.text-center Cerda
          p El ovario de las cerdas es diferente físicamente al resto, ya que tiene su aspecto de mora o racimo de uvas característico.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#FFFAD0")
          .titulo-sexto.color-acento-contenido.offset-1
              h5 Figura 9.
              span  #[i  Ovario oveja]
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img16.png', alt='Figura 9 Ovario oveja. En la figura se observan el ovario de la oveja')

          h3.text-center Oveja
          p Se observa un ovario con diferentes fases foliculares.<br><br> 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Dentro de los ovarios, se pueden encontrar diferentes estructuras, llamadas hallazgos foliculares, las cuales, dependiendo de su grado de madurez o inmadurez, fases del ciclo estral y niveles hormonales, regulan el desarrollo de dichos hallazgos, estos son importantes de conocer, ya que así se puede evaluar la capacidad reproductiva de la hembra, alta o baja tasa de concepción, tiempos de preñez, entre otros factores importantes para el sistema productivo. Dentro de estas estructuras antes mencionadas, se encuentran:
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-verde").mb-5(style="background-color=#DBF9BD")
      .row(titulo="Folículos")
        .col-12
          p Un folículo es el lugar donde se llevará a cabo el desarrollo del óvulo, que posteriormente pasará a ser maduro o inmaduro; este folículo libera la hormona estrógeno, la cual prepara al animal para iniciar el proceso de gestación. Cuando los folículos maduran, hay un desprendimiento de un óvulo fértil, listo para ser fecundado. La maduración de los folículos depende del grado folicular en el que estén, se pueden dividir como folículo primario, folículo secundario y folículo de Graaf (folículo maduro). Según la especie animal, depende el número de folículos maduros:
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen para mostrar los folículos maduros de cada especie, ovinos 1-4, porcinos 10-25, equinos 1-2 y bovinos 1-2')
      
      .row(titulo="Cuerpo lúteo")
        .col-12
          p Se desarrolla a partir de las células de la teca y de la granulosa, ambos componentes del folículo ovulatorio que alojan al ovocito. "A partir de estas estructuras, se forman células pequeñas y grandes para formar el CL, que produce la hormona progesterona (P4), pero en hembras no gestantes sufre regresión al finalizar el ciclo estral". (#[i Niswender] et al., 1985) (Cortés-#[i Vidauri] et al., 2018).
          p En el ganado bovino, se pueden palpar los diferentes cuerpos lúteos y su desarrollo desde el 4º o 5º día de desarrollo y se palpa un ovario sobresaliente y en ocasiones deforme.
      
      .row(titulo="Cuerpo hemorrágico")
        .col-12
          p Estructura resultante después de que el folículo maduro genera la ovulación; este deja como resultado un espacio que es conocido como fosa de ovulación, que posteriormente se llenará de componente sanguíneo y tejido, que mediante las palpaciones o ecografías puede ser detectable.

      .row(titulo="Cuerpo albicans")
        .col-12
          p El cuerpo albicans es el resultado de la autolisis de un cuerpo amarillo que no llegó a hacer la luteolisis completa, genera una pequeña cicatriz blanquecina, dándole nombre a esta estructura.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Conozca las otras estructuras que componen el aparato reproductor de la hembra:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-9
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Oviducto o Trompas de Falopio")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p Los oviductos son estructuras pares continuas a los ovarios los cuales dentro de sus funciones básicas está: el transporte de los gametos sexuales tanto masculino como femenino, lugar donde se realiza la fecundación. Esta estructura anatómica está ligada a dos hormonas femeninas siendo la progesterona una hormona inhibitoria y el estrógeno una hormona estimulante del oviducto.
              p El oviducto como estructura anatómica se divide en 3 porciones infundíbulo ámpula e istmo donde el infundíbulo es la porción más cercana a los ovarios la cual da tránsito y colección de óvulos para pasar el ámpula lugar donde se da la fecundación y por ultimo pasar al istmo que es el lugar más cercano a los cuerno uterinos.
          
          .row(numero="2" titulo="Cuernos uterinos")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p Estructura bicornual que forma parte del útero de gran importancia ya que allí se realiza el almacenamiento del esperma. (En las yeguas se presenta el almacenamiento en el canal cervical)

          .row(numero="3" titulo="Útero")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p Estructura conformada por los cuernos uterinos, cuerpo del útero y cérvix. Su función principal es la de alojar el embrión o feto frente a su nutrición, crecimiento y desarrollo. Allí también se genera los procesos de placentación por medio de unas estructuras llamadas carúnculas estas se fijan a la musculatura del endometrio uniéndose a los cotiledones y por medio de acciones de los estrógenos y progesterona se da el proceso de preñez. 
          
          .row(numero="4" titulo="Cérvix")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p El cérvix es una estructura que genera protección del útero, en algunas especies como el ganado bovino este secreta un mucus con propiedades antibacterianas preparándose para la gestación (estro), cuando la vaca está servida y o gestante este cérvix produce un moco mucho más denso generando un tapón que sella y protege el útero, en caso de generar ruptura de este tapón puede provocar un aborto. En el cérvix encontramos unas estructuras muy características de cada especie que son los anillos cervicales estos cumplen una función de barrera física para evitar el ingreso de patógenos y elementos extraños.
              p Cada especie animal tiene un número determinado de anillos cervicales.
              h5 Tabla 1.
              span  #[i  Características del cérvix]               
              .tabla-a.color-secundario
              table(style="background-color: #FFFFFF")
                thead(style="background-color: #1B3F5E;color:#FFFFFF")
                  tr
                    th Especie animal
                    th Bovino 
                    th Porcino
                    th Equino
                    th Ovino
                tbody
                  tr 
                    th(style="background-color: #1B3F5E;color:#FFFFFF") Características del cérviz
                    td De 3 a 4 años muy prominentes
                    td En forma de tirabuzón
                    td Pliegues longitudinales
                    td De 5 a 7 anillos muy prominentes
              

          .row(numero="5" titulo="Vagina")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p Órgano en el cual se realiza la copula de forma tubular y con gran dilatación, encargada de la recepción del pene del macho y canal de parto, el piso de la vagina es llamado vestíbulo en el cual encontramos estructuras como orificio uretral, glándulas anexas y en la cerda una diferencia que es el divertículo uretral.
              p En la monta natural el semen se deposita en muy cerca a la apertura del cérvix.

          .row(numero="6" titulo="Vulva")
            .col-md-12.mb-4.mb-md-0(style="background-color: #DBF9BD")
              p Dentro de los órganos genitales la vulva es el más externo, siendo la parte más visible y generalmente confundido con la vagina, la vulva cuenta con unos labios vulvares mayores, unos menores y como homologo femenino del pene encontramos al clítoris en la zona ventral.
      .col-3
        figure
          img(src='@/assets/curso/temas/tema1/img18.png', alt='')
    
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Anatomía del aparato reproductor del macho

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") El aparato reproductor masculino es un conjunto de estructuras encargadas de la producción de células sexuales masculinas y diferentes hormonas androgénicas, para brindar capacidades reproductivas, físicas y comportamentales propias de un macho.
        p(data-aos="fade-down") Los órganos genitales masculinos constan del pene y prepucio, testículos, escroto, conductos deferentes, ampollas deferentes y glándulas accesorias (próstata, glándulas bulbouretrales y vesiculares o vesícula seminal).
        p(data-aos="fade-down") A continuación, se aprecia la anatomía de los órganos reproductivos masculinos de las diferentes especies de reproducción para la explotación pecuaria.

    .tarjeta.tarjeta--amarilla.p-4.mb-5(style="background-color:#FFFAD0")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 10.
            span  #[i  Anatomía de los órganos reproductivos del macho diferentes especies]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img19.png', alt='Figura 10 Anatomía de los órganos reproductivos del macho diferentes especies. En la figura se representa la anatomía de los órganos reproductivos del macho diferentes especies. ')
        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 11.
            span  #[i  Anatomía del aparato reproductor del macho bovino]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img20.png', alt='Figura 11 Anatomía del aparato reproductor del macho bovino. En la figura se representa la posición anatomía del aparato reproductor del macho Bovino')

        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 12.
            span  #[i  Posición anatómica de los órganos reproductivos machos]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img21.png', alt='Figura 12 Posición anatómica de los órganos reproductivos machos. En la figura se representa la posición anatómica de los órganos reproductivos de los machos')

        .row
          .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 13.
            span  #[i  Aparato reproductor de los caprinos machos ]
          .row 
            figure
            img(src='@/assets/curso/temas/tema1/img21.png', alt='Figura 13 Aparato reproductor machos caprinos. En la figura se observan el aparato reproductor machos caprinos')

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Pene

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Este órgano es el encargado de realizar el depósito seminal en la hembra y también cumple funciones del sistema urinario para la evacuación de la orina. El pene de los mamíferos está compuesto por dos tipos de musculatura:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#DBF9BD")
          
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', alt='Imagen del numero uno para identificar la tarjeta Musculutara bulbosponjosa')

          h3.text-center Musculatura bulboesponjosa
          p Se encarga de ayudar en los procesos de erección y evitar la pérdida de la misma, para así asegurar la cópula.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#DBF9BD")
          
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img24.svg', alt='Imagen del numero dos para identificar la Musculatura cavernosa')

          h3.text-center Musculatura cavernosa
          p La cual, por medio de irrigación sanguínea y llenado, genera la erección, esta musculatura se encuentra en la mayor parte del pene          
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p La musculatura cavernosa solo se encuentra en los penes de tipo vascular y está ausente en los tipos de penes fibroelásticos, estos poseen un tejido conectivo, que no deja expandir su diámetro, por ende, poseen una flexura sigmoidea, la cual permite acrecentar su tamaño en la erección.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") El pene está dividido anatómicamente en 3 secciones: la base, el cuerpo y el glande. Se le invita a conocer el tipo de pene en diferentes especies.


    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido
        .row(titulo="1")
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 14.
            span  #[i  Pene bovino ]          

          .col-md-12            
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='Figura 14. En la figura se representa el pene bovino con sus partes')
              figcaption Adaptado de Sisson y Grossman, (1973)


        .row(titulo="2")
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 15.
            span  #[i  Pene equino]
        
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema1/img26.png', alt='Figura 15 Pene Equino. En la figura se representa el pene equino con sus partes.')


        .row(titulo="3")
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 16.
            span  #[i  Pene porcino ]
        
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='Figura 16 Pene Equino. En la figura se representa el pene porcino con sus partes.')
        
        .row(titulo="4")
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 17.
            span  #[i  Pene de los caprinos ]
        
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema1/img28.png', alt='Figura 17 Pene Equino. En la figura se representa el pene de los caprinos con sus partes.')
        
        .row(titulo="5")
          .titulo-sexto.color-acento-contenido.offset-1
            h5 Figura 17.
            span  #[i  Pene de los caprinos ]
        
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema1/img29.png', alt='Figura 17 Pene Equino. En la figura se representa el pene de los caprinos con sus partes.')

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Otras estructuras reproductivas del macho, son:
      
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")      
      .row(titulo="Prepucio")
        .col-md-12
          p Órgano encargado de la protección y cobertura del pene cuando no está erecto, está compuesto de una capa piel externa e interna, así como también un orificio prepucial para la salida del pene y la orina. En los equinos por la gran cantidad de pliegues tiende al acumulo de esmegma.
      
      .row(titulo="Testículos")
        .col-md-12
          p Los testículos son los órganos encargados de la producción de gametos sexuales masculinos y la producción de la hormona masculina testosterona dicho órgano dependiendo la especie tiene su posición en los rumiantes evidenciamos que son colgantes y pendulantes mientras que en los equinos se encuentran no tan colgantes siendo un poco más horizontales, mientras tanto en los cerdos están más cerca de perineo y un poco más recogidos.
          p Los testículos poseen estructuras especializadas para la producción y transporte de esperma dentro de las cuales se encuentran los túbulos seminíferos los cuales son encargados de la producción espermática después pasan a la rete testi la cual recoge los espermatozoides enviándolos a la cabeza del epidídimo donde allí realizan el proceso de maduración y posterior almacenamiento, en caso de eyaculación el esperma viajaría por el conducto deferente.

      .row(titulo="Escroto")
        .col-md-12
          p El escroto es la estructura encarga de la protección y termorregulación testicular equipado de epitelio, pelos, glándulas sudoríparas sebáceas y diferentes capas de musculatura donde vemos músculos de gran importancia para la termorregulación como el musculo crémaster y el dartos.
      
      .row(titulo="Glándulas accesorias")
        .col-md-12
          p Las glándulas accesorias son de gran importancia para la reproducción masculina ya que son productoras de uno de los componentes más importantes para el transporte espermático como lo es el plasma seminal ya que sin este plasma seminal se vería afectado la nutrición, supervivencia y el transporte de los espermatozoides, como funciones complementarias ayuda a la limpieza del canal uretral.
      

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4	 Celo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") El celo, o el estro en las hembras, son cambios morfológicos y fisiológicos que se presentan inicialmente después de que la hembra alcanza la pubertad, y tiene  la capacidad de liberar gametos sexuales (óvulos) para una fecundación. En la hembra, existen cambios comportamentales y físicos característicos del celo, estos son:
    
    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.offset-1
        h5 Figura 18.
        span  #[i  Cambios comportamentales y físicos del celo ]
      
      .col-md-12
        figure
          img(src='@/assets/curso/temas/tema1/img30.png', alt='Figura 18 Cambios comportamentales y físicos del celo. En la figura se observan los cambios comportamentales y físicos del celo.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Aunque estos signos hablan claramente de la presencia del celo, también es importante tener en cuenta la edad del animal y su especie. En las hembras, se encuentran diferentes tipos de presentación del celo, según su periodicidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        ul(style="display:block")
          li(style="display:block") 
            i.lista-ul__vineta
            | Monoéstricas: perras.
          li(style="display:block") 
            i.lista-ul__vineta
            | Poliéstricas no estacionales: vacas y cerdas.
          li(style="display:block") 
            i.lista-ul__vineta
            | Poliéstricas estacionales: yeguas, gatas, cabras y ovejas.


    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Tenga en cuenta que las poliéstricas se diferencian por el número de celos presentados en el año.
          p ¿Cuánto tiempo dura el celo en la vaca, la oveja, la cerda y la yegua?

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img31.svg', alt='Figura 18 Cambios comportamentales y físicos del celo. En la figura se observan los cambios comportamentales y físicos del celo.')
      .col-lg-6
        ul(style="display:block")
            li(style="display:block") 
              i.lista-ul__vineta
              | El celo en la vaca tiene un período de 15 a 20 horas y se repetirá a los 21 días en caso de no ser servida o preñada.

            li(style="display:block") 
              i.lista-ul__vineta
              | En las ovejas, el celo dura un período de 24 a 36 horas y se repetirá a los 16 días en caso de no ser servida o preñada.
            
            li(style="display:block") 
              i.lista-ul__vineta
              | En las cerdas, el tiempo del celo es mucho más amplio, desde las primeras 8 horas hasta 36 horas, con una repetición del celo cada 21 días en caso de no ser montada.
            
            li(style="display:block") 
              i.lista-ul__vineta
              | La yegua presenta el celo principalmente entre marzo y julio, de forma natural, comprende la temporada natural de cruza; el celo dura entre 5 y 7 días.


    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.5	 Mecanismos y herramientas para la detección del celo
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-xl-9
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-12
            p Estos mecanismos y herramientas utilizados son muy valiosos, dado que la exactitud de esta detección es de suma importancia para el sistema productivo, pues se tiene como objetivo final obtener una buena tasa de concepción y así aumentar o mantener la producción.
            p La detección del celo puede realizarse por diferentes métodos y utilizando herramientas diferentes, por ende, cada método utilizado requerirá frecuencia de registros diferente, una observación o no, un manejo de animales, previo análisis, conocimiento, y carga de trabajo. Por esto, es importante conocerlos y así elegir el mejor, que se adecúe a las condiciones de cada explotación, teniendo como base fundamental el éxito reproductivo.
          .col-xl-12
            .cajon.color-sistema-c.p-4.mb-4(style="background-color:#E9ECE6")
              p No existe en el mercado ni en el mundo productivo un mecanismo y/o herramienta de detección con un porcentaje del 100 % de efectividad, generalmente, se usan las combinaciones de prácticas y herramientas para tener una mayor probabilidad del éxito en la detección.  

      .col-xl-3
        figure
          img(src='@/assets/curso/temas/tema1/img32.png', alt='')
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-xl-12
        p(data-aos="fade-down") Analice los principales mecanismos y herramientas para la detección del celo:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-xl-8
        h5 Tabla 2.
          span  #[i  Escala de puntos comportamiento astral]               
        .tabla-a.color-acento-botones.mb-5
          table
            caption Nota. Tomado de Van Eerdenburg (2009).
            thead
              tr
                th COMPORTAMIENTO
                th PUNTOS
            tbody
              tr
                td Descarga vaginal mucosa.
                td 3
              tr
                td Flehmen.
                td 3
              tr
                td Fatiga.
                td 5
              tr
                td Ser montada pero no quedarse quieta.
                td 10
              tr
                td Olfateo de la vulva de otra vaca.
                td 10
              tr
                td Descansar con la barbilla sobre otra vaca.
                td 15
              tr
                td Monta (o intento) a otras vacas.
                td 35
              tr
                td Montar de lado la cabeza de otras vacas.
                td 45
              tr
                td Celo con quietud.
                td 100
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-xl-12
        p(data-aos="fade-down") En la tabla anterior, Van Eerdenburg muestra unos comportamientos mediante ciertos puntos, los cuales serían como una calificación para la identificación de celo, donde una vaca con 50 puntos o más era positiva para celo, y la aceptación completa de la monta resulta en un 100. Es recomendable realizar observaciones largas, frecuentes y en diferentes horarios del día, ya que los animales no tienen una hora estipulada para mostrar dichas conductas. “Además, dada la tranquilidad y reducción de actividad de la granja durante las horas nocturnas, hay muchas vacas que muestran la sintomatología del celo por la noche” (Arthur et al., 1991).

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Mecanismos y herramientas para la detección del celo
    
    .tarjeta.tarjeta--amarilla.p-4(style="background-color:#FFFAD0")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Animales marcadores
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
              p Los animales marcadorees son y serán usados, ya que nada mejor que el macho para saber cuándo montar a la hembra, además de esto, realizar un proceso de estímulo hacia la hembra hará que entre mucho más rápido a la maduraz cuando hay un macho cerca. teniendo en cuanta estos animales marcadores o probadores existen varias formas de utilizarlos, ya sea utilizando dispositivos electrónicos de detección de monta o marcadores.
              p En algunos casos el animal marcador es el mismo reproductor, de la producción y en otros casos se utilizan animales con baja carga espermática o modificados quirúrgicamente (desviados), para no realizar la preñez, marcando así las vacas en celo, que posteriormente serán llevadas al toro reproductor para realizar la monta. En cerdos es muy común el uso de machos receladores para ver comportamiento de la hembra frente al macho y signos físicos característicos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img33.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Dispositivos electrónicos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Dentro de los dispositivos electrónicos encontramos uno muy característico con un funcionamiento simple pero útil en el momento de detección de celos, los podómetros, en ganado bovino son utilizados para medir la cantidad de pasos realizados por un animal, debido a que durante el estro o celo, las vacas aumentan su actividad y tienden a caminar más, este podómetro envía los datos a un computador o celular alertando el aumento de pasos frente a días anteriores, dando así un indicio de posible celo.
                p Estos dispositivos vienen tanto en collares como en pulseras que se colocan por encima de los corvejones y así guardan y registran la información. Estos dispositivos tienen sus ventajas y desventajas, dentro de las principales desventajas encontramos que no son muy útiles en animales que se encuentran bajo estabulación y /o amarrados.
                               
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Dispositivos de detección de monta
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
              p Existen diferentes tipos de dispositivos para la detección de la monta que generalmente trabajan bajo el sistema de marcar el animal montado debido a la aceptación de la monta, ya sea con capsulas que cambian de color, aplicación de pintura en la base de la cola o el sacro, y los sistemas electrónicos los cuales se inserta como un micro chip en la base de la cola, los toros probadores o toros desviados tendrán un lector del micro chip en un cinturón, al momento de realizar la monta este enviara un aviso del número del micro chip al computador o celular del encargado de la producción para así identificar a la hembra montada.                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img35.png', alt='')
        
        
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
