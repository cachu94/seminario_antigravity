/**
 * FESTIVAL DEL IMPERIO SUR 2026 — LÓGICA DE INTERFAZ (JAVASCRIPT VANILLA)
 * 
 * Funcionalidades:
 * 1. Gestión de Tema (Modo Claro / Modo Oscuro) con persistencia en localStorage.
 * 2. Navegación Móvil accesible (Menú Hamburguesa).
 * 3. Datos del Lineup y Modal Dinámico de Detalles de Artistas.
 * 4. Cotizador y Cálculo Reactivo en Tiempo Real de Entradas.
 * 5. Procesamiento de Reserva con Validación y Banner Verde de Éxito.
 * 6. Navegación suave por anclas y selección rápida de pases desde las tarjetas.
 */

// ==========================================
// 1. BASE DE DATOS LOCAL DEL LINEUP (6 DÍAS)
// ==========================================
const LINEUP_DATA = {
    1: {
        dia: "Día 1 — Martes",
        tematica: "Noche de Artistas Locales y Regionales",
        badge: "Orgullo Río Cuarto",
        icono: "🎸",
        descripcion: "Gran apertura del festival rindiendo homenaje al talento de nuestra ciudad y la región del Imperio del Sur.",
        artistasPrincipales: ["Músicos y Bandas Emergentes de Río Cuarto", "Orquesta Municipal", "Artistas Invitados del Sur de Córdoba"],
        horarios: [
            { hora: "18:00 hs", evento: "Apertura de Puertas, Feria Gastronómica y Feria de Emprendedores" },
            { hora: "19:30 hs", evento: "Bandas Seleccionadas del Concurso 'Río Cuarto Suena'" },
            { hora: "21:30 hs", evento: "Ensamble Acústico del Imperio" },
            { hora: "23:00 hs", evento: "Gran Cierre con la Selección de Artistas Locales Destacados" }
        ],
        precios: { general: 12000, vip: 28000, ultravip: 55000 },
        imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    },
    2: {
        dia: "Día 2 — Miércoles",
        tematica: "Noche de Salsa & Bachata",
        badge: "Ritmo Tropical",
        icono: "💃",
        descripcion: "Una noche a puro baile, ritmo caribeño y romanticismo en la Costanera del Río.",
        artistasPrincipales: ["Dani J (Bachata)", "Marc Anthony (Salsa Internacional)"],
        horarios: [
            { hora: "18:30 hs", evento: "Clase abierta masiva de Salsa y Bachata en la Costanera" },
            { hora: "20:30 hs", evento: "Show de Academias de Danza de Río Cuarto" },
            { hora: "22:00 hs", evento: "Presentación estelar de Dani J" },
            { hora: "23:45 hs", evento: "Concierto Internacional de Marc Anthony" }
        ],
        precios: { general: 18000, vip: 40000, ultravip: 80000 },
        imagen: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80"
    },
    3: {
        dia: "Día 3 — Jueves",
        tematica: "Noche de Pop & Baladas",
        badge: "Éxitos Románticos",
        icono: "✨",
        descripcion: "Las voces más aclamadas de la balada y el pop en una velada llena de emoción y recuerdos inolvidables.",
        artistasPrincipales: ["Cristian Castro", "Reik", "Maná"],
        horarios: [
            { hora: "19:00 hs", evento: "Apertura con acústicos pop de la región" },
            { hora: "20:30 hs", evento: "Reik en concierto" },
            { hora: "22:15 hs", evento: "Cristian Castro — Grandes Éxitos" },
            { hora: "00:00 hs", evento: "Maná — Show Eléctrico de Cierre" }
        ],
        precios: { general: 20000, vip: 45000, ultravip: 90000 },
        imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
    },
    4: {
        dia: "Día 4 — Viernes",
        tematica: "Noche de Rock Nacional",
        badge: "Potencia & Fiesta",
        icono: "⚡",
        descripcion: "La máxima potencia del rock argentino llega al escenario mayor del Festival del Imperio Sur.",
        artistasPrincipales: ["Airbag", "Andrés Calamaro", "Los Auténticos Decadentes"],
        horarios: [
            { hora: "19:00 hs", evento: "Bandas de rock locales de apertura" },
            { hora: "20:45 hs", evento: "Andrés Calamaro y su banda" },
            { hora: "22:45 hs", evento: "Airbag en Vivo — Gira Nacional" },
            { hora: "00:30 hs", evento: "Fiesta y Cierre con Los Auténticos Decadentes" }
        ],
        precios: { general: 20000, vip: 45000, ultravip: 90000 },
        imagen: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80"
    },
    5: {
        dia: "Día 5 — Sábado",
        tematica: "Noche de Cuarteto Cordobés",
        badge: "El Templo del Tunga Tunga",
        icono: "🪗",
        descripcion: "La fiesta más grande de Córdoba en la Costanera: alegría, baile y los máximos exponentes del cuarteto actual.",
        artistasPrincipales: ["Q' Lokura", "Luck Ra", "La Konga"],
        horarios: [
            { hora: "19:00 hs", evento: "Dj Cuartetero y bienvenida en el Sector General" },
            { hora: "21:00 hs", evento: "Luck Ra — Show Especial Hits" },
            { hora: "23:00 hs", evento: "Q' Lokura en Vivo" },
            { hora: "01:00 hs", evento: "La Konga — Baile hasta el amanecer" }
        ],
        precios: { general: 18000, vip: 40000, ultravip: 85000 },
        imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    },
    6: {
        dia: "Día 6 — Domingo",
        tematica: "Noche de Folklore & Tradición",
        badge: "Cierre de Oro",
        icono: "🌾",
        descripcion: "Gran cierre familiar celebrando nuestras raíces folklóricas con las voces más consagradas del país.",
        artistasPrincipales: ["Destino San Javier", "Soledad Pastorutti", "Campedrinos"],
        horarios: [
            { hora: "17:30 hs", evento: "Peña Popular en la Feria Gastronómica y Ballet de Danzas" },
            { hora: "19:30 hs", evento: "Campedrinos" },
            { hora: "21:15 hs", evento: "Destino San Javier" },
            { hora: "23:00 hs", evento: "Soledad Pastorutti — Cierre Monumental del Festival" }
        ],
        precios: { general: 15000, vip: 35000, ultravip: 75000 },
        imagen: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
    }
};

