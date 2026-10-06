# GUÍA DE ACTIVIDAD PRÁCTICA

**Diseño y Patrones Arquitectónicos · Unidad 1 · Clasifica sistemas reales y ensaya el diagnóstico de tu reto**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Diseño y Patrones Arquitectónicos |
|---|---|---|---|
| Unidad | Unidad 1 · Práctica opcional | Unidad / Corte | 1 · Corte 1 |
| Modalidad | Individual | Periodo | 2026-B |
| Tipo | Formativa (opcional, sin nota) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Reconocer el patrón dominante de un sistema real a partir de cómo se organizan y comunican sus partes.
- Justificar cada clasificación con el atributo de calidad que el patrón favorece.
- Escribir dos escenarios de atributo de calidad con medida de respuesta para tu reto.
- Elegir tres patrones clásicos candidatos para la v1 de tu proyecto.

## 1. Objetivo

Llegar a la **Actividad de Aprendizaje 1 (20 %)** con lo más difícil ya ensayado: **ver** el
patrón en un sistema y **escribir** los atributos de calidad con medida. Esta práctica es
**opcional y no calificable**.

> **Nota:** Lo que produzcas en la Parte B es el borrador del **Hito 1** del
> [proyecto ABP](../../abp/): el diagnóstico arquitectónico del reto de tu equipo. Si todavía
> no tienen reto, haz la Parte B con el que más te interese del catálogo.

## 2. Parte A — Clasifica seis sistemas

Para cada sistema, responde con las **cinco preguntas** de la OVA (piezas, lógica,
despliegue, atributo que manda, patrones) y escribe en una línea el **patrón dominante** y el
**atributo de calidad** que lo justifica.

| # | Sistema | Descripción |
|---|---|---|
| 1 | Cajero automático de un banco | Terminales repartidas en la ciudad que consultan y actualizan saldos en el sistema central del banco |
| 2 | Generador de reportes de una EPS | Toma los archivos de atenciones del día, los limpia, valida contra el catálogo de servicios, calcula indicadores y produce un PDF |
| 3 | Aplicación web de matrícula académica | Pantallas de inscripción, reglas de prerrequisitos y cupos, y una base de datos de estudiantes y cursos |
| 4 | Red de intercambio de archivos entre universidades | Cada nodo comparte su repositorio y descarga de los demás, sin servidor central |
| 5 | Portal de pagos de impuestos de un municipio | Formulario web, liquidación del impuesto, pasarela de pagos y generación del recibo |
| 6 | Sistema de alertas de una estación meteorológica | Sensores que envían lecturas cada minuto; el sistema avisa cuando la lluvia supera un umbral |

> **Tip:** Casi ningún sistema tiene un solo patrón. Nombra el **dominante** y, si lo ves, uno
> secundario. Por ejemplo: «MVC sobre capas».

## 3. Parte B — Ensaya el diagnóstico de tu reto

### 3.1 Dos escenarios de atributo de calidad

Escoge los **dos atributos de calidad que más pesan** en tu reto y escribe cada uno como
escenario de seis partes:

| Parte | Escenario 1 | Escenario 2 |
|---|---|---|
| Fuente del estímulo | | |
| Estímulo | | |
| Artefacto | | |
| Entorno | | |
| Respuesta | | |
| Medida de la respuesta | | |

### 3.2 Tres patrones clásicos candidatos

Para tu reto, evalúa **tres** de los cinco patrones clásicos (capas, cliente-servidor, MVC,
pipes and filters, peer-to-peer):

| Patrón candidato | Qué parte del reto resuelve bien | Qué limitación trae | Sistema real de referencia |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### 3.3 Una decisión

En un párrafo de 5 a 8 líneas: **¿cuál de los tres usarías para la v1 y por qué?** Apóyate en
los escenarios de 3.1, no en preferencias.

## 4. Lista de verificación

- [ ] Las seis clasificaciones nombran un patrón dominante y un atributo que lo justifica.
- [ ] Ninguna justificación dice solo «porque es el más usado».
- [ ] Los dos escenarios tienen una **medida** que se podría verificar.
- [ ] Cada patrón candidato tiene una limitación concreta para tu reto, no una genérica.
- [ ] Cada patrón candidato tiene un sistema real de referencia.
- [ ] La decisión de 3.3 cita al menos uno de tus escenarios.

## 5. Entrega

- Un documento **PDF de 1 a 2 páginas** con la Parte A (tabla) y la Parte B.
- Nombre sugerido: `U1-practica-<apellido>.pdf`.
- Se sube donde indique el tutor. Al ser práctica opcional, **no tiene nota**: su valor es
  que el informe de la Actividad 1 se escriba sobre algo ya pensado.

## 6. Rúbrica orientativa (para autoevaluarte)

| Criterio | Logrado | En proceso | Insuficiente |
|---|---|---|---|
| Clasificación | Patrón dominante y atributo correctos y justificados | Patrón correcto sin justificación | Patrón equivocado o «depende» sin más |
| Escenarios | Seis partes con medida verificable | Medida vaga («rápido», «muchos») | Sin escenario, solo el nombre del atributo |
| Candidatos | Beneficio y limitación propios del reto | Beneficios y limitaciones genéricos | Menos de tres candidatos |
| Decisión | Justificada con los escenarios | Justificada con argumentos generales | Sin justificación |

## 7. Si quieres ir más allá

- Agrega un **tercer escenario** para un atributo que tu reto tenga débil hoy, aunque no sea
  el más importante: suele ser el que aparece en la sustentación.
- Busca en tu trabajo un sistema real y clasifícalo con las cinco preguntas. Si su patrón
  dominante no es el que dirías a primera vista, ya tienes un ejemplo para el foro de la
  Unidad 3.

