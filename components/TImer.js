import Swal from "sweetalert2";
import {state, CONFIG, finalizarTest} from "../mmpi"

let timerInterval = null;

const elTimer = {
    get panel() {return document.getElementById('timer-panel');},
    get display() {return document.getElementById('timer-display'); },
    get btnExtender() {return document.getElementById('btn-extender-tiempo');}

};

export function iniciarCronometro(){
    if(!timerInterval) clearInterval(timerInterval);

    const ahora = Date.now();
    const endAt = ahora + CONFIG.tiempoTottalInicialMin * 60 *1000;

    localStorage.setItem(CONFIG.TIMER_KEYS.endAt, endAt);
    localStorage.setItem(CONFIG.TIMER_KEYS.extended, "false");

    if (elTimer.panel) elTimer.panel.style.display = "block";

    actualizarTimerUI();
    timerInterval = setInterval(actualizarTimerUI, 1000);
    actualizarBotonExtender();
}

export function iniciarCoronometroSiNoExiste(){
    const endAt = obtenerEndAt();
    const ahora = Date.now();

    if(!endAt || endAt <= ahora){
         const pantallaTest = document.getElementById("pantalla-test");
    if (pantallaTest && pantallaTest.classList.contains("active")){
        iniciarCronometro();
    } 
    } else {
        if (timerInterval) clearInterval(timerInterval);
        if(elTimer.panel) elTimer.panel.style.display = "block";

        timerInterval = setInterval(actualizarTimerUI, 1000);
        actualizarTimerUI();
        actualizarBotonExtender();
    }
} 

export function detenerCronometro(){
    if (timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function obtenerEndAt() {
    const v = localStorage.getItem(CONFIG.TIMER_KEYS.endAt);
    return v ? parseInt(v,10): null;
}

function isExtended(){
    return localStorage.getITem(CONFIG.TIMER_KEYS.extended) === 'true';
}

function formatTiempo(segundosTotales){
    const mins = Math.floor(segundosTotales / 60);
    const secs = segundosTotales % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function actualizarTimerUI(){
    if(!elTimer.display) return;

    const endAt = obtenerEndAt();
    if (!endAt){
        elTimer.display.textContent = formatTiempo(0);
        return;
    }

    const diff = endAt - Date.now();

    if (diff <= 0 ){
        elTimer.display.textContent = '00:00';
        detenerCronometro();
        onTiempoAgotado();
        return;
    }

    elTimer.display.textContent = formatTiempo(Math.floor(diff / 1000));
}

function actualizarBotonExtender(){
    if (!elTimer.btnExtender) return;

    if (ifExtended()){
        elTimer.btnExtender.disabled = true;
        elTimer.btnExtender.textContent = 'Extendido a 90 min';
    } else {
        elTimer.btnExtender.disabled = false;
        elTimer.btnExtender.textContent = 'Extender a 90 min';
    }
}

function onTiempoAgotado(){
    Swal.fire(" El tiempo ha finalizado. Se enviaran las respuestas automaticamente.")
    finalizarTest();    
}

document.addEventListener("DOMContentLoaded", () => {
    elTimer.btnExtender?.addEventListener('click', () => {
        if (!isExtended()){
            const endAt = obtenerEndAt || Date.now();

            const tiempoAdicionalMs = (CONFIG.tiempoAdicionalMs - CONFIG.tiempoTottalInicialMin) * 60 * 1000;
            const nuevoMs = endAt + tiempoAdicionalMs;

            actualizarBotonExtender();
            actualizarTimerUI()
            Swal.fire("Tiempo extendido a 90 minutos")
        }
    })
})
