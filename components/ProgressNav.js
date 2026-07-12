import { state, CONFIG} from "../mmpi";

export function actualizarProgresoUI(){
    const bar = document.getElementById("barra-progreso-fill");
    if (!bar) return;

    const respondidas = Object.keys(state.respuestasUsuario).filter(k => {
        const index = parseInt(k.replace(/^q/,""),10);
        return index >= CONFIG.SKIP_FIRST;
    }).length;

    const porcentaje = (respondidas / CONFIG.totalQuestions) * 100;
    bar.style.width = `${Math.round(porcentaje)}%`;
}

export function actualizarContadorPaginasUI(){
    const contador = document.getElementById("contador-paginas");
    if (!contador) return;

    const totalPaginas = Math.ceil(CONFIG.totalQuestions / CONFIG.PAGE_SIZE);

}

export function actualizarContadorPaginasUI() {
    const contador = document.getElementById("contador-paginas");
    if (!contador) return;

    const totalPaginas = Math.ceil(CONFIG.totalQuestions / CONFIG.PAGE_SIZE);
    const paginaActual = state.currentPage + 1;

    contador.textContent = `Pagina ${paginaActual} de ${totalPaginas}`;
}
