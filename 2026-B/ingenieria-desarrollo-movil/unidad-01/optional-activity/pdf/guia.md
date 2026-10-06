# GUÍA DE ACTIVIDAD PRÁCTICA

**Ingeniería para el Desarrollo Móvil · Unidad 1 · Decide y documenta la base de tu app**

| Programa | Facultad de Ingeniería · Posgrado | Asignatura | Ingeniería para el Desarrollo Móvil |
|---|---|---|---|
| Unidad | Unidad 1 · Práctica opcional | Unidad / Corte | 1 · Corte 1 |
| Modalidad | Individual o en pareja | Periodo | 2026-B |
| Tipo | Formativa (opcional, sin nota) | Entrega | Aula Moodle, según indique el tutor |

## Objetivos

- Decidir con criterios explícitos si tu problema se resuelve mejor con un enfoque híbrido, nativo, multiplataforma o PWA.
- Crear el esqueleto Ionic + Angular + Capacitor con estructura por feature y capas, y ejecutarlo en el navegador.
- Redactar tu primer ADR con la plantilla del marco de gobierno móvil, con alternativas descartadas y consecuencias.
- Dibujar el diagrama C4 de contexto de tu app con personas, sistemas externos y relaciones.

## 1. Objetivo

Llegar a la **Actividad de aprendizaje 1 (H1, 20 %, vence el domingo 18 de octubre)** con las
decisiones de base tomadas y documentadas. Esta práctica es **opcional y no calificable**. Si
ya tienes pareja del proyecto de aula, háganla juntos y sobre su propio problema; si no, hazla sobre el
problema que piensas proponer. Tiempo estimado: tres a cuatro horas. Nada es un ejercicio
aparte: son las primeras piezas de las secciones **00 Gobierno** y **01 Arquitectura**.

| Parte | Qué produces | Dónde se reutiliza en el H1 |
|---|---|---|
| A · Ficha de decisión | Tabla de criterios y veredicto | Contexto del ADR de enfoque o de framework |
| B · Esqueleto por feature | Proyecto que corre + capturas | `estructura-del-proyecto.md` y apartado de entorno |
| C · Primer ADR | ADR-001 con alternativas y consecuencias | `01-arquitectura/decisiones/registros/` |
| D · C4 de contexto | Diagrama de nivel 1 | Diagrama de arquitectura general |

## 2. Parte A — Ficha de decisión: híbrido o nativo para tu problema

Describe tu problema en tres líneas: **quién** usa la app, **qué** hace y **en qué
condiciones** (conectividad, dispositivo, lugar). Luego responde cada criterio **para tu
problema** y anota si la respuesta descarta o debilita algún enfoque. La columna de la
Bitácora de Campo es solo un ejemplo de cómo se razona.

| Criterio | Pregunta para tu problema | Ejemplo: Bitácora de Campo | ¿Descarta o debilita algún enfoque? |
|---|---|---|---|
| Plataformas | ¿Android, iOS o ambas? ¿Habrá versión web? | Android e iOS, y un portal web del supervisor | Nativo: duplica todo |
| Capacidades nativas | ¿Qué hardware usa y con qué intensidad? | Cámara y GPS, de forma puntual | Ninguno |
| Exigencia gráfica | ¿Animación compleja, 3D, listas de miles de filas? | Formularios y listas cortas | Ninguno |
| Segundo plano | ¿Debe trabajar con la app cerrada? | Solo sincronizar al volver la señal | Ninguno, con cuidado |
| Conectividad | ¿Debe funcionar sin señal? | Sí, es obligatorio | Debilita la PWA |
| Distribución | ¿Debe estar en las tiendas? | Sí, Play Store y App Store | Debilita la PWA |
| Equipo | ¿Qué lenguajes domina la pareja? | TypeScript | Nativo y Flutter: curva alta |
| Plazo y presupuesto | ¿Cuánto tiempo y cuántas personas? | Cinco semanas, dos personas | Nativo |
| Reutilización | ¿Hay lógica o UI que compartir con la web? | Reglas de validación de la visita | Favorece el híbrido |

Cierra con un **veredicto de máximo cinco líneas**: el enfoque elegido, el criterio que
desempata y **el requisito que, si apareciera, te haría cambiar de enfoque**.

