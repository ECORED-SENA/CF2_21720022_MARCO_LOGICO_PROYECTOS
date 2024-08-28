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
      tema: 'Metodología del árbol de objetivos.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito del árbol de objetivos?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1101873.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar problemas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transformar condiciones negativas en positivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el impacto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué representa el tronco en el árbol de objetivos?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102168.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los medios del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los fines del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El problema central transformado en objetivo general.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los recursos necesarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el primer paso en el procedimiento del árbol de objetivos?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102522.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Validar con grupos de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redactar objetivos positivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Verificar relaciones medios-fines.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar objetivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué se debe asegurar al redactar el objetivo general?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102524.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que sea complicado y desafiante.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Que sea claro y alcanzable.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Que involucre muchos recursos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Que sea breve y ambiguo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué se analiza en el paso de "Análisis de alternativas"?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1101873.png'),
          opciones: [
            {
              id: 'a',
              texto: 'La disponibilidad de financiamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinaciones de medios-fines que pueden ser estrategias del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de personal necesario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño gráfico del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los criterios para la selección de alternativas?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102168.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Factibilidad técnica y económica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de materiales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Duración del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opinión pública.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se evalúa en la matriz de evaluación de alternativas?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102522.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Factores políticos y sociales únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pertinencia, coherencia, viabilidad, sostenibilidad e impacto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos y beneficios únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opiniones de los #[em stakeholders.]',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa el tronco en el árbol de objetivos?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102524.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Los fines del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los recursos necesarios.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El objetivo general.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Las causas del problema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se transforma en el árbol de objetivos para convertir causas en medios?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1101873.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Los fines.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los problemas secundarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las ramas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las raíces.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la relación que se debe verificar en el procedimiento del árbol de objetivos?',
          imagen: require('@/assets/componentes/cuestionario/Grupo 1102168.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Causa-efecto.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Medios-fines.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Problema-solución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos-resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
