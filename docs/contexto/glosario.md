# Glosario y Lenguaje Ubicuo — Festival del Imperio Sur 2026

Este documento define el vocabulario oficial del negocio y de los componentes de la interfaz de usuario para garantizar coherencia en todo el proyecto.

---

## 🏛️ 1. Términos del Dominio y Negocio

- **Imperio del Sur**: Apodo histórico y popular con el que se conoce a la ciudad de **Río Cuarto** (Córdoba, Argentina), dando nombre e identidad al festival.
- **Costanera del Río**: Predio oficial al aire libre donde se desarrollará el evento, ubicado en la ribera del Río Cuarto entre el *Puente Carretero* y el *Puente Filloy*.
- **Lineup**: Grilla o programación oficial que detalla los artistas, bandas y espectáculos organizados a lo largo de los 6 días del festival.
- **Sector General**: Área amplia del predio que integra el circuito de la *Feria de Emprendedores*, los puestos de la *Feria Gastronómica* y el acceso a las tribunas populares para los recitales.
- **Feria Gastronómica**: Zona de foodtrucks y puestos culinarios que ofrecen comidas típicas, regionales y bebidas.
- **Feria de Emprendedores**: Espacio de exposición y venta destinado a artesanos locales y empresas industriales de Río Cuarto para promocionar sus productos.

---

## 🎟️ 2. Tipos de Entradas y Pases

- **Pase General (Entrada Básica)**: Acceso al Sector General, tribunas populares y ferias.
- **Pase VIP**: Entrada con acceso preferencial que incluye mesas separadas en la Feria Gastronómica, vale de comida/bebida con tope estipulado y ubicación preferencial cerca del escenario.
- **Pase UltraVIP**: Entrada premium que incluye comida y bebida ilimitada, mesas reservadas apartadas del público general, acceso exclusivo al área de artistas (*backstage/hospitality*) y visualización del show pegado al escenario.

---

## 🖥️ 3. Componentes de la Interfaz de Usuario (UI)

- **Navbar Fijo (`<nav>`)**: Barra de navegación superior persistente durante el scroll, que contiene el logo del festival, los enlaces ancla a las secciones, el selector de tema y el botón de menú móvil.
- **Hero Section (`#inicio`)**: Banner principal de bienvenida de pantalla completa o impacto visual alto, con títulos destacados y botones de llamada a la acción (CTA).
- **Cards / Tarjetas del Lineup (`<article>`)**: Bloques visuales modulares que muestran la información de cada día del festival (foto, temática musical, artistas destacados, precios según tipo de pase y botones de acción).
- **Modal de Detalle (`<dialog>`)**: Ventana flotante accesible que se superpone a la página para mostrar la grilla completa de artistas y cronograma del día seleccionado.
- **Formulario Reactivo (`#entradas`)**: Sección interactiva de cotización y reserva que actualiza el precio unitario y costo total en tiempo real ante la interacción del usuario.
- **Banner de Confirmación**: Alerta visual en color verde que notifica al usuario que su solicitud de reserva fue procesada con éxito.
- **Theme Toggle**: Interruptor o botón que permite alternar entre el **Modo Claro** (Bandera de Río Cuarto) y el **Modo Oscuro** (Festivo Neón).
