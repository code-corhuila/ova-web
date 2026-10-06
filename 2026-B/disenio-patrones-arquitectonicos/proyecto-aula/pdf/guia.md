# GUÍA DEL PROYECTO DE AULA

**Diseño y Patrones Arquitectónicos · Unidad 1–3 · Guía del proyecto de aula — un reto, cuatro hitos y el informe FO-IV-159**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Diseño y Patrones Arquitectónicos |
|---|---|---|---|
| Unidad | Proyecto de aula · Entrega final del módulo | Unidad / Corte | 1–3 · Corte único |
| Modalidad | Equipos de 2 o 3 integrantes (A1 y foro, individuales) | Periodo | 2026-B |
| Tipo | Guía del proyecto de aula (el informe se califica dentro de la Actividad 3) | Entrega | Aula Moodle, en cada actividad |

## Objetivos

- Elegir con tu equipo un reto del catálogo y delimitar su alcance.
- Entender qué produce cada hito y cómo alimenta al siguiente.
- Diligenciar el Informe de Proyectos de Aula (FO-IV-159) campo por campo.
- Preparar los anexos y la sustentación con criterios conocidos de antemano.

## 1. Qué es el proyecto de aula y por qué existe

El curso se organiza como un **proyecto de aula**: un problema real que el equipo resuelve
por etapas y que al final se reporta en el formato institucional **FO-IV-159 · Informe de
Proyectos de Aula** (Gestión de Investigación e Innovación). Ninguna actividad del aula
cambia: cambia la forma de leerlas. Las cuatro evaluaciones trabajan **sobre el mismo
sistema**, el del reto que elige tu equipo.

| Actividad del aula | Lo que pide su enunciado | Lo que es dentro del proyecto |
|---|---|---|
| **Actividad 1** (20 %) | Informe técnico: fundamentos, clasificación de patrones y análisis de al menos tres patrones clásicos | **Diagnóstico arquitectónico** del reto |
| **Actividad 2** (20 %) | Taller: problema realista, diseño UML, prototipo (MVP) en un repositorio y análisis de decisiones | **Versión 1** del sistema con un patrón clásico |
| **Foro de la Unidad 3** (20 %) | Aporte de mínimo 200 palabras comparando patrones modernos y dos réplicas | **Decisión de migración**: a qué patrón moderno pasar la v1 |
| **Actividad 3** (40 %) | Proyecto final: definición, arquitectura, desarrollo y evaluación, con documento técnico, prototipo, repositorio y presentación | **Versión 2** con un patrón moderno, **informe FO-IV-159** con sus anexos y sustentación |

> **Nota:** Los enunciados oficiales están en el aula Moodle y **mandan**. Esta guía no los
> reemplaza: te muestra cómo encadenarlos para que el trabajo de una actividad sirva en la
> siguiente y termine en el informe del proyecto de aula.

¿Por qué hacerlo así? Porque la pregunta difícil de la Actividad 3 —*«compara tu patrón con
otras alternativas»*— solo tiene buena respuesta si existe la alternativa. En este proyecto
existe: es **tu propia versión 1**. La comparación deja de ser opinión y pasa a ser evidencia.

```ascii
  H0 equipo + reto ──▶ H1 diagnóstico ──▶ H2 v1 clásica ──▶ H3 decisión ──▶ H4 v2 + FO-IV-159
      (13-oct)          A1 · 18-oct        A2 · 25-oct      Foro · 1-nov     A3 · 8-nov
                                                │                              │
                                                └──── se compara contra ───────┘
```

## 2. Calendario y encuentros

