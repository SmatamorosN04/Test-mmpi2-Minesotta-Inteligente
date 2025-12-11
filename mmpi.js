import { questions, scales } from "./data/data.js";

// ---------------------
// Estado global
// ---------------------
let escalas = [...scales];
let respuestasUsuario = {};
let perfil = { nombre: "", edad: null, sexo: "" };
let currentPage = 0;
let dataInforme = { resultados: {} };
const GEMINI_API_KEY = window.GEMINI_API_KEY;
const PAGE_SIZE = 10;
const SKIP_FIRST = 1;
const totalQuestions = questions.length - SKIP_FIRST;

// ---------------------
// Cronómetro
// ---------------------
const TIMER_KEYS = { endAt: 'mmpi_timer_endAt', extended: 'mmpi_timer_extended' };
let timerInterval = null;
const tiempoTotalInicialMin = 60;
const tiempoExtendidoMin = 90;

const elTimer = {
  panel: document.getElementById('timer-panel'),
  display: document.getElementById('timer-display'),
  btnExtender: document.getElementById('btn-extender-tiempo')
};

// Función para iniciar el cronómetro
function iniciarCronometro() {
  // Evitar múltiples intervalos
  if (timerInterval) clearInterval(timerInterval);

  const ahora = Date.now();
  const endAt = ahora + tiempoTotalInicialMin * 60 * 1000;
  localStorage.setItem(TIMER_KEYS.endAt, endAt);

  elTimer.panel.style.display = "block"; // mostrar panel
  actualizarCronometro(); // primera actualización inmediata

  timerInterval = setInterval(actualizarCronometro, 1000);
}

// Función para actualizar el display
function actualizarCronometro() {
  const endAt = parseInt(localStorage.getItem(TIMER_KEYS.endAt), 10);
  const restanteMs = endAt - Date.now();

  if (restanteMs <= 0) {
    clearInterval(timerInterval);
    elTimer.display.textContent = "00:00";
    alert("⏰ Se acabó el tiempo del test.");
    return;
  }

  const minutos = Math.floor(restanteMs / 60000);
  const segundos = Math.floor((restanteMs % 60000) / 1000);
  elTimer.display.textContent = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

// Función para extender tiempo
elTimer.btnExtender?.addEventListener("click", () => {
  const endAt = parseInt(localStorage.getItem(TIMER_KEYS.endAt), 10);
  const nuevoEndAt = endAt + (tiempoExtendidoMin - tiempoTotalInicialMin) * 60 * 1000;
  localStorage.setItem(TIMER_KEYS.endAt, nuevoEndAt);
  localStorage.setItem(TIMER_KEYS.extended, "true");
  alert("⏳ Tiempo extendido a 90 minutos.");
});


// ---------------------
// Almacenamiento local
// ---------------------
const STORAGE_KEYS = { perfil: "mmpi_perfil", respuestas: "mmpi_respuestas" };

function guardarLocal() {
  try {
    localStorage.setItem(STORAGE_KEYS.perfil, JSON.stringify(perfil));
    localStorage.setItem(STORAGE_KEYS.respuestas, JSON.stringify(respuestasUsuario));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

function restaurarLocal() {
  try {
    const p = localStorage.getItem(STORAGE_KEYS.perfil);
    const r = localStorage.getItem(STORAGE_KEYS.respuestas);
    if (p) perfil = JSON.parse(p);
    if (r) respuestasUsuario = JSON.parse(r);
  } catch (e) {
    console.warn("Error restaurando localStorage:", e);
  }
}

// ---------------------
// Login
// ---------------------
document.getElementById("formLogin")?.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const fd = new FormData(ev.target);
  const nombre = (fd.get("nombre") || "").toString().trim();
  const nacimientoRaw = fd.get("nacimiento"); // ahora tomamos la fecha
  const sexo = (fd.get("sexo") || "").toString();
  const nivel = (fd.get("nivel") || "").toString();

  // Validaciones
  if (!nombre) {
    alert("Por favor ingresa tu nombre.");
    document.getElementById("nombre")?.focus();
    return;
  }

  if (!nacimientoRaw) {
    alert("Por favor selecciona tu fecha de nacimiento.");
    document.getElementById("nacimiento")?.focus();
    return;
  }

  // Calcular edad a partir de la fecha
  const nacimiento = new Date(nacimientoRaw);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--; // ajustar si aún no cumplió años este año
  }

  if (edad < 10 || edad > 120) {
    alert("Introduce una fecha de nacimiento válida (edad entre 10 y 120 años).");
    document.getElementById("nacimiento")?.focus();
    return;
  }

  if (!sexo) {
    alert("Selecciona un género.");
    document.getElementById("sexo")?.focus();
    return;
  }

  if (!nivel) {
    alert("Selecciona tu nivel académico.");
    document.getElementById("nivel")?.focus();
    return;
  }

  // Guardar perfil
  perfil = { nombre, nacimiento: nacimientoRaw, edad, sexo, nivel };
  guardarLocal();

  respuestasUsuario = {};
  currentPage = 0;
  generarFormulario();
  mostrarPanel(document.getElementById("pantalla-test"));
  iniciarCronometroSiNoExiste();
});



