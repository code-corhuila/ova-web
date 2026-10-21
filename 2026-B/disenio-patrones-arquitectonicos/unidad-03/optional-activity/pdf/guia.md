# GUÍA DE ACTIVIDAD PRÁCTICA

**Diseño y Patrones Arquitectónicos · Unidad 3 · Matriz de decisión para migrar la v1 de su reto**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Diseño y Patrones Arquitectónicos |
|---|---|---|---|
| Unidad | Unidad 3 · Práctica opcional | Unidad / Corte | 3 · Corte 1 |
| Modalidad | Individual | Periodo | 2026-B |
| Tipo | Formativa (opcional, sin nota) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Describir con evidencia los límites que muestra la v1 del reto del equipo.
- Derivar criterios de decisión ponderados a partir de los atributos de calidad del reto.
- Comparar dos patrones modernos candidatos con una matriz de decisión ponderada y un análisis de sensibilidad.
- Redactar el borrador del aporte al foro de la Unidad 3 (Hito 3).

## 1. Objetivo

Llegar al **foro de la Unidad 3 (20 %)** con la parte más difícil ya resuelta: una decisión de
migración que se apoya en evidencia de la v1 y en criterios explícitos, no en la popularidad
de un patrón. Esta práctica es **opcional y no calificable**, y se hace de forma
**individual**, aunque el reto sea del equipo.

> **Nota:** Lo que se produzca aquí es el borrador del **Hito 3** del
> [proyecto de aula](../../proyecto-aula/): la decisión de a qué patrón moderno migrar la v1.
> Si la v1 todavía no está terminada (la Actividad 2 vence el domingo 25 de octubre), la
> práctica se hace sobre su diseño y sobre lo que ya se construyó.

## 2. Parte A — Los límites de la v1

Registre **tres síntomas** que la v1 del reto ya muestra o que su diseño hace previsibles.
Cada síntoma necesita una evidencia que otra persona pueda comprobar: un archivo, una prueba,
una medición o un diagrama.

| # | Síntoma observado en la v1 | Evidencia (archivo, prueba, medición, diagrama) | Atributo de calidad afectado |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

Un síntoma útil se parece a «agregar el recordatorio de cita obligó a modificar el
controlador, el servicio y su prueba (tres archivos)». Uno inútil se parece a «la v1 no es
escalable». Si una celda de evidencia queda vacía, el síntoma todavía es una opinión.

## 3. Parte B — Criterios y pesos

### 3.1 Los criterios

Defina **entre cuatro y seis criterios**. Cada uno sale de un atributo de calidad del reto
—idealmente, de un escenario del diagnóstico del Hito 1— y se redacta de forma que se pueda
juzgar («agregar una reacción nueva a una cita sin tocar el dominio»), no como un adjetivo
(«flexibilidad»). Uno de los criterios es obligatorio: **costo de operación y capacidad del
equipo**, porque un patrón que el equipo no puede operar no es una opción real.

| Criterio | Atributo de calidad del que sale | Peso (los pesos suman 100) |
|---|---|---|
| | | |
| | | |
| | | |
| Costo de operación y capacidad del equipo | Costo / desplegabilidad | |
| **Total** | | **100** |

Ningún criterio debe pesar más de 40: con un solo criterio dominante, la matriz se reduce a
una opinión con números.

### 3.2 La escala de puntuación

Use la misma escala para todos los criterios y para los dos candidatos:

| Puntaje | Significado |
|---|---|
| 1 | El candidato empeora el criterio frente a la v1 |
| 2 | Lo empeora levemente o no lo atiende |
| 3 | Lo deja igual que la v1 |
| 4 | Lo mejora de forma razonable |
| 5 | Resuelve un síntoma de la Parte A, con un argumento verificable |

> **Tip:** Fije los pesos **antes** de puntuar a los candidatos y no los cambie después. Si los
> pesos se ajustan al final, la matriz solo confirma la preferencia con la que se empezó.

## 4. Parte C — Dos candidatos modernos

Elija **dos** de los seis patrones de la unidad (microservicios, serverless, cloud-native,
hexagonal, event-driven, CQRS) o dos combinaciones («hexagonal con eventos»). El catálogo de
retos sugiere candidatos para cada reto; se pueden proponer otros con argumentos.

| Aspecto | Candidato A | Candidato B |
|---|---|---|
| Patrón o combinación | | |
| Cómo quedaría la v2 (tres o cuatro líneas) | | |
| Qué se conserva de la v1 | | |
| Costo nuevo que aparece | | |
| Riesgo principal y su mitigación | | |

Para el costo y el riesgo, vuelva a la tabla comparativa y a la sección de compromisos (CAP,
consistencia eventual, sagas) de la OVA: cada patrón cobra algo, y un candidato sin costo
declarado está mal analizado.

## 5. Parte D — La matriz ponderada

| Criterio | Peso | A (1–5) | A ponderado | B (1–5) | B ponderado | Justificación en una línea |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| Costo de operación y capacidad del equipo | | | | | | |
| **Total** | **100** | | | | | |

