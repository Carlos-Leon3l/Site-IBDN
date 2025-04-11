export function loadFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <footer>
        <div class="footer_content">
            <div class="footer_contacts">
                <img src="src/img/LOGO-ESTILIZADO_PNG.png" alt="logo" width="150px" class="footer-logo">
                <p class="footer-text1"> Formas de Contato:</p>
                <div class="footer_social_media">
                    <a href="$" class="footer_links" id="whatsapp">
                        <i class="fa-brands fa-whatsapp" style="color: #ffffff;"></i>
                    </a>
                    <a href="$" class="footer_links" id="telefone">
                        <i class="fa-solid fa-phone" style="color: #000000;"></i>
                    </a>
                    <a href="$" class="footer_links" id="email">
                        <i class="fa-solid fa-envelope" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="google-maps">
                <h1>Encontre a gente aqui</h1>  
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7527432357692!2d-46.54985520000001!3d-23.541393900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e66cbb9f6ab%3A0x95e86e81bd5f10cc!2sAv.%20Conselheiro%20Carr%C3%A3o%2C%20958%20-%20Vila%20Carr%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003402-000!5e0!3m2!1spt-BR!2sbr!4v1729999012873!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>    
               </div>  
            <div class="footer_doacao">
                <div class="logo-doacao" data-id="e3c6b58" data-element_type="widget" data-widget_type="html.default">
                    <!-- INICIO FORMULARIO BOTAO PAGSEGURO -->
                     <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                     <!-- NÃO EDITE OS COMANDOS DAS LINHAS ABAIXO -->
<input type="hidden" name="currency" value="BRL" wfd-id="id15">
<input type="hidden" name="receiverEmail" value="ibdn.principal@gmail.com" wfd-id="id16">
<input type="hidden" name="iot" value="button" wfd-id="id17">
<input type="image" src="https://ibdn.org.br/wp-content/uploads/2021/01/faca-sua-doacao1.png" width="220" height="170" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" wfd-id="id18"></form>
                </div>
            </div>
        </div>
        <div class="finalizacao">
            <p>IBDN – Instituto Brasileiro de Defesa da Natureza – Desde 1991</p>
        </div>
    </footer>
    `;
    
    document.getElementById("footer").appendChild(footer);
}