// ---------------------
// Escalas
// ---------------------
async function cargarEscalas() {
  try {
    const res = await fetch("./data/scales.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    escalas = await res.json();
  } catch (err) {
    console.error("Error cargando escalas:", err);
    escalas = [];
  }
}

// ---------------------
// Paginación y formulario
// ---------------------
function generarFormulario() {
  renderPage();
}

function renderPage() {
  const container = document.getElementById("preguntas-container");
  if (!container) return;
  container.innerHTML = "";

  const start = SKIP_FIRST + currentPage * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, questions.length);

  const grid = document.createElement("div");
  grid.className = "preguntas-grid";
  container.appendChild(grid);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    const texto = typeof q === "string" ? q : q.text ?? `Pregunta ${i + 1}`;
    const key = `q${i}`;

    const card = document.createElement("div");
    card.className = "pregunta-card";
    card.setAttribute("role", "group");
    card.setAttribute("aria-labelledby", `preg-text-${i}`);
    card.tabIndex = 0;

    const divTexto = document.createElement("div");
    divTexto.className = "texto";
    divTexto.id = `preg-text-${i}`;
    divTexto.textContent = `${i + 1}. ${texto}`;
    card.appendChild(divTexto);

    // Radios ocultos
    const radioYes = document.createElement("input");
    radioYes.type = "radio"; radioYes.name = key; radioYes.value = "1";
    radioYes.style.position = "absolute"; radioYes.style.opacity = 0; radioYes.style.pointerEvents = "none";
    card.appendChild(radioYes);

    const radioNo = document.createElement("input");
    radioNo.type = "radio"; radioNo.name = key; radioNo.value = "0";
    radioNo.style.position = "absolute"; radioNo.style.opacity = 0; radioNo.style.pointerEvents = "none";
    card.appendChild(radioNo);

    const actions = document.createElement("div");
    actions.className = "pregunta-actions";

    const btnTrue = document.createElement("button");
    btnTrue.type = "button"; btnTrue.className = "pregunta-option"; btnTrue.innerText = "Verdadero";
    btnTrue.addEventListener("click", () => seleccionarRespuesta(card, key, "1"));

    const btnFalse = document.createElement("button");
    btnFalse.type = "button"; btnFalse.className = "pregunta-option"; btnFalse.innerText = "Falso";
    btnFalse.addEventListener("click", () => seleccionarRespuesta(card, key, "0"));

    actions.appendChild(btnTrue); actions.appendChild(btnFalse);
    card.appendChild(actions);

    const estado = document.createElement("div");
    estado.className = "pregunta-status";
    estado.id = `preg-status-${i}`;
    estado.innerText = respuestasUsuario[key] !== undefined ? `Seleccionado: ${respuestasUsuario[key] === "1" ? "Verdadero" : "Falso"}` : "Sin responder";
    card.appendChild(estado);

    if (respuestasUsuario[key] !== undefined) 
    marcarSeleccion(card, respuestasUsuario[key]);

    grid.appendChild(card);
  }

  actualizarNavegacion();
  actualizarProgreso();
}

function seleccionarRespuesta(cardEl, key, value) {
  if (!/^q\d+$/.test(key)) {
    console.warn("Clave inválida detectada:", key);
    return;
  }

  const radio = cardEl.querySelector(`input[name="${key}"][value="${value}"]`);
  if (radio) radio.checked = true;

  respuestasUsuario[key] = value === "1"; // Ahora funciona
  marcarSeleccion(cardEl, value);
  guardarLocal();
  actualizarProgreso();
}


