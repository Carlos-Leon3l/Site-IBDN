import { Projects } from '../componentes/projetos.js';
import { numbers } from '../componentes/numero.js';
import { donation } from '../componentes/doacao.js';
export function paginasobre() {
    const main = document.createElement("main");
    main.innerHTML = `
        <article class="titulo">
            <img src="src/img/imagens/topo-protetores-ibdn.jpg" alt="Protetores IBDN">
                <h2>EDUCAÇÃO AMBIENTAL:
                    A ÚNICA FERRAMENTA QUE PODE MUDAR O MUNDO</h2>
        </article>
        <section class="linha-secao">
            <div class="linha-superior"></div>
            <div class="palavra-central">Nosso Projetos em escolas</div>
            <div class="linha-inferior"></div>
        </section> 
        <article class="Projects">
            ${Projects()}
        </article>
        <section class="Protetores_Titulo">
            <div class="real_titulo">
                <h2>Protetores da Natureza</h2>
            </div>
            <div class="Texto_Protetores">
                <p>
                    A cada dia, o mundo enfrenta novos desafios ambientais que colocam em risco nossa casa comum: o planeta Terra. Desde de 2004, o <strong>Projeto de Educação Ambiental</strong> vem transformando essa realidade, formando jovens agentes de mudança em escolas de ensino fundamental e médio. Ao despertar a consciência ambiental de nossas crianças e adolescentes, estamos plantando as sementes para um futuro mais sustentáveis e responsável.
                    Mas, para que essa transformação continue, precisamos da sua ajuda. Imagine quantas crianças ainda podem ser inspiradas, quantos jovens podem aprender a cuidar do meio ambiente e multiplicar esse conhecimento em suas comunidades. Com uma doação, você se torna um <strong>Protetor da Natureza</strong>,apoinando a produção de materiais didáticos, capacitação de professores e o desenvolvimento de atividades que fazem toda a diferença para as próximas gerações.
                    Junte-se a nós missão de proteger o meio ambiente e garantir um futuro melhor para todos. Com seu apoio, juntos formaremos uma geração de adultos conscientes e comprometidos com a preservação do nosso planeta. <strong>Doe agora</strong> e seja um Protetor da Natureza
                </p>
            </div>
            <div class="Números">
                <article class="numeros-container">
                    ${numbers()}
                </article>                
            <div>
            <section style="width:100%">
                <div class="caixa-parceria3">
                    ${donation()}
                </div>
            </section>
        </section>

    `;

    return main;
}
