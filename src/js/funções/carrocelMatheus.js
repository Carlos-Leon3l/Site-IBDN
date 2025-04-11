document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let interval;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index)? 'block' : 'none';
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
    
    // Torne as funções globais
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    function startCarousel() {
        interval = setInterval(nextSlide, 5000); // 5 segundos
    }

    function pauseCarousel() {
        clearInterval(interval);
    }

    document.querySelector('.carousel').addEventListener('mouseover', pauseCarousel);
    document.querySelector('.carousel').addEventListener('mouseout', startCarousel);

    // Associa os botões prev e next
    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-next').addEventListener('click', nextSlide);

    // Inicializa o carrossel
    startCarousel();
    showSlide(currentIndex);
});