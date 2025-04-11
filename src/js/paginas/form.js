import { ttl_form } from "../componentes/form/ttl_form.js";
import { formulario } from "../componentes/formulario.js";
import {img_form} from "../componentes/form/img_form.js"
export function Form() {
    const div = document.createElement('div') 
    div.innerHTML = `
        <section class="form">
            ${ttl_form()}
            <section class="row">
                ${formulario()}
                ${img_form()}
            </section>
         </section>
    `;
    return div
}
