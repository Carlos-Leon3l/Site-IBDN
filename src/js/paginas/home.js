import { apresetacao } from "../componentes/Home/Apresentacao.js";
import { cartoes } from "../componentes/Home/cartoes.js";
import { crslauto } from "../componentes/Home/crslauto.js";
import { gradiente } from "../componentes/Home/Gradiente.js";
import { hovertoolip } from "../componentes/Home/hovertoolip.js";
import { localizacao } from "../componentes/Home/localizacao.js";
import { saibadaods } from "../componentes/Home/saibaods.js";
import { SomosIBDN } from "../componentes/Home/SomosIBDN.js";
import { Swipercarrossel } from "../componentes/Home/Swipercrsl.js";

export function paginahome() {
    const main = document.createElement("main");
    main.innerHTML = `
    <!-- Aqui começa a parte inicial do site-->
    ${apresetacao()}

    <!-- Aqui começa a parte dos cartões com texto que tem um significado diferente -->
    ${cartoes()}
    
    <!-- aqui começa um article com texto-->
        ${gradiente()}  

        <!--aqui termina o article com info-->

        <!-- Aqui começa o primeiro carrossel Nossos Certificações-->
       ${Swipercarrossel()}
       
        <!-- Aqui começa os hover com texto-->
        ${hovertoolip()}

<!-- aqui começa o quem somos nos-->
    ${SomosIBDN()}
<!--aqui termina o quem somos nos-->

<!-- aqui começa onde nos encontrar-->
        ${localizacao()}
<!-- aqui termina onde nos encontrar-->

  <!-- aqui começa uma parte sobre informaçoes do que a gente quer fazer -->
  
  <!-- aqui termina uma parte sobre informaçoes do que a gente quer fazer --> 

  <!-- aqui começa a parte das ODS-->
  ${saibadaods()}
  <!-- aqui termina a parte das ODS-->
   <!--aqui começa o segundo carrossel do Wellington-->
   ${crslauto()}
`;
    
    return main
}