// Precios estándar de referencia por pase
const PASS_PRICES = {
    general: 15000,
    vip: 35000,
    ultravip: 70000
};

// Formateador de moneda argentina (ARS)
const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(amount);
};

// ==========================================
// 2. GESTIÓN DE TEMA (MODO CLARO / OSCURO)
// ==========================================
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    const savedTheme = localStorage.getItem("festival_theme") || "light";

    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            if (themeIcon) themeIcon.textContent = "☀️";
            if (themeText) themeText.textContent = "Modo Claro";
        } else {
            document.documentElement.classList.remove("dark");
            if (themeIcon) themeIcon.textContent = "🌙";
            if (themeText) themeText.textContent = "Modo Oscuro";
        }
        localStorage.setItem("festival_theme", theme);
    };

    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.documentElement.classList.contains("dark");
            applyTheme(isDark ? "light" : "dark");
        });
    }
}

// ==========================================
// 3. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
// ==========================================
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                menuBtn.setAttribute("aria-expanded", "true");
                menuBtn.innerHTML = `
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                `;
            } else {
                mobileMenu.classList.add("hidden");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.innerHTML = `
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                `;
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace
        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.innerHTML = `
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                `;
            });
        });
    }
}

// ==========================================
// 4. MODAL DINÁMICO DE DETALLES DE ARTISTAS
// ==========================================
function initModal() {
    const modal = document.getElementById("lineup-modal");
    const modalTitle = document.getElementById("modal-day-title");
    const modalTheme = document.getElementById("modal-day-theme");
    const modalBadge = document.getElementById("modal-day-badge");
    const modalDesc = document.getElementById("modal-day-desc");
    const modalArtists = document.getElementById("modal-artists-list");
    const modalSchedule = document.getElementById("modal-schedule-list");
    const modalPrices = document.getElementById("modal-prices-info");
    const modalReserveBtn = document.getElementById("modal-reserve-btn");
    const closeModalBtns = document.querySelectorAll(".close-modal-trigger");

    let currentDaySelected = 1;

    window.openDayModal = function(dayNumber) {
        const data = LINEUP_DATA[dayNumber];
        if (!data || !modal) return;

        currentDaySelected = dayNumber;

        if (modalTitle) modalTitle.textContent = data.dia;
        if (modalTheme) modalTheme.textContent = data.tematica;
        if (modalBadge) modalBadge.textContent = `${data.icono} ${data.badge}`;
        if (modalDesc) modalDesc.textContent = data.descripcion;

        // Lista de artistas
        if (modalArtists) {
            modalArtists.innerHTML = data.artistasPrincipales.map(artista => `
                <li class="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <span class="w-2 h-2 rounded-full bg-[#00923F] dark:bg-[#00BA7C]"></span>
                    <strong class="font-semibold">${artista}</strong>
                </li>
            `).join("");
        }

        // Cronograma
        if (modalSchedule) {
            modalSchedule.innerHTML = data.horarios.map(h => `
                <div class="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50">
                    <span class="px-2 py-0.5 rounded text-xs font-bold bg-[#0052A5]/10 text-[#0052A5] dark:bg-[#7D00BA]/20 dark:text-purple-300 shrink-0">
                        ${h.hora}
                    </span>
                    <p class="text-sm text-slate-700 dark:text-slate-300">${h.evento}</p>
                </div>
            `).join("");
        }

        // Precios del día
        if (modalPrices) {
            modalPrices.innerHTML = `
                <div class="grid grid-cols-3 gap-2 text-center text-xs">
                    <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span class="block text-slate-500 dark:text-slate-400 font-medium">General</span>
                        <strong class="text-sm text-slate-800 dark:text-white">${formatCurrency(data.precios.general)}</strong>
                    </div>
                    <div class="p-2 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
                        <span class="block text-amber-700 dark:text-amber-400 font-medium">Pase VIP</span>
                        <strong class="text-sm text-amber-800 dark:text-amber-300">${formatCurrency(data.precios.vip)}</strong>
                    </div>
                    <div class="p-2 rounded bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60">
                        <span class="block text-purple-700 dark:text-purple-400 font-medium">UltraVIP</span>
                        <strong class="text-sm text-purple-800 dark:text-purple-300">${formatCurrency(data.precios.ultravip)}</strong>
                    </div>
                </div>
            `;
        }

        // Abrir modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.classList.add("overflow-hidden");
    };

    function closeModal() {
        if (!modal) return;
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
    }

    closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));

    // Cerrar al pulsar backdrop
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Cerrar con tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    // Botón Reservar desde dentro del Modal
    if (modalReserveBtn) {
        modalReserveBtn.addEventListener("click", () => {
            closeModal();
            selectDayInForm(currentDaySelected);
        });
    }
}

