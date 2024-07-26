<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Ronda de preguntas',
      introduccion: 'Descubre tu conocimiento sobre [tema de la unidad ]',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Se lanzan dos proyectiles desde el suelo con la misma velocidad inicial, pero uno se lanza horizontalmente y el otro se lanza formando un ángulo de 45 grados con la horizontal. Considerando la resistencia del aire despreciable, ¿cuáles de las siguientes afirmaciones son verdaderas?',
          imagen: require('@/assets/curso/temas/a1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos proyectiles alcanzarán la misma altura máxima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proyectil lanzado horizontalmente recorrerá una distancia horizontal mayor que el proyectil lanzado a 45 grados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Explotación extensiva o traspatio',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Todas la anteriores', esCorrecta: true },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto:
            'Se lanzan dos proyectiles desde el suelo con la misma velocidad inicial, pero uno se lanza horizontalmente y el otro se lanza formando un ángulo de 45 grados con la horizontal. Considerando la resistencia del aire despreciable, ¿cuáles de las siguientes afirmaciones son verdaderas?',
          imagen: require('@/assets/curso/temas/a2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos proyectiles alcanzarán la misma altura máxima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proyectil lanzado horizontalmente recorrerá una distancia horizontal mayor que el proyectil lanzado a 45 grados',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La velocidad horizontal del proyectil lanzado a 45 grados será mayor que la velocidad horizontal del proyectil lanzado horizontalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La velocidad total del proyectil lanzado a 45 grados en el punto más alto de su trayectoria será la misma que la velocidad horizontal del proyectil lanzado horizontalmente en cualquier punto de su trayectoria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! Has seleccionado la respuesta correcta.',
          mensaje_incorrecto: 'Esa no es la respuesta correcta. ¡Ánimo!',
        },
      ],
      mensaje_final_aprobado:
        'Se evidencia una buen manejo de los conceptos estudiados en esta unidad.',
      mensaje_final_reprobado:
        'Se recomienda revisar el contenido de la unidad para clarificar conceptos.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
