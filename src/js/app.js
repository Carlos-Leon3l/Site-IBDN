import { loadHeader } from '../js/componentes/header.js';//Header
import { loadFooter } from '../js/componentes/footer.js';//Footer
import { paginahome } from '../js/paginas/home.js';//Home
import { paginasobre } from '../js/paginas/sobre.js';//Sobre
import { paginaservices } from '../js/paginas/services.js'; //Services
import { Form } from '../js/paginas/form.js';//Form

const rotas = {
    '#inicial': paginahome(),
    '#sobre': paginasobre(),
    '#services': paginaservices(),
    '#form': Form()
    
    }
    loadHeader();
    paginahome();
    loadFooter();
    window.addEventListener('hashchange', ()=>{
        //  #index
        const rota = location.hash
        const paginaatual = rotas[rota]
        navegar(paginaatual)
    })

    function navegar(paginaatual){
        
        const app = document.getElementById('main')
        app.style.minHeight = '400px'
        app.innerHTML = '#inicial'
        app.appendChild(paginaatual)
        if (location.hash === '#sobre') {
            carregarCarrossel();  // Chama a função para configurar o carrossel
        }
        loadHeader()
        initializeSwiper()
        configurarCliques()
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Define a página inicial caso o hash esteja vazio
        if (location.hash === '' || !rotas[location.hash]) {
            location.hash = '#inicial'; // Define o hash inicial
        }
    
        // Navega para a página correspondente ao hash atual
        const paginaatual = rotas[location.hash];
        if (paginaatual) {
            navegar(paginaatual);
        } else {
            location.hash = '#inicial'; 
            navegar(rotas['#inicial']); 
        }
    });

    
        

    // configurações de cliques do texto ODS
    function configurarCliques() {
        document.querySelectorAll('.clickable').forEach(image => {
            image.addEventListener('click', function() {
                const text = this.getAttribute('data-text');
                document.getElementById('text-box').innerHTML = text;
            });
        });
    }

    // aqui eu coloquei o carrossel do matheus 

function carregarCarrossel() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Inicializa o carrossel para a página de serviços
    showSlide(currentIndex); // Exibe a primeira imagem do carrossel

    // Adiciona o evento de clique para as setas
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
}


// carrossel Swiper API
function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        // Paginação
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Setas de navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Barra de rolagem
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
}