function marcarSeleccion(cardEl, value) {
  const botones = Array.from(cardEl.querySelectorAll(".pregunta-option"));
  botones.forEach(b => {
    b.classList.remove("selected", "verde", "rojo");
    b.setAttribute("aria-pressed", "false");
  });

  // Buscar botón por valor
  const target = value === "1" ? botones[0] : botones[1]; // 0=Verdadero, 1=Falso
  if (target) {
    target.classList.add("selected");
    target.setAttribute("aria-pressed", "true");
    if (value === "1") target.classList.add("verde");
    else target.classList.add("rojo");
  }
}


function actualizarProgreso() {
  const answered = Object.keys(respuestasUsuario).filter(k => parseInt(k.replace(/^q/, ""), 10) >= SKIP_FIRST).length;
  const denom = totalQuestions;
  const bar = document.getElementById("barra-progreso-fill");
  if (bar) bar.style.width = `${Math.round((answered / denom) * 100)}%`;
}

function actualizarNavegacion() {
  const prevBtn = document.getElementById("btnAnterior");
  const nextBtn = document.getElementById("btnSiguiente");
  if (prevBtn) prevBtn.disabled = currentPage === 0;
  if (nextBtn) nextBtn.textContent = ((currentPage + 1) * PAGE_SIZE >= totalQuestions) ? "Finalizar" : "Siguiente";
}

document.getElementById("btnSiguiente")?.addEventListener("click", () => {
  if ((currentPage + 1) * PAGE_SIZE < totalQuestions) {
    currentPage++; renderPage();
  } else {
    document.getElementById("formMMPI")?.dispatchEvent(new Event("submit"));
  }
});

document.getElementById("btnAnterior")?.addEventListener("click", () => {
  if (currentPage > 0) { currentPage--; renderPage(); }
});
const btnRellenarAleatorio = document.getElementById("btnRellenarAleatorio");


btnRellenarAleatorio?.addEventListener("click", () => {
  try {
    // Validar que existan preguntas
    if (!questions || questions.length <= SKIP_FIRST) {
      alert("No hay preguntas suficientes para rellenar");
      return;
    }

    // Confirmar acción
    const confirmar = confirm("¿Deseas rellenar todas las preguntas aleatoriamente? Esto sobrescribirá cualquier respuesta existente.");
    if (!confirmar) return;

    // Opciones configurables
    const opciones = {
      metodo: "aleatorio", // "aleatorio", "positivo", "negativo", "patron"
      porcentajePositivas: 0.5, // Solo para método aleatorio
      patron: ["1", "0", "1", "0"], // Solo para método patrón
      mostrarFeedback: true,
      actualizarUI: true
    };

    // Rellenar todas las preguntas del test según el método elegido
    let respuestasGeneradas = 0;
    
    for (let i = SKIP_FIRST; i < questions.length; i++) {
      const key = `q${i}`;
      let value;

      switch (opciones.metodo) {
        case "positivo":
          value = "1";
          break;
        case "negativo":
          value = "0";
          break;
        case "patron":
          value = opciones.patron[(i - SKIP_FIRST) % opciones.patron.length];
          break;
        case "aleatorio":
        default:
          value = Math.random() < opciones.porcentajePositivas ? "1" : "0";
          break;
      }

      respuestasUsuario[key] = value;
      respuestasGeneradas++;
    }

    // Guardar en localStorage
    guardarLocal();

    // Actualizar interfaz si es necesario
    if (opciones.actualizarUI) {
      // Mover a la última página
      currentPage = Math.floor((questions.length - SKIP_FIRST - 1) / PAGE_SIZE);
      renderPage();
      
      // Actualizar visualmente todas las respuestas en todas las páginas
      actualizarTodasLasRespuestasVisualmente();
    }

    // Feedback al usuario
    if (opciones.mostrarFeedback) {
      const mensajes = {
        aleatorio: `✅ ${respuestasGeneradas} respuestas generadas aleatoriamente`,
        positivo: `✅ ${respuestasGeneradas} respuestas marcadas como "Verdadero"`,
        negativo: `✅ ${respuestasGeneradas} respuestas marcadas como "Falso"`,
        patron: `✅ ${respuestasGeneradas} respuestas generadas siguiendo el patrón`
      };
      
      alert(mensajes[opciones.metodo] || mensajes.aleatorio);
      console.log("Respuestas generadas:", respuestasUsuario);
    }

  } catch (error) {
    console.error("Error al rellenar respuestas:", error);
    alert("Error al generar respuestas aleatorias. Por favor, inténtalo de nuevo.");
  }
});

