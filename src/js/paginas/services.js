import { donation } from '../componentes/doacao.js';
import { container } from '../componentes/protetores.js';
import { slide } from '../componentes/slide.js'
export function paginaservices() {
    const main = document.createElement("main");
    main.innerHTML = `
        <section class="natureza">
            <div class="natureeco">
                <section class="linha-secao">
                    <div class="linha-superior"></div>
                    <div class="palavra-central">PROJETOS QUE INSPIRAM UMA RELAÇÃO COM A NATUREZA</div>
                    <div class="linha-inferior"></div>
                </section>
                <div class="nature">
                    <a href="https://ibdn.org.br/parceiros-da-natureza/">
                        <img src="src/img/imagens/parceiros-da-natureza.png" alt="parceirosnature" >
                    </a>
                    <div class="texto2nature">
                        <h3>O Programa de Educação Ambiental que está mudando a atitude de nossos jovens frente às questões ambientais e que certamente irá ajudar a equilibrar e melhorar a nossa sobrevivência neste planeta!
                        </h3>
                    </div>
                </div>
                ${slide()}
            </div>
        </section>
        <section class="partners-container">
        <div>
                ${container()}
            </div>
        </section>            
        <section>
            <div class="caixa-parceria3">
                ${donation()}
            </div>
        </section>
    </main>
    `;

    return main
}
