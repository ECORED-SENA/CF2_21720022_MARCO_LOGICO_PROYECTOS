<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') El desarrollo de proyectos comienza con la identificación clara de los problemas centrales que se desean abordar. En la metodología del árbol de objetivos, estos problemas se sitúan en el tronco del árbol, representando el núcleo alrededor del cual se estructuran las soluciones. Este enfoque permite una visualización clara de cómo los problemas identificados se transforman en objetivos generales, facilitando una planificación coherente y dirigida. 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3l(data-aos="fade-right")
        .tarjeta.p-4.mb-4(style="background-color: #d7e3e5; border: 2px solid #36737D ")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.svg', alt='')
            .col-lg-10
              p.mb-0 Transformar el problema central en un objetivo general es un paso crucial. Este objetivo general unifica los resultados deseados y proporciona una dirección clara para el proyecto. Al formular este objetivo, se debe asegurar que sea alcanzable y que abarque todos los aspectos críticos del problema original. Esto no solo proporciona una meta clara, sino que también facilita la alineación de todas las acciones del proyecto hacia un fin común. 
        p.mb-4 Finalmente, el objetivo general derivado del problema central actúa como una guía para el desarrollo de estrategias y acciones específicas. Este objetivo debe ser continuamente referenciado durante la ejecución del proyecto para asegurar que todas las actividades contribuyan a su consecución. De esta manera, el proyecto puede ofrecer soluciones efectivas y sostenibles, impactando positivamente al sector o comunidad involucrada. 
        .col-1.dot: img(src='@/assets/curso/temas/dots.svg', alt='')
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/2.png', alt='')

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