El curso va del **lunes 5 de octubre al domingo 8 de noviembre de 2026**. Los encuentros
sincrónicos son los **martes de 8:20 a 9:10 p. m.** por Google Meet
([meet.google.com/pzh-kxer-pnx](https://meet.google.com/pzh-kxer-pnx)).

| # | Fecha | Qué se trabaja | Qué traes |
|---|---|---|---|
| 1 | Martes 6 de octubre | Unidad 1 + lanzamiento del proyecto de aula | Preguntas sobre el catálogo |
| 2 | Martes 13 de octubre | Unidad 2: patrones clásicos | **Equipo y reto definidos (H0)** |
| 3 | Martes 20 de octubre | Unidad 3: patrones modernos | La v1 en construcción |
| 4 | Martes 27 de octubre | **Asesoría del proyecto de aula** | Avance de la v2 y borrador del FO-IV-159 |
| 5 | Martes 3 de noviembre | **Sustentación** | La presentación final |

## 3. Los hitos

| Hito | Qué entregas | Dónde se entrega | Modalidad | Vence |
|---|---|---|---|---|
| **H0** | Integrantes, reto elegido y título provisional del proyecto | Mensaje al tutor por el aula, antes del encuentro 2 | Equipo | Martes 13 de octubre |
| **H1** | Informe de diagnóstico arquitectónico del reto | Actividad 1 | Individual | Domingo 18 de octubre, 11:59 p. m. |
| **H2** | v1: documento, UML, MVP y enlace al repositorio | Actividad 2 | Equipo | Domingo 25 de octubre, 11:59 p. m. |
| **H3** | Aporte y réplicas sobre el patrón moderno al que migrar | Foro de la Unidad 3 | Individual | Domingo 1 de noviembre, 11:59 p. m. |
| **H4** | v2 + **informe FO-IV-159** + anexos (documento técnico, repositorio, capturas) + sustentación | Actividad 3 | Equipo | Sustentación martes 3 de noviembre · entrega domingo 8 de noviembre, 11:59 p. m. |

### 3.1 Qué produce cada hito y para qué sirve después

- **H1 → H2.** El diagnóstico identifica los atributos de calidad que mandan en tu reto y
  descarta patrones con argumentos. La v1 implementa el patrón clásico que mejor salió
  parado. Cada integrante escribe su propio informe sobre el reto del equipo.
- **H2 → H3.** La v1 hace visibles sus límites: dónde duele el acoplamiento, qué no escala,
  qué cuesta cambiar. Esos límites son el material del foro.
- **H3 → H4.** El foro obliga a defender la migración frente a compañeros que critican. La
  v2 implementa la decisión que resistió la crítica.
- **H4.** La v2 se compara contra la v1 con criterios medibles, y el FO-IV-159 cuenta el
  proyecto completo con sus evidencias.

> **Tip:** Marca la v1 en el repositorio con una etiqueta de git (`git tag v1` y
> `git push --tags`) antes de empezar la v2. Así la comparación es reproducible: cualquiera
> puede ejecutar las dos versiones.

## 4. El informe FO-IV-159, campo por campo

El **FO-IV-159 · Informe de Proyectos de Aula** es una hoja de cálculo con tres pestañas:
**INFORME** (los campos del proyecto), **ESTUDIANTE** (los integrantes) y **PRODUCTOS** (el
catálogo de productos aceptados). Cada equipo diligencia **uno**. En la columna de la derecha
de cada campo el formato trae su instrucción: reemplázala por tu texto.

### 4.1 Información general

| Campo del FO-IV-159 | Qué escribes | Sale del hito |
|---|---|---|
| Título del proyecto | Breve y preciso; responde qué, cómo, cuándo, dónde y con quién | H0, se ajusta al final |
| Resumen del proyecto | Problema, cómo lo resolvieron, por qué y con qué herramientas. **Máximo 800 caracteres** | H4: se escribe de último |
| Área de Conocimiento del Programa Académico | Ingeniería, arquitectura, urbanismo y afines | — |
| Fecha de inicio / Fecha de cierre | 05/10/2026 y 08/11/2026 | — |
| Facultad | Facultad de Ingeniería | — |
| Programa Académico y Semestre | El programa de posgrado y el semestre que cursan los integrantes | — |
| Número de estudiantes participantes | Los integrantes del equipo (2 o 3) | H0 |

### 4.2 Contexto del proyecto

| Campo del FO-IV-159 | Qué escribes | Sale del hito |
|---|---|---|
| Planteamiento del problema | De lo general a lo específico (mundial, nacional, regional), con datos de fuentes primarias (DANE, secretarías, artículos científicos) citadas en APA 7. Sin juicios de valor | Reto + H1 |
| Pregunta de investigación | El problema en forma de pregunta, coherente con el título. Que no se responda con sí o no | H0–H1 |
| Justificación del proyecto | Relación con las prioridades de la región y del país, resultados esperados, cómo se socializan y quiénes se benefician | H1 + H3 |

Ejemplo con el reto de demostración (Mercado Campesino): *«¿En qué medida migrar el sistema
de pedidos de una asociación de productores de Neiva de una arquitectura en capas a una
arquitectura hexagonal con eventos cambia su modificabilidad y su disponibilidad en el día
de cierre de pedidos?»*

### 4.3 Objetivos y metodología

| Campo del FO-IV-159 | Qué escribes | Sale del hito |
|---|---|---|
| Objetivo General | Un verbo en infinitivo; qué, cómo y para qué; medible (verbos de la taxonomía de Bloom) | H0–H1 |
| Objetivos específicos | Las metas de cada etapa, en secuencia y medibles. No son actividades | Los hitos H1 a H4 |
| Metodología implementada | Metodología: Aprendizaje Basado en Proyectos (ABP) con aprendizaje cooperativo, organizado en los hitos H0 a H4 de esta guía | — |

Una forma natural de los objetivos específicos es seguir los hitos: *diagnosticar* los
atributos de calidad del reto (H1); *diseñar e implementar* la v1 con un patrón clásico (H2);
*evaluar* alternativas modernas y *seleccionar* una (H3); *implementar* la v2 y *comparar*
ambas versiones con métricas (H4).

### 4.4 Resultados, productos y anexos

| Campo del FO-IV-159 | Qué escribes | Sale del hito |
|---|---|---|
| Resultados del proyecto | Logros concretos (v1 y v2 funcionando), la comparación medida, el impacto en el aprendizaje (estudiantes, porcentaje de ejecución) y las habilidades desarrolladas | H2–H4 |
| Productos | Del catálogo de la pestaña PRODUCTOS: «Desarrollo de software» (la v1 y la v2), «Reporte de investigación» (el documento técnico) y «Exposición de productos» (la sustentación) | H4 |
| Anexo 1. Fotografías | Capturas de la v1 y de la v2 funcionando, del repositorio y de la sustentación | H2–H4 |
| Anexo 2. Productos | El **documento técnico** (plantilla de esta guía), el enlace al repositorio con las etiquetas `v1` y `v2`, y la presentación | H4 |
| Bibliografía | Normas APA vigentes o IEEE | Todos |

### 4.5 La pestaña ESTUDIANTE

Una fila por integrante: institución, facultad, programa académico, semestre, nombre y
apellidos, e identificación.

> **Cuidado:** La pestaña ESTUDIANTE lleva **números de identificación**. El FO-IV-159 se entrega
> **solo en el aula Moodle**: no lo subas al repositorio, que puede ser público.

## 5. Catálogo de retos

Cada equipo elige **uno**. Todos están situados en el Huila y tienen una versión 1 natural con
un patrón clásico y al menos dos caminos modernos defendibles. Los requisitos son el
**mínimo**: puedes ampliarlos, no recortarlos.

> **Cuidado:** **Mercado Campesino** (pedidos y entregas de una asociación de productores) es el
> reto de demostración que resuelven los manuales paso a paso. **No se puede elegir.**

### Reto 1 · TrazaCafé — trazabilidad de café especial

Una cooperativa recibe lotes de café de pequeños productores, los clasifica, los somete a
catación y los agrupa en despachos para exportadores. Los compradores internacionales
exigen saber de qué finca viene cada saco.

| Elemento | Detalle |
|---|---|
| Actores | Productor, técnico de acopio, catador, exportador, comprador |
| Requisitos mínimos | Registrar productor y finca con ubicación · registrar ingreso de lote (peso, humedad, variedad, proceso) · registrar la catación con su puntaje · agrupar lotes en un despacho · consultar la historia de un lote por su código · reporte por finca y por cosecha |
| Atributos de calidad que mandan | Trazabilidad y auditabilidad, integridad de los datos, operación con conectividad limitada en el punto de acopio |
| v1 sugerida | **Capas** (o pipes & filters para el flujo de beneficio del lote) |
| v2 candidatas | **Event-driven** (cada cambio de estado del lote es un evento), **CQRS** (consulta pública del lote separada del registro) |

### Reto 2 · RutaSur — reservas de turismo regional

Operadores de San Agustín, Isnos y el Desierto de la Tatacoa venden experiencias (recorridos
arqueológicos, observación astronómica, transporte, hospedaje) con cupos limitados. En
temporada alta la demanda se multiplica y nadie puede sobrevender un cupo.

| Elemento | Detalle |
|---|---|
| Actores | Turista, operador turístico, guía, aliado de hospedaje, administrador |
| Requisitos mínimos | Catálogo de experiencias · disponibilidad por fecha y cupo · reserva con bloqueo temporal del cupo · pago simulado · confirmación con comprobante · calificación después de la visita · panel del operador |
| Atributos de calidad que mandan | Escalabilidad en temporada alta, consistencia de cupos (cero sobreventa), disponibilidad |
| v1 sugerida | **MVC** sobre una arquitectura **en capas** |
| v2 candidatas | **Microservicios** (catálogo, reservas, pagos, notificaciones) coordinados por **eventos**; **serverless** para notificaciones |

### Reto 3 · AquaBetania — monitoreo de estanques piscícolas

Piscicultores de tilapia en el embalse de Betania instalan sensores en sus jaulas. Si el
oxígeno disuelto cae de noche y nadie se entera, se pierde la producción en horas.

| Elemento | Detalle |
|---|---|
| Actores | Piscicultor, técnico, sensor (dispositivo), comprador |
| Requisitos mínimos | Registrar jaulas o estanques · recibir lecturas periódicas (oxígeno, temperatura, pH) · alertas por umbral · bitácora de alimentación · histórico con gráficas · reporte de mortalidad |
| Atributos de calidad que mandan | Latencia de las alertas, volumen de ingesta, tolerancia a fallos de conectividad, costo de operación |
| v1 sugerida | **Pipes & filters** (ingesta → limpieza → evaluación de umbral → almacenamiento) o **cliente-servidor** |
| v2 candidatas | **Event-driven**, **serverless** (una función por lectura o por alerta), **cloud-native** |

### Reto 4 · CitaSalud — agendamiento en una red regional de IPS

Una red de IPS con sedes en Neiva, Pitalito, Garzón y La Plata agenda citas por web y por
call center. Hoy hay doble asignación de citas y nadie confía en la lista de espera.

| Elemento | Detalle |
|---|---|
| Actores | Paciente, agente de call center, profesional de la salud, coordinador de sede, servicio externo de validación de derechos (simulado) |
| Requisitos mínimos | Consultar agenda por especialidad y sede · asignar, reprogramar y cancelar cita · lista de espera · recordatorios · validar derechos del afiliado contra el servicio externo · reporte de inasistencia |
| Atributos de calidad que mandan | Consistencia (cero doble asignación), disponibilidad, seguridad y privacidad (datos de salud = datos sensibles, Ley 1581 de 2012), integrabilidad |
| v1 sugerida | **Capas** con **MVC** en la presentación |
| v2 candidatas | **Hexagonal** (aislar el dominio de la integración externa), **CQRS** (consulta de agendas separada de la asignación), **microservicios** |

### Reto 5 · PQRS Ciudadana — peticiones de una alcaldía

Una alcaldía municipal recibe peticiones, quejas, reclamos y sugerencias por ventanilla y por
web. La ley fija plazos de respuesta (Ley 1755 de 2015) y hoy se vencen sin que nadie lo note.

| Elemento | Detalle |
|---|---|
| Actores | Ciudadano, radicador, dependencia responsable, jefe de control interno |
| Requisitos mínimos | Radicar la PQRS con número único · clasificarla y asignarla a una dependencia · semáforo de vencimiento según el plazo legal · responder y notificar al ciudadano · consultar el estado por radicado · reporte de oportunidad por dependencia |
| Atributos de calidad que mandan | Trazabilidad, cumplimiento de plazos, usabilidad para el ciudadano, disponibilidad |
| v1 sugerida | **MVC** sobre **capas** |
| v2 candidatas | **Hexagonal** + **event-driven** (los vencimientos y asignaciones como eventos), **microservicios** (radicación, gestión, notificaciones) |

### 5.1 Reglas del catálogo

- Si dos equipos eligen el mismo reto, cada uno **delimita un alcance distinto** (otra
  cooperativa, otro tipo de experiencia, otra sede) y lo declara en el H0.
- Puedes cambiar de reto **solo hasta el H0** (martes 13 de octubre).
- Un reto propio fuera del catálogo se acepta si el tutor lo aprueba en el H0 y cumple lo
  mismo que los del catálogo: actores, al menos seis requisitos, atributos de calidad
  explícitos, una v1 clásica natural y dos caminos modernos defendibles.

## 6. Equipos

- **2 o 3 integrantes**. La Actividad 1 y el foro son **individuales**; la Actividad 2 y la
  Actividad 3, **de equipo** (cada integrante sube la misma entrega en el aula).
- **Contribución visible.** Cada integrante hace commits con su propia cuenta en el
  repositorio del equipo. El documento técnico declara qué hizo cada uno.
- **Repositorio.** Uno por equipo, con instrucciones para ejecutar la v1 y la v2.

## 7. Qué se entrega en la Actividad 3

El cierre del proyecto de aula se califica dentro del **40 % de la Actividad 3** y es **uno
por equipo**:

1. **El FO-IV-159 diligenciado** (.xlsx), con las pestañas INFORME y ESTUDIANTE completas.
2. **Un archivo .zip de anexos**, como pide el formato:
   - **Anexo 1. Fotografías:** capturas de la v1, de la v2 y de la sustentación.
   - **Anexo 2. Productos:** el **documento técnico** (mínimo 2.000 palabras, Arial 12,
     interlineado 1.5, márgenes de 2.5 cm, APA; Word o PDF), el enlace al repositorio y la
     presentación.

La [plantilla del documento técnico](plantilla/) trae su estructura (diagnóstico, v1,
decisión de migración, v2, comparación y contribución por integrante) y el FO-IV-159 oficial.

### 7.1 Criterios medibles para la comparación v1 vs v2

Elige **al menos tres** y mídelos en las dos versiones:

| Criterio | Cómo se mide |
|---|---|
| Costo de un cambio | Agrega la misma funcionalidad nueva a v1 y v2; cuenta archivos y líneas tocadas |
| Acoplamiento | Dependencias entre módulos (diagrama o herramienta de análisis) |
| Despliegue independiente | ¿Se puede desplegar una parte sin las demás? Sí/no, con evidencia |
| Rendimiento | Tiempo de respuesta o rendimiento bajo la misma carga |
| Tolerancia a fallos | Qué pasa cuando un componente cae (prueba documentada) |
| Facilidad de prueba | Pruebas automatizadas posibles y cobertura |

## 8. Rúbrica integradora

Los pesos son los que **declaran los enunciados** de las actividades (20 % · 20 % · 20 % ·
40 %); aquí no se crea ninguna nota nueva. La tabla dice qué evidencia del proyecto responde
a cada criterio de los enunciados.

| Hito | Criterio del enunciado | Evidencia esperada en el proyecto |
|---|---|---|
| H1 · A1 | Introducción: definición e importancia | Por qué la arquitectura decide el éxito **de tu reto** |
| H1 · A1 | Patrones: definición, clasificación y comparación | Tabla clásicos vs modernos frente a los atributos de calidad del reto |
| H1 · A1 | Análisis práctico de al menos tres patrones clásicos | Tres candidatos para el reto, cada uno con un sistema real de referencia, beneficios y limitaciones |
| H1 · A1 | Reflexión, fuentes y formato | 3 fuentes académicas en APA; 1.500–2.000 palabras |
| H2 · A2 | Selección del problema y diseño UML | El reto delimitado; diagramas de componentes, clases y secuencia |
| H2 · A2 | Prototipo (MVP) en repositorio | La v1 ejecutable, con instrucciones y la etiqueta `v1` |
| H2 · A2 | Análisis de decisiones y reflexión | Por qué ese patrón clásico y qué límites ya se ven |
| H3 · Foro | Aporte comparativo y dos réplicas | El patrón moderno al que migrar tu v1, con argumentos técnicos y de negocio |
| H4 · A3 | Definición, arquitectura, desarrollo y evaluación | FO-IV-159 completo, v2 funcional y la comparación medida en el documento técnico |
| H4 · A3 | Repositorio y presentación final | README profesional; sustentación del 3 de noviembre |

## 9. La sustentación (martes 3 de noviembre)

Cada equipo tiene **8 minutos**: 5 de exposición y 3 de preguntas.

| Tramo | Tiempo | Qué muestras |
|---|---|---|
| El problema | 30 s | Reto, pregunta de investigación y el atributo de calidad que más pesa |
| La v1 | 1 min | Patrón clásico y el límite que encontraron |
| La decisión | 1 min | Alternativas consideradas y por qué ganó la elegida |
| La v2 | 1 min 30 s | Arquitectura y una demostración corta |
| La comparación | 1 min | Las métricas v1 vs v2 y su conclusión |

> **Nota:** Si en los 50 minutos del encuentro no caben todos los equipos, los que queden
> graban un **video de 5 minutos** con la misma estructura y ponen el enlace en el Anexo 2.
> El tutor anuncia el orden al inicio del encuentro.

Preguntas típicas: *¿qué harían distinto si empezaran hoy?*, *¿qué parte de la v2 no
justificaría su costo en un sistema más pequeño?*, *¿qué pasa si cae el componente X?*

## 10. Errores comunes

> **Cuidado:** **Elegir el patrón moderno por moda.** «Microservicios porque es lo que usan las
> grandes» no es un argumento. El argumento sale de los atributos de calidad de tu reto y de
> los límites que mostró tu v1.

> **Cuidado:** **Comparar contra un sistema imaginario.** La comparación es contra **tu** v1, que
> existe y se puede ejecutar. Si la v1 no corre, no hay comparación.

> **Cuidado:** **Un FO-IV-159 con las instrucciones todavía puestas.** Cada campo trae su
> instrucción en la celda de la derecha: se reemplaza por el texto del equipo, no se deja.

> **Cuidado:** **Juicios de valor en el planteamiento.** El formato pide evitar «bueno», «malo»,
> «mejor», «peor»: usa datos y fuentes.

> **Cuidado:** **Empezar la v2 borrando la v1.** Etiqueta la v1 en git antes de tocarla.

