// // JavaScript para dispositivos móveis
// document.querySelectorAll('.pagina1, .pagina2, .pagina3, .pagina4').forEach(item => {
//     item.addEventListener('click', () => {
//         const descricao = item.querySelector('.descricao, .descricao2, .descricao3, .descricao4');
//         descricao.classList.toggle('show'); // Alterna a visibilidade
//     });
// });

// Função para verificar se um elemento está visível na tela
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'in-view' quando o elemento entra na tela
function handleScroll() {
    const escolas = document.querySelectorAll('.Escola_1, .Escola_2, .Escola_3');
    escolas.forEach(function (escola, index) {
        if (isInViewport(escola)) {
            // Adiciona um pequeno delay com base no índice da escola (imagem)
            setTimeout(() => {
                escola.classList.add('in-view');
            }, index * 300); // Delay de 300ms entre cada imagem
        }
    });
}

// Adiciona o listener de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função imediatamente para verificar os elementos ao carregar a página
handleScroll();


// Funções JavaScript/actions.js
document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://api.whatsapp.com/send?phone=5511988786922&text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20mais%20informações';
    });
});



