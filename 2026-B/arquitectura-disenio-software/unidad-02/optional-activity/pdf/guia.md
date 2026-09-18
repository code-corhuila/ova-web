# GUÍA DE ACTIVIDAD PRÁCTICA

**Arquitectura y Diseño de Software · Unidad 2 · Descompón ParkKbus Suite y defiende dónde pusiste el corte**

| Programa | Especialización en Ingeniería de Software · Posgrado | Asignatura | Arquitectura y Diseño de Software |
|---|---|---|---|
| Unidad | Unidad 2 · Práctica opcional | Unidad / Corte | 2 · Corte 1 |
| Modalidad | Individual | Periodo | 2026-B |
| Tipo | Formativa (opcional, sin nota) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Proponer una descomposición en servicios a partir de capacidades de negocio y contextos delimitados.
- Asignar a cada relación entre servicios un estilo de comunicación justificado.
- Detectar en la propia propuesta los antipatrones de descomposición más costosos.
- Resolver la integridad de un flujo que cruza varios servicios.

## 1. Objetivo

Producir la descomposición que vas a defender en el **Foro: Descifrando la arquitectura de
microservicios (30 %)**, y someterla a las tres preguntas con las que se derrumban la
mayoría de las propuestas. Práctica **opcional y no calificable**.

> info: Una intervención de foro que aporta no describe qué son los microservicios:
> **compromete una decisión** que otro puede discutir. Esta práctica sirve para tener esa
> decisión lista.

## 2. El caso

Continúas con **ParkKbus Suite**. Los módulos que hoy conviven dentro del monolito son:

| # | Módulo actual |
|---|---|
| 1 | Usuarios y autenticación |
| 2 | Gestión de sedes y zonas |
| 3 | Tipos de vehículo y tarifas |
| 4 | Control de ingreso/salida |
| 5 | Facturación y pagos |
| 6 | Reportes y analítica |
| 7 | Notificaciones (correo/SMS/push) |
| 8 | Integración con cámaras |

> warn: Esos ocho módulos **no** son ocho microservicios. Son el punto de partida del
> análisis, no su resultado. Parte del ejercicio es decidir cuáles se agrupan y cuáles se
> separan.

## 3. Enunciado

### Parte A — Eventos del negocio (10 líneas)

Escribe, en orden cronológico, los hechos que ocurren desde que un vehículo entra hasta
que el cupo vuelve a estar libre. Usa participio: *vehículo ingresó*, *tarifa calculada*,
*pago recibido*, *factura emitida*, *cupo liberado*…

### Parte B — Agrupa y nombra

Agrupa esos hechos por vocabulario y reglas compartidas. Nombra cada grupo con un
**sustantivo de negocio** y completa la tabla:

| Servicio | Capacidad que encapsula | Datos de los que es dueño | Heurística de corte |
|---|---|---|---|
| | | | capacidad / contexto / razón de cambio / volatilidad / carga |

> tip: Si al nombrar un grupo te sale «servicio de gestión de datos de…», el corte es
> técnico. Vuelve a los hechos y agrupa por lo que el negocio *hace*, no por lo que el
> sistema *almacena*.

### Parte C — El mapa de comunicación

Para cada relación entre dos servicios, decide y justifica en una línea:

```ascii
  ORIGEN            →  DESTINO           ESTILO       POR QUÉ
  Control acceso    →  Tarifación        síncrono     el cajero espera el monto
  Control acceso    →  Notificaciones    asíncrono    el recibo puede llegar después
  Control acceso    →  Reportes          evento       consistencia eventual aceptable
```

### Parte D — Integridad de un flujo que cruza servicios

Toma el flujo **salida + cobro + factura + liberación de cupo** y responde:

1. ¿Qué pasa si el cobro tiene éxito pero la facturación falla?
2. ¿Cuál es la **compensación** de cada paso?
3. ¿Coreografía u orquestación? Justifica con el número de pasos.

## 4. Las tres preguntas incómodas

Aplica estas tres pruebas a **tu propia** propuesta. Si alguna falla, corrige el corte
antes del foro.

| Prueba | Pregunta | Si falla significa que… |
|---|---|---|
| **Del cambio** | «Agregar una modalidad de tarifa nocturna para motos», ¿cuántos servicios toca? | Más de uno: el corte no siguió la razón de cambio |
| **De los datos** | ¿Algún servicio necesita leer las tablas de otro para funcionar? | Sí: hay base compartida encubierta |
| **De la cadena** | En la operación más frecuente, ¿cuántos saltos de red hay? | Más de tres: la latencia y la fragilidad se multiplican |

> warn: La prueba del cambio es la más reveladora. Si separaste «tarifas» de «tipos de
> vehículo», es muy probable que la falles: esos dos conceptos cambian juntos y
> probablemente pertenecen al mismo contexto.

## 5. Lista de verificación

- [ ] Cada servicio tiene un nombre de negocio, sin la palabra «capa», «datos» ni «gestor».
- [ ] Cada servicio es dueño exclusivo de sus datos.
- [ ] Ningún servicio es un CRUD que solo envuelve una tabla.
- [ ] Cada relación tiene estilo de comunicación **y** razón.
- [ ] Hay al menos una relación asíncrona, con su justificación.
- [ ] Se distinguen eventos (hechos ocurridos) de comandos (órdenes).
- [ ] El flujo de la Parte D tiene compensación definida para cada paso.
- [ ] Las tres pruebas de la sección 4 están respondidas con números concretos.

## 6. Entrega

- Documento **PDF de 1 a 2 páginas** con las partes A a D y las tres pruebas resueltas.
- Un diagrama simple de servicios y relaciones (sirve el de la sección 3 en texto).
- Nombre sugerido: `U2-practica-<apellido>.pdf`.

## 7. Rúbrica orientativa (para autoevaluarte)

| Criterio | Logrado | En proceso | Insuficiente |
|---|---|---|---|
| Descomposición | Por capacidades, con heurística nombrada | Razonable pero sin justificar el criterio | Copia los ocho módulos como ocho servicios |
| Propiedad de datos | Cada servicio es dueño exclusivo | Hay una zona gris sin resolver | Servicios que comparten tablas |
| Comunicación | Cada relación con estilo y razón | Estilos asignados sin argumento | Todo síncrono por defecto |
| Integridad | Compensaciones definidas y coordinación elegida | Identifica el problema sin resolverlo | No aborda el fallo parcial |
| Autocrítica | Aplica las tres pruebas y corrige | Las aplica sin actuar | No las aplica |

## 8. Cómo convertir esto en tu intervención del foro

1. **Abre con tu decisión**, no con teoría: «Propongo cuatro servicios; separo tarifación
   de control de acceso porque…».
2. **Muestra el corte que dudaste** y por qué te decidiste. Es lo que genera conversación.
3. **Responde a un compañero discutiendo su corte**, no su redacción: usa la prueba del
   cambio sobre su propuesta.
4. **Cierra con lo que cambiarías** si el contexto fuera otro (más equipos, menos carga).

> tip: Una descomposición distinta a la de tus compañeros **no está mal**. Lo que se
> evalúa es la calidad del argumento, no coincidir con una respuesta única. Dos cortes
> defendibles con criterios distintos valen más que diez iguales.

