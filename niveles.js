import SJF from './1.js'
import FCFS from './2.js'
import RoundRobin from './3.js'
import SRTF from './4.js'
import HRRN from './5.JS'

export default [
  {
    nombre: 'SJF',
    descripcion: 'Shortest Job First',
    screen: `**************************************
    *                                    *
    *   NIVEL:         SJF               *
    *                                    *
    *   Descripción:                     *
    *   En este nivel, SJF (Shortest    *
    *   Job First) elige los procesos   *
    *   más cortos para ejecutarse       *
    *   primero. Imagina que estás en    *
    *   una fila para comprar helado:    *
    *   aquellos que pidan el helado     *
    *   más pequeño serán atendidos      *
    *   antes. En este juego, ¡recuerda  *
    *   los patrones más cortos para     *
    *   avanzar rápidamente!             *
    *                                    *
    **************************************`,
    patron: SJF(),
  },
  {
    nombre: 'FCFS',
    descripcion: 'First Come First Served',
    screen: `**************************************
    *                                    *
    *   NIVEL:         FCFS              *
    *                                    *
    *   Descripción:                     *
    *   En este nivel, FCFS (First-Come, *
    *   First-Served) sigue el orden de  *
    *   llegada. Es como hacer una fila  *
    *   para comprar entradas: la primera*
    *   persona en la fila será la primera*
    *   en ser atendida. En el juego,    *
    *   recuerda el orden en que aparecen*
    *   los patrones.                    *
    *                                    *
    **************************************
    `,
    patron: FCFS(),
  },
  {
    nombre: 'RR',
    descripcion: 'Round Robin',
    screen: `**************************************
    *                                    *
    *   NIVEL:         Round Robin       *
    *                                    *
    *   Descripción:                     *
    *   En este nivel, Round Robin       *
    *   asigna un tiempo de ejecución    *
    *   a cada proceso en turnos        *
    *   sucesivos. Es como compartir un  *
    *   pastel: cada persona toma un    *
    *   trozo antes de volver a empezar. *
    *   En el juego, recuerda los       *
    *   patrones en cada turno.         *
    *                                    *
    **************************************
    `,
    patron: RoundRobin(),
  },
  {
    nombre: 'SRTF',
    descripcion: 'Shortest Remaining Time First',
    patron: SRTF(),
    screen: `**************************************
    *                                    *
    *   NIVEL:         SRTF              *
    *                                    *
    *   Descripción:                     *
    *   En este nivel, SRTF (Shortest    *
    *   Remaining Time First) elige el   *
    *   proceso más corto que queda por *
    *   ejecutar. Piensa en una cola de  *
    *   carritos en un parque de        *
    *   diversiones: te unes a la cola  *
    *   más corta para montar antes.    *
    *   En el juego, recuerda el        *
    *   patrón más corto restante para  *
    *   avanzar eficientemente.         *
    *                                    *
    **************************************`,
  },
  {
    nombre: 'HRRN',
    descripcion: 'Highest Response Ratio Next',
    patron: HRRN(),
    screen: `**************************************
    *                                    *
    *   NIVEL:         HRRN              *
    *                                    *
    *   Descripción:                     *
    *   En este nivel, HRRN (Highest    *
    *   Response Ratio Next) prioriza   *
    *   los procesos basándose en una    *
    *   proporción entre el tiempo de    *
    *   espera y el tiempo de ejecución. *
    *   Piensa en un restaurante: aquel  *
    *   que haya esperado más y ordenado*
    *   menos será atendido antes.      *
    *   En el juego, observa la         *
    *   proporción y elige sabiamente.  *
    *                                    *
    **************************************
    `,
  },
]
