# GUÍA DEL PROYECTO DE AULA

**Ingeniería para el Desarrollo Móvil · Proyecto de aula · Guía del proyecto de aula: una app móvil gobernada por su arquitectura**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Ingeniería para el Desarrollo Móvil |
|---|---|---|---|
| Unidad | Proyecto de aula del módulo | Proyecto / Corte | de aula · Corte 1 |
| Modalidad | Parejas | Periodo | 2026-B |
| Tipo | Proyecto de aula (A1-A3 20 % c/u · Informe FO-IV-159 40 %) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Formular, en pareja, un problema real que se resuelva con una app móvil híbrida y que cumpla los ocho mínimos de arquitectura del proyecto.
- Diligenciar el marco de gobierno móvil, de 00 Gobierno a 05 Release, con el método SDD: primero la decisión escrita y después el código.
- Leer cada actividad del aula como un hito del mismo proyecto y planear las entregas por fechas.
- Diligenciar el Informe del proyecto de aula (FO-IV-159) con sus anexos, con evidencia verificable de cada mínimo y la trazabilidad de las decisiones.

## 1. Qué es un proyecto de aula y cómo funciona aquí

El **proyecto de aula** es una figura institucional de CORHUILA: un proyecto que nace en una
asignatura, se desarrolla durante el período con los temas del curso y se reporta al
programa académico en el formato **FO-IV-159 «Informe de proyectos de aula»**, del proceso de
Gestión de Investigación e Innovación. Por eso el cierre del módulo no es un trabajo escrito
libre: es ese informe, diligenciado por la pareja, con la app y su documentación como anexos.

En este módulo hay **un solo proyecto de aula por pareja** y las tres actividades del aula son
sus hitos. Lo que deciden en la Actividad 1 lo defienden en la Actividad 2 y lo entregan
funcionando en la Actividad 3; el **Informe del proyecto de aula (FO-IV-159)** cuenta ese
recorrido completo, con la evidencia y con lo que cambió en el camino. Cada tema de las
unidades se usa, en la misma semana, para tomar una decisión del proyecto: lo que se evalúa al
final no es lo que recuerdan, sino lo que construyeron y cómo lo justifican.

**Pregunta del proyecto.** «¿Qué aplicación móvil híbrida, construida con Ionic + Angular +
Capacitor y gobernada por una arquitectura explícita, resuelve un problema real de su trabajo o
su entorno y está lista para publicarse?» Cada pareja la aterriza en su propio problema y esa
versión aterrizada es la **pregunta de investigación** del campo 13 del informe.

**La metodología la eligen ustedes.** El formato pide declarar la metodología implementada
(campo 17) y trae un listado de opciones posibles para el aula. Este material no impone
ninguna: cada pareja elige la que mejor describe cómo trabajó, la justifica y muestra cómo la
aplicó.

El curso es de **arquitectura móvil**, no de funcionalidades. Una app pequeña, con dos
features bien gobernadas, vale más que una app grande en la que cada pantalla resolvió el
estado, la red y los permisos a su manera.

| Sí cuenta | No suma |
|---|---|
| Decisiones explícitas, registradas en ADR y respetadas en el código | Cantidad de pantallas o de features |
| Evidencia verificable: repositorio, artefacto firmado, video | Afirmaciones sin evidencia |
| Coherencia entre el informe, su anexo técnico y el repositorio | Diagramas vistosos que no coinciden con el código |
| Evolución razonada: antes → después → razón | Documentación escrita al final «para cumplir» |

> **Cuidado:** La app de referencia de los manuales, **Bitácora de Campo** (visitas técnicas con
> formulario, foto y ubicación), **no es elegible** como proyecto de aula. Los manuales la
> usan como ejemplo trabajado; tu pareja resuelve su propio problema, con su propio dominio,
> sus casos de uso y su estrategia sin conexión.

## 2. El marco de gobierno móvil y SDD

El **marco de gobierno móvil** del curso es un manual con plantillas que dice qué decidir en
una app móvil, en qué orden y dónde dejarlo escrito. Tiene seis secciones y se aplica con el
método **SDD** (*Software Design Documentation*): la documentación de diseño **precede y
guía** la implementación. No se documenta lo que ya se construyó; se diseña por escrito, se
construye y se actualiza el documento.

```ascii
  Tradicional:   Código  ──►  Documentación (si algún día ocurre)
  SDD:           Documentación  ──►  Código  ──►  Documentación actualizada
```

Tres principios sostienen el método:

- **Diseño antes del código:** un documento de diseño revisado es requisito para empezar una feature.
- **Documentación viva:** se actualiza con cada cambio; un documento desactualizado es un error escrito en prosa.
- **Trazabilidad:** cada pantalla tiene una historia, cada historia tiene criterios de aceptación y cada criterio tiene una prueba.

| # | Sección | Qué debe responder | Hito |
|---|---|---|---|
| 00 | Gobierno | ¿Cómo planea, estima y cierra el trabajo la pareja? ¿Qué es «listo» y «hecho»? ¿Cómo se nombran ramas, commits y versiones? ¿Qué reglas de seguridad no se negocian? | H1 |
| 01 | Arquitectura | ¿Dónde va el código de una feature? ¿Qué capa depende de cuál? ¿Qué único patrón de estado se usa? ¿Cómo se navega y dónde quedó registrada cada decisión? | H1 (ADR del stack en H2) |
| 02 | Código y UI | ¿Cómo se nombra el código y cómo se manejan errores y asincronía? ¿De dónde salen colores, espaciados y tipografía? ¿Cómo se garantiza la accesibilidad? ¿Cómo se centralizan los textos? | H2 |
| 03 | API y datos | ¿Cómo se hacen y reintentan las peticiones? ¿Dónde viven los tokens y cómo se refrescan? ¿Qué se guarda en el dispositivo? ¿Qué pasa sin conexión? | H2 |
| 04 | Calidad | ¿Qué se prueba, en qué nivel y cuánto? ¿Qué presupuestos de rendimiento hay? ¿Qué se revisa en seguridad antes de publicar? | H3 |
| 05 | Release | ¿Cómo un commit se vuelve un artefacto firmado? ¿Dónde vive la llave de firma? ¿Cómo se escalona y se revierte un despliegue? ¿Cómo se observa la app en producción? | H3 |

