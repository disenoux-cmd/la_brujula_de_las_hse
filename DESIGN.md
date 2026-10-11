---
name: "La Brújula de las HSE"
description: "Portada editorial conceptual y atlas pedagógico interior de Enseña por Colombia."
colors:
  ink: "#173b54"
  muted: "#526877"
  blue: "#255978"
  teal: "#21685e"
  yellow: "#fbc900"
  paper: "#f5f8fa"
  line: "#d8e2e8"
  white: "#fff"
  soft-teal: "#e9f3ef"
  soft-blue: "#e9f1f7"
  primary-hover: "#245778"
  correct-bg: "#e5f1e9"
  incorrect-border: "#aa5940"
  incorrect-bg: "#fcf1eb"
  retry-text: "#8d462f"
  cover-bg: "#102f43"
  cover-hover: "#ffda3c"
  cover-description: "#d4e4ec"
  cover-hint: "#c0d6e1"
  instruction-bg: "#e5efea"
  world-diagram-bg: "#e8f1ed"
  world-ring-bg: "#d9e8e0"
  world-ring-text: "#234f48"
  world-selected: "#225f55"
  world-focus: "#ac8100"
  world-outer: "#dde9ef"
  world-society: "#c8ddd1"
  world-others: "#a6c7b5"
  scope-example-bg: "#eaf2ee"
  dialogue-bg: "#254c65"
  hint-text: "#e2edf4"
  hint-revealed: "#fce788"
  simulator-hover: "#ecf3ef"
  simulator-feedback: "#eaf3ed"
  simulator-retry: "#fff7ef"
  scenario-solved: "#e6f0e9"
  simulator-progress: "#e6efea"
  library-bg: "#e9f0f5"
  library-task-bg: "#dae7ec"
typography:
  display:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "80px"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "42px"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-.025em"
  body:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "15px"
    fontWeight: 650
    lineHeight: 1.6
  interior-description:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  hotspot:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.6
  micro-choice:
    fontFamily: '"Figtree", system-ui, sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  tag: "4px"
  pill: "5px"
  button: "8px"
  choice: "9px"
  skill: "10px"
  radius: "16px"
  cover: "22px"
  small-control: "6px"
  micro-control: "7px"
  library: "14px"
  explorer: "18px"
  hotspot: "25px"
  circle: "50%"
spacing:
  pill-gap: "8px"
  option-gap: "10px"
  icon-gap: "12px"
  button-gap: "15px"
  paragraph: "20px"
  compact-panel: "24px"
  panel-block: "32px"
  panel-inline: "38px"
  desktop-gutter: "52px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.soft-blue}"
  choice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.choice}"
    padding: "17px 18px"
  choice-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  activity:
    backgroundColor: "{colors.soft-blue}"
    rounded: "{rounded.radius}"
    padding: "32px 38px"
  skill-detail:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.radius}"
    padding: "30px"
  skill-tag:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.tag}"
    padding: "4px 9px"
  cover:
    backgroundColor: "{colors.cover-bg}"
    textColor: "{colors.white}"
    rounded: "{rounded.cover}"
  button-cover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.cover-bg}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  button-cover-hover:
    backgroundColor: "{colors.cover-hover}"
  manifesto:
    backgroundColor: "{colors.soft-teal}"
    rounded: "{rounded.radius}"
    padding: "32px 38px"
  sel-laboratory:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.explorer}"
  scene-point:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hotspot}"
    padding: "8px 13px 8px 8px"
  scene-point-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  micro-choice:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.micro-control}"
    padding: "12px 14px"
  world-explorer:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.explorer}"
  world-ring-selected:
    backgroundColor: "{colors.world-selected}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
  simulator:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.explorer}"
  simulator-option:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "14px 16px"
  resource-library:
    backgroundColor: "{colors.library-bg}"
    rounded: "{rounded.library}"
  resource-filter:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.small-control}"
    padding: "10px 16px"
---

# Design System: La Brújula de las HSE

## Overview

**Creative North Star: "Atlas de aprendizaje"**

El sistema combina una portada editorial conceptual con un atlas pedagógico interior. Mantiene Figtree y la identidad azul, verde petróleo y amarillo ExC; el inicio ahora usa fondo azul profundo, texto blanco, HSE y CTA amarillos, con una composición de libro, brújula y cintas.

La jerarquía combina títulos grandes, texto de apoyo moderado y bloques delimitados por líneas finas o fondos tonales. Los esquemas interiores de relaciones y habilidades mantienen el lenguaje de atlas; las actividades conservan controles explícitos y retroalimentación textual. La portada conceptual reemplaza el mapa interactivo inicial.