> **Cuidado:** «Es más barato» o «es lo que sabemos» no son veredictos. El veredicto se gana por
> descarte: muestra que ningún requisito de tu problema supera el techo del WebView. Si alguno
> lo supera (realidad aumentada, procesamiento de video en tiempo real), acota el alcance del
> problema para el proyecto de aula y deja escrito qué quedó por fuera y por qué.

## 3. Parte B — Esqueleto por feature corriendo en el navegador

Construye la base mínima que respete la estructura del marco, sin backend ni plugins todavía:

1. Crea el proyecto con `ionic start` (plantilla `blank`, tipo Angular, componentes Standalone y Capacitor).
2. Crea `core/`, `shared/` y la carpeta de tu feature principal con sus tres capas: `presentation/`, `domain/` y `data/`.
3. En `domain/`, escribe la entidad, el contrato del repositorio (clase abstracta) y un caso de uso `Listar...`, en TypeScript puro.
4. En `data/`, implementa el contrato con un repositorio **en memoria** con dos o tres registros de ejemplo.
5. En `core/di/`, enlaza contrato e implementación; en `app.routes.ts`, carga la página de lista con `loadComponent`.
6. La página inyecta el caso de uso (nunca el repositorio en memoria) y muestra la lista.

```ascii
  src/app/
  ├── core/di/<feature>.providers.ts       contrato → implementación
  ├── features/<feature>/
  │   ├── presentation/                    <feature>-lista.page.ts
  │   ├── domain/                          entidad, contrato y listar-<feature>.ts
  │   └── data/                            <feature>-en-memoria.repository.ts
  ├── shared/
  └── app.routes.ts                        loadComponent de la página de lista
```

El repositorio en memoria es lo que te permite avanzar sin backend. Así se ve en la Bitácora:

```typescript
// features/visitas/data/visitas-en-memoria.repository.ts
export class VisitasEnMemoriaRepository implements VisitasRepository {
  private readonly datos: Visita[] = [
    { id: '1', cliente: 'Finca El Encanto', fecha: new Date('2026-10-05'), estado: 'realizada' },
    { id: '2', cliente: 'Vivero La Plata', fecha: new Date('2026-10-08'), estado: 'pendiente' },
  ];
  listar(): Observable<Visita[]> { return of(this.datos); }
}
```

Ejecuta la app y verifica la regla del dominio antes de tomar las capturas:

```bash
ionic start mi-app blank --type=angular-standalone --capacitor && cd mi-app
ionic generate page features/visitas/presentation/visitas-lista
ionic serve                     # abre http://localhost:8100
# Verificación: no debe imprimir nada (domain/ no importa Angular, Ionic ni Capacitor).
grep -rnE "from '@(angular|ionic|capacitor)/" src/app/features/*/domain
```

**Evidencia:** una captura del navegador con la URL de la ruta, la lista pintada y la consola
de DevTools sin errores, y otra del árbol de `src/app` en el editor.

**Consejo.** En la Unidad 2 este repositorio en memoria se reemplaza por uno HTTP con caché
cambiando **una línea** de `core/di/`. Si para hacer ese cambio tuvieras que tocar la página,
la Parte B todavía no cumple la regla de dependencias.

## 4. Parte C — Tu primer ADR con la plantilla del marco

Descarga la plantilla `01-plantilla-adr.md` de
[Plantillas del proyecto](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/proyecto-aula/plantillas/),
cópiala como `docs/01-arquitectura/decisiones/registros/ADR-001-<titulo-corto>.md` y
diligénciala sobre **una** de estas decisiones:

- **El framework** (Angular, React o Vue): la opción recomendada, porque la Parte A ya te dio el contexto.
- **El enfoque** (híbrido frente a nativo, multiplataforma o PWA), si tu Parte A fue reñida.

```ascii
  ADR-001 — <la decisión en pocas palabras>
  ──────────────────────────────────────────────────────────────────
  Estado        : Propuesto  (pasa a Aceptado cuando la pareja lo aprueba)
  Contexto      : <hecho de TU proyecto que obliga a decidir> + restricciones
  Decisión      : <una sola frase>
  Alternativas  : (a) <opción> — descartada porque <razón>
                  (b) <opción> — descartada porque <razón>
  Consecuencias : + <lo que se gana>
                  − <lo que se paga: al menos una>
  Verificación  : <archivo, regla de lint o prueba que lo materializa>
```

