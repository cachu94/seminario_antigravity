# Bitácora de Errores Conocidos y Gotchas de Maquetado — Festival del Imperio Sur 2026

Este documento recopila las trampas comunes de maquetado (gotchas) y las soluciones técnicas preventivas para blindar el desarrollo.

---

## ⚠️ 1. Desbordamiento y Scroll Horizontal Roto en Pantallas Móviles
- **Problema**: La página genera un desplazamiento horizontal incómodo en celulares (`overflow-x`), cortando elementos visuales.
- **Causas Frecuentes**: Anchos fijos en píxeles (`w-[600px]`), paddings no contenidos o imágenes sin `max-w-full`.
- **Solución Preventiva**:
  - Utilizar clases fluidas de Tailwind (`w-full`, `max-w-full`, `container mx-auto px-4 sm:px-6 lg:px-8`).
  - Aplicar `overflow-x-hidden` en la etiqueta `<body>` o contenedor principal.

---

## ⚠️ 2. Falta de Atributo `alt` en Imágenes (Fallo de Accesibilidad y Validación)
- **Problema**: Lectores de pantalla no pueden describir las fotos y las herramientas de auditoría señalan error de accesibilidad.
- **Causas Frecuentes**: Olvido de incluir la propiedad `alt` o dejarla vacía (`alt=""`).
- **Solución Preventiva**:
  - Toda etiqueta `<img>` debe contar con un texto explicativo claro (ejemplo: `alt="Noche de Cuarteto con Luck Ra y La Konga en el Festival del Imperio Sur"`).

---

## ⚠️ 3. Falsos Botones Maquetados con `<div>` o `<span>`
- **Problema**: Elementos que parecen botones pero no se pueden accionar con el teclado (Enter / Barra espaciadora), no tienen cursor pointer por defecto y confunden a lectores de pantalla.
- **Causas Frecuentes**: Maquetar botones como `<div class="btn" onclick="...">`.
- **Solución Preventiva**:
  - Usar siempre la etiqueta nativa `<button type="button" class="cursor-pointer ...">` o enlaces semánticos `<a href="...">`.

---

## ⚠️ 4. Problemas de Contraste en Modo Claro y Modo Oscuro
- **Problema**: Textos ilegibles por falta de contraste cromático con el color de fondo al alternar de tema.
- **Causas Frecuentes**: Dejar colores fijos que no responden a la clase `dark:` de Tailwind.
- **Solución Preventiva**:
  - En **Modo Claro**: Fondos claros (`bg-white` / `bg-slate-50`) con textos oscuros (`text-slate-800` / `text-[#0052A5]`).
  - En **Modo Oscuro**: Fondos oscuros (`dark:bg-slate-900` / `dark:bg-slate-800`) con textos claros (`dark:text-slate-100` / `dark:text-[#00BA7C]`).

---

## ⚠️ 5. Formularios con Recarga de Pantalla Involuntaria
- **Problema**: Al presionar el botón de reserva, la página se recarga borrando la información antes de mostrar el mensaje de éxito.
- **Causas Frecuentes**: No capturar el evento `submit` con `event.preventDefault()`.
- **Solución Preventiva**:
  - Interceptar el evento en JavaScript con `form.addEventListener('submit', (e) => { e.preventDefault(); ... })`.
  - Desplegar dinámicamente el banner verde de confirmación y restablecer los campos.