La imagen conceptual de portada tiene materialidad de papel plegado e iluminación de estudio, sin personas. Las escenas ficticias de aula y colaboración conservan su lenguaje editorial gouache: el aula se reutiliza ahora como soporte de seis puntos SEL y de tres situaciones del simulador; la colaboración acompaña ExC y el cuarto caso. Los controles son HTML/CSS/SVG funcionales, no parte del raster. No hubo generación nueva de imágenes.

**Key Characteristics:**
- Figtree como única familia tipográfica, con respaldo del sistema.
- Tinta azul para lectura y selección; verde petróleo para énfasis y conexiones.
- Amarillo ExC en HSE, CTA de portada, detalles y navegación actual.
- Líneas cartográficas, círculos y paneles tonales con esquinas suaves.
- Selecciones explícitas y retroalimentación explicativa.
- Portada conceptual y escenas de aula y colaboración originales, reutilizadas con procedencia y disclosure.
- Exploración por puntos, círculos, decisiones en dos etapas y biblioteca por propósito.

Documento extraído de `PRODUCT.md`, `.impeccable/surface.md`, `README.md`, `styles.css`, `interactions.css`, `index.html` y `app.js`, con los registros de `.impeccable/image-prompts/`. Describe esa implementación; los tokens del frontmatter son valores base de escritorio y un subconjunto reutilizable del CSS, no un inventario de cada color local. Los nombres documentales de colores locales no implican nuevas variables CSS. `interactions.css` se carga después de `styles.css` y define la cascada final del interior; la portada conserva sus reglas previas. El sidecar es `.impeccable/design-system.json`, con extensiones de esquema v2: esta ruta fue elegida durante la implementación, no especificada por el usuario. La referencia de Impeccable denomina su ruta convencional `.impeccable/design.json`; no se afirma autodetección por herramientas.

## Colors

### Primary
- **Tinta azul profunda — `ink`:** texto principal, botones primarios, centros de mapa, panel institucional y opciones seleccionadas.
- **Verde petróleo — `teal`:** palabras enfatizadas, iconos de conexión, foco visible, progreso completado y retroalimentación acertada.
- **Azul de interacción — `blue`:** borde de respuesta al pasar el puntero. El botón primario tiene su propio color `primary-hover`, distinto del token `blue`.

### Secondary
- **Amarillo ExC — `yellow`:** HSE y punto del título, CTA de portada, subrayado de página actual, icono del panel institucional y selección de texto.
- **Azul de portada — `cover-bg`:** superficie conceptual y texto del CTA amarillo; no reemplaza `ink` en el interior.
- **Hover de portada — `cover-hover`:** fondo y borde del CTA al pasar el puntero.

### Neutral
- **Papel blanco azulado — `paper`:** fondo general y etiquetas de habilidades.
- **Blanco — `white`:** navegación, controles, paneles de detalle y feedback.
- **Texto de apoyo — `muted`:** descripciones, microcopy y notas.
- **Línea gris azulada — `line`:** divisores y bordes estructurales.
- **Azul suave — `soft-blue`:** actividades y estados hover secundarios.
- **Verde suave — `soft-teal`:** vista previa del manifiesto.
- **Textos de portada — `cover-description` / `cover-hint`:** descripción y microcopy claros sobre azul profundo.

El acierto usa `correct-bg` y borde verde; el intento que requiere revisión usa `incorrect-bg`, `incorrect-border` y `retry-text`. No se comunica solo mediante color: el mensaje distingue «¡Conexión lograda!» de «Mira la idea desde otra perspectiva.». Los tonos concéntricos y las cuatro superficies de habilidades son colores locales observados, consignados en el sidecar sin convertirlos en escalas universales.

El interior amplía intencionalmente las superficies locales: instrucción verde clara, diagrama y anillos de alcance, bloque de ejemplo, diálogo azul, pista amarilla clara, feedback tonal de intervención y biblioteca azul grisácea. Los anillos usan `world-outer`, `world-society`, `world-others` e `ink` en el centro; los anillos exteriores seleccionados usan `world-selected`, texto blanco y subrayado, mientras Yo conserva tinta. `world-focus` es el contorno ocre de foco. El simulador distingue `simulator-feedback` de `simulator-retry`; el caso resuelto usa `scenario-solved`. La biblioteca usa `library-bg` y su tarea `library-task-bg`. Los bordes locales exactos se registran en el sidecar; no son una rampa de marca sintetizada.

## Typography

