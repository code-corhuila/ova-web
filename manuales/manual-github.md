# Manual de Entrega de Actividades por GitHub

**CORHUILA · Ingeniería de Sistemas · 2026-B**

Este manual te explica, **paso a paso y desde cero**, cómo entregar las actividades del curso usando GitHub, aunque nunca lo hayas usado. Síguelo en orden y podrás entregar sin problemas.

> Las **actividades opcionales** (optional activity) son de **refuerzo**: son **opcionales** y **no tienen nota en Moodle**. Si decides hacerlas, se entregan por GitHub como se explica aquí.

## 1. ¿Qué es GitHub y por qué lo usamos?

GitHub es una plataforma donde se guarda y comparte código. En este curso lo usamos para que entregues tus actividades, lleves un historial de tu trabajo y construyas tu **portafolio** profesional desde ya.

## 2. Paso 1 — Crea tu cuenta de GitHub

1. Entra a **https://github.com** y haz clic en **Sign up** (Registrarse).
2. Escribe tu **correo**, una **contraseña** y un **nombre de usuario**.
3. Elige un usuario **profesional y fácil de recordar** (lo verán tus profesores y, en el futuro, empleadores). Ejemplo: `jperez` o `ana-gomez`.
4. Verifica tu correo y ¡listo!

> Anota bien tu **usuario** y tu **contraseña**: los necesitarás siempre.

## 3. Paso 2 — Crea tu "repo de perfil" (¡EL MÁS IMPORTANTE!)

GitHub tiene un truco: si creas un repositorio con **el mismo nombre de tu usuario**, su `README.md` aparece como tu **página de perfil**. Ese es tu "repo mágico".

1. Haz clic en **New repository** (Nuevo repositorio).
2. En el nombre escribe **exactamente tu usuario** (si tu usuario es `jperez`, el repo se llama `jperez`).
3. Márcalo **Public** (Público) y activa **Add a README file**.
4. Crea el repositorio y **edita el `README.md`**.
5. **Pega al inicio del README este bloque CONFIG** (es obligatorio) y completa tus datos:

```
<!--
CONFIG
FULL_NAME: Escribe aquí tus nombres y apellidos
GITHUB_USER: escribe-aquí-tu-usuario
-->
```

6. Debajo del bloque, escribe una **breve presentación** (quién eres, qué estudias, tus intereses).

> **CRÍTICO:** el bloque CONFIG con `FULL_NAME` y `GITHUB_USER` es lo que permite que los scripts del curso **detecten automáticamente tus entregas**. Si falta, o si el usuario no coincide con el real, el sistema **no te reconocerá ninguna actividad**: sería como si no hubieras entregado nada.

## 4. Paso 3 — Instala Git en tu computador

Git es el programa que conecta tu computador con GitHub.

1. Descárgalo de **https://git-scm.com/downloads** e instálalo (deja las opciones por defecto).
2. Configúralo una sola vez con tu nombre y correo (los mismos de GitHub):

```
git config --global user.name "Tus Nombres y Apellidos"
git config --global user.email "tu-correo@ejemplo.com"
```

## 5. Paso 4 — Haz "fork" del repositorio de la clase

El docente te dará el enlace del **repositorio de la clase** (el "repo padre"), por ejemplo `https://github.com/code-corhuila/estructura-datos-2026-b-g1`.

1. Abre ese enlace.
2. Arriba a la derecha, haz clic en **Fork**.
3. Confirma. GitHub creará **una copia del repositorio en tu cuenta** (tu *fork*).

## 6. Paso 5 — Clona tu fork a tu computador

1. En **tu** fork, haz clic en **Code** y copia la URL (termina en `.git`).
2. En una terminal, ejecuta:

```
git clone https://github.com/TU_USUARIO/estructura-datos-2026-b-g1.git
cd estructura-datos-2026-b-g1
```

## 7. Paso 6 — Coloca tu actividad en la carpeta de la semana

Dentro del repositorio hay una carpeta por semana. **Guarda tu entrega en la carpeta de la semana correspondiente** (por ejemplo, la actividad de la semana 3 va en `03-week/`). La guía de cada semana te dice qué archivos incluir.

## 8. Paso 7 — Sube tus cambios (add, commit, push)

Cada vez que termines una entrega, súbela con estos tres comandos:

```
git add .
git commit -m "Entrega actividad semana 3"
git push
```

- `add` selecciona tus cambios · `commit` los guarda con un mensaje · `push` los envía a GitHub.
- Usa mensajes claros: "Entrega actividad semana 4", no "cambios".

## 9. Paso 8 — (Opcional) Abre un Pull Request

Si el docente lo pide, avísale de tu entrega con un *Pull Request*:

1. En tu fork, haz clic en **Contribute → Open pull request**.
2. Escribe un título claro y confirma.

## 10. ¿Cómo se revisa tu trabajo?

El curso usa scripts automáticos que, a partir de tu **repo de perfil** (bloque CONFIG con `FULL_NAME` y `GITHUB_USER`) y de tus **commits en las carpetas de semana**, identifican qué actividades entregaste. Por eso:

- Mantén tu **repo de perfil** creado y con el CONFIG correcto.
- Usa **siempre el mismo usuario** de GitHub.
- Sube tu trabajo a la **carpeta correcta** de cada semana.

## 11. Errores comunes (evítalos)

- No crear el **repo de perfil** o **olvidar el bloque CONFIG** → el sistema no te detecta.
- Poner en el CONFIG un usuario distinto al real.
- Subir la actividad a la carpeta equivocada.
- Olvidar hacer `push` (los cambios quedan solo en tu computador).

## Anexo — Plantilla CONFIG lista para copiar

Copia esto al inicio del `README.md` de tu **repo de perfil** y completa tus datos:

```
<!--
CONFIG
FULL_NAME: Jesús Ariel González Bonilla
GITHUB_USER: ariel5253
-->
```

> Reemplaza el nombre y el usuario por **los tuyos**. Estos dos campos son los mínimos indispensables para que tus entregas sean reconocidas.
