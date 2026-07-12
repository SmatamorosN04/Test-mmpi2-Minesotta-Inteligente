import { questions, scales } from "./data/data";
import { initLoginForm, mostrarPanel } from "./components/LoginForm";
import { renderPage, actualizarProgreso } from "./components/QuestionGrid";
import { iniciarCoronometroSiNoExiste, detenerCronometro } from "./components/TImer";

export const CONFIG = {
    PAGE_SIZE: 10,
    SKIP_FIRST: 1,
    totalQuestions: questions.length - 1,
    tiempoTotalInicialMin: 60,
    tiempoExtendidoMin: 90,
    TIMER_KEYS: {
        endAt: 'mmpi_timer_endAt',
        extended: 'mmpi_timer_extended'
    }
};

export let state = {
    escalas: JSON.parse(JSON.stringify(SCALES)),
    respuestasUsuario: {},
    perfil: { nombre: "", edad: null, sexo: "", nacimiento: "", nivel: ""},
    currentPage: 0,
    dataInforme: { resultado: {}}
};

(async function init() {
    restuararEstadoLocal();

    initLoginForm((perfilValido) => {
        state.perfil = perfilValido;
        state.respuestasUsuario = {};
        state.currentPage = 0;

        guardarEstadoLocal();
        mostrarPanel(document.getElementById("pantalla-test"));
        iniciarCoronometroSiNoExiste();
    });

    if (state.perfil && state.perfil.nombre){
        renderPage();
        mostrarPanel(document.getElementById("pantalla-test"));
        iniciarCoronometroSiNoExiste()
    } else {
        mostrarPanel(document.getElementById("formLogin"));
    }
})();

export async function finalizarTest() {
    detenerCronometro();
    guardarEstadoLocal();

    mostrarPanel(document.getElementById("pantalla-resultado"));
    
    try {
        // codigo futuro de los servies
    } catch (error){
        console.alert("Error critico durante el procesamiento de resultado:", error);
        Swal.fire("Hubo un problema al procrsar tu test.")
        
    }
}

function estructurarDataInforme(){
    state.dataInforme = { resultado: {}};
    state.escalas.array.forEach(grupo => {
        (grupo.items || []).forEach(item => {
            const nombre = items.name || item.title || "escala desconoda";
            state.dataInforme.resultado[nombre] = {
                PD: item.PD ?? 0,
                T: item.T ?? 50
            }
        })
    });
}

function guardarEstadoLocal() {
    try{
        localStorage.setItem("mmpi_perfil", JSON.stringifystate(state.perfil));
        localStorage.setItem("mmpi_respuestas", JSON.stringify(state.respuestasUsuario));
    } catch (e){
        console.warn("No se pudo guardar en el localStorage",e);
    }
}

function restuararEstadoLocal(){
    try{
        const p = localStorage.getItem("mmpi_perfil");
        const r = localStorage.getItem("mmpi_respuestas");
        if(p) state.perfil = JSON.parse(p);
        if(r) state.respuestasUsuario = JSON.parse(r);
    } catch (e){
        console.warn("Error restaurando el localStorage", e);
    }
}