**Display Font / Body Font:** Figtree, seguida de `system-ui, sans-serif`. Se solicita a Google Fonts mediante CSS con `display=swap`; pesos solicitados: 400, 450, 500, 550, 600, 650, 700, 750 y 800. No hay fuente mono ni segunda familia.

La jerarquía del frontmatter corresponde al título de inicio, títulos de páginas interiores, h2 base, cuerpo y etiquetas de botón. Los h3 base usan (23px), peso (650), interlínea (1.18) y tracking (-.015em); los títulos de detalle de beneficios y habilidades aumentan a (27px). `.cover-subtitle` usa (24px), peso (500), interlínea (1.4) y tracking (-.015em).

Los encabezados interiores activos son (42px), (35px) hasta 1050px y (34px) hasta 760px, por `.page:not(.home) .page-heading h1`. La descripción usa (16px), interlínea (1.7), máximo (52ch). Los nuevos h3: SEL (27px / 1.2), mundo (29px), narración (26px), decisión (24px), biblioteca (28px); los ajustes responsive se registran en Layout. Microelecciones (13px / 1.5), preguntas SEL (14px / 650), mundo (15px / 650), opciones de simulador (14px / 1.5), filtros de biblioteca (13px / 600). Son jerarquías deliberadas por contexto, no sustituciones de la tipografía de portada.

`.cover-description` usa (16px), interlínea (1.7) y máximo (43ch); `.cover-hint` usa (12px) e interlínea (1.5). La introducción SEL llega a (65ch), la de mundo a (72ch) y las actividades de quiz a (75ch). El manifiesto usa (23px), peso (450), interlínea (1.65) y tracking (-.01em), reducidos en móvil a (20px) y (1.6). Los títulos emplean `text-wrap: balance`; no hay una escala tipográfica por ratio declarada. Los saltos `<br>` del título conceptual se conservan: las reglas antiguas `.hero h1 br` no lo afectan.

## Layout

La cabecera y el contenido tienen ancho máximo (1360px), centrado y gutters base (52px). La navegación y el pie tienen máximo (1256px). La página usa padding vertical (56px arriba, 36px abajo). La cabecera es flex, con altura mínima (94px); el recurso alterna cinco secciones por hash y muestra solo la activa mediante `hidden`.

`.home` tiene padding superior (28px). `.cover-hero` es un contenedor relativo con `isolation:isolate`, flex y centrado vertical, altura mínima (600px), radio (22px), recorte y margen inferior (32px). `.cover-copy` ocupa (59%), máximo (720px), padding (56px). `.cover-art` está posicionada a la derecha y arriba, ancho (72%), altura (100%), `object-fit:cover`, `object-position:right center`, z-index (-2). `.cover-shade` cubre el contenedor en z-index (-1), con gradiente horizontal para sostener la lectura. No es una cuadrícula de dos columnas ni lleva un atlas debajo.

El bloque `illustrated-principle` ExC usa columnas (1.15fr / 1fr), sin gap ni padding exterior y con `overflow:hidden`. El texto tiene padding (30px 35px); la figura se estira en su columna y distribuye imagen y pie mediante flex vertical. La imagen usa `flex:1`, `min-height:0`, altura declarada (265px), `object-fit:cover` y `object-position:50% 48%`; su altura renderizada puede variar con el estiramiento del bloque.

El recorrido está dividido en cuatro columnas con bordes. Beneficios usa (.85fr / 1.15fr) sin gap; habilidades conserva dos columnas. El constructor del compromiso usa tres columnas y gap (26px). Las respuestas compactas del quiz normativo usan tres columnas; las respuestas del simulador usan una lista vertical propia, no esa cuadrícula.

