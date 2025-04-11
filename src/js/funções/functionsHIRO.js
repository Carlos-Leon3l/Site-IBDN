// aqui esta o carossel 2 do wellington
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const clones = track.innerHTML;
    track.innerHTML += clones; // Duplica o conteúdo para rolagem infinita
  });
  
  document.addEventListener('DOMContentLoaded', () => {
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
  });
  