Las secciones se diligencian **en orden**, porque cada una depende de la anterior: no se
define la red (03) sin saber en qué capa vive (01), ni se firma un release (05) sin las
pruebas que lo autorizan (04). El orden coincide con los hitos:

```ascii
  H1 · A1      (dom 18-oct)   00 Gobierno + 01 Arquitectura + backlog y prototipo
       │
       ▼
  H2 · A2      (dom 25-oct)   ADR del stack + 02 Código y UI + 03 API y datos
       │
       ▼
  H3 · A3      (dom 1-nov)    04 Calidad + 05 Release  (app firmada + memoria técnica)
       │
       ▼
  H4 · Informe (dom 8-nov)    FO-IV-159 + anexos: marco 00–05 completo, evidencia y trazabilidad
```

El marco es neutral frente al stack; en este curso cada decisión concreta se toma para
Ionic + Angular + Capacitor y se registra en un ADR:

| Preocupación | Opciones habituales en Ionic + Angular + Capacitor |
|---|---|
| Estado | Servicio o ViewModel con `BehaviorSubject` de RxJS, Signals de Angular, NgRx (Store o SignalStore) |
| Navegación | Angular Router con una tabla central, rutas diferidas (`loadComponent`) y guards funcionales (`CanActivateFn`) |
| Red | `HttpClient` de Angular con interceptores funcionales (`provideHttpClient(withInterceptors(...))`) |
| Tokens | Plugin de almacenamiento seguro (Keychain en iOS, Keystore en Android) |
| Persistencia local | Capacitor Preferences para valores pequeños, SQLite para consultas y volumen |
| Pruebas | Jasmine/Karma o Vitest, según el proyecto, con dobles de prueba propios |

**Plantillas y formato.** Las plantillas del marco, en español y adaptadas a este stack, están
en [Plantillas del proyecto](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/proyecto-aula/plantillas/),
con un `.zip` que incluye el formato FO-IV-159 y el árbol de la carpeta `docs/` que la pareja
crea en su repositorio el primer día. La [Presentación del proyecto de aula](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/proyecto-aula/slides/)
resume esta guía.

## 3. Parejas

- El proyecto de aula se hace en **parejas**. Si el número de estudiantes es impar, se admite **un único trío**, que agrega un **tercer plugin nativo** a los mínimos.
- Las tareas del aula son individuales: en **H1 y H3** los dos integrantes suben **el mismo PDF**, con los dos nombres en la portada; en **H4** los dos suben **los mismos dos archivos** (el formato FO-IV-159 diligenciado y el `.zip` de anexos). Si uno no sube los archivos, no tiene entrega.
- La **Actividad 2 es individual**: los dos analizan el mismo proyecto, pero cada uno escribe y publica su propio análisis.
- Los dos programan y los dos documentan. El historial del repositorio debe mostrar commits de ambos, y el informe (campo 18) declara el aporte de cada uno.
- En la socialización el tutor puede preguntarle a cualquiera de los dos por cualquier parte del proyecto.
- Repartan los roles del marco sin dejar a nadie fuera del código: uno hace de dueño del producto (prioriza el backlog y acepta las historias) y otro de líder técnico (cuida los ADR, la regla de dependencias y la DoD); los dos desarrollan, prueban y revisan el PR del otro.
- Si la pareja se disuelve o un integrante se retira, avisen al tutor de inmediato; él define cómo continúa cada uno.

### El problema (H0)

El problema es **libre**, pero debe ser real y caber en cuatro semanas. Antes del **viernes
16 de octubre a las 11:59 p. m.** la pareja publica en el foro **«Preguntas y respuestas»**
de la sección Inicio un mensaje con el asunto «H0 · nombres de la pareja» que contenga: los
integrantes, el problema en dos frases, el usuario que lo sufre, las dos o tres features
previstas, el backend que usará (API propia, pública o simulada) y los dos plugins nativos
con el permiso que pide cada uno. Lleguen al encuentro 2 con el H0 escrito: la clínica de la
Actividad 1 trabaja sobre él.

- [ ] El problema existe en el trabajo o el entorno de la pareja y tiene un usuario identificable.
- [ ] Necesita inicio de sesión y un backend con al menos un recurso que consultar y modificar.
- [ ] Usa dos capacidades nativas que pidan permiso al usuario (cámara, ubicación, notificaciones, biometría…) por una razón del dominio, no como adorno.
- [ ] Al menos una feature tiene sentido sin conexión (consultar lo último que se descargó).
- [ ] Se resuelve con dos o tres features; lo demás va al backlog como *Could* o *Won't*.

**Ojo.** Si su problema también usa cámara y ubicación, el dominio, los casos de uso y la
estrategia sin conexión deben ser propios: una Bitácora de Campo con otro nombre no cumple la
condición de problema propio.

## 4. Los ocho mínimos

Mínimo no es máximo, pero tampoco se suman puntos por features adicionales. Un mínimo que no
se puede verificar en el repositorio, en el artefacto o en el video **no está cumplido**.