### Layouts interiores activos
- **Encabezados:** `.page:not(.home) .page-heading` a ancho completo, columnas (1.15fr / .85fr), gap (45px), alineación centrada y margen inferior (36px). Título y descripción tienen margen cero.
- **SEL:** `.discovery-intro` (1.1fr / .9fr), gap (50px), línea superior y padding superior (25px). `.sel-laboratory` (1.2fr / .8fr), mínimo (480px), borde `#c5d6d8` y radio (18px). Escena flex con imagen a ancho y alto completos, mínimo (450px), `object-fit:cover`, posición centro. Hotspots absolutos en un área que deja (68px) inferiores para caption; detalle con padding (30px).
- **Mundo:** `.world-intro` (.7fr / 1.3fr), gap (40px). `.world-explorer` dos columnas iguales, mínimo (500px), borde `#c7d9d5`, radio (18px). Canvas cuadrado `width:min(100%,430px)`; círculos centrados por transform y tamaños (100%, 78%, 56%, 33%). Diagrama con padding (25px 27px 20px); detalle (32px).
- **Simulador:** borde `#b9cfd5`, radio (18px), margen superior (45px). Cabecera (28px 30px 22px); navegación de cuatro columnas; workspace (.9fr / 1.1fr), mínimo (510px). Imagen de escena a (190px), `object-fit:cover`, posición `center 42%`. Narrativa (25px 28px), decisión (30px). Opciones y feedback permanecen en la columna de decisión.
- **Biblioteca:** `.learning-footer` es bloque sin borde ni padding exterior, margen superior (50px). `.resource-library` tiene radio (14px), borde `#b9cbd6` y fondo tonal; summary (23px 27px), cuerpo (25px 27px 22px). Filtros flex con wrap, gap (10px); contenido (1.2fr / .8fr), gap (40px), tarea y recurso relacionado diferenciados. Créditos nativos colapsados y firma inferior flex.

### Responsive construido
- **Hasta 1050px:** gutters (32px), navegación desplazable horizontalmente, título interior (35px). Portada mínima (550px), copy (61%) con padding (38px), h1 (62px), subtítulo (22px), descripción (15px), imagen (75%) y gradiente horizontal ajustado. ExC tiene padding de texto (25px) y h2 (24px). El cierre pasa a columna.
- **Hasta 900px:** portada apilada mediante `display:block`, sin altura mínima, radio (16px), margen inferior (26px); `.home` padding superior (20px). Copy de ancho completo con padding (30px 27px 300px), h1 (52px) e interlínea (1.05), subtítulo (20px), descripción (15px), interlínea (1.65) y máximo (38ch). Imagen al fondo, ancho (100%), altura (360px), `top:auto;bottom:0`, posición `right bottom` y `object-fit:cover`; gradiente vertical. CTA (14px), padding (14px 18px), gap (14px); hint (11px).
- **Entre 761 y 900px:** corrección específica de tablet: copy con padding (38px 38px 370px), descripción máximo (55ch), imagen de altura (420px) y `object-fit:cover`, gradiente vertical ajustado. Incluye el ancho (768px) señalado en revisión.
- **Hasta 760px:** cuerpo (16px), cabecera con gutters (20px), contenido (22px), logo (108px). Los layouts interiores y ExC pasan a una columna; recorrido e historia conservan dos. Beneficios usan dos columnas `minmax(0,1fr)`. Respuestas compactas y compromiso pasan a una columna; acciones de pie y manifiesto se apilan con botones a todo el ancho. Título interior (34px). La portada conserva las reglas hasta 900px; su imagen no pasa a `contain`.
- **Hasta 370px:** copy de portada con padding (27px 21px 260px), h1 (43px), subtítulo (18px), descripción (14px), imagen (300px), CTA (13px), padding (13px 15px) y gap (10px).

Hasta (760px), la imagen de colaboración ExC usa altura automática, `aspect-ratio:3/2` y `object-fit:contain`; el texto del bloque tiene padding (25px 22px) y su pie (11px), padding (11px 22px). La escena SEL también pasa a (3/2) con `contain`; la escena del simulador usa (2/1) con `cover`.

Hasta (1050px), encabezado interior (1.1fr / .9fr) con gap (25px), SEL dos columnas iguales y mínimo de imagen (480px), detalle (25px), hotspots (11px), área hasta (85px) del borde inferior. Mundo conserva dos columnas: detalle (25px), h3 (26px), footer del diagrama en columna; anillos (12px), Yo (22px). Simulador conserva cuatro botones en fila y dos columnas, narrativa (24px), h3 (23px), decisión (25px). Biblioteca reduce gap a (25px).

Hasta (760px), encabezado interior en una columna, gap (18px), margen inferior (28px). SEL apilado, sin mínimo de panel ni imagen; caption mínimo (70px), controles (10px), mínimo (35px), padding (5px 9px 5px 5px), marcador (20px); detalle (24px 22px), h3 (25px). Mundo apilado, canvas máximo (390px), detalle (24px 22px), h3 (26px), Yo (21px), footer del diagrama vuelve a fila. Simulador: cabecera apilada, navegación (2×2), workspace una columna, narrativa (24px 21px), h3 (25px), decisión (25px 21px), h3 (23px), opciones (13px), acciones apiladas con botones de ancho completo. Biblioteca: summary (19px 18px), cuerpo (22px 18px), etiqueta abrir/cerrar oculta, filtros (11px) con wrap; contenido una columna, h3 (25px), créditos debajo y firma con wrap.

