<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Árbol de objetivos
    p.mb-5(data-aos='fade-right') Luego de haber construido el árbol de problemas, es momento de plantear las situaciones o condiciones positivas que se desean obtener con la solución a los problemas identificados. Este paso se lleva a cabo realizando un árbol de objetivos, también llamado de soluciones. 
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.p-4.mb-4.color-primario
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.svg', alt='')
            .col-lg-9
              p.mb-0 El árbol de soluciones se construye a partir del árbol de problemas. El trabajo consiste en transformar las frases que indican problema en frases que indican solución, conservando la ubicación de las tarjetas en el árbol. (CRC, 2007, p. 19).
    .titulo-tres: h3 ¿Qué se logra con el árbol de objetivos?
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #f7e7b6 ")
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Describir la situación deseada que podría existir después de solucionar los problemas mencionados en el árbol de problemas. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Transformar las relaciones causa-efecto del árbol de problemas en relaciones medios-fines. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #2B5C64 ")
                  p.mb-0 Identificar por medio del diagrama del árbol, las posibles alternativas para el proyecto.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/4.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span Árbol de problemas versus árbol de objetivos
        img(src='@/assets/curso/temas/5.svg', alt=' La figura  presenta una comparación entre el árbol de problemas y el árbol de objetivos, donde se visualizan los efectos y fines, el problema central y el objetivo general, así como las causas y los medios (objetivos específicos). ')
    .d-inline-block.p-2.rounded-pill.mb-4(style="background-color: #fcd4b2")
      h3.mb-0.me-4.ms-2 Procedimiento
    p.mb-5(data-aos='fade-right') A continuación, detallará cada paso necesario para reestructurar eficazmente el árbol de problemas y garantizar que cada elemento contribuya positivamente al desarrollo del proyecto. 
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a2SMlQUlAMQ?si=fzIVfvisTgAa2p7G" title="Procedimiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 
    .d-inline-block.p-2.rounded-pill.mb-4(style="background-color: #fcd4b2")
      h3.mb-0.me-4.ms-2 Consejos y recomendaciones 
    p.mb-5(data-aos='fade-right') Mantenga el sentido original del problema. Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #afc7cb ").h-100
          .d-flex.justify-content-center
            .col-2: img(src='@/assets/curso/temas/check.svg', alt='').mb-4.m-auto
          p.text-center Frecuentes accidentes de autobuses.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #afc7cb ").h-100
          .d-flex.justify-content-center
            .col-2: img(src='@/assets/curso/temas/check.svg', alt='').mb-4.m-auto
          p.text-center Se redujo la tarifa en los pasajes.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #f7e7b6 ").h-100
          .d-flex.justify-content-center
            .col-2: img(src='@/assets/curso/temas/wrong.svg', alt='').mb-4.m-auto
          p.text-center Frecuentes accidentes de autobuses.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #f7e7b6 ").h-100
          .d-flex.justify-content-center
            .col-2: img(src='@/assets/curso/temas/wrong.svg', alt='').mb-4.m-auto
          p.text-center Se redujo la frecuencia de los accidentes de autobuses.
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta.p-4(style="background-color: #f3f9ff ")
          p.mb-0 Tenga cuidado al cambiar las palabras de los enunciados, ya que deben constituir frases coherentes y reflejar claramente una condición positiva relacionada directamente con el problema.
    .tarjeta.p-4(style="background-color: #20454b ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.svg', alt='')
        .col-lg-11
          p.mb-0.text-white Asegúrese de que lo expresado en los medios sea un requisito necesario para alcanzar el objetivo general y que, del mismo modo, el objetivo general provoque los fines enunciados en las ramas. 
    .titulo-tres: h3 Raíces: causas que se vuelven medios 
    p.mb-5(data-aos='fade-right') En este punto, las causas primarias y secundarias del problema principal se transforman en soluciones y medios para la solución o el objetivo general. Las soluciones serán los resultados que entregará la ejecución del proyecto y los medios, las formas en las que se producirán dichos resultados, es decir, las tareas y acciones que deberán ejecutarse para entregar los resultados. Después del análisis con los grupos en el norte de Caldas, se encontró: 
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Raíces medios de solución 
        img(src='@/assets/curso/temas/7.svg', alt='La figura presenta las raíces medios de solución, divididas en tres categorías: sistemas de producción sostenibles, acciones para la recuperación de los suelos y apropiada organización comunitaria.')
    .titulo-tres: h3 Tronco: problema central que se convierte en objetivo general 
    p.mb-5(data-aos='fade-right') El problema central identificado en el árbol de problemas se transforma en el objetivo general del proyecto. Este objetivo debe ser claro y alcanzable, uniendo todos los resultados deseados.  Es el enunciado que resuelve el problema, al unir todos los resultados que brindará el proyecto, mencionados en las raíces del árbol. El objetivo general del proyecto sería:  
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Tronco objetivo general   
        img(src='@/assets/curso/temas/8.svg', alt='La figura  presenta  el tronco del objetivo general: “Disminución de las tasas de deterioro ambiental.”')
    .titulo-tres: h3 Ramas: efectos que se vuelven fines  
    p.mb-5(data-aos='fade-right') En este punto, las ramas que eran los efectos del problema central se convierten en las posibles formas en que el proyecto impactará al sector o su entorno más inmediato. Finalmente, se trata de la contribución que se hará a la comunidad con el desarrollo del proyecto. Las ramas principales serán los fines directos y las ramas secundarias, los fines indirectos.  
    .row.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4. 
          span Ramas como fines
        .row
          .col-12
            .p-4.bg-c1
              img(src='@/assets/curso/temas/9.svg', alt='La figura presenta  las ramas como fines, destacando los fines directos e indirectos relacionados con la recuperación de la calidad de vida, los ecosistemas, los ingresos, la biodiversidad, la disponibilidad de recursos hídricos, y la fertilidad de los suelos, entre otros.')
    p.mb-5(data-aos='fade-right') Del árbol de problemas al árbol de objetivos finalizado: 
    .row.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5. 
          span Árbol de objetivos
        .row
          .col-12
            .p-4.bg-c1
              img(src='@/assets/curso/temas/10.svg', alt='La figura presenta  el árbol de objetivos, donde el objetivo general es la disminución de las tasas de deterioro ambiental. Se detallan objetivos específicos en tres áreas: sistemas de producción sostenibles, acciones para la recuperación de los suelos y apropiada organización comunitaria.')
    p.mb-5(data-aos='fade-right') La transformación del árbol de problemas en árbol de objetivos también implica cambiar la lógica de causas a efectos por la lógica de medios afines. 
    .tarjeta.p-4(style="background-color: #20454b ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.svg', alt='')
        .col-lg-11
          p.mb-0.text-white La construcción del árbol de objetivos constituye, al igual que los otros pasos, un procedimiento flexible. Es decir, que los grupos y usted consideran que se deben modificar, incluir o eliminar tarjetas, lo pueden hacer sin dañar por esta acción, la metodología. 






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
