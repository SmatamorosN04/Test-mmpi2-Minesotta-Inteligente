import Swal from "sweetalert2"
import {iniciarCoronometroSiNoExiste} from "./TImer"

/**
 * Inicializa los listeners y validaciones del formulario de acceso.
 * @param {Function} onLoginSuccess - Callback que se ejecuta al pasar todas las validaciones.
 */
export function initLoginForm(onLoginSuccess){
    const form = document.getElementById("formLogin");
    if(!form) return;

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const fd = new FormData(ev.target)
        const nombre = (fd.get("nombre")||"").toString().trim();
        const nacimientoRaw = fd.get("nacimiento");
        const sexo = (fd.get("sexo") || "").toString();
        const nivel = (fd.get("nivel") || "").toString();

        if(!nombre){
            Swal.fire("Por favor ingresa tu nombre");
            document.getElementById("nombre")?.focus();
            return;
        }

        if(!nacimientoRaw){
            Swal.fire("Por favor selecciona tu fecha de nacimiento");
            document.getElementById("nacimiento")?.focus();
        }

        const nacimiento = new Date(nacimientoRaw);
        const hoy = new Date()
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        if (ead < 10 || edad > 90){
            Swal.fire("introdfuce una fecha de nacimiento valida (entre los 10 y los 90)")
            document.getElementById("nacimiento")?.focus();
            return;
        }

        if(!sexo) {
            Swal.fire("selecciona un genero");
            document.getElementById("sexo")?.focus();
            return;
        }

        if (!nivel){
            Swal.fire("Selecciona tu nivel academico.")
            document.getElementById("nivel")?.focus();
            return;
        }

        const perfilValido = { nombre, nacimiento: nacimientoRaw, edad, sexo, nivel};
        
        onLoginSuccess(perfilValido)
    });
}

/**
 * Controla la transición visual de paneles de la aplicación (SPA local)
 * @param {HTMLElement} targetEl - Panel que se desea mostrar.
 */

export function mostrarPanel(targetEl){
    if (!targetEl) return;

    const panels = document.querySelectorAll(".panel");
    const backdrop = document.getElementById('loginBackdrop');

    panels.forEach(p => {
        if (p === targetEl){
            p.classList.add("active");
            try { p.inert = false; } catch(e){}
        }
    });

    if(backdrop){
        if (targetEl.id === 'formLogin'){
            backdrop.classList.remove('hidden');
        }else {
            backdrop.classList.add('hidden');
        }
    }

    const focusable = targetEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]0');
    if(focusable) focusable.focus();
    else {
        targetEl.setAttribute("tabindex","-1");
        targetEl.focus();
    }
}


