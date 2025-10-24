import { questions, scales } from "./data/data.js";

// ---------------------
// Estado global
// ---------------------
let escalas = [...scales];
let respuestasUsuario = {};
let perfil = { nombre: "", edad: null, sexo: "" };
let currentPage = 0;

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
  const edadRaw = fd.get("edad");
  const edad = edadRaw ? parseInt(edadRaw, 10) : NaN;
  const sexo = (fd.get("sexo") || "").toString();

  if (!nombre) { alert("Por favor ingresa tu nombre."); document.getElementById("nombre")?.focus(); return; }
  if (Number.isNaN(edad) || edad < 10 || edad > 120) { alert("Introduce una edad válida (10-120)."); document.getElementById("edad")?.focus(); return; }
  if (!sexo) { alert("Selecciona un género."); document.getElementById("sexo")?.focus(); return; }

  perfil = { nombre, edad, sexo };
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
  const radio = cardEl.querySelector(`input[name="${key}"][value="${value}"]`);
  if (radio) radio.checked = true;

  respuestasUsuario[key] = value === "1";
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
  // Rellenar todas las preguntas del test
  for (let i = SKIP_FIRST; i < questions.length; i++) {
    const key = `q${i}`;
    const value = Math.random() < 0.5 ? "0" : "1";
    respuestasUsuario[key] = value;
  }

  // Guardar en localStorage
  guardarLocal();

  // Mover a la última página
  currentPage = Math.floor((questions.length - SKIP_FIRST - 1) / PAGE_SIZE);
  renderPage();

  alert("Todas las preguntas han sido rellenadas aleatoriamente y se ha mostrado la última página.");
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


function iniciarCronometro(minutos = tiempoTotalInicialMin) {
  const endAt = ahoraEnMs() + minutos * 60_000;
  localStorage.setItem(TIMER_KEYS.endAt, String(endAt));
  localStorage.setItem(TIMER_KEYS.extended, 'false');
  arrancarIntervalo();
  actualizarBotonExtender();
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

// ---------------------
// Formulario principal y resultados
// ---------------------
document.getElementById("formMMPI")?.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  respuestasUsuario = {};
  for (let [k, v] of formData.entries()) respuestasUsuario[k] = v;

  guardarLocal();
  calcularPuntuaciones(perfil.sexo);
  mostrarResultados();
  generarInforme();
  mostrarPanel(document.getElementById("pantalla-resultado"));
});

document.getElementById("btnExportarPDF")?.addEventListener("click", () => {
  const { jsPDF } = window.jspdf || {};
  if (!window.html2canvas || !jsPDF) { alert("Faltan librerías html2canvas o jsPDF."); return; }
  const nodo = document.getElementById("informe") || document.body;
  html2canvas(nodo, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 10, 10, pageWidth - 20, Math.min(pdfHeight, pdf.internal.pageSize.getHeight() - 20));
    pdf.save("informe_MMPI2.pdf");
  });
});

// ---------------------
// Cálculo de puntuaciones
// ---------------------
function calcularPuntuaciones(sexo = "male") {
  if (!Array.isArray(escalas) || escalas.length === 0) return;

  escalas.forEach(grupo => {
    (grupo.items || []).forEach(item => {
      let PD = 0;

      // Recorremos las respuestas esperadas de esa escala
      if (Array.isArray(item.answers)) {
        item.answers.forEach(([num, esperado]) => {
          const key = `q${num}`;
          const respuesta = respuestasUsuario[key];

          if (respuesta !== undefined) {
            const respBool = respuesta === "1"; // true = Verdadero, false = Falso
            if (respBool === esperado) PD++;
          }
        });
      }

      // Calcular T a partir de tabla y PD
      const tabla = item.tScores?.[sexo] || [];
      let T = 50;
      if (tabla.length > 0) {
        // Clampeamos PD al rango disponible
        const idx = Math.min(PD, tabla.length - 1);
        T = tabla[idx] ?? 50;
      }

      // Guardamos resultados en el objeto
      item.PD = PD;
      item.T = T;
    });
  });
}

// ==========================
// Mostrar resultados (tablas y gráfico)
// ==========================
function mostrarResultados() {
  const container = document.getElementById("tablas-graficos");
  if (!container) return;
  container.innerHTML = ""; // limpiar una vez

  // Recolectar todos los datos de todas las escalas y subescalas
  let datosTotales = [];
  escalas.forEach(grupo => {
    (grupo.items || []).forEach(item => {
      datosTotales.push({
        grupo: grupo.title || grupo.name || "Escala",
        escala: item.title || item.name || "",
        nombre: item.name || item.title || "",
        PD: item.PD ?? 0,
        T: item.T ?? 50
      });
    });
  });

  // Cargar todas las subescalas de una vez
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

  const fondoVerde = {
    id: 'fondoVerde',
    beforeDraw(chart) {
      const { ctx, chartArea: { top, bottom, left, right }, scales: { y } } = chart;
      const y65 = y.getPixelForValue(65);
      const y75 = y.getPixelForValue(75);
      ctx.save();
      ctx.fillStyle = "#303aca3d";
      ctx.fillRect(left, y75, right - left, y65 - y75);
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
        borderColor: "#1b247a",
        backgroundColor: "#df19193d",
        fill: false,
        pointBackgroundColor: valores.map(v => v >= 75 ? "#d62828" : "#6eee8aff"),
        pointRadius: 5,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { min: 30, max: 100, ticks: { stepSize: 10 }, title: { display: true, text: "Puntuación T" } }
      },
      plugins: { legend: { display: false } }
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

    // Tabla
    const tablaCont = document.createElement("div");
    tablaCont.className = "tabla-contenedor";
    const tabla = document.createElement("table");
    tabla.innerHTML = `
      <thead><tr><th>${grupo}</th><th>PD</th><th>T</th></tr></thead>
      <tbody>${grupoDatos.map(e => `<tr><td>${e.escala} - ${e.nombre}</td><td>${e.PD}</td><td>${e.T}</td></tr>`).join("")}</tbody>
    `;
    tablaCont.appendChild(tabla);
    fila.appendChild(tablaCont);

    // Gráfico
    const graficoCont = document.createElement("div");
    graficoCont.className = "grafico-contenedor";
    const canvas = document.createElement("canvas");
    const canvasId = `grafico-${containerId}-${grupo}`;
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
function generarInforme() {
  const informeEl = document.getElementById("informe");
  if (!informeEl) return;

  let texto = "<h3>Informe Interpretativo MMPI-2</h3>";

  escalas.forEach(grupo => {
    texto += `<h4>${grupo.title || grupo.name}</h4>`;

    (grupo.items || []).forEach(item => {
      const T = item.T ?? 50;
      texto += `<p><b>${item.title || item.name}</b> (T=${T}): `;

      if (T >= 65) texto += `Elevado — posible presencia de rasgos clínicos relevantes.`;
      else if (T >= 55) texto += `Leve tendencia.`;
      else texto += `Dentro del rango normal.`;

      texto += `</p>`;
    });
  });

  informeEl.innerHTML = texto;
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

