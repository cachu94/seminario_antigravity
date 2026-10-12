# Registro de Decisiones de Arquitectura (ADR) — Festival del Imperio Sur 2026

Este archivo documenta las decisiones técnicas, de diseño y arquitectura adoptadas en el proyecto, siguiendo el estándar formal ADR.

> [!IMPORTANT]
> **Control de Guardas (Autorización Previa Obligatoria):**
> Ninguna decisión registrada en este documento puede ser modificada, refactorizada o anulada sin antes explicar el impacto colateral y obtener la **confirmación explícita del usuario**.

---

## [ADR-001] Adopción de Stack Ligero: HTML5 Semántico + TailwindCSS v3 CDN + JS Vanilla
- **Fecha**: 2026-09-15 19:00:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: El proyecto busca enseñar y aplicar las mejores prácticas de maquetado web moderno en una SPA sin la complejidad de empaquetadores ni dependencias de Node.js en tiempo de ejecución.
- **Decisión**: Utilizar HTML5 Semántico puro, TailwindCSS v3 vía CDN y JavaScript Vanilla nativo para la interactividad.
- **Consecuencias**:
  - Máxima velocidad de renderizado en el navegador.
  - Código limpio, legible y directamente ejecutable sin paso previo de compilación (`build`).
  - Totalmente accesible para estudiantes de diseño y desarrollo web.

---

## [ADR-002] Límites Técnicos y Prohibición de Dependencias Pesadas (Guardrails)
- **Fecha**: 2026-09-15 19:05:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: Prevenir la sobreingeniería y garantizar que el código se mantenga pedagógico y alineado con el curso.
- **Decisión**: Prohibir explícitamente React, Angular, Vue, Svelte, servidores backend (Express, Django, etc.), bases de datos (SQL, MongoDB, Firebase) y estilos en línea (`style="..."`).
- **Consecuencias**: El proyecto se concentra exclusivamente en arquitectura frontend, semántica y diseño visual responsive.

---

## [ADR-003] Sistema Dual de Color: Bandera de Río Cuarto (Light) & Festivo Neón (Dark)
- **Fecha**: 2026-09-15 19:10:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: Se requiere reflejar la identidad de la ciudad de Río Cuarto en modo diurno y una experiencia inmersiva de festival en modo nocturno.
- **Decisión**:
  - Modo Claro por defecto: Azul `#0052A5`, Verde `#00923F` y Blanco `#FFFFFF`.
  - Modo Oscuro seleccionable: Violeta `#7D00BA`, Naranja `#BA7C00`, Celeste `#00BA7C` y fondo `#0F172A`.
  - Persistencia del estado mediante `localStorage` y alternancia de la clase `dark` en `<html>`.
- **Consecuencias**: Experiencia de usuario inmersiva con respeto por la identidad cultural local.

---

## [ADR-004] Estructura del Lineup: 6 Tarjetas en Grilla Modular (2x3)
- **Fecha**: 2026-09-15 19:15:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: El festival abarca 6 días de actividades continuas con diferentes temáticas musicales y artistas principales.
- **Decisión**: Maquetar 6 tarjetas temáticas organizadas en 2 filas de 3 columnas en desktop (`lg:grid-cols-3`), 2 columnas en tablet (`md:grid-cols-2`) y 1 columna en mobile.
- **Consecuencias**: Distribución equilibrada, visualmente armónica y 100% adaptable.

---

## [ADR-005] Cálculo Dinámico en Cliente para Reserva de Entradas
- **Fecha**: 2026-09-15 19:20:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: El usuario debe conocer el valor unitario de la entrada elegida y el costo total en tiempo real según la cantidad seleccionada.
- **Decisión**: Implementar lógica reactiva en JavaScript Vanilla para recalcular el costo total ante eventos `change` e `input`, y presentar un banner verde de confirmación tras el envío.
- **Consecuencias**: Feedback inmediato sin recarga de página.

---

## [ADR-006] Sede Oficial en Autódromo Parque Ciudad de Río Cuarto
- **Fecha**: 2026-10-12 14:20:00 -03:00
- **Estado**: Aprobado / Definitivo
- **Contexto**: Por motivos de capacidad de público, estacionamiento masivo (6.000+ autos) y comodidades de boxes para la feria gastronómica, se actualiza la sede del festival al Autódromo de Río Cuarto.
- **Decisión**: 
  - Actualizar la sección `#ubicacion` con información del autódromo y coordenadas GPS directas `-33.178168, -64.365759`.
  - Integrar imagen optimizada local (`img/autodromo-rio-cuarto.jpg` y WebP) para carga rápida.
  - Proveer mapa interactivo embebido de Google Maps y acceso directo a navegación GPS con botón de copiado de coordenadas.
- **Consecuencias**: Mayor claridad logística para los asistentes y enriquecimiento de la experiencia interactiva sin añadir dependencias pesadas.

