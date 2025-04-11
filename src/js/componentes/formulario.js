import {inputs} from "../componentes/form/inputs.js"
export function formulario(){
    return `
         <form class="formulario" action="https://formsubmit.co/7e9ebe4c2d40d0229058854aac500571" method="POST">
                ${inputs()}
        </form>
    `
}