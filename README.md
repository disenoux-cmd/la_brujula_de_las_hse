# La brújula de las HSE

Recurso educativo digital de Enseña por Colombia para Ecos y docentes. Conecta la evidencia de CASEL, el panorama normativo colombiano y las cuatro HSE priorizadas, mediante exploración y actividades autodirigidas con retroalimentación inmediata.

## Ver el recurso

Con Node.js 22 o superior:

```sh
npm run dev
```

Abrir **http://localhost:4173**. No requiere instalar dependencias. También es posible abrir `index.html` directamente para explorar el recurso; un servidor local reproduce mejor las descargas y el almacenamiento de un sitio publicado.

## Contenido e interacciones

- **Inicio:** portada conceptual integrada y acceso libre a las tres perspectivas y al compromiso.
- **Evidencia global:** escena de aula con seis puntos interactivos del SEL. Cada punto revela un concepto, un ejemplo y una elección con feedback específico. Se complementa con cuatro beneficios explorables y una pregunta de aplicación.
- **Panorama colombiano:** trayectoria histórica, cuatro normas desplegables y modelo de cuatro círculos realmente concéntricos. Cada relación tiene una acción ilustrativa y tres alternativas para relacionar el alcance con la práctica. El botón «Ampliar la mirada» recorre los círculos.
- **Enfoque ExC:** mapa de las cuatro HSE y simulador de cuatro situaciones. Cada situación incluye una escena, diálogo ilustrativo, pista revelable y dos pasos: reconocer la habilidad y elegir una intervención. Cada alternativa recibe feedback diferenciado.
- **Tu compromiso:** manifiesto construido mediante elecciones, retroalimentación y descarga personal en `.txt`.
- **Síntesis:** `sintesis-hse.pdf`, infografía de tres páginas. Versión HTML imprimible en `sintesis.html`.
- **Biblioteca:** recursos filtrables por propósito: comprender el SEL, llevarlo al aula y consultar referentes. Cada recurso incluye una acción para orientar la exploración, un enlace principal y otro relacionado.

Las actividades no usan inputs ni textareas. Solo se guarda el avance en `localStorage`, con la clave `exc-brujula-hse-progress-v2`; las respuestas y las elecciones del manifiesto no se persisten entre visitas ni se envían. Las microactividades conservan las elecciones solo durante la visita actual para permitir comparar y revisar. El recurso funciona si el almacenamiento local está bloqueado. El botón «Reiniciar mi avance» permite repetir todo el recorrido. La versión `v2` separa el avance del recorrido enriquecido del avance previo a estas interacciones.

Para completar evidencia se exploran los seis puntos y los cuatro beneficios, y se resuelve la actividad de conexión. Para completar Colombia se abren las cuatro normas, se exploran las cuatro relaciones y se resuelve la actividad normativa. Las microelecciones de puntos y círculos son formativas: permiten comparar alternativas, sin exigir acertarlas todas para avanzar. En el enfoque ExC se exploran las cuatro habilidades y se conectan los dos pasos de las cuatro situaciones. El compromiso se completa al elegir fundamento, acción y propósito. No hay bloqueo entre miradas ni calificación remitida a un tutor.

## Construir el sitio publicable

```sh
npm run check
npm run build
npm run preview
```

El resultado está en **`dist/`**. El servidor de vista previa usa http://localhost:4173; detén el servidor de desarrollo antes de iniciarlo, o define otra variable `PORT`.

El build copia únicamente HTML, CSS, JavaScript, favicon, logo y PDF. `.env`, los documentos instruccionales, scripts y archivos de trabajo no forman parte de la publicación. Todas las rutas del RED son relativas, por lo que funciona tanto en un dominio como en una subcarpeta de GitHub Pages.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub con la rama `main`.
2. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**.
3. Ejecuta el workflow **Publicar RED en GitHub Pages**, o realiza un push a `main`.
4. El workflow `.github/workflows/pages.yml` construye y publica exclusivamente `dist/`. La dirección final aparecerá en el despliegue de GitHub Pages.

Para el servicio gratuito de GitHub Pages, utiliza un repositorio público si tu plan no permite Pages en repositorios privados. El recurso no necesita secretos de Actions ni una clave OpenAI.

## Publicar en Cloudflare Pages

