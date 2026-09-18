# GUÍA DE ACTIVIDAD PRÁCTICA

**Arquitectura y Diseño de Software · Unidad 1 · Diagnóstico exprés y tres decisiones arquitectónicas de ParkKbus Suite**

| Programa | Especialización en Ingeniería de Software · Posgrado | Asignatura | Arquitectura y Diseño de Software |
|---|---|---|---|
| Unidad | Unidad 1 · Práctica opcional | Unidad / Corte | 1 · Corte 1 |
| Modalidad | Individual | Periodo | 2026-B |
| Tipo | Formativa (opcional, sin nota) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Traducir síntomas operativos en causas arquitectónicas usando modularidad, separación de preocupaciones y abstracción.
- Redactar tres ADR con alternativas descartadas e impacto esperado.
- Tomar posición entre monolito modular, distribución parcial y microservicios, justificada con RNF.

## 1. Objetivo

Llegar al taller calificable con lo más difícil ya resuelto: **el diagnóstico y las tres
decisiones centrales**. Esta práctica es **opcional y no calificable**; es la preparación
directa de la **Actividad de Aprendizaje 1 · Taller fundamentos de la arquitectura (30 %)**.

> info: Todo lo que produzcas aquí es reutilizable: el diagnóstico alimenta el
> **Entregable A**, la posición alimenta el **Entregable B** y los tres ADR alimentan el
> apartado «Decisiones clave» del **Entregable C**.

## 2. El caso

Trabajas sobre el mismo sistema del taller: **ParkKbus Suite**, de CORHUILA Mobility S.A.S.

| Dato | Valor |
|---|---|
| Antigüedad | 3 años en operación |
| Alcance | 28 parqueaderos, 90 puntos de control |
| Carga | 1.200 ingresos/salidas al día, picos de 3.500 |
| Usuarios | 75.000 registrados |
| Arquitectura | Monolito Java Spring Boot en una sola VM, PostgreSQL único |
| Clientes | Portal Angular (admin), app Flutter (usuarios) |

Síntomas reportados:

- En hora pico el tiempo de respuesta supera los **8 s**.
- Los reportes bloquean la base de datos y afectan al resto del sistema.
- Cada despliegue es riesgoso: «si falla una parte, cae todo».
- Escalar obliga a duplicar la VM completa.
- Las integraciones externas, al fallar, tumban el flujo.

Restricciones que **no** puedes ignorar:

- No se puede parar la operación más de **2 horas**.
- No se pueden contratar más de **2 desarrolladores** adicionales.
- Presupuesto de infraestructura limitado.
- PostgreSQL se mantiene al menos durante la transición.

## 3. Enunciado

### Parte A — De síntoma a causa (media página)

Toma **tres** de los síntomas listados y, para cada uno, completa la cadena:

```ascii
  SÍNTOMA            →  CAUSA ARQUITECTÓNICA        →  PRINCIPIO VIOLADO
  "los reportes         consultas analíticas y          separación de
   bloquean la BD"      operación compiten por          preocupaciones
                        la misma instancia
```

Usa el vocabulario de la unidad: **modularidad**, **separación de preocupaciones**,
**abstracción**, **acoplamiento**, **cohesión**.

> warn: No vale responder «porque es un monolito». El monolito es la forma, no la causa:
> existen monolitos sanos. Nombra **qué** está acoplado con **qué** y por qué eso produce
> el síntoma.

### Parte B — Toma posición (un párrafo)

Elige **una** y defiéndela en cinco líneas, citando al menos **dos RNF** del enunciado:

- monolito modular,
- distribución parcial (extraer 2 o 3 capacidades),
- microservicios,
- híbrida.

### Parte C — Tres ADR (una página)

Redacta tres ADR con esta plantilla. Uno de ellos **debe** ser sobre la reportería.

```ascii
  ADR-00N — <título en una línea>
  ──────────────────────────────────────────────
  Estado       : Propuesta
  Contexto     : <el hecho medible que obliga a decidir>
  Decisión     : <qué se hace, en una frase>
  Alternativas : (a) <opción> — descartada porque <razón>
                 (b) <opción> — descartada porque <razón>
  Consecuencias: + <lo que mejora>
                 − <lo que empeora o se complica>
```

> tip: Si al escribir «Alternativas» no se te ocurre ninguna, la decisión probablemente
> no era una decisión. Vuelve al contexto y pregúntate qué habría hecho alguien que
> prefiriera la simplicidad operativa por encima de todo.

## 4. Lista de verificación

- [ ] Cada síntoma está ligado a una causa concreta, no a «el monolito».
- [ ] Cada causa nombra un principio de la Unidad 1.
- [ ] La posición de la Parte B cita al menos dos RNF por su número.
- [ ] La posición reconoce explícitamente las restricciones de negocio.
- [ ] Los tres ADR tienen alternativas descartadas **con razón**.
- [ ] Cada ADR tiene al menos **una** consecuencia negativa.
- [ ] Uno de los ADR resuelve el problema de la reportería.
- [ ] El documento cabe en **una página** (dos como máximo).

> warn: El punto de la consecuencia negativa no es un formalismo. Un ADR con solo
> ventajas indica que no se analizó el intercambio, y es lo primero que se pregunta en la
> sustentación.

## 5. Entrega

- Documento **PDF de 1 a 2 páginas**: Parte A (tabla o lista), Parte B (párrafo), Parte C
  (tres ADR).
- Nombre sugerido: `U1-practica-<apellido>.pdf`.
- Se sube donde indique el tutor. Al ser práctica opcional, **no tiene nota**: su valor es
  que el taller calificable se escriba después casi solo.

## 6. Rúbrica orientativa (para autoevaluarte)

| Criterio | Logrado | En proceso | Insuficiente |
|---|---|---|---|
| Diagnóstico | Cada síntoma llega a una causa y a un principio | Identifica causas pero no las liga a principios | Repite los síntomas con otras palabras |
| Posición | Justificada con RNF y restricciones | Justificada solo con RNF | Elegida por preferencia o tendencia |
| ADR | Alternativas descartadas con razón e impacto en ambos sentidos | Alternativas mencionadas sin argumento | Sin alternativas |
| Concisión | Una página, sin relleno | Dos páginas | Se extiende sin agregar criterio |

## 7. Si quieres ir más allá

- Estima el **impacto en número**: si los reportes salen de la base operativa, ¿qué
  pasaría con el p95 de la operación de salida? Un rango razonado basta.
- Busca en tu propio trabajo un sistema con el mismo patrón —reportes pesados sobre la
  base transaccional— y redacta el ADR que propondrías allí.

> info: Referencia del caso: *Migración de un monolito a una arquitectura basada en
> microservicios, caso de estudio sistema «kbus»* (Torres-Berru et al., 2020), citado en
> el material de la unidad.

