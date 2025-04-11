export function loadHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="header1">
            <div class="espacamento-de-nav">
                <a href="index.html" class="logo">
                    <img src="src/img/logo-ibdn.png" alt="logo" width="150" height="auto"/>
                </a>
                <nav class="navbar">
                    <ul class="nav-links">
                        <li><a href="#inicial">Home</a></li>
                        <li><a href="#services">Colabore com a IDBN</a></li>
                        <li><a href="#sobre">Educação Ambiental no Brasil</a></li>
                        <li><a href="#form">Contato</a></li>
                    </ul>
                </nav>
                <a href="https://pagseguro.uol.com.br/checkout/v2/donation.html" class="btn-donation">Doação</a>
                <button class="toggle-btn" id="toggle-btn">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </div>
    `;
      
    document.getElementById("header").innerHTML = ""; // Remove qualquer conteúdo anterior
    document.getElementById("header").appendChild(header);

    // Configura o botão hambúrguer
    const toggleBtn = header.querySelector('#toggle-btn');
    const navLinks = header.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
