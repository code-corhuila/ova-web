# GUÍA DEL PROYECTO ABP

**Ingeniería para el Desarrollo Móvil · Proyecto ABP · Guía del proyecto ABP: una app móvil gobernada por su arquitectura**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Ingeniería para el Desarrollo Móvil |
|---|---|---|---|
| Unidad | Proyecto del módulo · ABP | Proyecto / Corte | ABP · Corte 1 |
| Modalidad | Parejas | Periodo | 2026-B |
| Tipo | Proyecto del módulo (A1-A3 20 % c/u · Documento ABP 40 %) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Formular, en pareja, un problema real que se resuelva con una app móvil híbrida y que cumpla los ocho mínimos de arquitectura del proyecto.
- Diligenciar el marco de gobierno móvil, de 00 Gobierno a 05 Release, con el método SDD: primero la decisión escrita y después el código.
- Leer cada actividad del aula como un hito del mismo proyecto y planear las entregas por fechas.
- Producir el Documento ABP con evidencia verificable de cada mínimo y la trazabilidad de las decisiones.

## 1. Qué es ABP y cómo funciona aquí

El **Aprendizaje Basado en Proyectos (ABP)** organiza el módulo alrededor de un problema
real cuya solución es un producto. No se estudia primero y se aplica después: cada tema de
las unidades se usa, en la misma semana, para tomar una decisión del proyecto. Lo que se
evalúa al final no es lo que recuerdas, sino lo que construiste y cómo lo justificas.

En este módulo hay **un solo proyecto por pareja** y las tres actividades del aula son sus
hitos. Lo que decides en la Actividad 1 lo defiendes en la Actividad 2 y lo entregas
funcionando en la Actividad 3; el **Documento ABP** cuenta ese recorrido completo, con la
evidencia y con lo que cambió en el camino.

> **Nota:** **Pregunta motriz del proyecto:** «¿Qué aplicación móvil híbrida, construida con
> Ionic + Angular + Capacitor y gobernada por una arquitectura explícita, resuelve un problema
> real de su trabajo o su entorno y está lista para publicarse?»

El curso es de **arquitectura móvil**, no de funcionalidades. Una app pequeña, con dos
features bien gobernadas, vale más que una app grande en la que cada pantalla resolvió el
estado, la red y los permisos a su manera.

| Sí cuenta | No suma |
|---|---|
| Decisiones explícitas, registradas en ADR y respetadas en el código | Cantidad de pantallas o de features |
| Evidencia verificable: repositorio, artefacto firmado, video | Afirmaciones sin evidencia |
| Coherencia entre el documento y el repositorio | Diagramas vistosos que no coinciden con el código |
| Evolución razonada: antes → después → razón | Documentación escrita al final «para cumplir» |

> **Atención:** La app de referencia de los manuales, **Bitácora de Campo** (visitas técnicas con
> formulario, foto y ubicación), **no es elegible** como proyecto. Los manuales la usan como
> ejemplo trabajado; tu pareja resuelve su propio problema, con su propio dominio, sus casos
> de uso y su estrategia sin conexión.

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
  H1 · A1  (dom 18-oct)   00 Gobierno + 01 Arquitectura + backlog y prototipo
       │
       ▼
  H2 · A2  (dom 25-oct)   ADR del stack + 02 Código y UI + 03 API y datos
       │
       ▼
  H3 · A3  (dom 1-nov)    04 Calidad + 05 Release  (app firmada + memoria técnica)
       │
       ▼
  H4 · ABP (dom 8-nov)    marco 00–05 completo + evidencia + trazabilidad + reflexión
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

> **Consejo:** Las plantillas del marco, en español y adaptadas a este stack, están en
> [Plantillas del proyecto](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/abp/plantillas/),
> con un `.zip` y el árbol de la carpeta `docs/` que la pareja crea en su repositorio el
> primer día.

## 3. Parejas

- El proyecto se hace en **parejas**. Si el número de estudiantes es impar, se admite **un único trío**, que agrega un **tercer plugin nativo** a los mínimos.
- Las tareas del aula son individuales: en **H1, H3 y H4** los dos integrantes suben **el mismo PDF**, con los dos nombres en la portada. Si uno no sube el archivo, no tiene entrega.
- La **Actividad 2 es individual**: los dos analizan el mismo proyecto, pero cada uno escribe y publica su propio análisis.
- Los dos programan y los dos documentan. El historial del repositorio debe mostrar commits de ambos, y el Documento ABP declara el aporte de cada uno.
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