// ==========================================
// 5. COTIZADOR Y FORMULARIO DE RESERVAS
// ==========================================
function initBookingForm() {
    const form = document.getElementById("booking-form");
    const daySelect = document.getElementById("ticket-day");
    const passTypeSelect = document.getElementById("ticket-pass-type");
    const unitPriceDisplay = document.getElementById("unit-price-display");
    const quantityInput = document.getElementById("ticket-quantity");
    const decreaseBtn = document.getElementById("decrease-qty-btn");
    const increaseBtn = document.getElementById("increase-qty-btn");
    const totalCostDisplay = document.getElementById("total-cost-display");
    const successBanner = document.getElementById("booking-success-banner");
    const successDetails = document.getElementById("success-banner-details");

    if (!form) return;

    // Recalcular total reactivo
    function calculateTotal() {
        const selectedDay = parseInt(daySelect ? daySelect.value : 1, 10) || 1;
        const passType = passTypeSelect ? passTypeSelect.value : "general";
        const quantity = parseInt(quantityInput ? quantityInput.value : 1, 10) || 1;

        // Obtener precio correspondiente al día y tipo de pase
        const dayInfo = LINEUP_DATA[selectedDay];
        const unitPrice = dayInfo && dayInfo.precios && dayInfo.precios[passType] 
            ? dayInfo.precios[passType] 
            : (PASS_PRICES[passType] || 15000);

        const totalCost = unitPrice * quantity;

        if (unitPriceDisplay) {
            unitPriceDisplay.textContent = formatCurrency(unitPrice);
        }

        if (totalCostDisplay) {
            totalCostDisplay.textContent = formatCurrency(totalCost);
        }

        return { unitPrice, totalCost, quantity, selectedDay, passType };
    }

    // Eventos de cambio en formulario
    if (daySelect) daySelect.addEventListener("change", calculateTotal);
    if (passTypeSelect) passTypeSelect.addEventListener("change", calculateTotal);
    if (quantityInput) {
        quantityInput.addEventListener("input", () => {
            if (parseInt(quantityInput.value, 10) < 1 || isNaN(parseInt(quantityInput.value, 10))) {
                quantityInput.value = 1;
            } else if (parseInt(quantityInput.value, 10) > 20) {
                quantityInput.value = 20;
            }
            calculateTotal();
        });
    }

    // Botones de incremento / decremento
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener("click", () => {
            let current = parseInt(quantityInput.value, 10) || 1;
            if (current > 1) {
                quantityInput.value = current - 1;
                calculateTotal();
            }
        });
    }

    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener("click", () => {
            let current = parseInt(quantityInput.value, 10) || 1;
            if (current < 20) {
                quantityInput.value = current + 1;
                calculateTotal();
            }
        });
    }

    // Enviar formulario (Simulación con feedback de 4 estados UI)
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("ticket-name");
        const emailInput = document.getElementById("ticket-email");
        const phoneInput = document.getElementById("ticket-phone");
        const submitBtn = document.getElementById("submit-booking-btn");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";

        if (!name || !email || !phone) {
            alert("Por favor completa todos los campos requeridos para confirmar tu reserva.");
            return;
        }

        // Estado UI: Loading transitorio accesible
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando Reserva...
            `;
        }

        const data = calculateTotal();
        const dayInfo = LINEUP_DATA[data.selectedDay];
        const passLabel = data.passType === "ultravip" ? "Pase UltraVIP" : (data.passType === "vip" ? "Pase VIP" : "Pase General");

        // Simular respuesta tras 600ms
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    <span>Confirmar Reserva de Entradas</span>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                `;
            }

            // Mostrar Banner Verde de Éxito con los datos reales
            if (successBanner && successDetails) {
                const bookingCode = `FIS26-${Math.floor(100000 + Math.random() * 900000)}`;
                successDetails.innerHTML = `
                    <div class="mt-2 space-y-1 text-sm text-emerald-950 dark:text-emerald-100">
                        <p><strong>Titular:</strong> ${name} (<span class="underline">${email}</span>)</p>
                        <p><strong>Jornada:</strong> ${dayInfo.dia} — ${dayInfo.tematica}</p>
                        <p><strong>Pase:</strong> ${passLabel} x ${data.quantity} entrada(s)</p>
                        <p><strong>Importe Total:</strong> <span class="text-base font-extrabold text-[#00923F] dark:text-[#00BA7C]">${formatCurrency(data.totalCost)}</span></p>
                        <p class="text-xs text-emerald-800 dark:text-emerald-300 font-mono mt-2 bg-emerald-100/70 dark:bg-emerald-900/60 p-2 rounded border border-emerald-300 dark:border-emerald-700">
                            Código de Reserva: <strong>${bookingCode}</strong> — Se ha enviado un voucher digital a tu correo para retirar en el predio del Autódromo.
                        </p>
                    </div>
                `;
                successBanner.classList.remove("hidden");
                successBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }

            // Reiniciar formulario
            form.reset();
            calculateTotal();
        }, 600);
    });

    // Calcular estado inicial
    calculateTotal();
}