| # | Mínimo | Sección del marco | Cómo se evidencia |
|---|---|---|---|
| 1 | Ionic 8 o superior + Angular + Capacitor | 01 Arquitectura (ADR del stack) | `package.json` con las versiones; app corriendo en Android (emulador o dispositivo) |
| 2 | Estructura por feature con capas `presentation`, `domain` y `data`, y la regla de dependencias respetada | 01 Arquitectura (estructura, capas y estado) | Árbol real de `src/app/`; `domain/` sin importaciones de Angular, `HttpClient` ni Capacitor; ninguna página importa de `data/` |
| 3 | Un solo patrón de estado registrado en ADR, y al menos 3 ADR | 01 Arquitectura (decisiones) | ADR de estado + dos más, con alternativas y consecuencias; registro en `decisiones/README.md` |
| 4 | Tabla de rutas central con guard | 01 Arquitectura (navegación) | Un único `app.routes.ts`; guard funcional en las rutas protegidas; tabla de `navegacion.md` igual al código |
| 5 | Un único cliente HTTP con interceptores (token, timeout, errores) y refresh de token; tokens en almacenamiento seguro | 03 API y datos (red, autenticación) | Interceptores registrados en un solo lugar; prueba del refresh con un único reintento; tokens fuera de `localStorage` y de Preferences |
| 6 | Estrategia offline documentada por feature y aplicada al menos en una (caché de lectura) | 03 API y datos (offline, persistencia) | Tabla de estrategia por feature; demo en modo avión con los últimos datos y el aviso de «sin conexión» |
| 7 | Dos plugins nativos como adaptadores de un puerto, con permisos *just-in-time* | 01 Arquitectura (puertos) y 04 Calidad (seguridad) | Interfaz del puerto sin Capacitor; adaptador que es el único que importa el plugin; permiso pedido al tocar la acción, con explicación y manejo de la negativa |
| 8 | Pruebas unitarias de casos de uso y *state holders* + AAB/APK firmado + checklist de release | 04 Calidad y 05 Release | Reporte de pruebas en verde; artefacto firmado y verificado; checklist de la `v1.0.0` diligenciado |

Un **state holder** es el objeto que guarda el estado de una pantalla y lo expone como un
único objeto inmutable (un ViewModel o un servicio de estado); la página solo lo pinta y le
envía las acciones del usuario. La regla de dependencias y los puertos se ven así:

```ascii
   presentation ──────────►  domain  ◄────────── data
   páginas, ViewModels       entidades,          DTO, mappers,
   (state holders)           casos de uso,       repositorios HTTP,
                             interfaces          caché local

   puerto (interfaz pura) ◄── implementa ── adaptador Capacitor
   p. ej. CapturaFoto                       el único que importa el plugin
```

**Ojo con el mínimo 7.** El almacenamiento seguro de tokens ya es obligatorio por el mínimo 5
y **no cuenta** como uno de los dos plugins del mínimo 7: esos dos deben acceder a una
capacidad del dispositivo que pida permiso al usuario. El trío agrega un tercero con las
mismas reglas.

**Sugerencia.** La regla de dependencias se puede imponer con ESLint (`no-restricted-imports`)
para que una importación prohibida falle en el lint. Si la verifica la máquina, no depende de
la buena voluntad, y es una evidencia fuerte para el mínimo 2.

## 5. Hitos y fechas

| Hito | Actividad del aula | Secciones del marco | Qué se entrega | Quién | Vence |
|---|---|---|---|---|---|
| H0 | — | — | Pareja y problema que cumple los mínimos | Pareja | vie 16-oct |
| H1 | Actividad de aprendizaje 1 (20 %) | 00 Gobierno + 01 Arquitectura | Documento técnico con backlog y prototipo | Pareja (mismo PDF) | dom 18-oct |
| H2 | Actividad de aprendizaje 2 (20 %) | ADR del stack + 02 Código y UI + 03 API y datos | Análisis en el foro, dos respuestas y PDF en la tarea | Individual | dom 25-oct |
| H3 | Actividad de aprendizaje 3 (20 %) | 04 Calidad + 05 Release | App desplegada (AAB/APK firmado) y memoria técnica | Pareja (mismo PDF) | dom 1-nov |
| H4 | Entrega final del proyecto de aula [40%] | 00 a 05 completo | Informe FO-IV-159 diligenciado + `.zip` de anexos (documento técnico, AAB/APK, enlaces al repositorio y al video) | Pareja (mismos archivos) | dom 8-nov |

> **Cuidado:** Todos los hitos vencen a las **11:59 p. m. hora de Colombia** del día indicado. En
> las tareas del aula la fecha límite coincide con el cierre: después de esa hora Moodle no
> recibe archivos. Suban con margen y verifiquen que los archivos abren.