> **Atención:** Si su problema también usa cámara y ubicación, el dominio, los casos de uso y la
> estrategia sin conexión deben ser propios: una Bitácora de Campo con otro nombre no
> cumple la condición de problema propio.

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

> **Nota:** El almacenamiento seguro de tokens ya es obligatorio por el mínimo 5 y **no cuenta**
> como uno de los dos plugins del mínimo 7: esos dos deben acceder a una capacidad del
> dispositivo que pida permiso al usuario. El trío agrega un tercero con las mismas reglas.

> **Consejo:** La regla de dependencias se puede imponer con ESLint (`no-restricted-imports`) para
> que una importación prohibida falle en el lint. Si la verifica la máquina, no depende de
> la buena voluntad, y es una evidencia fuerte para el mínimo 2.

## 5. Hitos y fechas

| Hito | Actividad del aula | Secciones del marco | Qué se entrega | Quién | Vence |
|---|---|---|---|---|---|
| H0 | — | — | Pareja y problema que cumple los mínimos | Pareja | vie 16-oct |
| H1 | Actividad de aprendizaje 1 (20 %) | 00 Gobierno + 01 Arquitectura | Documento técnico con backlog y prototipo | Pareja (mismo PDF) | dom 18-oct |
| H2 | Actividad de aprendizaje 2 (20 %) | ADR del stack + 02 Código y UI + 03 API y datos | Análisis en el foro, dos respuestas y PDF en la tarea | Individual | dom 25-oct |
| H3 | Actividad de aprendizaje 3 (20 %) | 04 Calidad + 05 Release | App desplegada (AAB/APK firmado) y memoria técnica | Pareja (mismo PDF) | dom 1-nov |
| H4 | Entrega final del módulo (ABP) [40%] | 00 a 05 completo | Documento ABP con evidencia y trazabilidad | Pareja (mismo PDF) | dom 8-nov |

> **Atención:** Todos los hitos vencen a las **11:59 p. m. hora de Colombia** del día indicado. En
> las tareas del aula la fecha límite coincide con el cierre: después de esa hora Moodle no
> recibe archivos. Suban con margen y verifiquen que el PDF abre.