Los selectores antiguos `.hero`, `.hero-media`, `.hero-image`, `.atlas` y `.map-node` siguen en CSS pero no aparecen en el HTML activo. Sus alturas, posiciones y breakpoints no describen la portada final. El recorrido queda debajo bajo «Encuentra tu punto de partida»; `.home .home-principle` usa padding vertical (20px) y margen inferior (24px), y `.home .route-heading` margen superior (22px).

## Elevation & Depth

Predominan capas tonales y bordes de (1px). Las sombras se limitan a elementos concretos; las actividades y los paneles de detalle no llevan sombra.

### Shadow Vocabulary
- **Hover del botón primario:** `0 5px 14px #173b5415`.
- **Hotspots de escena:** `0 5px 14px #173b5430`; hover desplaza (-3px) sin elevar el panel completo.

La portada crea profundidad con la imagen conceptual y `.cover-shade`, no con una sombra CSS del panel. El gradiente base es `linear-gradient(90deg,#102f43 0%,#102f43 24%,#102f43e6 36%,#102f4300 65%)`; sus variantes responsive están en el sidecar. Los esquemas interiores conservan conexiones lineales y capas tonales. No hay efecto de vidrio ni filtro de desenfoque en el código inspeccionado.

## Shapes

El radio principal `--radius` se aplica a paneles, actividades y manifiesto. Botones y respuestas usan el radio de botón; selecciones de compromiso y nodos de habilidades tienen radios propios del frontmatter. Las nuevas familias SEL, mundo y simulador usan (18px); biblioteca (14px); hotspots (25px), microelecciones y referencia HSE (7px), filtros y pista (6px). Los círculos concéntricos reales usan (50%); el contenedor anterior de relaciones ya no está activo.

La portada conceptual tiene radio (22px), reducido a (16px) hasta 900px; el bloque ilustrado ExC conserva el radio principal y recorta su contenido con `overflow:hidden`. La imagen conceptual no es una figura con pie; el bloque ExC sí conserva su figura y pie.

Los iconos son SVG de línea, tamaño base (24px), stroke (1.7), extremos y uniones redondeados, sin relleno. Botones usan iconos (20px); navegación (19px), reducida a (16px) en móvil.

## Components

### Portada conceptual e imágenes interiores
Tres assets activos originales WebP generados previamente mediante OpenAI `gpt-image-1.5`, tamaño de generación (1536×1024), calidad `medium`, reutilizados sin generación nueva. Declaran `width="1536" height="1024"` en HTML. La portada es conceptual; aula y colaboración son escenas ficticias, no fotografías documentales. El scan de metadatos comunicado por el usuario registra **3 rasters / 0 missing**; no es un nuevo scan ejecutado durante esta actualización.

| Asset / ubicación | Texto alternativo exacto | Carga y pie visible |
| --- | --- | --- |
| `assets/portada-hse.webp` — `.cover-art` | Composición conceptual: las páginas de un libro abierto se transforman en cintas entrelazadas que forman una brújula. | `fetchpriority="high"`, `decoding="async"`, sin atributo `loading` (no lazy explícito); sin pie de figura. |
| `assets/liderazgo-colectivo.webp` — figura del bloque ExC | Ilustración de cuatro estudiantes que combinan sus aportes para construir una maqueta de un huerto comunitario. | `loading="lazy"`, `decoding="async"`, sin `fetchpriority` explícito. Pie: «Talentos distintos, un propósito compartido.» |
| `assets/aula-aprendizaje.webp` — `.sel-scene` | Escena ilustrativa de una docente y cuatro estudiantes que aprenden juntos. Los puntos interactivos exploran seis propósitos del SEL. | `loading="lazy"`, `decoding="async"`, sin `fetchpriority` explícito. Caption: «Una misma escena. Seis oportunidades para aprender.» y contador. |

El simulador reutiliza aula en tres casos y liderazgo en el cuarto, con `loading="lazy"` y `decoding="async"`. `showCase` actualiza el alt: aula «Escena ilustrativa de aprendizaje compartido entre una docente y sus estudiantes.»; liderazgo «Escena ilustrativa de estudiantes colaborando en un proyecto comunitario.». El alt estático inicial de aula es «Ilustración de aprendizaje compartido en el aula.».

Las imágenes son informativas y no interactivas: no añaden estados hover, foco ni animaciones propias. El pie ExC usa (12px), interlínea (1.5), padding (10px 17px), texto `#d6e5ed` sobre fondo local `#22465b`. `.cover-shade` es decorativo y tiene `aria-hidden="true"`.

