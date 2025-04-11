export function inputs(){
    return`
    <div class="inputs">
                    <label for="empresa">Empresa</label>
                    <input class="entrada" type="text" name="empresa" required placeholder="Empresa LTDA">

                    <label for="name">Nome</label>
                    <input class="entrada" type="text" name="name" required placeholder="João Maria da Silva">

                    <label for="email">Coloque seu e-mail</label>
                    <input class="entrada" type="text" name="email" required placeholder="joão@email.com">

                    <div class="classificacaoEmpresa">
                        <div class="qtd">
                            <label for="qtd-funcionario">Nº de Funcionários na empresa</label>
                            <input class="entrada" type="number" name="qtd-funcionario" required
                                id="qtd-funcionario" placeholder="Quantidade de Funcionários">
                        </div>
                        <div class="classificacao">
                            <label for="tipoEmpresa">Classifique sua empresa</label>
                            <select class="selecionar" name="tipoEmpresa" id="tipoEmpresa">
                                <option value="--------">-------</option>
                                <option value="Comércio">Comércio</option>
                                <option value="Prestador de Serviço">Prestador de Serviço</option>
                                <option value="Indústria">Indústria</option>
                                <option value="Clínicas/Hospitais">Clínicas/Hospitais</option>
                                <option value="Outras">Outras</option>
                            </select>
                        </div>
                    </div>

                    <div class="contatoEmpresa">
                        <div class="seuSite">
                            <label for="site">Site</label>
                            <input class="entrada" type="text" name="site" required id="site"
                                placeholder="Insira a URL do seu Website">
                        </div>
                        <div class="zapZap">
                            <label for="whats">WhatsApp</label>
                            <input class="entrada" type="text" name="whats" required id="whats"
                                min="11" max="11" placeholder="(XX)1234-5678">
                        </div>
                    </div>

                    <label for="cnpj">CNPJ</label>
                    <input class="entrada" type="text" name="cnpj" required id="cnpj"
                        placeholder="12.345.678/0001-23">

                    <label for="subject">Qual o motivo do seu contato</label>
                    <input class="entrada" type="text" name="subject" required placeholder="Assunto">

                    <label for="phone">Número para contato</label>
                    <input class="entrada" type="text" name="phone" placeholder="(XX)9 1234-5678">

                    <div class="mensagem">
                        <label for="msg">Descreva aqui o motivo do contato com mais detalhes</label>
                        <textarea class="area_mensagem" name="msg" required placeholder="Mensagem"></textarea>
                    </div>

                    <div class="btn-form">
                        <button class="enviar" type="submit">Enviar</button>
                    </div>
                </div>
`
}