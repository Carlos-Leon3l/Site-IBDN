export function Swipercarrossel() {
    return `
         <!--aqui começa  ocarrossel-->
    <section class="background-nossoprojeto">
        <section class="linha-secao">
            <div class="linha-superior"></div>
            <div class="palavra-central">Nossas Certificações</div>
            <div class="linha-inferior"></div>
        </section>
        <div>
            <h3 class="frase-NP"> Descubra as nossas certificações que incentivam práticas de sustentabilidade e reforçam o comprometimento ecológico de empresas e comunidades.</h3>
        </div>
       <!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida.png" alt="image1" width="100%" />
        <div class="slide-content" >
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/selo-epn.png" alt="Icone" class="slide-icon" />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Empresa Parceira da Natureza</h2>
            <p>O Selo Verde EMPRESA PARCEIRA DA NATUREZA é um programa de Educação Ambiental para a Sustentabilidade Empresarial. Tem como objetivo auxiliar as empresas a introduzir ou ampliar Conceitos de Sustentabilidade, buscando reduzir os impactos ambientais</p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida2.png" alt="image1" width="100%" background-size="cover" />
        <div class="slide-content">
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/projetos-neutro-de-carbono.png" alt="Icone" class="slide-icon2"  />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Neutralização de Carbono</h2>
            <p>No Projeto de Neutralização de Carbono, tem como objetivo, colaborar com as empresas interessadas em diminuir sua pegada de carbono no planeta e viabilizar a recuperação de áreas degradadas em parques e reservas de relevante interesse ecológico.</p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida3.png" alt="image1" width="100%" />
        <div class="slide-content">
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/hotel-responsavel.png" alt="Icone" class="slide-icon2"  />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Hotel Ecoresponsável</h2>
            <p>O selo ECORESPONSÁVEL foi criado para o segmento de hortelaria. Buscam redizr impactos ambientais, economizar recursos financeiros e posicionar a marca no mercado como Empresa comprometida com o Meio Ambiente</p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida4.png" alt="image1" width="100%" />
        <div class="slide-content">
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/SELO-DE-ENERGIA-RENOVAVEL-768x953-1.png" alt="Icone" class="slide-icon" height="40rem" />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Energia Renovável</h2>
            <p>O selo de Energia Renovavel visa direcionar empresas através da implementação de sistemas de energia renovavel (Solar ou Eólico), reduzindo impactos no meio ambiente. Além disso oferece à sua marca como Empresa comprometida com as questões Ambientais</p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida5.png" alt="image1" width="100%" height="400px" class="imagens-ecosustentavel" />
        <div class="slide-content">
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/produto-eco-sustentavel-300x254.png" alt="Icone" class="slide-icon2"  />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Produtos Ecosustentável</h2>
            <p>O Selo Produto Eco Sustentável tem como objetivo é identificar o produto que, através da implantação de sistemas sustentáveis em seu processo produtivo, reduziu consideravelmente seus impactos ao meio ambiente.  </p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="src/img/imagens/escurecida0.jpg" alt="image1" width="100%" />
        <div class="slide-content">
          <!-- Imagem à esquerda -->
          <img src="src/img/imagens/selo-bem-estar-animal.png" alt="Icone" class="slide-icon2"  />
          
          <!-- Texto e botão à direita -->
          <div class="text-content">
            <h2>Neutralização de Carbono</h2>
            <p>O Selo de Práticas de Bem Estar Animal, foi criado para instruir empresas preocupadas com os clientes, visando o bem estar animal e o manejo de gado até o seu abate  da forma mais humanizada possivel. </p>
            <a href="link1.html" class="slide-button">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
    </section>
    `
}