Los prompts exactos están en `.impeccable/image-prompts/portada-hse.json`, `.impeccable/image-prompts/aula-aprendizaje.json` y `.impeccable/image-prompts/liderazgo-colectivo.json`; README y usuario registran su embedding en los assets. El sidecar conserva esos prompts y distingue su procedencia del logo preexistente. Aula vuelve a publicarse para el interior; no reemplaza la portada conceptual.

En los créditos colapsados «Sobre el contenido y las imágenes» se declara: «Contenido adaptado de la guía «La Brújula de las HSE: Evidencia Internacional y Panorama Normativo Nacional» y del Diseño Instruccional de HSE de Enseña por Colombia. Los ejemplos, escenas, preguntas e intervenciones son adaptaciones pedagógicas, no situaciones documentales ni resultados de investigación. Las imágenes originales se generaron mediante OpenAI para este recurso.»

### CTA de portada
`.button.cover-button` usa amarillo y texto azul de portada, borde amarillo, padding (15px 23px), radio (8px) y altura mínima heredada (51px). Hover cambia fondo y borde a `cover-hover`; foco visible usa outline blanco de (3px) con offset (5px). Conserva las transiciones de `.button` y enlaza a `#evidencia`.

### Botones y enlaces
Primario de tinta y texto blanco; secundario blanco con borde `#bdcdd6`. Ambos tienen altura mínima (51px), gap de icono del frontmatter y transiciones de fondo, color y sombra (.2s). El primario aplica hover solo si no está deshabilitado; el secundario cambia al fondo azul suave. El estado `disabled` tiene opacidad (.55) y cursor `not-allowed`. No hay tratamiento CSS específico `:active`.

Los enlaces de texto son subrayados, con offset (4px), y cambian a verde en hover. El enlace PDF de cabecera mantiene `aria-label="Guardar la guía en PDF"` cuando el texto visible se oculta en móvil.

### Navegación
Franja blanca delimitada por líneas. La página actual usa `aria-current="page"`, peso (750), tinta y borde inferior amarillo de (3px). Hover cambia texto de apoyo a tinta. El progreso completado rellena el punto verde; el resumen también escribe «completado» o «por completar». Al cambiar de página, JavaScript enfoca el h1 y desplaza la navegación para mostrar el enlace activo.

### Mapa y exploradores
Beneficios y habilidades conservan botones `aria-pressed`, selección tinta/blanco y paneles `aria-live="polite"`. Los exploradores nuevos son `.sel-laboratory` y `.world-explorer`; `.ring-buttons` ya no está activo. No hay enlaces `.map-node` en la portada final.

### Laboratorio SEL
Seis hotspots nativos con etiqueta visible: identidad, emociones, metas, empatía, vínculos y decisiones. Usan `aria-controls="sel-detail"`, selección `aria-pressed`, fondo amarillo y marcador tinta. El marcador cambia de más a menos con `.is-explored`; el contador empieza en «1 de 6 ideas exploradas». El detalle muestra título, idea, ejemplo, pregunta y dos microelecciones; feedback específico por alternativa con `role="status"`, acierto verde o revisión marrón y prefijo textual. `selAnswers` conserva las elecciones en un Map durante la visita y las restaura al volver al punto. «Explorar otra idea» prioriza puntos no visitados; tras seis, recorre cíclicamente y enfoca el nuevo título.

### Explorador del yo al mundo
Cuatro botones circulares realmente concéntricos, con nombres accesibles «Explorar Yo…», `aria-controls="ring-detail"` y estado presionado. Exterior seleccionado verde profundo con texto blanco subrayado; Yo conserva tinta. Hover cambia borde; foco es ocre (3px) con offset (4px). El detalle anuncia cambios con `aria-live="polite"`, muestra alcance, acción ilustrativa y pregunta de tres opciones con feedback por alternativa. `ringAnswers` es un Map de sesión. Contador inicial «1 de 4 relaciones exploradas». «Ampliar la mirada» recorre Yo → otros → sociedad → mundo → Yo y enfoca el nuevo círculo sin desplazamiento automático.

### Simulador de aula
Cuatro situaciones de libre navegación: Volver a intentarlo, Cuidar una decisión, Escuchar y acordar, Construir juntos. Los botones de `.scenario-navigation` se crean una sola vez; las actualizaciones conservan esos nodos DOM y su foco, cambiando estado, icono y contenido. Selección tinta/blanco; caso resuelto no seleccionado usa verde suave y check con texto auxiliar «conectada». `#case-announcement` anuncia situación y etapa con `role="status"`, `aria-live="polite"` y `aria-atomic="true"`.