Los encuentros sincrónicos son los **viernes de 6:00 a 7:00 p. m.** por Google Meet
([meet.google.com/pzh-kxer-pnx](https://meet.google.com/pzh-kxer-pnx)). Las clínicas revisan
avances reales: lleguen con el repositorio y el borrador del hito abiertos.

| Encuentro | Fecha | En vivo | Llevar |
|---|---|---|---|
| 1 | vie 9-oct | Unidad 1 y lanzamiento del proyecto ABP | Ideas de problema y posible pareja |
| 2 | vie 16-oct | Unidad 2 · clínica de la Actividad 1 | H0 publicado, borrador de 00 y 01, árbol del repositorio |
| 3 | vie 23-oct | Unidad 3, parte 1 · clínica de la Actividad 2 | Análisis del foro publicado o en borrador; 02 y 03 en el repositorio |
| 4 | vie 30-oct | Unidad 3, parte 2 · clínica de la Actividad 3 | App corriendo, pruebas en verde, primer artefacto firmado |
| 5 | vie 6-nov | Socialización del proyecto ABP y cierre | Demo de 3 minutos lista |

## 6. Cómo leer cada actividad del aula en tu proyecto

Los enunciados de las tres actividades **no cambian**: se escribieron para cualquier proyecto
híbrido. Esta sección dice en qué sección del marco cae cada cosa que piden, para que el
documento de cada actividad sea, a la vez, un avance del proyecto. Respeten el formato y la
extensión que fija cada enunciado.

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
| Descripción del proyecto (nombre, propósito, público objetivo) | Introducción | Problema real, usuario y pregunta motriz aplicada |
| Planteamiento del problema y alcance funcional | Introducción + 00 (backlog) | Qué entra y qué queda fuera, dicho explícitamente |
| Selección y justificación del framework (Angular, React o Vue) | 01 · ADR del stack (Propuesto) | Angular está fijado: justifíquenlo como ADR con React y Vue como alternativas evaluadas |
| Diagrama de arquitectura general | 01 Arquitectura | C4 de contexto y de contenedores, y diagrama de capas de una feature |
| Estructura base del proyecto Ionic con Capacitor | 01 · estructura del proyecto | Árbol real de `src/app/` por feature, generado con `ionic start` |
| Prototipo de interfaces móviles | 01 · fichas de pantalla | Una ficha por pantalla con sus cinco estados, junto a las capturas del prototipo |
| Backlog de producto (historias por prioridad) | 00 · backlog y definición de listo | Al menos 10 historias con criterios Dado/Cuando/Entonces y MoSCoW |
| Consideraciones sobre el entorno de desarrollo y pruebas iniciales | 00 · convenciones git y definición de hecho | Herramientas, repositorio, ramas y la primera prueba que corre |

Además de lo que pide el enunciado, el H1 deja en el repositorio la carpeta `docs/` con 00 y
01 diligenciados y **los dos primeros ADR**: patrón de estado y navegación.

### A2 · Actividad de aprendizaje 2 → H2 (dom 25-oct, individual)

El enunciado de la Actividad 2 describe un **foro**. El tutor lo crea en la Unidad 2 y la
entrega se completa en la tarea de la actividad:

1. Publica tu análisis en el foro de la Actividad 2 de la Unidad 2: entre 300 y 500 palabras, con al menos dos citas en APA 7 y enlaces a documentación oficial.
2. Responde de forma argumentada a **dos compañeros de otras parejas**, mínimo 150 palabras cada respuesta.
3. Copia el **enlace permanente** de cada una de tus dos respuestas (opción «Enlace permanente» de cada mensaje del foro).
4. Arma un PDF con tu publicación principal completa y los enlaces a tus dos respuestas, y súbelo a la tarea de la Actividad 2.

> **Consejo:** Publica tu análisis a más tardar el **jueves 22 de octubre**: así la clínica del
> viernes 23 trabaja sobre publicaciones reales y todos tienen el fin de semana para
> responder antes del cierre del domingo.

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

> **Atención:** El keystore y sus contraseñas **nunca** entran al repositorio. Guárdenlo en dos
> lugares seguros: si se pierde, la app publicada no se puede volver a actualizar con la
> misma firma.

## 7. El Documento ABP

El Documento ABP es **el marco de gobierno móvil 00–05 diligenciado para el proyecto de la
pareja**, más la evidencia del producto, la trazabilidad de los hitos y la reflexión de cada
integrante. No se escribe desde cero: integra y actualiza lo entregado en H1, H2 y H3 para
que describa la app **tal como quedó construida**, no como se planeó.

| Apartado | Contenido | Páginas |
|---|---|---|
| Introducción | Problema, usuarios, pregunta motriz aplicada y valor de la app | 1 |
| 00 Gobierno | Acuerdos (DoR, DoD, git, seguridad), backlog final con su estado, roles y cómo se aplicó SDD | 1–2 |
| 01 Arquitectura | C4 de contexto y contenedores, estructura real, capas y regla de dependencias, patrón de estado, tabla de rutas y guard, puertos nativos, registro de ADR | 3–4 |
| 02 Código y UI | Estándares, tokens y tematización `md`/`ios`, accesibilidad, textos centralizados | 1 |
| 03 API y datos | Cliente HTTP e interceptores, autenticación y refresh, almacenamiento seguro, persistencia, estrategia sin conexión por feature | 2–3 |
| 04 Calidad | Pirámide de pruebas aplicada y resultados, presupuestos medidos, checklist de seguridad | 1–2 |
| 05 Release | Firma, artefactos, CI/CD, checklist de release y observabilidad | 1–2 |
| Evidencia del producto | Tabla mínimo → evidencia (ruta en el repositorio, captura o minuto del video) | 1 |
| Trazabilidad de hitos | Tabla antes → después → razón para H1, H2 y H3 | 1–2 |
| Reflexión y aporte | Lecciones aprendidas, deuda técnica, siguiente versión y aporte de cada integrante | 1 |

La **evidencia** que el documento enlaza:

- Repositorio Git con el código, la carpeta `docs/` del marco y un README que permita ejecutar el proyecto; si es privado, con acceso compartido al tutor.
- Archivo `.aab` o `.apk` firmado con la llave de release.
- Video demo de **5 a 7 minutos**, narrado por los dos integrantes, con el flujo principal, un plugin nativo pidiendo su permiso y la feature sin conexión.

La **trazabilidad** muestra que el proyecto aprendió. Una fila por cambio relevante:

| Hito | Antes | Después | Razón |
|---|---|---|---|
| H1 | Cada página guardaba su estado en variables sueltas | ViewModel por pantalla con estado inmutable (ADR-001) | La clínica A1 mostró que las pantallas no se podían probar sin renderizarlas |
| H2 | Token guardado en Preferences | Token en almacenamiento seguro y refresh en el interceptor | Una respuesta del foro señaló que Preferences guarda en texto plano |
| H3 | Permiso de cámara pedido al abrir la app | Permiso pedido al tocar «Tomar foto», con explicación previa | Caso de prueba de permisos y regla de seguridad de 00 Gobierno |

**Formato:** PDF de **12 a 18 páginas** sin contar portada, índice y bibliografía; Arial o
Times New Roman 12; interlineado 1,5; márgenes de 2,5 cm; citas y referencias en APA 7. Los
dos integrantes suben el mismo PDF, con ambos nombres en la portada, a la tarea «Entrega
final del módulo (ABP) [40%]» antes del **domingo 8 de noviembre a las 11:59 p. m.**

> **Atención:** Todo lo que el documento afirma debe estar en el repositorio. Un diagrama, un ADR o
> una estrategia que no coincide con el código pierde puntos en su criterio y en el de
> trazabilidad y evidencia.

## 8. Rúbrica del Documento ABP

Las Actividades 1, 2 y 3 se califican con sus propios enunciados (20 % cada una). Esta
rúbrica es la del **Documento ABP (40 %)**: 100 puntos y **nota = puntos / 20** (por ejemplo,
78 puntos equivalen a 3,9). Los rangos de cada nivel están en cada celda.

| Criterio | Alto | Medio | Bajo |
|---|---|---|---|
| **Gobierno y SDD** (10) | **9–10.** DoR, DoD, convenciones git y reglas de seguridad adaptadas y aplicadas; el historial muestra el diseño antes del código; retrospectivas, reflexión y aporte de cada integrante con evidencia | **6–8.** Acuerdos escritos pero genéricos o aplicados a medias; parte del diseño se escribió después del código; aportes declarados sin evidencia | **0–5.** Acuerdos copiados sin adaptar o ausentes; sin rastro de SDD ni de reflexión |
| **Arquitectura** (25) | **22–25.** Estructura por feature con tres capas y regla de dependencias respetada en todo el código; un único patrón de estado en ADR; tabla de rutas central con guard; al menos 3 ADR con alternativas y costos; C4 coherente con el repositorio | **15–21.** Capas presentes con fugas (una página que llama a `HttpClient`); ADR sin alternativas reales o solo dos; diagramas que no coinciden del todo | **0–14.** Organización por tipo técnico o sin capas; estado mezclado; rutas dispersas; sin ADR |
| **Código/UI y API/datos** (20) | **17–20.** Cliente HTTP único con interceptores de token, timeout y errores; refresh transparente con un solo reintento; tokens en almacenamiento seguro; DTO y mappers; estrategia sin conexión por feature y caché de lectura demostrada; tokens de diseño y estados de UI completos | **12–16.** Interceptor de token sin refresh o sin timeout; estrategia sin conexión documentada pero no aplicada; valores visuales quemados | **0–11.** Peticiones HTTP desde las páginas; tokens en `localStorage` o Preferences; sin manejo de errores ni de conexión |
| **Calidad** (15) | **13–15.** Pruebas unitarias en verde de casos de uso y *state holders*, con sus transiciones de estado; presupuestos de rendimiento medidos; checklist de seguridad aplicado, con permisos *just-in-time* | **9–12.** Pruebas solo de algunos servicios o sin transiciones; rendimiento o seguridad declarados sin medir | **0–8.** Sin pruebas o pruebas que no corren; rendimiento y seguridad sin abordar |
| **Release** (10) | **9–10.** AAB/APK firmado y verificable; keystore fuera del repositorio; SemVer y `versionCode`; checklist de release diligenciado; CI con al menos lint y pruebas; plan de observabilidad | **6–8.** Artefacto firmado sin checklist o sin CI; observabilidad solo mencionada | **0–5.** Artefacto de depuración o sin artefacto; keystore en el repositorio |
| **Trazabilidad de hitos y evidencia** (15) | **13–15.** Tabla antes → después → razón que cubre H1, H2 y H3 y usa la retroalimentación recibida; cada mínimo enlazado a su evidencia; video de 5 a 7 minutos narrado por ambos | **9–12.** Trazabilidad parcial o sin razones; falta la evidencia de algún mínimo o el video no cumple | **0–8.** Sin trazabilidad; evidencia no verificable (repositorio sin acceso, enlaces rotos) |
| **Forma APA** (5) | **5.** Extensión, fuente, interlineado y márgenes correctos; citas y referencias APA 7; redacción técnica sin errores | **3–4.** Errores menores de formato, citación o redacción | **0–2.** Fuera de extensión, sin citas o con redacción descuidada |

> **Nota:** La pregunta que guía toda la rúbrica es la misma: **¿puede el lector verificar lo que
> el documento afirma?** Si puede clonar el repositorio, ejecutar la app y encontrar cada
> decisión en el código, el documento está en el nivel alto.

## 9. Socialización

El **viernes 6 de noviembre**, en el encuentro 5 (6:00 a 7:00 p. m., Google Meet), cada pareja
presenta una **demo de 3 minutos** y responde **2 minutos de preguntas**. Si no caben todas
las parejas en la hora, al inicio del encuentro se sortea el orden y se presentan las
sorteadas. Todas deben llegar listas. La socialización **no tiene nota aparte**: la
calificación es la del Documento ABP, y lo que surja en las preguntas puede entrar a la
trazabilidad, porque el documento vence dos días después.

| Tiempo | Qué mostrar |
|---|---|
| 0:00 – 0:30 | El problema y el usuario, en una frase cada uno |
| 0:30 – 2:00 | El flujo principal en emulador o dispositivo: inicio de sesión, un plugin pidiendo su permiso y la feature en modo avión |
| 2:00 – 3:00 | Una decisión de arquitectura y su ADR: qué alternativa descartaron y qué les costó |

Preguntas típicas: ¿dónde se garantiza la regla de dependencias?, ¿qué pasa si el refresh del
token falla?, ¿qué hace la app si el usuario niega el permiso?, ¿qué cambiarían en la
siguiente versión?

> **Consejo:** Tengan a mano el video del Documento ABP: si la demo en vivo falla, muestran el
> fragmento del video y siguen. Compartan la pantalla del emulador antes de su turno.

## 10. Checklist de cierre

- [ ] La portada lleva los dos nombres y los dos integrantes subieron el mismo PDF.
- [ ] Mínimo 1: Ionic 8 o superior + Angular + Capacitor, con la app corriendo en Android.
- [ ] Mínimo 2: estructura por feature con `presentation`, `domain` y `data`, sin importaciones prohibidas.
- [ ] Mínimo 3: un único patrón de estado en ADR y al menos tres ADR aceptados.
- [ ] Mínimo 4: tabla de rutas central con guard, igual en `navegacion.md` y en `app.routes.ts`.
- [ ] Mínimo 5: un cliente HTTP con interceptores de token, timeout y errores, refresh de token y tokens en almacenamiento seguro.
- [ ] Mínimo 6: estrategia sin conexión por feature y caché de lectura demostrada en modo avión.
- [ ] Mínimo 7: dos plugins nativos detrás de un puerto, con permisos pedidos en el momento de uso (tres si son trío).
- [ ] Mínimo 8: pruebas unitarias de casos de uso y *state holders* en verde, artefacto firmado y checklist de release.
- [ ] La carpeta `docs/` del repositorio tiene el marco 00–05 diligenciado, sin bloques de instrucciones ni corchetes.
- [ ] El README permite clonar, instalar, ejecutar y probar el proyecto.
- [ ] El tutor tiene acceso al repositorio y los enlaces al artefacto y al video abren sin pedir permiso.
- [ ] El video dura entre 5 y 7 minutos y lo narran los dos integrantes.
- [ ] La tabla de trazabilidad cubre H1, H2 y H3 con su razón.
- [ ] La reflexión incluye deuda técnica, siguiente versión y el aporte de cada integrante.
- [ ] El PDF tiene entre 12 y 18 páginas útiles, Arial o Times 12, interlineado 1,5, márgenes de 2,5 cm y APA 7.
- [ ] Se subió antes del domingo 8 de noviembre a las 11:59 p. m.

> **Nota:** **Versión imprimible.** [Descarga la Guía del proyecto ABP en PDF](pdf/Guia-ABP.pdf), con el membrete institucional.