Los encuentros sincrónicos son los **viernes de 6:00 a 7:00 p. m.** por Google Meet
([meet.google.com/pzh-kxer-pnx](https://meet.google.com/pzh-kxer-pnx)). Las clínicas revisan
avances reales: lleguen con el repositorio y el borrador del hito abiertos.

| Encuentro | Fecha | En vivo | Llevar |
|---|---|---|---|
| 1 | vie 9-oct | Unidad 1 y lanzamiento del proyecto de aula | Ideas de problema y posible pareja |
| 2 | vie 16-oct | Unidad 2 · clínica de la Actividad 1 | H0 publicado, borrador de 00 y 01, árbol del repositorio |
| 3 | vie 23-oct | Unidad 3, parte 1 · clínica de la Actividad 2 | Análisis del foro publicado o en borrador; 02 y 03 en el repositorio |
| 4 | vie 30-oct | Unidad 3, parte 2 · clínica de la Actividad 3 | App corriendo, pruebas en verde, primer artefacto firmado |
| 5 | vie 6-nov | Socialización del proyecto de aula y cierre | Demo de 3 minutos lista y borrador del informe FO-IV-159 |

## 6. Cómo leer cada actividad del aula en tu proyecto

Los enunciados de las tres actividades **no cambian**: se escribieron para cualquier proyecto
híbrido. Esta sección dice en qué sección del marco cae cada cosa que piden, para que el
documento de cada actividad sea, a la vez, un avance del proyecto de aula. Respeten el
formato y la extensión que fija cada enunciado.

| Hito | Sesión | Práctica opcional | Manual paso a paso | Presentación |
|---|---|---|---|---|
| H1 · Actividad 1 | [OVA U1](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-01/session/) | [Práctica U1](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-01/optional-activity/) | [Manual U1](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-01/manual/) | [Presentación U1](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-01/slides/) |
| H2 · Actividad 2 | [OVA U2](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-02/session/) | [Práctica U2](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-02/optional-activity/) | [Manual U2](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-02/manual/) | [Presentación U2](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-02/slides/) |
| H3 · Actividad 3 | [OVA U3](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-03/session/) | [Práctica U3](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-03/optional-activity/) | [Manual U3](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-03/manual/) | [Presentación U3](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/unidad-03/slides/) |

### A1 · Actividad de aprendizaje 1 → H1 (dom 18-oct, pareja)

El enunciado pide un documento técnico con portada, índice, introducción, desarrollo
técnico, conclusiones y bibliografía. Organicen el **desarrollo técnico** como **00 Gobierno
→ 01 Arquitectura** y ubiquen ahí cada elemento solicitado:

| Lo que pide el enunciado | Sección del marco | Qué escribe la pareja |
|---|---|---|
| Descripción del proyecto (nombre, propósito, público objetivo) | Introducción | Problema real, usuario y pregunta del proyecto aplicada |
| Planteamiento del problema y alcance funcional | Introducción + 00 (backlog) | Qué entra y qué queda fuera, dicho explícitamente |
| Selección y justificación del framework (Angular, React o Vue) | 01 · ADR del stack (Propuesto) | Angular está fijado: justifíquenlo como ADR con React y Vue como alternativas evaluadas |
| Diagrama de arquitectura general | 01 Arquitectura | C4 de contexto y de contenedores, y diagrama de capas de una feature |
| Estructura base del proyecto Ionic con Capacitor | 01 · estructura del proyecto | Árbol real de `src/app/` por feature, generado con `ionic start` |
| Prototipo de interfaces móviles | 01 · fichas de pantalla | Una ficha por pantalla con sus cinco estados, junto a las capturas del prototipo |
| Backlog de producto (historias por prioridad) | 00 · backlog y definición de listo | Al menos 10 historias con criterios Dado/Cuando/Entonces y MoSCoW |
| Consideraciones sobre el entorno de desarrollo y pruebas iniciales | 00 · convenciones git y definición de hecho | Herramientas, repositorio, ramas y la primera prueba que corre |

Además de lo que pide el enunciado, el H1 deja en el repositorio la carpeta `docs/` con 00 y
01 diligenciados y **los dos primeros ADR**: patrón de estado y navegación. La introducción del
H1 es, además, el primer borrador de los campos 1, 2 y 12 a 16 del informe FO-IV-159.

### A2 · Actividad de aprendizaje 2 → H2 (dom 25-oct, individual)

El enunciado de la Actividad 2 describe un **foro**. El tutor lo crea en la Unidad 2 y la
entrega se completa en la tarea de la actividad:

1. Publica tu análisis en el foro de la Actividad 2 de la Unidad 2: entre 300 y 500 palabras, con al menos dos citas en APA 7 y enlaces a documentación oficial.
2. Responde de forma argumentada a **dos compañeros de otras parejas**, mínimo 150 palabras cada respuesta.
3. Copia el **enlace permanente** de cada una de tus dos respuestas (opción «Enlace permanente» de cada mensaje del foro).
4. Arma un PDF con tu publicación principal completa y los enlaces a tus dos respuestas, y súbelo a la tarea de la Actividad 2.

**Fecha sugerida.** Publica tu análisis a más tardar el **jueves 22 de octubre**: así la
clínica del viernes 23 trabaja sobre publicaciones reales y todos tienen el fin de semana para
responder antes del cierre del domingo.

Cada aspecto que pide el enunciado es la defensa de una decisión que ya está en el marco:

| Lo que pide el enunciado | Sección del marco | Qué defiendes |
|---|---|---|
| Justificación de la tecnología (framework + librerías) | 01 · ADR del stack (Aceptado) | Angular y las librerías complementarias de estado, asincronía y navegación |
| Estructuración de carpetas, gestión del estado y enrutamiento | 01 · estructura, ADR de estado y navegación | Por feature y por capas; el único patrón de estado; la tabla de rutas con guard |
| Principios de diseño de interfaces móviles | 02 Código y UI | Tokens sobre variables CSS de Ionic, modos `md` e `ios`, accesibilidad, textos centralizados |
| Integración de APIs REST, manejo de tokens y almacenamiento seguro | 03 API y datos | Cliente HTTP único, interceptores, refresh, almacenamiento seguro y estrategia sin conexión |
| Estrategia preliminar de pruebas | 04 Calidad (adelanto) | Qué niveles de prueba y con qué herramientas |
| Plan de despliegue previsto (Android/iOS) | 05 Release (adelanto) | Firma, artefactos y pasos hacia la tienda |

Aunque la nota es individual, las decisiones son de la pareja: al cierre del H2 el
repositorio tiene el ADR del stack aceptado y las secciones 02 y 03 diligenciadas. Los dos
integrantes analizan el mismo proyecto, pero cada uno argumenta con su propio texto.

### A3 · Actividad de aprendizaje 3 → H3 (dom 1-nov, pareja)

El enunciado pide dos partes: la **aplicación móvil funcional** (código en un repositorio Git
con acceso compartido, archivos compilados y evidencia de ejecución) y una **memoria técnica**
en PDF. La memoria es la presentación de las secciones 04 y 05 del marco:

| Lo que pide el enunciado | Sección del marco | Qué documenta la pareja |
|---|---|---|
| Preparación del proyecto para distribución (Capacitor, configuraciones por plataforma) | 05 · CI/CD | Entornos, `capacitor.config.ts`, variables de producción sin secretos |
| Generación de APK/AAB para Android e IPA para iOS (simulado si no hay cuenta) | 05 · firma y tiendas | Keystore fuera del repositorio, firma verificada, `versionName` y `versionCode` |
| Configuración de infraestructura de despliegue | 05 · CI/CD | El servicio elegido y su justificación en un ADR; al menos lint y pruebas automáticas |
| Subida a tiendas (simulación o evidencia real) | 05 · firma y tiendas | Pista de pruebas internas o simulación documentada, metadatos e ícono |
| Estrategia de pruebas finales y validación | 04 · estrategia de pruebas y casos | Pruebas unitarias en verde y casos manuales en dispositivo |
| Consideraciones de seguridad en producción | 04 · seguridad móvil | Checklist de seguridad aplicado: permisos, tokens, tráfico cifrado |
| Recomendaciones de mantenimiento post-despliegue | 05 · observabilidad | Reporte de fallos, banderas de funcionalidad, versión mínima y reversión |

El H3 cierra con el **checklist de release** de la `v1.0.0` diligenciado en el repositorio. De
las herramientas que menciona el enunciado, elijan las que puedan evidenciar y descarten las
demás con razón; EAS Build, por ejemplo, pertenece al ecosistema Expo de React Native.

> **Cuidado:** El keystore y sus contraseñas **nunca** entran al repositorio. Guárdenlo en dos
> lugares seguros: si se pierde, la app publicada no se puede volver a actualizar con la
> misma firma.

## 7. La entrega final: el Informe FO-IV-159

La entrega final del proyecto de aula es el formato institucional **FO-IV-159 «Informe de
proyectos de aula»** diligenciado por la pareja, más un `.zip` con sus anexos. El informe
cuenta el proyecto en el lenguaje del programa académico (problema, pregunta, objetivos,
metodología, resultados y productos); el anexo técnico demuestra, con el marco de gobierno
móvil 00–05 diligenciado, que la app es lo que el informe dice. Ninguno se escribe desde cero:
los dos integran y actualizan lo entregado en H1, H2 y H3 para describir la app **tal como
quedó construida**, no como se planeó.

Descarga el formato: [Formato FO-IV-159 (Excel)](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/proyecto-aula/plantillas/FO-IV-159-informe-proyectos-de-aula.xlsx).
Tiene tres hojas visibles: **INFORME** (los campos del proyecto), **ESTUDIANTE** (el talento
humano) y **PRODUCTOS** (el listado de productos posibles).

### Cómo se diligencia la hoja INFORME

- Cada campo tiene su nombre a la izquierda y, a la derecha (columnas D a F), la instrucción del formato. Escriban la respuesta en esa celda de la derecha, **reemplazando** la instrucción; ninguna instrucción debe quedar en el archivo entregado.
- No borren filas, hojas ni columnas, no cambien la numeración y no quiten el encabezado institucional. La numeración del formato salta del 3 al 5 y del 6 al 8: así viene el original y no falta nada.
- Las figuras, tablas y diagramas no caben en una celda: van en el documento técnico del Anexo 2, y el campo los menciona.
- El formato admite textos largos, pero Excel guarda como máximo 32 767 caracteres por celda; sean concisos y dejen el detalle técnico para el anexo.
- Usen una sola norma de citación, APA (7.ª edición) o IEEE, en todo el informe y en el anexo.

### Campo por campo

El ejemplo es un proyecto **ficticio**, «StockFarma» (una droguería de barrio que controla
vencimientos leyendo códigos de barras con la cámara y recibe notificaciones locales). Sirve
para ver el tono y la extensión, no para copiarlo; los datos entre corchetes los pone cada
pareja con su fuente.

| # | Campo | Qué escribir | De qué hito sale | Ejemplo breve (StockFarma) |
|---|---|---|---|---|
| 1 | Título del proyecto | Breve y preciso: qué, cómo, cuándo, dónde y con quién | H0 y H1 (descripción del proyecto) | «StockFarma: app móvil híbrida para controlar vencimientos de medicamentos en una droguería de barrio de Neiva, 2026-B» |
| 2 | Resumen del proyecto | Problema, cómo lo resuelve la app, por qué vale la pena y herramientas usadas; máximo 800 caracteres | H1 (introducción), actualizado en H3 | «El regente revisa fechas a mano y detecta los vencidos cuando ya no se pueden devolver. StockFarma registra cada lote leyendo su código de barras y avisa 60 días antes del vencimiento…» |
| 3 | Área de conocimiento del programa académico | El área de conocimiento del programa de posgrado en el que están matriculados | Datos del programa | «Ingeniería, arquitectura, urbanismo y afines» |
| 5 | Fecha de inicio | Formato DD/MM/AAAA | Calendario del curso | «09/10/2026» (lanzamiento del proyecto en el encuentro 1) |
| 6 | Fecha de cierre | Formato DD/MM/AAAA | Calendario del curso | «08/11/2026» |
| 8 | Facultad | Nombre de la facultad que presenta el proyecto | Datos del programa | «Facultad de Ingeniería» |
| 9 | Programa académico | Nombre oficial del programa de posgrado | Datos del programa | El que figura en su matrícula |
| 10 | Semestre | Semestre del programa en que cursan este módulo | Datos del programa | «1» |
| 11 | Número de estudiantes participantes | Integrantes del proyecto de aula | H0 | «2» (3 si son trío) |
| 12 | Planteamiento del problema | De lo general a lo específico (mundo, Colombia, región), situación actual, datos de fuentes primarias citados y relevancia; sin juicios de valor | H0 + introducción del H1 | «En Colombia, [dato del INVIMA o del DANE, con su cita]. En la droguería del caso, el control de fechas se lleva en una libreta y …» |
| 13 | Pregunta de investigación | La pregunta del proyecto aplicada a su problema: coherente con el título, sin respuesta de sí o no y sin juicios de valor | H0 y H1 | «¿Cómo apoyar, con una app móvil híbrida que lee códigos de barras y emite alertas locales, el control de vencimientos de una droguería de barrio de Neiva?» |
| 14 | Justificación del proyecto | Relación con las prioridades de la región y del país, resultados esperados, para qué sirven, cómo se socializan (encuentro 5) y quiénes se benefician; con fuentes | H1, ajustada en H3 | «Disminuye las pérdidas por vencimiento y apoya la dispensación segura; beneficia al regente y a sus clientes; se socializa el 6 de noviembre…» |
| 15 | Objetivo general | Verbo en infinitivo (taxonomía de Bloom); qué, cómo y para qué; medible y alineado con la pregunta | H1 | «Desarrollar una app móvil híbrida con Ionic, Angular y Capacitor, gobernada por una arquitectura por capas, para apoyar el control de vencimientos de una droguería de barrio de Neiva» |
| 16 | Objetivos específicos | Tres o cuatro metas medibles en secuencia; no son actividades. Una forma natural es un objetivo por hito | H1 a H3 | «Diseñar la arquitectura de la app y registrarla en tres ADR (H1); integrar la API con caché de lectura sin conexión (H2); validar la app con pruebas y generar el AAB firmado (H3)» |
| 17 | Metodología implementada | La metodología que eligieron del listado del formato, por qué encaja con su proyecto y cómo la aplicaron: fases, sprints, roles y SDD con el marco | H1 (00 Gobierno) a H3 | «Elegimos [metodología del listado] porque [razón ligada al problema]; la aplicamos en tres sprints que coinciden con H1, H2 y H3…» |
| 18 | Resultados del proyecto | Logros concretos (app funcionando y ocho mínimos), evidencias, porcentaje de ejecución del backlog, resumen de la trazabilidad H1 a H3, habilidades desarrolladas, deuda técnica y aporte de cada integrante | H3 + socialización | «StockFarma v1.0.0 firmada; 14 de 16 historias Must y Should cerradas (88 %); tres cambios trazados de H1 a H3; aporte: …» |
| 19 | Productos | «Desarrollo de software» (hoja PRODUCTOS), con nombre, versión y plataforma | H3 | «Desarrollo de software: StockFarma v1.0.0 para Android (AAB firmado), con código en repositorio Git» |
| 20 | Anexos | Nombre del `.zip` y lista de lo que contiene cada anexo | H3 y H4 | «anexos-stockfarma.zip: Anexo 1, 12 capturas y 1 de la socialización; Anexo 2, documento técnico, AAB y enlaces» |
| 21 | Bibliografía | Todas las fuentes citadas, en APA (7.ª edición) o IEEE, con una sola norma | H1 a H3 | «Ionic. (2026). *Ionic Framework documentation*. https://ionicframework.com/docs» |

El campo 17 es de ustedes: el formato trae un listado de metodologías posibles para el aula
(entre ellas aprendizaje cooperativo y colaborativo, aula invertida, aprendizaje basado en
problemas, design thinking, gamificación, aprendizaje servicio, trabajo por ámbitos y
thinking based learning). Elijan la que de verdad describe cómo trabajaron y muestren cómo se
ve en la sección 00 Gobierno y en el historial del repositorio.

### Hoja ESTUDIANTE

Una fila por integrante, desde la fila 4, con las seis columnas del formato: **Institución**
(Corporación Universitaria del Huila, CORHUILA), **Facultad** (Facultad de Ingeniería),
**Programa académico**, **Semestre**, **Nombre y apellidos** e **Identificación** (número del
documento de identidad). Los datos deben coincidir con los de los campos 8, 9, 10 y 11 de la
hoja INFORME.

### Hoja PRODUCTOS

Es un listado de referencia: no se diligencia. El producto de este proyecto de aula es
**«Desarrollo de software»**, de la columna **DESARROLLO TECNOLÓGICOS**, y se declara en el
campo 19 de la hoja INFORME con el nombre de la app, su versión y su plataforma.

### Los anexos (campo 20)

El campo 20 pide las evidencias en un archivo `.zip`. Ármenlo con esta estructura exacta:

```ascii
  anexos-<proyecto>.zip
  ├── anexo-1-fotografias/
  │   ├── 01-<pantalla-o-flujo>.png          capturas de la app en emulador o dispositivo:
  │   ├── 02-<pantalla-o-flujo>.png          flujo principal, permiso pedido, modo avión, error
  │   ├── …
  │   └── NN-socializacion.png               captura o foto de la socialización del 6-nov
  └── anexo-2-productos/
      ├── documento-tecnico-<proyecto>.pdf   marco de gobierno móvil 00–05 diligenciado
      ├── <proyecto>-v1.0.0.aab              artefacto firmado (o .apk firmado)
      └── enlaces.txt                        repositorio (con README) y video demo
```

- **Anexo 1 · Fotografías:** entre 8 y 15 capturas numeradas, que muestren el flujo principal, cada plugin pidiendo su permiso, la feature sin conexión y un estado de error; más una captura o foto de la socialización.
- **Anexo 2 · Productos:** el documento técnico en PDF, el AAB o APK firmado con la llave de release y `enlaces.txt` con dos enlaces: el repositorio Git (público, o privado con acceso compartido al tutor) con un README que permita clonar, instalar, ejecutar y probar; y el video demo de **5 a 7 minutos**, narrado por los dos integrantes, con el flujo principal, un plugin nativo pidiendo su permiso y la feature sin conexión.

El **documento técnico** del Anexo 2 es el marco de gobierno móvil 00–05 diligenciado para
el proyecto de la pareja, con la evidencia y la trazabilidad. PDF de **10 a 16 páginas** sin
contar portada, índice y referencias; Arial o Times New Roman 12; interlineado 1,5; márgenes
de 2,5 cm; citas con la misma norma del campo 21.

| Apartado | Contenido | Páginas |
|---|---|---|
| Portada | Título del proyecto (igual al campo 1), nombres de los integrantes y fecha | — |
| 00 Gobierno | Acuerdos (DoR, DoD, git, seguridad), backlog final con su estado, roles y cómo se aplicó SDD | 1–2 |
| 01 Arquitectura | C4 de contexto y contenedores, estructura real, capas y regla de dependencias, patrón de estado, tabla de rutas y guard, puertos nativos, registro de ADR | 3–4 |
| 02 Código y UI | Estándares, tokens y tematización `md`/`ios`, accesibilidad, textos centralizados | 1 |
| 03 API y datos | Cliente HTTP e interceptores, autenticación y refresh, almacenamiento seguro, persistencia, estrategia sin conexión por feature | 2–3 |
| 04 Calidad | Pirámide de pruebas aplicada y resultados, presupuestos medidos, checklist de seguridad | 1–2 |
| 05 Release | Firma, artefactos, CI/CD, checklist de release y observabilidad | 1–2 |
| Evidencia del producto | Tabla mínimo → evidencia (ruta en el repositorio, captura del Anexo 1 o minuto del video) | 1 |
| Trazabilidad de hitos | Tabla antes → después → razón para H1, H2 y H3 | 1–2 |

La **trazabilidad** muestra que el proyecto aprendió; va completa en el documento técnico y
resumida en el campo 18. Una fila por cambio relevante:

| Hito | Antes | Después | Razón |
|---|---|---|---|
| H1 | Cada página guardaba su estado en variables sueltas | ViewModel por pantalla con estado inmutable (ADR-001) | La clínica A1 mostró que las pantallas no se podían probar sin renderizarlas |
| H2 | Token guardado en Preferences | Token en almacenamiento seguro y refresh en el interceptor | Una respuesta del foro señaló que Preferences guarda en texto plano |
| H3 | Permiso de cámara pedido al abrir la app | Permiso pedido al tocar «Tomar foto», con explicación previa | Caso de prueba de permisos y regla de seguridad de 00 Gobierno |

**Todo debe poder verificarse.** Lo que el informe y su anexo técnico afirman debe estar en el
repositorio. Un diagrama, un ADR o una estrategia que no coincide con el código pierde puntos
en su criterio y en el de resultados y evidencias.

> **Cuidado:** **Cómo se entrega.** Los dos integrantes suben **los mismos dos archivos** a la tarea
> «Entrega final del proyecto de aula [40%]»: el formato diligenciado
> (`FO-IV-159-<proyecto>.xlsx`) y el `.zip` de anexos (`anexos-<proyecto>.zip`), antes del
> **domingo 8 de noviembre a las 11:59 p. m.** (hora de Colombia). Verifiquen que el `.zip`
> abre y que los enlaces de `enlaces.txt` funcionan sin pedir permiso.

## 8. Rúbrica de la entrega final

Las Actividades 1, 2 y 3 se califican con sus propios enunciados (20 % cada una). Esta
rúbrica es la de la **entrega final del proyecto de aula (40 %)**: el Informe FO-IV-159 con sus
anexos. Son 100 puntos y **nota = puntos / 20** (por ejemplo, 78 puntos equivalen a 3,9). Los
rangos de cada nivel están en cada celda.

| Criterio | Alto | Medio | Bajo |
|---|---|---|---|
| **Planteamiento del problema, pregunta de investigación y justificación** (campos 12–14; 10) | **9–10.** Problema descrito de lo general a lo específico, con datos de fuentes primarias citados; pregunta coherente con el título, abierta y sin juicios de valor; justificación con resultados, beneficiarios, relación con la región y forma de socializar | **6–8.** Problema real pero sin datos o con fuentes secundarias; pregunta que se responde con sí o no o que no coincide con el título; justificación genérica | **0–5.** Problema vago o copiado; sin pregunta o sin justificación; sin citas |
| **Objetivos y metodología** (campos 15–17; 10) | **9–10.** Objetivo general en infinitivo, medible y alineado con la pregunta; específicos medibles y en secuencia, no actividades; metodología elegida del listado, justificada y coherente con la sección 00 Gobierno y con el historial (diseño antes del código) | **6–8.** Objetivos que son actividades o no se pueden medir; metodología nombrada sin justificar o sin relación con lo que hicieron | **0–5.** Objetivos ausentes o incoherentes con la pregunta; sin metodología |
| **Arquitectura** (anexo técnico, sección 01; 25) | **22–25.** Estructura por feature con tres capas y regla de dependencias respetada en todo el código; un único patrón de estado en ADR; tabla de rutas central con guard; al menos 3 ADR con alternativas y costos; C4 coherente con el repositorio | **15–21.** Capas presentes con fugas (una página que llama a `HttpClient`); ADR sin alternativas reales o solo dos; diagramas que no coinciden del todo | **0–14.** Organización por tipo técnico o sin capas; estado mezclado; rutas dispersas; sin ADR |
| **Código/UI y API/datos** (secciones 02–03; 15) | **13–15.** Cliente HTTP único con interceptores de token, timeout y errores; refresh transparente con un solo reintento; tokens en almacenamiento seguro; DTO y mappers; estrategia sin conexión por feature y caché de lectura demostrada; tokens de diseño y estados de UI completos | **9–12.** Interceptor de token sin refresh o sin timeout; estrategia sin conexión documentada pero no aplicada; valores visuales quemados | **0–8.** Peticiones HTTP desde las páginas; tokens en `localStorage` o Preferences; sin manejo de errores ni de conexión |
| **Calidad y release** (secciones 04–05; 15) | **13–15.** Pruebas unitarias en verde de casos de uso y *state holders*, con sus transiciones; presupuestos medidos; checklist de seguridad con permisos *just-in-time*; AAB/APK firmado y verificable, keystore fuera del repositorio, SemVer y `versionCode`, checklist de release, CI con lint y pruebas y plan de observabilidad | **9–12.** Pruebas solo de algunos servicios o sin transiciones; rendimiento o seguridad declarados sin medir; artefacto firmado sin checklist o sin CI | **0–8.** Sin pruebas o pruebas que no corren; artefacto de depuración o sin artefacto; keystore en el repositorio |
| **Resultados, productos y evidencias** (campos 18–20; 20) | **17–20.** App funcional con cada mínimo enlazado a su evidencia; AAB firmado; video de 5 a 7 minutos narrado por ambos; repositorio con README y acceso; trazabilidad de H1, H2 y H3 con razones y uso de la retroalimentación; porcentaje de ejecución y aporte de cada integrante; `.zip` con la estructura pedida | **12–16.** Falta la evidencia de algún mínimo; video fuera de duración o narrado por uno; trazabilidad parcial o sin razones; `.zip` incompleto | **0–11.** Evidencia no verificable (repositorio sin acceso, enlaces rotos); sin artefacto o sin video; sin trazabilidad |
| **Forma** (formato completo y bibliografía, campo 21; 5) | **5.** Formato FO-IV-159 sin alterar y con todos los campos diligenciados; hoja ESTUDIANTE con todos los integrantes; bibliografía en APA o IEEE, con una sola norma; redacción técnica sin errores | **3–4.** Algún campo menor vacío o con la instrucción del formato; errores menores de citación o de redacción | **0–2.** Formato alterado o incompleto; sin hoja ESTUDIANTE; sin bibliografía |

**La pregunta de fondo.** Lo que guía toda la rúbrica es lo mismo: **¿puede el lector verificar
lo que el informe afirma?** Si puede clonar el repositorio, ejecutar la app y encontrar cada
decisión en el código, la entrega está en el nivel alto.

## 9. Socialización

El **viernes 6 de noviembre**, en el encuentro 5 (6:00 a 7:00 p. m., Google Meet), cada pareja
presenta una **demo de 3 minutos** y responde **2 minutos de preguntas**. Si no caben todas
las parejas en la hora, al inicio del encuentro se sortea el orden y se presentan las
sorteadas. Todas deben llegar listas. La socialización **no tiene nota aparte**: la
calificación es la de la entrega final del proyecto de aula. Es la socialización de
resultados que pide la justificación (campo 14), su captura va al Anexo 1, y lo que surja en
las preguntas puede entrar a los resultados (campo 18) y a la trazabilidad, porque la entrega
vence dos días después.

| Tiempo | Qué mostrar |
|---|---|
| 0:00 – 0:30 | El problema y el usuario, en una frase cada uno |
| 0:30 – 2:00 | El flujo principal en emulador o dispositivo: inicio de sesión, un plugin pidiendo su permiso y la feature en modo avión |
| 2:00 – 3:00 | Una decisión de arquitectura y su ADR: qué alternativa descartaron y qué les costó |

Preguntas típicas: ¿dónde se garantiza la regla de dependencias?, ¿qué pasa si el refresh del
token falla?, ¿qué hace la app si el usuario niega el permiso?, ¿qué cambiarían en la
siguiente versión?

**Plan B.** Tengan a mano el video demo de la entrega final: si la demo en vivo falla, muestran
el fragmento del video y siguen. Compartan la pantalla del emulador antes de su turno.

## 10. Checklist de cierre

- [ ] Los dos integrantes subieron los mismos dos archivos: el formato FO-IV-159 diligenciado (`.xlsx`) y el `.zip` de anexos.
- [ ] La hoja INFORME tiene todos sus campos diligenciados y no quedó ninguna instrucción del formato.
- [ ] El título (campo 1) y la pregunta de investigación (campo 13) se corresponden, y la pregunta no se responde con sí o no.
- [ ] El resumen (campo 2) no pasa de 800 caracteres.
- [ ] El planteamiento (campo 12) y la justificación (campo 14) citan fuentes primarias.
- [ ] Los objetivos (campos 15 y 16) empiezan con un verbo en infinitivo y se pueden medir.
- [ ] El campo 17 nombra la metodología elegida del listado y explica por qué y cómo la aplicaron.
- [ ] El campo 19 declara «Desarrollo de software» y la hoja ESTUDIANTE tiene una fila por integrante.
- [ ] Mínimo 1: Ionic 8 o superior + Angular + Capacitor, con la app corriendo en Android.
- [ ] Mínimo 2: estructura por feature con `presentation`, `domain` y `data`, sin importaciones prohibidas.
- [ ] Mínimo 3: un único patrón de estado en ADR y al menos tres ADR aceptados.
- [ ] Mínimo 4: tabla de rutas central con guard, igual en `navegacion.md` y en `app.routes.ts`.
- [ ] Mínimo 5: un cliente HTTP con interceptores de token, timeout y errores, refresh de token y tokens en almacenamiento seguro.
- [ ] Mínimo 6: estrategia sin conexión por feature y caché de lectura demostrada en modo avión.
- [ ] Mínimo 7: dos plugins nativos detrás de un puerto, con permisos pedidos en el momento de uso (tres si son trío).
- [ ] Mínimo 8: pruebas unitarias de casos de uso y *state holders* en verde, artefacto firmado y checklist de release.
- [ ] La carpeta `docs/` del repositorio tiene el marco 00–05 diligenciado, sin bloques de instrucciones ni corchetes.
- [ ] El documento técnico del Anexo 2 tiene las secciones 00 a 05, la tabla de evidencia y la trazabilidad de H1, H2 y H3.
- [ ] El `.zip` tiene la estructura pedida: `anexo-1-fotografias/` y `anexo-2-productos/`.
- [ ] El README permite clonar, instalar, ejecutar y probar el proyecto.
- [ ] El tutor tiene acceso al repositorio y los enlaces de `enlaces.txt` abren sin pedir permiso.
- [ ] El video dura entre 5 y 7 minutos y lo narran los dos integrantes.
- [ ] La bibliografía (campo 21) usa una sola norma, APA o IEEE, igual que el documento técnico.
- [ ] Se subió antes del domingo 8 de noviembre a las 11:59 p. m.

**Versión imprimible.** [Descarga la Guía del proyecto de aula en PDF](pdf/Guia-Proyecto-de-Aula.pdf), con el membrete institucional.

