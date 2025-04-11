function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}
//função para a transição suave dos textos de localização
function handleScroll() {
    console.log('Scroll event triggered');
    const pais = document.querySelector('.pais');
    const textos = document.querySelector('.textos');

    if (pais && textos) {
        console.log('Elements found');
        console.log('Image position:', pais.getBoundingClientRect());
        if (isElementInViewport(pais)) {
            console.log('Image is in viewport, adding show class');
            textos.classList.add('show');
        } else {
            console.log('Image is not in viewport, removing show class');
            textos.classList.remove('show');
        }
    } else {
        console.log('Elements not found');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    handleScroll();
});

console.log('Script loaded');

// aqui e para aparecer a mensagem no conteudo das ODS
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.clickable').forEach(image => {
        image.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            document.getElementById('text-box').innerHTML = text;
        });
    });
});

// click no card  para aparecer o hover ??????
// JavaScript para dispositivos móveis
/*document.querySelectorAll('.pagina1, .pagina2, .pagina3, .pagina4').forEach(item => {
    item.addEventListener('click', () => {
        const descricao = item.querySelector('.descricao, .descricao2, .descricao3, .descricao4');
        descricao.classList.toggle('show'); // Alterna a visibilidade
    });
});*/