La narrativa incluye imagen, contexto, diálogo y pista desplegable (`aria-expanded`, `aria-controls`). La pista usa texto amarillo claro y el control cambia borde/texto a amarillo cuando está abierto. Etapa 1 «Reconoce»: cuatro HSE con iconos y distinciones específicas para cada alternativa. Acierto revela «Probar una intervención». Etapa 2 «Pon en práctica»: tres acciones A/B/C con consecuencias diferentes; referencia HSE visible en fondo azul suave. No se usan mensajes de error genéricos para todas las alternativas. Las respuestas permiten comparar e intentar de nuevo, con `aria-pressed`, clases correct/incorrect y feedback de estado. Solo acertar la intervención marca el caso conectado. «Siguiente situación» busca una pendiente; al completar las cuatro aparece «Practicar otra vez», que borra los casos resueltos de la sesión, sin revocar un momento de avance ya completado.

### Biblioteca por propósito
`details.resource-library` cerrado inicialmente, con etiqueta dinámica «Abrir/Cerrar biblioteca» en escritorio. Tres filtros `aria-pressed`: comprender SEL (CASEL e investigación), llevarlo al aula (síntesis PDF y compromiso), consultar referentes (MEN y normas). Cada panel ofrece explicación, tarea de exploración, enlace principal y recurso relacionado; `#resource-panel` anuncia cambios. Filtros blancos con borde y radio (6px), selección tinta/blanco, hover verde. Enlaces externos identifican nueva pestaña y usan `noopener noreferrer`; PDF usa `download`, enlaces internos usan hash. Créditos `details.resource-credits` independientes, colapsados, con procedencia pedagógica y de imágenes.

### Etiquetas y paneles
Las etiquetas de habilidades usan papel y borde de línea. Los paneles de detalle son blancos; las actividades azul suave; el manifiesto verde suave con borde `#c3dcd3`. Paddings compactos en móvil: detalle de beneficios (24px), habilidades (25px), actividades y manifiesto (24px 20px). Las antiguas etiquetas de definición ya no aparecen en el HTML.

### Acordeones legales y fuentes
Se usan `details` / `summary` nativos. Las normas tienen filas con divisores, año en etiqueta y símbolo más hecho con CSS; al abrir, el trazo vertical gira hasta convertirse en menos. No existe exclusión entre acordeones. Los enlaces externos indican que abren otra pestaña y usan `rel="noopener noreferrer"`. La biblioteca reemplaza el antiguo bloque de fuentes del pie.

### Respuestas y retroalimentación
Los quizzes de evidencia y normas conservan botones blancos con indicador circular mediante pseudoelemento. Hover cambia borde a azul y fondo a `#f6fafc`. Al elegir se actualiza `aria-pressed` y se marca la respuesta elegida como correcta o incorrecta; feedback con `role="status"` y nuevos intentos. El simulador usa opciones propias con iconos o letras y mueve el foco a títulos, no a la primera respuesta.

### Constructor del manifiesto y progreso
Tres grupos de botones, una selección por grupo, con estado inicial vacío y contador «0 de 3 elecciones». La descarga permanece deshabilitada hasta completar los tres grupos. La vista previa anuncia cambios y genera una descarga local `.txt`; la guía se ofrece como PDF independiente. «Volver a elegir» borra las selecciones y enfoca la primera opción. Solo los momentos completados se persisten en `localStorage`; las selecciones del manifiesto no se guardan allí. El reinicio de avance limpia progreso y actividades y anuncia el resultado; si el almacenamiento no está disponible, el avance funciona durante la visita.

La clave es `exc-brujula-hse-progress-v2`, independiente del avance anterior. Completar evidencia exige explorar **6 puntos SEL + 4 beneficios + acertar quiz**; Colombia, **4 normas + 4 círculos + acertar quiz**; enfoque, **4 habilidades + 4 casos con reconocimiento e intervención acertados**; compromiso, tres elecciones. Las microelecciones SEL y mundo son formativas y opcionales para completar: no se exige acertarlas. Los contadores de exploración y los Maps de respuestas son de sesión; solo el conjunto de momentos completados se persiste. El reinicio global limpia ambos Maps y vuelve a identidad, Yo y liderazgo en sí mismo como elementos ya explorados. No hay bloqueo de navegación ni envío de calificaciones.

