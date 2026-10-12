# Convenciones y Estándares de Maquetado — Festival del Imperio Sur 2026

Este documento define las reglas de maquetado semántico, paletas cromáticas, tipografía, diseño responsive y micro-interacciones.

---

## 🏷️ 1. Etiquetas Semánticas Obligatorias
Queda restringido el uso excesivo de `<div>`. Se debe maquetar con etiquetas de propósito específico:
- Encabezado general: `<header>`
- Menú de navegación: `<nav>`
- Contenido principal: `<main>`
- Secciones temáticas: `<section id="...">`
- Tarjetas y artículos independientes: `<article class="card ...">`
- Contenedores de imágenes ilustrativas: `<figure>` con `<figcaption>`
- Elementos accionables y disparadores de eventos: `<button type="button">`
- Formularios interactivos: `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, `<output>`
- Pie de página: `<footer>`

---

## 🎨 2. Paleta de Colores y Esquemas CSS

### A. Modo Claro (Light Mode — Por Defecto)
Basado en los colores oficiales de la **Bandera de la Ciudad de Río Cuarto**:
- **Azul Río Cuarto (Primario / Brand)**: `#0052A5` (`bg-[#0052A5]`, `text-[#0052A5]`)
- **Verde Esperanza (Secundario / Acento / Éxito)**: `#00923F` (`bg-[#00923F]`, `text-[#00923F]`)
- **Blanco Puro (Fondos y Superficies)**: `#FFFFFF`
- **Fondo de Contenedores Secundarios**: `#F8FAFC` (Slate 50)
- **Texto Principal**: `#1E293B` (Slate 800 — Alto contraste para lectura diurna)
- **Texto Secundario**: `#64748B` (Slate 500)

### B. Modo Oscuro (Dark Mode — Toggle)
Esquema nocturno festivo de alto impacto visual:
- **Fondo Base Principal**: `#0F172A` (Slate 900)
- **Fondo de Tarjetas y Contenedores**: `#1E293B` (Slate 800)
- **Violeta / Lila Neón (Acento Principal)**: `#7D00BA` (`bg-[#7D00BA]`, `text-[#7D00BA]`)
- **Naranja / Dorado Festivo (Acento Cálido / Precios)**: `#BA7C00` (`text-[#BA7C00]`, `bg-[#BA7C00]`)
- **Celeste / Turquesa Eléctrico (Acento Refrescante / Éxito)**: `#00BA7C` (`text-[#00BA7C]`, `bg-[#00BA7C]`)
- **Texto Principal**: `#F8FAFC` (Slate 50)
- **Texto Secundario**: `#94A3B8` (Slate 400)

---

## 🔤 3. Tipografía y Fuentes
- **Fuente Principal**: `Poppins` o `Inter` de Google Fonts.
- **Títulos (`h1`, `h2`, `h3`)**: `font-bold` o `font-extrabold` con espaciado tracking ajustado (`tracking-tight`).
- **Cuerpo de Texto (`p`)**: `font-normal`, tamaño base (`text-base` / `text-sm`), interlineado cómodo (`leading-relaxed`).
- **Fallback**: `system-ui, -apple-system, sans-serif`.

---

## 📱 4. Reglas de Diseño Responsive (Breakpoints)

| Dispositivo / Pantalla | Breakpoint Tailwind | Grilla del Lineup | Menú de Navegación |
| :--- | :--- | :---: | :---: |
| **Desktop / Pantalla Grande** | `lg` (`>= 1024px`) | **3 Columnas** (2 filas x 3 cards) | Enlaces horizontales visibles |
| **Tablet / Pantalla Mediana** | `md` (`768px - 1023px`) | **2 Columnas** | Enlaces horizontales compactos |
| **Móvil / Pantalla Pequeña** | `< 768px` (`grid-cols-1`) | **1 Columna** vertical | Menú Hamburguesa desplegable |

---

## ✨ 5. Micro-interacciones y Estados Visuales
- **Botones**:
  - `cursor-pointer` obligatorio en todos los elementos interactivos.
  - Transición suave al pasar el cursor (`transition-all duration-300 transform hover:scale-[1.02] hover:opacity-90 active:scale-95`).
- **Tarjetas de Artistas**:
  - Elevación sutil con sombra al hacer hover (`hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`).
  - Efecto zoom suave en la imagen interior (`group-hover:scale-105 transition-transform duration-500`).
- **Formulario e Inputs**:
  - `cursor: text` en campos editables.
  - Foco accesible con borde iluminado (`focus:ring-2 focus:ring-[#0052A5] dark:focus:ring-[#7D00BA] focus:outline-none`).

---

## ♿ 6. Accesibilidad (a11y)
- Atributo `alt` descriptivo y no vacío en todas las imágenes.
- Uso exclusivo de `<button>` para disparadores de acciones (nunca `<div>` con onclick).
- Ratio de contraste superior a 4.5:1 (estándar WCAG AA) en ambos modos visuales.