Conecta el repositorio desde **Workers & Pages → Create application → Pages → Connect to Git** y usa:

| Configuración | Valor |
| --- | --- |
| Rama de producción | `main` |
| Framework preset | `None` |
| Comando de build | `npm run build` |
| Directorio de salida | `dist` |
| Directorio raíz | Raíz de este proyecto |
| Variable de build | `NODE_VERSION=22` |

También puedes ejecutar `npm run build` localmente y subir únicamente `dist/` mediante Direct Upload. No requiere funciones, bases de datos ni servicios de pago.

## Editar el contenido

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura, textos principales, normas y navegación |
| `app.js` | Beneficios, habilidades, situaciones, feedback y manifiesto |
| `styles.css` | Diseño visual, estados y adaptación responsiva |
| `interactions.css` | Escena de puntos interactivos, círculos, simulador y biblioteca |
| `sintesis.html` | Fuente editable de la síntesis imprimible |
| `sintesis-hse.pdf` | PDF listo para descargar |

Si editas `sintesis.html`, abre esa página, usa «Imprimir o guardar como PDF», elige A4 sin encabezados/pies del navegador y habilita gráficos de fondo. Reemplaza `sintesis-hse.pdf` con el archivo actualizado y vuelve a ejecutar el build.

## Criterios pedagógicos y fuentes

La base es `docs/RED 1 _ Módulo 1.md` y `docs/Diseño Instruccional HSE.md`. El usuario confirmó que el propósito del documento prevalece sobre la referencia inicial a conflictos restaurativos. Se mantienen los bloques de evidencia, normativa y enfoque ExC; el manifiesto escrito se adapta a una actividad por elecciones.

Los ejemplos, las preguntas y las conexiones de aula son adaptaciones pedagógicas, identificadas en el recurso. Las referencias numeradas de la guía no venían acompañadas de bibliografía; se sustituyeron por enlaces consultables a CASEL y portales oficiales, sin inventar citas o porcentajes. La panorámica normativa sigue los documentos proporcionados. Los sitios legales oficiales no respondieron a la consulta automatizada durante la construcción, por lo que no se presenta como una validación jurídica independiente.

Se reutiliza el logo suministrado en `docs/excolombia.png`. Las imágenes originales generadas mediante OpenAI son `assets/portada-hse.webp` (libro y brújula escultórica), `assets/aula-aprendizaje.webp` (escena de exploración del SEL y del simulador) y `assets/liderazgo-colectivo.webp` (colaboración comunitaria). Son imágenes conceptuales y escenas ficticias, no fotografías documentales. Se publican como WebP y sus prompts y procedencia están registrados en `.impeccable/image-prompts/` y embebidos en los archivos. Los puntos, controles, círculos y mapas son HTML/CSS/SVG funcionales, no están rasterizados en las imágenes. Figtree se carga desde Google Fonts con respaldo del sistema si no hay conexión. El contenido y la interactividad no dependen de ese servicio.

El script `node scripts/generate-images.mjs` permite generar imágenes ausentes usando `OPENAI_API_KEY` de `.env` o del entorno. Omite archivos existentes para evitar nuevos cargos accidentales. La clave solo se usa durante la generación local: no se incluye en el sitio publicado ni se solicita al estudiante. Los archivos WebP generados ya están disponibles y el build no llama a OpenAI.

## Accesibilidad y comprobación

- HTML semántico, idioma español y controles nativos.
- Enlace para saltar al contenido, foco de navegación y acciones con nombre accesible.
- Selecciones anunciadas con `aria-pressed` y feedback con regiones vivas.
- Respeto de `prefers-reduced-motion` y enlaces externos identificados.
- Verificación de las cinco vistas a 320, 390, 768 y 1440 px sin desbordamiento horizontal.
- Recorrido funcional completo, respuestas correctas e incorrectas, descarga, persistencia, reinicio y almacenamiento bloqueado comprobados en navegador.
- Las seis microactividades del SEL, las cuatro relaciones del modelo, las pistas y ambos pasos de las cuatro situaciones se verificaron con alternativas correctas e incorrectas y retroalimentación diferenciada.
- PDF comprobado: tres páginas, sin superposición con los pies de página.

El resultado es un sitio estático listo para publicar. El despliegue remoto se realiza al conectarlo con la cuenta y el repositorio elegidos.
