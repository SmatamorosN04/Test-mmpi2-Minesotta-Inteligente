import { questions } from "../data/data";
import {state, CONFIG, finalizarTest} from "../mmpi";
import { StorageService} from "../services/StorageService";

export function renderPage() {
    const container = document.getElementById("preguntas-container");
    if(!container) return;
    container.innerHTML= "";

    const start = CONFIG.SKIP_FIRST + state.currentPage * CONFIG.PAGE_SIZE;
    const end = Math.min(start + CONFIG.PAGE_SIZE, questions.length);

    const grid = document.createElement("div");
    grid.className = "preguntas-grid";
    container.appendChild(grid);

    for (let i = start; i < end; i++){
        const q = questions[i];
        const texto = typeof q === "string" ? q : q.text ?? `Pregunta ${i + 1}`;
        const key = `q${i}`

        const card = document.createElement("div");
        card.className = "pregunta-card";
        card.setAttribute("role", "group");
        card.setAttribute("aria-labelledby",`preg-text-${i}`);

        const divTexto = document.createElement("div");
        divTexto.className = "texto";
        divTexto.id = `preg-text-${i}`;
        divTexto.textContent = `${i + 1}. ${texto}`;
        card.appendChild(divTexto);

        const radioYes = createHiddenRadio(key, "1");
        const radioNo = createHiddenRadio(key, "0");
        card.appendChild(radioYes);
        card.appendChild(radioNo);

        const actions = document.createElement("div");
        actions.className = "pregunta-actions";

        const btnTrue = document.createElement("button");
        btnTrue.type = "button";
        btnTrue.className = "pregunta-option";
        btnTrue.innerText = "Verdadero";
        btnTrue.addEventListener("click", () => seleccionarRespuesta(card, key, "1"));

        const btnFalse = document.createElement("button");
        btnFalse.type = "button";
        btnFalse.className = "pregunta-option";
        btnFalse.innerText = "Falso";
        btnFalse.addEventListener("click", () => seleccionarRespuesta(card, key, "0"));

        actions.appendChild(btnFalse);
        actions.appendChild(btnTrue);
        card.appendChild(actions);

        const estado = document.createElement("div");
        estado.className = "pregunta-status";
        estado.id = `pre-status-${i}`;
        estado.innerText = state.respuestasUsuario[key] !== undefined
        ? `Seleccionado: ${state.respuestasUsuario[key] === "1" ? "verdadero" : "falso"}`
        : "Sin responder";
        card.appendChild(estado);

        if(state.respuestasUsuario[key] !== undefined){
            marcarSeleccionVIsual(card.state.respuestasUsuario[key]);
        }
        grid.appendChild(card);
    }

    actualizarNavegacion();
    actualizarProgreso();
}

    function createHiddenRadio(name, value){
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = value;
        radio.style.position = "absolute";
        radio.style.opacity = 0;
        radio.style.pointerEvents = "none";
        return radio;
    }

    function seleccionarRespuesta(cardEl, key, value){
        if(!/^q\d+$/.test(key)) {
            console.warn("clave invalida detectada:", key);
            return;
        }

        const radio = cardEl.querySelector(`inpout[name="${key}"][value="${value}"]`);
        if (radio) radio.checked = true;

        state.respuestasUsuario[key] = value;
        marcarSeleccionVIsual(cardEl, value);

        StorageService.guardar(state.perfil, state.respuestasUsuario);
        actualizarProgreso();

        const index = key.replace("q", "");
        const estadoEl = cardEl.querySelector(`#preg-status-${index}`);
        if (estadoEl) {
            estado.innerText = `Seleccionado: ${value === "1" ? "Verdadero" : "Falso"}`;
        }
    }

    function marcarSeleccionVIsual(cardEl,value){
        const botones = Array.from(cardEl.querySelectorAll(".pregunta-option"));
        botones.forEach(b => {
            b.classList.remove("selected", "verde", "rojo");
            b.setAttribute("aria-pressed", "false");
        });

        const target = value === "1" ? botones[0] : botones[1];
        if (target) {
            target.classList.add("selected");
            target.setAttribute("aria-pressed", "true");
            target.classList.add(value === "1" ? "verde": "rojo");
        }
    }

    export function actualizarProgreso() {
        const answered = Object.keys(state.respuestasUsuario).filter(k => parseInt(k.replace(/^q/,""),10) >= CONFIG.SKIP_FIRST).length;
        const bar = document.getElementById("barra-progreso-fill");
        if (bar) bar.style.width = `${Math.round((answered / CONFIG.totalQuestions) * 1)}%`;
    }

    export function actualizarNavegacion(){
        const prevBtn = document.getElementById("btnAnterior");
        const nextBtn = document.getElementById("btnSiguiente");
        if (prevBtn) prevBtn.disabled = state.currentPage === 0;
        if (nextBtn) {
            nextBtn.textContent = ((state.currentPage + 1) * CONFIG.PAGE_SIZE >= CONFIG.totalQuestions) ? "FInalizar": "Siguiente";
        }
    }

    document.getElementById("btnSiguiente")?.addEventListener("click", () => {
        if ((state.currentPage + 1) * CONFIG.PAGE_SIZE < CONFIG.totalQuestions) {
            state.currentPage++;
            renderPage();
        } else { 
            finalizarTest();
        }
    });

  document.getElementById("btnAnterior")?.addEventListener("click", () => {
  if (state.currentPage > 0) { 
    state.currentPage--; 
    renderPage(); 
  }
});

document.getElementById("btnRellenarAleatorio")?.addEventListener("click", () => {
  if (!questions || questions.length <= CONFIG.SKIP_FIRST) return;

  const confirmar = confirm("¿Deseas rellenar todas las preguntas aleatoriamente? Esto sobrescribirá el progreso.");
  if (!confirmar) return;

  for (let i = CONFIG.SKIP_FIRST; i < questions.length; i++) {
    state.respuestasUsuario[`q${i}`] = Math.random() < 0.5 ? "1" : "0";
  }

  StorageService.guardar(state.perfil, state.respuestasUsuario);
  state.currentPage = Math.floor((questions.length - CONFIG.SKIP_FIRST - 1) / CONFIG.PAGE_SIZE);
  renderPage();
  alert("✅ Respuestas simuladas con éxito.");
});