**Ponderado = puntaje × peso / 100.** El total de cada candidato queda entre 1 y 5. La OVA de
la unidad trae un ejemplo resuelto con Mercado Campesino (hexagonal con eventos frente a
microservicios); ese reto es de demostración y no se usa en esta práctica.

### 5.1 Análisis de sensibilidad

Suba o baje **10 puntos** el peso del criterio más pesado, reparta la diferencia entre los
demás y recalcule los totales. Escriba una frase: ¿cambia la decisión? Si cambia, la elección
depende de ese peso y conviene justificarlo mejor en el foro; si no cambia, la decisión es
robusta y se puede decir así.

### 5.2 La decisión

En un párrafo de cinco a ocho líneas: **qué candidato gana, qué costo se acepta, qué riesgo
queda y cómo se mitiga**. Debe citar al menos uno de los síntomas de la Parte A.

## 6. Parte E — Borrador del aporte al foro

Con la matriz hecha, redacte un borrador de **200 a 300 palabras** que recorra los cinco ejes
que propone el enunciado del foro:

1. **Análisis comparativo:** los dos candidatos y la diferencia que decide entre ellos.
2. **Escenarios de aplicación:** qué parte del reto gana con cada candidato y cuál no.
3. **Evaluación técnica:** el impacto esperado en rendimiento, resiliencia y costos, con la
   medida del escenario de calidad.
4. **Integración y evolución:** cómo encaja la v2 en la nube y en DevOps, y cómo se migra por
   etapas sin detener la v1.
5. **Desafíos:** el riesgo principal y la práctica que lo mitiga.

Incluya **al menos una fuente académica** en APA (la OVA de la unidad lista varias) y cierre
con el costo que el equipo acepta pagar.

> **Cuidado:** El borrador es individual. Si varios integrantes del equipo publican en el foro el
> mismo texto o la misma matriz, se pierde el valor del aporte: cada uno puede llegar a una
> decisión distinta y defenderla, y esa diferencia enriquece el debate del equipo.

## 7. Lista de verificación

- [ ] Los tres síntomas de la Parte A tienen una evidencia que otra persona puede comprobar.
- [ ] Cada criterio sale de un atributo de calidad y se puede juzgar sin ambigüedad.
- [ ] El criterio de costo de operación y capacidad del equipo está en la matriz.
- [ ] Los pesos suman 100, ninguno pasa de 40 y se fijaron antes de puntuar.
- [ ] Cada puntaje tiene su justificación en una línea.
- [ ] Los dos candidatos declaran un costo nuevo y un riesgo con su mitigación.
- [ ] El análisis de sensibilidad dice si la decisión cambia o no.
- [ ] El borrador del foro tiene al menos 200 palabras, recorre los cinco ejes y cita una fuente académica.
- [ ] Ninguna parte usa Mercado Campesino como reto.

## 8. Entrega

- Un documento **PDF de 2 a 3 páginas** con las Partes A a E.
- Nombre sugerido: `U3-practica-<apellido>.pdf`.
- Se sube donde indique el tutor en el aula Moodle. Al ser práctica opcional, **no tiene
  nota**: su valor es que el aporte al foro (vence el domingo 1 de noviembre a las 11:59 p. m.)
  se escriba sobre una decisión ya pensada.

## 9. Rúbrica orientativa (para autoevaluarse)

| Criterio | Logrado | En proceso | Insuficiente |
|---|---|---|---|
| Límites de la v1 | Tres síntomas con evidencia verificable | Síntomas concretos sin evidencia | Síntomas genéricos («no escala») |
| Criterios y pesos | Salen de atributos de calidad, suman 100 e incluyen el costo de operación | Criterios correctos con pesos sin justificar | Adjetivos como criterios o pesos que no suman 100 |
| Candidatos | Costo y riesgo propios del reto, con mitigación | Costos y riesgos genéricos | Un solo candidato o sin costos |
| Matriz y sensibilidad | Puntajes justificados y sensibilidad analizada | Puntajes sin justificación | Matriz incompleta o mal calculada |
| Borrador del foro | Cinco ejes, al menos 200 palabras y una fuente académica | Menos ejes o sin fuente | Menos de 200 palabras o sin decisión |

## 10. Para ir más allá

- Agregue un **tercer candidato** que sea una combinación de los dos primeros y vea si la
  matriz lo prefiere. Es frecuente que la mejor respuesta del foro sea una combinación.
- Escriba la decisión como un **registro de decisión de arquitectura** de una página
  (contexto, alternativas, decisión y consecuencias) y guárdelo en el repositorio del equipo:
  servirá para el documento técnico de la Actividad 3.
- Elija desde ya los **tres criterios medibles** con los que se compararán la v1 y la v2 en
  la Actividad 3 (costo de un cambio, acoplamiento, rendimiento, tolerancia a fallos…) y
  anote cómo se medirían en la v1 antes de empezar a migrar.

