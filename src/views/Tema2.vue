<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de alternativas 
    p.mb-5(data-aos='fade-right') El último paso de la etapa de identificación y análisis en la metodología de marco lógico de proyectos es el análisis de alternativas. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de alternativas es un conjunto de técnicas para identificar combinaciones de medios-fines que pueden llegar a ser estrategias del proyecto; analizar las estrategias identificadas y decidir la estrategia a utilizarse. (SGPGRH, 2000, p. 21). 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #fcd4b2 ")
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              h4 ¿Qué se logra con el análisis de alternativas?
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Identificar las alternativas que pueden llegar a ser las estrategias del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Evaluar la pertinencia y las posibilidades de ejecución de cada estrategia. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Determinar la estrategia a ser adoptada por el proyecto. 
            .col-lg-4.col-7: img(src='@/assets/curso/temas/12.png', alt='')
    .titulo-tres: h3 Procedimiento 
    p.mb-5(data-aos='fade-right') Acompañe paso a paso el procedimiento para terminar la etapa de identificación y análisis con sus grupos del norte caldense, y así dar forma al proyecto que tiene pensado llevar a cabo allí.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3 
        .tarjeta.p-4(style="background-color: #fbf3db ").h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/a.svg', style="width: 100px", alt='').m-auto
            .col-lg-10
              p.mb-0 Tome el árbol de objetivos o soluciones. 
      .col-lg-6
        .tarjeta.p-4(style="background-color: #fbf3db ").h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/b.svg', style="width: 100px", alt='').m-auto
            .col-lg-10
              p.mb-0 Identifique los medios-fines a excluir, porque no son deseables o factibles y aparte las tarjetas del árbol.  
    p.mb-5(data-aos='fade-right') Se han excluido estas tarjetas del proyecto porque el representante de Cropocaldas anunció que ya están trabajando un proyecto sobre recuperación de suelos. Adicionalmente, no se considera que el proyecto pueda tener un alcance en la disminución de la politiquería y el uso de los recursos públicos. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 6.
      span Medios excluidos  
    .tarjeta.p-5(style="background-color: #fdead8 ").mb-5
      img.d-lg-block.d-none(src='@/assets/curso/temas/13.svg', alt='La figura  presenta los medios excluidos para la recuperación de los suelos, que incluyen prácticas de conservación, mecanismos de recuperación, estudios de suelos actualizados y mejora de la política agroambiental.')
      img.d-lg-none.d-block(src='@/assets/curso/temas/14.svg', style="width: 350px" alt='La figura  presenta los medios excluidos para la recuperación de los suelos, que incluyen prácticas de conservación, mecanismos de recuperación, estudios de suelos actualizados y mejora de la política agroambiental.').m-auto
    .tarjeta.p-4(style="background-color: #fbf3db ").h-100.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/c.svg', style="width: 100px", alt='').m-auto
        .col-lg-11
          p.mb-0 Identifique diferentes relaciones de “medios y fines” como posibles estrategias alternativas para el proyecto. Si es necesario puede reorganizar los medios y fines.
    p.fw-bold.mb-4 Se reorganizó el diagrama y a este punto este es el resultado.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 7. 
      span Árbol de objetivos final
    .row.mb-5
      .col-12
        .p-4.bg-c1
          img(src='@/assets/curso/temas/15.svg', alt='La imagen presenta el árbol de objetivos final, mostrando la disminución de las tasas de deterioro ambiental como objetivo principal, con sistemas de producción sustentables y una adecuada organización comunitaria como medios para lograrlo.')
    .tarjeta.p-4(style="background-color: #fbf3db ").h-100.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/d.svg', style="width: 100px", alt='').m-auto
        .col-lg-11
          p.mb-0 De las relaciones medios-fines que organizó, seleccione las alternativas que representan las mejores estrategias para el proyecto. Puede escoger dos (2) o más. Las alternativas de solución son identificadas con números o expresiones descriptivas, como lo siguiente: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/16.png', alt='')
        h5.text-center Alternativa A
        p Creación de organizaciones comunitarias con conciencia ambiental, que representen los diferentes intereses de los sectores productivos.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/17.png', alt='')
        h5.text-center.text-white Alternativa B
        p.text-white Creación de programas de formación cortos sobre mercados alternativos, producción sostenible y amigable con el medio ambiente, y agricultura orgánica.
    .tarjeta.p-4(style="background-color: #fbf3db ").h-100.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/e.svg', style="width: 100px", alt='').m-auto
        .col-lg-11
          p.mb-0 Aplique los criterios apropiados o requeridos para seleccionar la estrategia del proyecto. Elabore para una mejor evaluación y posterior selección de una alternativa, una matriz de evaluación y selección de alternativa. Dentro de los criterios para la selección de alternativas se deben analizar:
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-dg.p-5
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Problemas e intereses de los involucrados. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Recursos y mandatos de los involucrados. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Recursos disponibles para el proyecto. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Posibilidad de alcanzar los objetivos. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Horizonte del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Factibilidad política. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Análisis de relación costo-beneficio. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Costo-efectividad de la estrategia. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Efecto sobre el flujo de caja. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Criterios ambientales. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Criterios de género. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Riesgos sociales. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Sostenibilidad y sostenibilidad. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Viabilidad de mercado, tecnológica, administrativa-legal, financiera, físico-natural, económica, política y social. 
            .col-lg-4.col-7: img(src='@/assets/curso/temas/18.png', alt='')
    p.fw-bold Se han reunido los anteriores criterios en cinco factores, que serán analizados por medio de una matriz de evaluación y selección de alternativas: 
    .row.justify-content-center.mb-5
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-5.h-100.d-flex.justify-content-center.align-items-center(style="background-color: #955a25 ")
          h4.text-white.mb-0 Pertinencia
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-5.h-100.d-flex.justify-content-center.align-items-center(style="background-color: #955a25 ")
          h4.text-white.mb-0 Coherencia
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-5.h-100.d-flex.justify-content-center.align-items-center(style="background-color: #955a25 ")
          h4.text-white.mb-0 Viabilidad
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-5.h-100.d-flex.justify-content-center.align-items-center(style="background-color: #955a25 ")
          h4.text-white.mb-0 Sostenibilidad
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-5.h-100.d-flex.justify-content-center.align-items-center(style="background-color: #955a25 ")
          h4.text-white.mb-0 Impacto
    p.mb-5(data-aos='fade-right') #[b Evaluación Alternativa A:] creación de organizaciones comunitarias con conciencia ambiental, que representan los diferentes intereses de los sectores productivos. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Matriz alternativa A 
    .tabla-a.color-acento-contenido.mb-5
      table
        thead(style="background-color: #f1e4bb")
          tr
            th Factor de análisis
            th Ponderación del factor
            th Elementos de análisis
            th Ponderación
            th Calificación
            th 
            th 1
            th 2
            th 3
            th 4
            th 5
            th 6
            th 7
            th 8
            th 9
            th 10
        tbody.bg-white
          tr
            td PERTINENCIA
            td 8.33 %
            td Desafíos del desarrollo
            td 40 %
            td 0,9
            td 
            td 
            td 
            td X
            td 
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td PERTINENCIA
            td 8.33 %
            td Solución entre Problema y la Relación Propuesta
            td 35 %
            td 0,7
            td 
            td 
            td 
            td 
            td X
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td PERTINENCIA
            td 8.33 %
            td Relación entre el Fin y Propósito
            td 25 %
            td 0,4
            td 
            td 
            td 
            td 
            td 
            td 
            td X
            td 
            td 
            td 
            td 
          tr
            td COHERENCIA
            td 10 %
            td Relación entre el propósito y los resultados
            td 30 %
            td 0,43
            td 
            td 
            td 
            td 
            td 
            td X
            td 
            td 
            td 
            td 
            td 
          tr
            td COHERENCIA
            td 10 %
            td Comprensible en su entorno usual
            td 20 %
            td 0,36
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
            td 
            td 
          tr
            td VIABILIDAD
            td 8.33 %
            td Deseable en el aspecto social
            td 30 %
            td 0,54
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
            td 
          tr
            td VIABILIDAD
            td 8.33 %
            td Manejo en términos de organización existente
            td 30 %
            td 0,45
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X 
            td 
          tr
            td VIABILIDAD
            td 8.33 %
            td Factible en sus aspectos técnicos y económicos
            td 25 %
            td 0,36
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
          tr
            td SOSTENIBILIDAD
            td 3.75 %
            td Económica
            td 25 %
            td 0,38
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
          tr
            td SOSTENIBILIDAD
            td 3.75 %
            td Ambiental
            td 25 %
            td 0,38
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
          tr
            td SOSTENIBILIDAD
            td 3.75 %
            td Social
            td 25 %
            td 0,3
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
            td 
          tr
            td SOSTENIBILIDAD
            td 3.75 %
            td Político
            td 25 %
            td 0,38
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
          tr
            td IMPACTO
            td 10 %
            td Contribuir a mejorar la calidad de vida de los involucrados
            td 65 %
            td 0,85
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
          tr
            td IMPACTO
            td 10 %
            td El impacto que generará es significativo
            td 35 %
            td 0,65
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td X
            td 
          tr
            td.fw-bold TOTAL CALIFICACIÓN PONDERADA
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 9,26
    p.mb-5(data-aos='fade-right') Luego se siguió el mismo procedimiento con la Alternativa B, para finalmente diligenciar la matriz para la selección de alternativas, como se muestra a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2. 
          span Matriz alternativa A y B
        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #f1e4bb")
              tr
                th Criterios
                th Alternativa A
                th Alternativa B
            tbody
              tr
                td Necesidades de la población
                td 1,50
                td 1,50
              tr
                td Desafíos del desarrollo
                td 0,90
                td 0,70
              tr
                td Relación entre problema y la solución
                td 0,70
                td 0,70
              tr
                td Relación entre el fin y el propósito
                td 0,48
                td 0,54
              tr
                td Relación entre el propósito y los resultados
                td 0,70
                td 0,70
              tr
                td Comprensible en su entorno cultural
                td 0,36
                td 0,36
              tr
                td Deseable en el aspecto social
                td 0,54
                td 0,54
              tr
                td Manejable en términos de la organización existente
                td 0,40
                td 0,40
              tr
                td Factible en sus aspectos técnicos y económicos
                td 0,60
                td 0,54
              tr
                td Económica
                td 0,38
                td 0,342
              tr
                td Ambiental
                td 0,36
                td 0,315
              tr
                td Político
                td 0,38
                td 0,342
              tr
                td Contribuirá a mejorar calidad de vida de los involucrados
                td 0,30
                td 0,30
              tr
                td El impacto que generará es significativo
                td 1,04
                td 1,30
              tr
                td TOTAL
                td 9,36
                td 9,139
    p.mb-5(data-aos='fade-right') Así entonces, la alternativa escogida es la #[b A: Creación de organizaciones comunitarias con conciencia ambiental, que representan los diferentes intereses de los sectores productivos.] De aquí se podrá partir para desarrollar la siguiente etapa de la metodología de marco lógico y que se estudiará en el programa de formación: Marco Lógico de Proyectos-Diseño de Matriz.
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4(style="background-color: #d7e3e5 ")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.svg', alt='') 
            .col-lg-7
              p.mb-0 Después de la identificación de grupos de soluciones el siguiente paso en la formulación del proyecto es la formulación de Matrices de Marco Lógico. Una matriz por cada grupo de soluciones o alternativas de proyecto identificada. #[b (CRC, 2007, p. 24).]
    .row.justify-content-center.mb-5.g-0 
      .col-lg-8
        .p-4(style="background-color: #fdf9ed ").h-100
          p.mb-0 Para la selección de alternativas, tenga en cuenta que cada una contribuye a la nueva situación deseada, pero no resuelve todo el problema. En teoría, el problema solo será resuelto si todas las alternativas se implementan a través de la formulación y ejecución de varios proyectos. 
            br
            br
            |Del mismo modo, se pueden seleccionar dos alternativas de proyectos, una de las cuales puede ser solicitando fondos adicionales de entidades diferentes. En este sentido, se pueden formular varios proyectos a partir del problema identificado. 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/20.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.pt-5.px-5(style="background-color: #effaf4")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Dicha exigencia garantiza que la concepción y aprobación de los proyectos incluya la posibilidad de incluir en ellos mejores opciones, al ser debatidas las diferentes alternativas con los involucrados (más y mejores medios para alcanzar los fines, beneficios ambientales o desarrollo de oportunidades).
          .bloque-texto-f__autor
            h3.mb-0 CRC, 2007, p.24
    p.fw-bold.mb-5 Tenga en cuenta: 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8. 
          span Diferentes alternativas del proyecto 
        img(src='@/assets/curso/temas/21.svg', alt='El diagrama presenta el análisis de la situación actual y la situación futura deseada. Desde la situación actual, se realiza el análisis de involucrados y el análisis de problemas (árbol de problemas). Desde la situación futura deseada, se lleva a cabo el análisis de objetivos o soluciones (árbol de objetivos o soluciones) y el análisis de alternativas.') 
    p Una de las mayores fortalezas de la metodología de marco lógico es el trabajo en equipo con los grupos involucrados en el proyecto. Se puede empezar trabajando con varias personas de los grupos o con los representantes de los mismos. En ambos casos, su papel como formulador de proyectos será fundamental, liderando, organizando y realizando los diagramas y matrices correspondientes. Así medirá todas sus habilidades en la gestión de proyectos. 
</template>

<script>
export default {
  name: 'Tema2',
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
