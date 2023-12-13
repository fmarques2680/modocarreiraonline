//BOTÃO ENTRAR EM UM UNIVERO
document.addEventListener("DOMContentLoaded", function () {
    // Selecionar o botão
    const botaoEntrarEmUmUniverso = document.getElementById("id-botao-entrar-em-um-unviverso");

    // Adicionar um ouvinte de evento para o clique no botão
    botaoEntrarEmUmUniverso.addEventListener("click", function() {
        var url = "https://modocarreiraonline.github.io/alpha/Clubes/Clubes.html";
        window.location.href = url;
    });
});

//BOTÃO CRIAR UM NOVO UNIVERSO
//document.addEventListener("DOMContentLoaded", function () {
//    const botaoCriarUmNovoUniverso = document.getElementById("id-botao-criar-um-novo-universo");
//
//    botaoCriarUmNovoUniverso.addEventListener("click", function() {
//    window.location.href = "../Criar-um-novo-universo/CriarUmNovoUniverso.html";
//    });
//});

//BOTÃO AJUDA E INFORMAÇÕES
//document.addEventListener("DOMContentLoaded", function () {
//    const botaoAjudaEInformaçoes = document.getElementById("id-botao-ajuda-e-informaçoes");
//
//    botaoAjudaEInformaçoes.addEventListener("click", function() {
//    window.location.href = "../Ajuda-e-informações/AjudaEInformações.html";
//    });
//});