### Accesibilidad y movimiento
Documento en español, landmark principal, secciones etiquetadas por sus títulos, enlace «Saltar al contenido», controles nativos y foco visible en botones, enlaces y summaries: outline verde (3px), offset (5px). El h1 enfocado por navegación no tiene contorno. Elementos ocultos usan `display:none!important`; los avisos auxiliares usan la clase de solo lector. El logo tiene texto alternativo y su enlace nombre accesible de regreso al inicio. Sin JavaScript se ofrece un enlace a la síntesis de lectura.

`focusLearningTitle` asigna `tabindex="-1"`, enfoca con `preventScroll:true` y llama `scrollIntoView({block:'start'})`: smooth por defecto, instant con reducción de movimiento. «Explorar otra idea» enfoca `#sel-detail h3`; intervención, `#case-task`; siguiente caso y reinicio, `#case-title`. Esos h3 tienen `scroll-margin-top:24px` y no muestran contorno al recibir foco programático. Los botones sí conservan foco visible: hotspots blanco/offset (3px), círculos ocre/offset (4px), pista amarilla. `.skip-link:not(:focus)` pasa a posición absoluta; al enfocarlo conserva el tratamiento visible base. La navegación de casos mantiene sus botones DOM y anuncia cambios sin sustituir el control enfocado.

La entrada de página anima opacidad (.8 → 1) y desplazamiento vertical (7px → 0) durante (.35s) con `--ease`. Las transiciones activas de controles usan el easing CSS por defecto; la portada no añade animación propia. `prefers-reduced-motion: reduce` elimina animaciones y transiciones y hace automático el desplazamiento suave de HTML.

Solo con `prefers-reduced-motion:no-preference`, el marcador del hotspot seleccionado anima un halo (.5s) y los contenedores de detalle SEL/mundo tienen entrada (.3s), opacidad (.85 → 1) y translateY (5px → 0), con `cubic-bezier(.16,1,.3,1)`. Las microelecciones, biblioteca y narrativa no incorporan animación propia.

La revisión fresh comunicada por el usuario (`ses_ed4190caeffeTOkQdqIuc7ae45`) señaló el ajuste responsive a (768px), corregido con la regla de 761–900px; veredicto final comunicado: **ship / resolved**. Capturas asociadas: `.impeccable/review/desktop.png`, `.impeccable/review/mobile.png` y `.impeccable/review/tablet.png`. Se registra ese resultado, sin atribuir a esta actualización una nueva revisión ni declarar certificación WCAG, puntuaciones o ratios de contraste medidos.

La revisión fresh del interior comunicada por el usuario (`ses_ed3f48f2bffecRmUmGKzotLoBm`) recibió **fix A/B de foco**, ambos **resolved**, veredicto **ship**. Resultados comunicados: **56 asserts E2E**, **20 vistas** de las cinco páginas a **320/390/768/1440px**, teclado y reduced motion probados, **0 errores de consola**. Capturas asociadas: `.impeccable/review/sel-{desktop,mobile}.png`, `world-*.png`, `simulator-*.png`, `library-*.png`, `evidencia-*.png`, más `sel-mobile-sequential` y `simulator-keyboard`, bajo ese mismo directorio. Esta actualización valida documentación y JSON, no vuelve a ejecutar esas pruebas. El detector trabajó en modo **regex degraded**, con advisories de colores/tipografía/radios del interior ausentes del DESIGN previo; aquí se registran como valores intencionales observados. **No se declara clean pass del detector.**

## Do's and Don'ts

### Do:
- **Do** conservar Figtree, la pila de respaldo y los roles cromáticos existentes.
- **Do** mantener texto explicativo junto a estados de respuesta y progreso.
- **Do** conservar foco visible, nombres accesibles y reducción de movimiento al extender componentes.
- **Do** respetar los breakpoints y las posiciones finales de la cascada móvil.
- **Do** reutilizar el logo preexistente `docs/excolombia.png`, suministrado por el usuario, como archivo de identidad de Enseña por Colombia.
- **Do** conservar los textos alternativos, los pies y el disclosure de escenas ficticias junto a la procedencia de las ilustraciones.

### Don't:
- **Don't** modificar, regenerar ni re-encodear el logo suministrado.
- **Don't** introducir inputs o textareas para las actividades: el sistema construido usa botones de elección.
- **Don't** confundir el guardado del avance con persistencia de elecciones o envío de respuestas.
- **Don't** presentar colores locales o rampas sintetizadas como tokens implementados.
- **Don't** convertir esta documentación de código en claims de validación visual, accesibilidad certificada o rendimiento medido.
- **Don't** presentar las ilustraciones generadas como fotografías de una comunidad educativa real.