Antes de marcarlo como aceptado, revisa: ¿la decisión cabe en una frase?, ¿hay al menos dos
alternativas reales descartadas con razón?, ¿hay al menos una consecuencia negativa?, ¿el
contexto habla de tu proyecto y no de generalidades? Registra el ADR con una fila en
`decisiones/README.md` (número, título, estado y fecha).

> **Cuidado:** Un ADR que solo enumera ventajas no analizó el intercambio, y es lo primero que se
> pregunta en la socialización. Si no se te ocurre ninguna alternativa, probablemente no era
> una decisión.

## 5. Parte D — Diagrama C4 de contexto

El nivel 1 del modelo C4 muestra tu sistema como **una sola caja**, las **personas** que lo
usan, los **sistemas externos** con los que se comunica y las **relaciones** entre ellos.

- Tu app es una caja: en este nivel no aparecen capas, pantallas ni features.
- Cada persona se nombra por su rol (técnico, supervisor), no por su nombre propio.
- Cada sistema externo que la app usa, o que la usa a ella: la API propia, servicios de terceros (mapas, pagos, notificaciones).
- Cada flecha lleva un verbo y, si cruza la red, el protocolo.
- El diagrama tiene leyenda con el tipo de cada caja.

```ascii
   Técnico de campo [Persona]                       Supervisor [Persona]
        │ registra visitas con foto y ubicación          │ revisa visitas (portal web)
        ▼                                                ▼
   Bitácora de Campo [App móvil]  ── sincroniza ──►  API de visitas [Sistema externo]
        │                            (HTTPS/JSON)
        │ consulta la dirección aproximada (HTTPS)
        ▼
   Servicio de mapas [Sistema externo]
```

Puedes dibujarlo en diagrams.net (draw.io), Structurizr, PlantUML con la librería C4 o
Mermaid; exporta PNG o SVG legible.

**Consejo.** Si el diagrama de contexto necesita más de siete u ocho cajas, probablemente estás
mezclando niveles: los contenedores (app, API, base de datos) van en el nivel 2.

## 6. Entrega y autoevaluación

- Un **PDF de 3 a 5 páginas** con las cuatro partes, o el formato que indique el tutor en el aula.
- Nombre sugerido: `U1-practica-<apellido>.pdf` (en pareja, con los dos apellidos).
- Se sube donde indique el tutor. Al ser práctica opcional, **no tiene nota**: su valor es que el H1 se escriba sobre decisiones ya tomadas.

- [ ] La ficha de la Parte A responde los nueve criterios para **tu** problema, no para la Bitácora.
- [ ] El veredicto nombra el criterio que desempata y el requisito que te haría cambiar de enfoque.
- [ ] El esqueleto corre en `ionic serve` y la captura muestra la ruta, la lista y la consola sin errores.
- [ ] Existen `presentation/`, `domain/` y `data/` en tu feature, y `domain/` no importa Angular, Ionic ni Capacitor.
- [ ] La página llega a los datos por el caso de uso, nunca por el repositorio en memoria.
- [ ] El ADR tiene al menos dos alternativas descartadas con razón y una consecuencia negativa.
- [ ] El C4 de contexto tiene personas, sistemas externos, flechas con verbo y leyenda.

| Criterio | Logrado | En proceso | Insuficiente |
|---|---|---|---|
| Decisión del enfoque | Criterios propios, desempate y requisito que la revertiría | Criterios genéricos, sin descarte | Preferencia sin criterios |
| Esqueleto | Corre, organizado por feature y con dominio puro | Corre, pero mezcla capas | No corre o está organizado por tipo |
| ADR | Alternativas descartadas con razón y costos asumidos | Alternativas sin argumento | Sin alternativas |
| C4 de contexto | Personas, sistemas y flechas con verbo | Faltan sistemas externos o verbos | Mezcla niveles (pantallas, capas) |

> **Nota:** Lleva tus dudas a la **clínica del H1** en el Encuentro 2 (viernes 16 de octubre,
> 6:00 – 7:00 p. m., [meet.google.com/pzh-kxer-pnx](https://meet.google.com/pzh-kxer-pnx)). Guía
> del hito: [Guía del proyecto de aula](https://code-corhuila.github.io/ova-web/2026-B/ingenieria-desarrollo-movil/proyecto-aula/guia/).

**Versión imprimible.** [Descarga esta práctica en PDF](pdf/Practica-Unidad01.pdf), con el membrete institucional.