// ---------------------
// Paneles
// ---------------------
function mostrarPanel(targetEl) {
  if (!targetEl) return;

  const panels = document.querySelectorAll(".panel");
  const backdrop = document.getElementById('loginBackdrop');

  panels.forEach(p => {
    if (p === targetEl) {
      p.classList.add("active");
      try { p.inert = false; } catch(e){ }
    } else {
      const activeInput = document.activeElement;
      if (activeInput && p.contains(activeInput)) activeInput.blur();
      p.classList.remove("active");
      try { p.inert = true; } catch(e){ }
    }
  });

  // Mostrar el backdrop solo en login, ocultarlo en test e informe
  if (backdrop) {
    if (targetEl.id === 'formLogin') {
      backdrop.classList.remove('hidden'); // difuminado visible en login
    } else {
      backdrop.classList.add('hidden'); // oculto en test e informe
    }
  }

  // Manejo de foco
  const focusable = targetEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) focusable.focus();
  else { targetEl.setAttribute("tabindex","-1"); targetEl.focus(); }
}



// ---------------------
// Cronómetro
// ---------------------
function ahoraEnMs() { return Date.now(); }
function restaurarCronometroSiExiste() {
  const endAt = obtenerEndAt();
  if (!endAt) return false;

  // Si ya pasó el tiempo, reiniciamos automáticamente
  if (endAt <= ahoraEnMs()) {
    iniciarCronometro(tiempoTotalInicialMin);
    return true;
  }

  arrancarIntervalo();
  actualizarBotonExtender();
  return true;
}


function iniciarCronometroSiNoExiste() {
  const endAt = obtenerEndAt();

  // Si no hay cronómetro o ya expiró, reiniciamos
  if (!endAt || endAt <= ahoraEnMs()) {
    iniciarCronometro(tiempoTotalInicialMin); // reinicia a 60 min
  } else {
    restaurarCronometroSiExiste();
  }
}



function arrancarIntervalo() {
  cortarIntervalo();
  timerInterval = setInterval(actualizarTimerUI, 1000);
  actualizarTimerUI();
}

function cortarIntervalo() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function obtenerEndAt() {
  const v = localStorage.getItem(TIMER_KEYS.endAt);
  return v ? parseInt(v, 10) : null;
}

function isExtended() { return localStorage.getItem(TIMER_KEYS.extended) === 'true'; }