// Función global para seleccionar día desde una tarjeta y hacer scroll al formulario
window.selectDayInForm = function(dayNumber) {
    const daySelect = document.getElementById("ticket-day");
    const bookingSection = document.getElementById("entradas");

    if (daySelect) {
        daySelect.value = dayNumber;
        // Disparar evento change
        daySelect.dispatchEvent(new Event("change"));
    }

    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
};

// ==========================================
// 6. UTILIDAD: COPIAR COORDENADAS GPS
// ==========================================
function initCopyCoordinates() {
    const copyBtn = document.getElementById("copy-coords-btn");
    const copyIcon = document.getElementById("copy-coords-icon");
    const copyText = document.getElementById("copy-coords-text");

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            const coords = "-33.178168, -64.365759";
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(coords).then(() => {
                    if (copyIcon) copyIcon.textContent = "✓";
                    if (copyText) copyText.textContent = "¡Copiadas!";
                    setTimeout(() => {
                        if (copyIcon) copyIcon.textContent = "📋";
                        if (copyText) copyText.textContent = "Copiar Coordenadas";
                    }, 2200);
                }).catch(() => {
                    prompt("Coordenadas GPS del Autódromo:", coords);
                });
            } else {
                prompt("Coordenadas GPS del Autódromo:", coords);
            }
        });
    }
}

// ==========================================
// 7. INICIALIZACIÓN GLOBAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileMenu();
    initModal();
    initBookingForm();
    initCopyCoordinates();
    console.log("Festival del Imperio Sur 2026 — Interfaz Inicializada con Éxito.");
});