function formatTiempo(segundosTotales) {
  const mins = Math.floor(segundosTotales / 60);
  const secs = segundosTotales % 60;
  return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function actualizarTimerUI() {
  if (!elTimer.display) return;
  const endAt = obtenerEndAt();
  if (!endAt) { elTimer.display.textContent = formatTiempo(0); return; }
  const diff = endAt - ahoraEnMs();
  if (diff <= 0) { elTimer.display.textContent = '00:00'; cortarIntervalo(); onTiempoAgotado(); return; }
  elTimer.display.textContent = formatTiempo(Math.floor(diff / 1000));
}

elTimer.btnExtender?.addEventListener('click', () => {
  if (!isExtended()) {
    const nuevosMs = ahoraEnMs() + tiempoExtendidoMin * 60_000;
    localStorage.setItem(TIMER_KEYS.endAt, String(nuevosMs));
    localStorage.setItem(TIMER_KEYS.extended, 'true');
    actualizarBotonExtender();
    actualizarTimerUI();
  }
});

function actualizarBotonExtender() {
  if (!elTimer.btnExtender) return;
  if (isExtended()) { elTimer.btnExtender.disabled = true; elTimer.btnExtender.textContent = 'Extendido a 90 min'; }
  else { elTimer.btnExtender.disabled = false; elTimer.btnExtender.textContent = 'Extender a 90 min'; }
}

function onTiempoAgotado() {
  cortarIntervalo();
  guardarLocal();
  alert('El tiempo ha finalizado. Se enviaron tus respuestas automáticamente.');
  document.getElementById("formMMPI")?.dispatchEvent(new Event("submit"));
}


document.getElementById("formMMPI")?.addEventListener("submit", e => {
  e.preventDefault();

  // NO toques respuestasUsuario aquí, ya contiene todo desde seleccionarRespuesta()

  console.log("Respuestas finales:", respuestasUsuario);

  guardarLocal();
  calcularPuntuaciones(perfil.sexo);
   const dataInforme = { resultados: {} };
  escalas.forEach(grupo => {
    (grupo.items || []).forEach(item => {
      const nombre = item.name || item.title || "Escala desconocida";
      dataInforme.resultados[nombre] = {
        PD: item.PD ?? 0,
        T: item.T ?? 50
      };
    });
  });

  // 4️⃣ Mostrar resultados visuales
  mostrarResultados();

  // 5️⃣ Generar informe con IA
  generarInformeMMPIv3(dataInforme, perfil);

  mostrarPanel(document.getElementById("pantalla-resultado"));
});


// ---------------------
// Botón exportar PDF
// ---------------------
document.getElementById("btnExportarPDF")?.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { alert("Falta jsPDF"); return; }

  const pdf = new jsPDF("p", "mm", "a4");
  const nombrePaciente = perfil?.nombre?.replace(/\s+/g, "_") || "Paciente";

  // 1. Título
  pdf.setFontSize(16);
  pdf.text(`Informe MMPI-2 de ${perfil.nombre}`, 14, 20);

  // 2. Introducción / datos
  pdf.setFontSize(12);
  pdf.text(`Edad: ${perfil.edad}`, 14, 30);
  pdf.text(`Sexo: ${perfil.sexo}`, 14, 36);
  pdf.text(`Nivel académico: ${perfil.nivel || "N/A"}`, 14, 42);

  // 3. Datos de resultados en tabla
  const columns = ["Escala", "PD", "T"];
  const rows = [];

  Object.keys(dataInforme.resultados).forEach(nombre => {
    const res = dataInforme.resultados[nombre];
    rows.push([nombre, res.PD, res.T]);
  });

  // Usando autoTable
  pdf.autoTable({
    startY: 50,
    head: [columns],
    body: rows,
    styles: { fontSize: 11, cellPadding: 3 },
    headStyles: { fillColor: [102, 126, 234] },
    alternateRowStyles: { fillColor: [240, 240, 240] },
  });

  // 4. Guardar PDF
  pdf.save(`informe_MMPI2_${nombrePaciente}.pdf`);
});

// ---------------------
// Cálculo de puntuaciones
// ---------------------
// ---------------------
// Cálculo de puntuaciones - CORREGIDO
// ---------------------
function calcularPuntuaciones(sexo = "male") {
  if (!Array.isArray(escalas) || escalas.length === 0) {
    console.error("No hay escalas cargadas");
    return;
  }
  console.log("Iniciando calculo");
  console.log("Sexo:", sexo);
   console.log("Respuestas totales:", Object.keys(respuestasUsuario).length);
 escalas.forEach(grupo => {
  (grupo.items || []).forEach(item => {
    const nombre = (item.name || item.title || "").toUpperCase();

    // Escalas críticas
    if (nombre.startsWith("KB") || nombre.startsWith("LW")) {
      item.PD = 30;
      item.T = 50;
      return;
    }

    let PD = 0;            // Contador de coincidencias
    let totalPreguntas = 0; // Total de preguntas válidas para debug

    if (Array.isArray(item.answers)) {
      item.answers.forEach(answerData => {
        let num, esperado;

        // Formatos posibles
        if (Array.isArray(answerData)) {
          num = answerData[0];
          esperado = answerData[1] !== undefined ? answerData[1] : true;
        } else {
          num = answerData;
          esperado = true;
        }

        const key = `q${num}`;
        const respuesta = respuestasUsuario[key];

        if (respuesta === undefined) return; // Ignorar si no hay respuesta

        // Convertir respuesta a boolean
        const respBool = respuesta === "1" || respuesta === 1 || respuesta === true;
        const esperadoBool = esperado === "1" || esperado === 1 || esperado === true;

        totalPreguntas++;
        if (respBool === esperadoBool) PD++;
      });
    }

    console.log(`Escala ${item.name}: PD=${PD} de ${totalPreguntas} respuestas válidas`);

    // Calcular T-score
    let T = 50;
    const tabla = item.tScores?.[sexo];

    if (Array.isArray(tabla) && tabla.length > 0) {
      const pdIndex = Math.min(PD, tabla.length - 1);
      T = tabla[pdIndex] ?? 50;
    } else if (item.norma) {
      const mu = item.norma.media ?? 0;
      const sigma = item.norma.desviacion ?? 1;
      if (sigma > 0) {
        T = 50 + 10 * ((PD - mu) / sigma);
      }
    }

    // Limitar rango
    T = Math.max(30, Math.min(100, Math.round(T)));

    // Aplicar offsets y corrección K
    if (item.scoreOffsets?.[sexo]) T += item.scoreOffsets[sexo];
    if (item.kCorrection && respuestasUsuario.K) {
      const kValue = respuestasUsuario.K === "1" ? 1 : 0;
      T += item.kCorrection * kValue;
    }

    item.PD = PD;
    item.T = Math.round(T);
  });
});
  console.log("=== CÁLCULO COMPLETADO ===");

}






//==========================
// Mostrar resultados (tablas y gráfico)
// ==========================
function mostrarResultados() {
  const container = document.getElementById("tablas-graficos");
  if (!container) return;
  container.innerHTML = ""; // limpiar

  // Recolectar datos, ignorando escalas críticas
  let datosTotales = [];
  escalas.forEach(grupo => {
    (grupo.items || []).forEach(item => {
      const nombre = item.name || item.title || "";
      if (nombre.startsWith("KB") || nombre.startsWith("LW")) return; // OMITIR

      datosTotales.push({
        grupo: grupo.title || grupo.name || "Escala",
        escala: item.title || item.name || "",
        nombre: nombre,
        PD: item.PD ?? 0,
        T: item.T ?? 50
      });
    });
  });

  // Cargar tablas y gráficos
  cargarSubescalas("tablas-graficos", datosTotales);
}


// -------------------------
// Funciones de soporte para tablas y gráficos
// -------------------------
function crearGrafico(idCanvas, datos) {
  const ctx = document.getElementById(idCanvas)?.getContext("2d");
  if (!ctx) return;

  const etiquetas = datos.map(e => e.escala);
  const valores = datos.map(e => e.T);

  // Plugin para áreas de referencia
  const fondoVerde = {
    id: 'fondoVerde',
    beforeDraw(chart) {
      const { ctx, chartArea: { top, bottom, left, right }, scales: { y } } = chart;
      if (!y) return;
      
      const y65 = y.getPixelForValue(65);
      const y75 = y.getPixelForValue(75);
      const y40 = y.getPixelForValue(40);
      
      ctx.save();
      
      // Área normal (40-65)
      ctx.fillStyle = "rgba(40, 167, 69, 0.1)";
      ctx.fillRect(left, y65, right - left, y40 - y65);
      
      // Área moderada (65-75)
      ctx.fillStyle = "rgba(255, 193, 7, 0.1)";
      ctx.fillRect(left, y75, right - left, y65 - y75);
      
      // Área elevada (75-100)
      ctx.fillStyle = "rgba(220, 53, 69, 0.1)";
      ctx.fillRect(left, top, right - left, y75 - top);
      
      ctx.restore();
    }
  };

  new Chart(ctx, {
    type: "line",
    data: {
      labels: etiquetas,
      datasets: [{
        label: "Puntuación T",
        data: valores,
        borderColor: "#667eea",
        backgroundColor: "rgba(102, 126, 234, 0.1)",
        fill: true,
        pointBackgroundColor: valores.map(v => {
          if (v >= 90) return "#dc3545"; // Rojo muy elevado
          if (v >= 75) return "#fd7e14"; // Naranja elevado
          if (v >= 65) return "#ffc107"; // Amarillo moderado
          if (v >= 40) return "#17a2b8"; // Azul medio
          return "#28a745"; // Verde bajo
        }),
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.3,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#667eea',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: function(context) {
              const valor = context.parsed.y;
              let nivel = "Normal";
              if (valor >= 90) nivel = "Muy Elevado";
              else if (valor >= 75) nivel = "Elevado";
              else if (valor >= 65) nivel = "Moderadamente Elevado";
              else if (valor >= 40) nivel = "Medio";
              else nivel = "Bajo";
              return `${context.dataset.label}: ${valor} (${nivel})`;
            }
          }
        }
      },
      scales: {
        y: {
          min: 30,
          max: 100,
          ticks: {
            stepSize: 10,
            color: '#666'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          title: {
            display: true,
            text: "Puntuación T",
            color: '#333',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#666',
            maxRotation: 45,
            minRotation: 45
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    },
    plugins: [fondoVerde]
  });
}


function cargarSubescalas(containerId, datos) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const grupos = {};
  datos.forEach(item => {
    const prefix = item.grupo;
    if (!grupos[prefix]) grupos[prefix] = [];
    grupos[prefix].push(item);
  });

  Object.keys(grupos).forEach(grupo => {
    const grupoDatos = grupos[grupo];

    const fila = document.createElement("div");
    fila.className = "fila";

    // Tabla mejorada
    const tablaCont = document.createElement("div");
    tablaCont.className = "tabla-contenedor";
    const tabla = document.createElement("table");
    
    // Cabecera de tabla
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `<th>${grupo}</th><th>PD</th><th>T</th>`;
    thead.appendChild(headerRow);
    
    // Cuerpo de tabla
    const tbody = document.createElement("tbody");
    
    grupoDatos.forEach(item => {
      const row = document.createElement("tr");
      
      // Determinar clase según puntuación T
      let tClass = "medio";
      if (item.T >= 90) tClass = "muy-elevado";
      else if (item.T >= 75) tClass = "elevado";
      else if (item.T >= 65) tClass = "moderado";
      else if (item.T < 40) tClass = "bajo";
      
      row.innerHTML = `
        <td>${item.escala} - ${item.nombre}</td>
        <td>${item.PD}</td>
        <td data-t-score="${tClass}">${item.T}</td>
      `;
      tbody.appendChild(row);
    });
    
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    tablaCont.appendChild(tabla);
    fila.appendChild(tablaCont);

    // Gráfico
    const graficoCont = document.createElement("div");
    graficoCont.className = "grafico-contenedor";
    const canvas = document.createElement("canvas");
    const canvasId = `grafico-${containerId}-${grupo.replace(/\s+/g, '-')}`;
    canvas.id = canvasId;
    graficoCont.appendChild(canvas);
    fila.appendChild(graficoCont);

    container.appendChild(fila);

    crearGrafico(canvasId, grupoDatos);
  });
}


// ---------------------
// Generar informe
// ---------------------
async function generarInformeConIA(datos, perfil) {
  const prompt = `
  Eres un psicólogo experto en interpretación del MMPI-2. Tu tarea es generar un informe narrativo profesional en español basado en los resultados de ${perfil.nombre}, de ${perfil.edad} años, sexo ${perfil.sexo}.

  Instrucciones de Formato Esenciales:
  1.  Utiliza **negritas Markdown (\*\*texto\*\*)** para resaltar todas las puntuaciones T y los hallazgos clínicos importantes.
  2.  Utiliza **encabezados Markdown de nivel 2 (##)** para todas las secciones principales.
  3.  Utiliza **listas con viñetas (\*)** para las secciones de Recomendaciones y Alertas, ya que deben ser fáciles de escanear.
  4.  Asegura un **doble salto de línea** entre párrafos para una estructura clara.

  El informe debe incluir y seguir este orden:
  ## Resumen Ejecutivo y Validez del Protocolo
  - (Aquí interpreta primero las escalas de validez L, F, K, etc., y luego un resumen general del perfil).
  
  ## Interpretación de las Escalas Clínicas Elevadas
  - (Describe el significado clínico de las escalas con T-score >= 65).
  
  ## Análisis de Otras Escalas Relevantes (Contenido/Suplementarias)
  - (Opcional, si hay elevaciones en ANX, DEP, o escalas de contenido).
  
  ## Recomendaciones Generales
  - (Debe ser una lista con viñetas).
  
  ## Alertas de Riesgo Clínico Significativo
  - (Debe ser una lista con viñetas).

  Datos del test (T-Scores y PD):
  ${JSON.stringify(datos.resultados, null, 2)}
`;

 try {
    const response = await fetch("http://localhost:3000/mmpi-ia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No se pudo generar el informe con IA.";
  } catch (err) {
    console.error("Error al conectar con la API de Gemini:", err);
    return "No se pudo generar el informe con IA en este momento.";
  }
}

// ---------------------
// Generar informe avanzado con narrativa automática
// ---------------------
// ---------------------
// IA local para generar informe
// ---------------------
// ---------------------
// IA avanzada para generar informe MMPI-2
// ---------------------
function generarInformeMMPIv3(data, perfil) {
    const informeEl = document.getElementById("informe");
    if (!informeEl) return;

    const nombre = perfil?.nombre || "el evaluado";

    // 1. Estructura base con estilos CSS mínimos para atractivo
    let texto = `
        <h2 style="color: #2c5282; border-bottom: 2px solid #edf2f7; padding-bottom: 10px;">
            <span style="font-size: 1.2em;">📝</span> Informe Interpretativo MMPI-2
        </h2>
        <p style="font-style: italic; color: #718096;">
            Este informe ha sido generado automáticamente por IA a partir de los resultados crudos.
        </p>
        
        <div id="ia-content">Generando análisis y narrativa profesional...</div>
    `;

    informeEl.innerHTML = texto;

    // 2. Llamada asíncrona a IA y procesamiento de formato
    generarInformeConIA(data, perfil).then(informeIA => {
        const iaDiv = document.getElementById("ia-content");
        if (!iaDiv) return;

        // --- LÓGICA DE CONVERSIÓN DE FORMATO OPTIMIZADA ---
        let htmlContent = informeIA.trim();
        
        // 1. Convertir encabezados Markdown (##) a encabezados HTML (<h2>)
        // Se usa un estilo para atractivo visual
        htmlContent = htmlContent.replace(/^##\s*(.*)$/gm, 
            '<h2 style="color: #4a5568; margin-top: 30px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 5px;">$1</h2>');
        
        // 2. Convertir negritas Markdown (**texto**) por negritas HTML (<strong>)
        htmlContent = htmlContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // 3. Conversión de Listas (Crucial para Recomendaciones/Alertas)
        // a. Reemplazar viñetas Markdown (* o -) por etiqueta <li> y mantener la línea.
        htmlContent = htmlContent.replace(/^[\s]*(\*|\-)\s+(.*)$/gm, '<li>$2</li>');
        
        // b. Envolver cualquier grupo de <li> en etiquetas <ul>
        // Esta es la parte compleja que garantiza que las listas se agrupen correctamente.
        htmlContent = htmlContent.replace(/((<li>.*<\/li>(\s*))+)/g, '<ul>$1</ul>');

        // 4. Conversión de Párrafos (El problema del espaciado)
        
        // Reemplazar saltos de línea dobles (\n\n) por cierre y apertura de <p>
        // Esto separa los bloques de texto narrativo en párrafos con espaciado vertical
        htmlContent = htmlContent.replace(/\n\n/g, '</p><p>');

        // Eliminar saltos de línea simples (\n) que quedan dentro de los bloques de texto o listas.
        // Se reemplazan por un espacio.
        htmlContent = htmlContent.replace(/\n/g, ' ');

        // 5. Limpieza y Envoltura Final
        
        // Remover cualquier <p> o <h2> que haya quedado alrededor de las <ul>
        htmlContent = htmlContent.replace(/<p><ul>/g, '<ul>').replace(/<\/ul><\/p>/g, '</ul>');
        
        // Envolver todo el contenido restante en un párrafo inicial y final si no empieza con un tag HTML
        if (!htmlContent.match(/^<h|ul>|^<p>/i)) {
             htmlContent = '<p>' + htmlContent + '</p>';
        }

        // Inyectar el HTML ya formateado
        iaDiv.innerHTML = htmlContent;
    });
}




// ---------------------
// Inicialización
// ---------------------
(async function init() {
  restaurarLocal();
  await cargarEscalas();
  generarFormulario();
  iniciarCronometroSiNoExiste();
})()

