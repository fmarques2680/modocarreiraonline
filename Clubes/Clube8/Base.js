document.addEventListener("DOMContentLoaded", function () {

    function salvarDados() {
        const objeto = {
            dadosTabela: JSON.parse(localStorage.getItem('dadosTabela')),
            dadosTabela2: JSON.parse(localStorage.getItem('dadosTabela2')),
            dadosTabela3: JSON.parse(localStorage.getItem('dadosTabela3')),
            dadosTabela4: JSON.parse(localStorage.getItem('dadosTabela4')),
            dadosTabela5: JSON.parse(localStorage.getItem('dadosTabela5')),
            dadosTabela6: JSON.parse(localStorage.getItem('dadosTabela6')),
            dadosTabela7: JSON.parse(localStorage.getItem('dadosTabela7')),
            dadosTabela8: JSON.parse(localStorage.getItem('dadosTabela8')),
            dadosTabela9: JSON.parse(localStorage.getItem('dadosTabela9')),
            dadosTabela10: JSON.parse(localStorage.getItem('dadosTabela10')),
            dadosTabela11: JSON.parse(localStorage.getItem('dadosTabela11')),
            anoAtual: JSON.parse(localStorage.getItem('anoAtual')),
            anoAtual2: JSON.parse(localStorage.getItem('anoAtual2')),
            anoAtual3: JSON.parse(localStorage.getItem('anoAtual3')),
            anoAtual4: JSON.parse(localStorage.getItem('anoAtual4')),
            anoAtual5: JSON.parse(localStorage.getItem('anoAtual5')),
            anoAtual6: JSON.parse(localStorage.getItem('anoAtual6')),
            anoAtual7: JSON.parse(localStorage.getItem('anoAtual7')),
            anoAtual8: JSON.parse(localStorage.getItem('anoAtual8')),
            anoAtual9: JSON.parse(localStorage.getItem('anoAtual9')),
            anoAtual10: JSON.parse(localStorage.getItem('anoAtual10')),
            anoAtual11: JSON.parse(localStorage.getItem('anoAtual11')),
            clubeSelecionado1: JSON.parse(localStorage.getItem('clubeSelecionado1')),
            clubeSelecionado2: JSON.parse(localStorage.getItem('clubeSelecionado2')),
            clubeSelecionado3: JSON.parse(localStorage.getItem('clubeSelecionado3')),
            clubeSelecionado4: JSON.parse(localStorage.getItem('clubeSelecionado4')),
            clubeSelecionado5: JSON.parse(localStorage.getItem('clubeSelecionado5')),
            clubeSelecionado6: JSON.parse(localStorage.getItem('clubeSelecionado6')),
            clubeSelecionado7: JSON.parse(localStorage.getItem('clubeSelecionado7')),
            clubeSelecionado8: JSON.parse(localStorage.getItem('clubeSelecionado8')),
            clubeSelecionado9: JSON.parse(localStorage.getItem('clubeSelecionado9')),
            clubeSelecionado10: JSON.parse(localStorage.getItem('clubeSelecionado10')),
            clubeSelecionado11: JSON.parse(localStorage.getItem('clubeSelecionado11'))
        }
        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.4.5'},
            body: JSON.stringify(objeto)
          };
          
          fetch('http://localhost:3000/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function carregarDados () {
        const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.4.5'}};

        fetch('http://localhost:3000/', options)
        .then(response => response.json())
        .then(response => {
            const objeto = response
            localStorage.setItem('dadosTabela', JSON.stringify(objeto.dadosTabela));
            localStorage.setItem('dadosTabela2', JSON.stringify(objeto.dadosTabela2));
            localStorage.setItem('dadosTabela3', JSON.stringify(objeto.dadosTabela3));
            localStorage.setItem('dadosTabela4', JSON.stringify(objeto.dadosTabela4));
            localStorage.setItem('dadosTabela5', JSON.stringify(objeto.dadosTabela5));
            localStorage.setItem('dadosTabela6', JSON.stringify(objeto.dadosTabela6));
            localStorage.setItem('dadosTabela7', JSON.stringify(objeto.dadosTabela7));
            localStorage.setItem('dadosTabela8', JSON.stringify(objeto.dadosTabela8));
            localStorage.setItem('dadosTabela9', JSON.stringify(objeto.dadosTabela9));
            localStorage.setItem('dadosTabela10', JSON.stringify(objeto.dadosTabela10));
            localStorage.setItem('dadosTabela11', JSON.stringify(objeto.dadosTabela11));
            localStorage.setItem('anoAtual', JSON.stringify(objeto.anoAtual));
            localStorage.setItem('anoAtual2', JSON.stringify(objeto.anoAtual2));
            localStorage.setItem('anoAtual3', JSON.stringify(objeto.anoAtual3));
            localStorage.setItem('anoAtual4', JSON.stringify(objeto.anoAtual4));
            localStorage.setItem('anoAtual5', JSON.stringify(objeto.anoAtual5));
            localStorage.setItem('anoAtual6', JSON.stringify(objeto.anoAtual6));
            localStorage.setItem('anoAtual7', JSON.stringify(objeto.anoAtual7));
            localStorage.setItem('anoAtual8', JSON.stringify(objeto.anoAtual8));
            localStorage.setItem('anoAtual9', JSON.stringify(objeto.anoAtual9));
            localStorage.setItem('anoAtual10', JSON.stringify(objeto.anoAtual10));
            localStorage.setItem('anoAtual11', JSON.stringify(objeto.anoAtual11));
            localStorage.setItem('clubeSelecionado1', JSON.stringify(objeto.clubeSelecionado1));
            localStorage.setItem('clubeSelecionado2', JSON.stringify(objeto.clubeSelecionado2));
            localStorage.setItem('clubeSelecionado3', JSON.stringify(objeto.clubeSelecionado3));
            localStorage.setItem('clubeSelecionado4', JSON.stringify(objeto.clubeSelecionado4));
            localStorage.setItem('clubeSelecionado5', JSON.stringify(objeto.clubeSelecionado5));
            localStorage.setItem('clubeSelecionado6', JSON.stringify(objeto.clubeSelecionado6));
            localStorage.setItem('clubeSelecionado7', JSON.stringify(objeto.clubeSelecionado7));
            localStorage.setItem('clubeSelecionado8', JSON.stringify(objeto.clubeSelecionado8));
            localStorage.setItem('clubeSelecionado9', JSON.stringify(objeto.clubeSelecionado9));
            localStorage.setItem('clubeSelecionado10', JSON.stringify(objeto.clubeSelecionado10));
            localStorage.setItem('clubeSelecionado11', JSON.stringify(objeto.clubeSelecionado11));
        })
        .catch(err => console.error(err));
    }

    

    //LINKS PARA PÁGINAS
    //Link para Jogadores do Mundo
    const botaoJogadoresMundo = document.getElementById("id-botaoJogadoresMundo");

    botaoJogadoresMundo.addEventListener("click", function () {
        window.location.href = "../../../Jogadores do Mundo/JogadoresDoMundo.html";
    });

    //Link para Clubes
    const botaoClubes = document.getElementById("id-botaoClubes");

    botaoClubes.addEventListener("click", function () {
        window.location.href = "../../Clubes/Clubes.html";
    });

    //Link para Elenco
    const botaoElenco = document.getElementById("id-botaoElenco");

    botaoElenco.addEventListener("click", function () {
        window.location.href = "Clube1.html";
    });
    
    //NOME DO CLUBE
    // window.addEventListener("load", function () {
        
    //     if (clubeSelecionado8 !== null) {
    //         var divclubeSelecionado8 = document.getElementById("clubeInfo");

    //         divclubeSelecionado8.innerText = clubeSelecionado8;
    //     }
    // });

    const clubeInfo = document.getElementById("clubeInfo");

    const clubeInfoTexto = clubeInfo.textContent;

    var clubeSelecionado8 = localStorage.getItem('clubeSelecionado8');









    const promoverJogador = document.getElementById("id-botaoPromoverJogador");
    const modalPromoçaoJogador = document.getElementById("id-modalPromoçaoJogador");

    promoverJogador.addEventListener("click", function() {
        modalPromoçaoJogador.classList.add("visible");
    });


    const fecharTudo = document.getElementById("id-botaoFecharTudo");

    fecharTudo.addEventListener("click", function() {
        modalConfirmaçaoJogador.style.display = 'none';
    });



//FINALIZAR CLICANDO NO BOTÃO "OK"

    const finalizarTudo = document.getElementById("id-botaoFecharTudo");

    finalizarTudo.addEventListener("click", function() {
        // Função para extrair apenas dígitos de uma string
        function extrairNumeros(str) {
            return str.match(/\d+/g).map(Number);
        }

        // Criar um array com o conteúdo
        var novoItem = [
            divInfoPosicao.textContent,
            divInfoOVRF.textContent,
            divInfoNomeConhecidoF.textContent,
            divInfoNacionalidadeF.textContent,
            extrairNumeros(divInfoIdadeF.textContent),
            divInfoAlturaF.textContent,
            divInfoPesoF.textContent,
            divInfoInvestimentoF.textContent,
            divInfoPaceF.textContent,
            clubeInfo.textContent
        ];

        // Obter dados existentes do localStorage
        var dadosTabela8 = JSON.parse(localStorage.getItem('dadosTabela8')) || [];

        // Adicionar o novo item ao array
        dadosTabela8.push(novoItem);

        // Armazenar de volta no localStorage
        localStorage.setItem('dadosTabela8', JSON.stringify(dadosTabela8));
    });




//CONTEÚDO DO MODAL DA BASE

    //ESCOLHA IDADE
    // Obtém o elemento select, o botão e a div de informação
    const selectIdade = document.getElementById("id-selectIdade");
    const divInfoIdade = document.getElementById("div-infoIdade");
    const btnCBIdade = document.getElementById("CBIdade");

    // Adiciona um ouvinte de evento de clique ao botão
    btnCBIdade.addEventListener("click", function () {
        // Atualiza o conteúdo da div de informação com o valor selecionado no select
        divInfoIdade.textContent = selectIdade.value + " anos";
    });



    //ESCOLHA INVESTIMENTO
    const selectInv = document.getElementById("selectInvestimento");
    const divInfoInv = document.getElementById("div-infoInvestimento");
    const btnCBInv = document.getElementById("CBInvestimento");
    
    // Adiciona um ouvinte de evento de clique ao botão
    btnCBInv.addEventListener("click", function () {
        // Obtenha o valor selecionado no select
        const selectedValue = selectInv.value;

        // Obtenha o conteúdo textual da div-infoIdade
        const idadeContent = divInfoIdade.textContent.trim();

        // Certifique-se de que o valor não está vazio ou indefinido
        if (selectedValue) {
            // Converte o valor para um número de ponto flutuante
            const numericValue = parseFloat(selectedValue);

            // Arredondamento com base na idade
            let roundedValue;

            if (idadeContent === "16 anos") {
                roundedValue = Math.round(numericValue / 2000000) * 2000000;
            } else if (idadeContent === "17 anos") {
                roundedValue = Math.round(numericValue / 1700000) * 1700000;
            } else if (idadeContent === "18 anos") {
                roundedValue = Math.round(numericValue / 1400000) * 1400000;
            } else if (idadeContent === "19 anos") {
                roundedValue = Math.round(numericValue / 1100000) * 1100000;
            } else if (idadeContent === "20 anos") {
                roundedValue = Math.round(numericValue / 800000) * 800000;
            } else if (idadeContent === "21 anos") {
                roundedValue = Math.round(numericValue / 550000) * 550000;
            } else if (idadeContent === "22 anos") {
                roundedValue = Math.round(numericValue / 350000) * 350000;
            } else if (idadeContent === "23 anos") {
                roundedValue = Math.round(numericValue / 200000) * 200000;
            }else {
                // Caso a idade não seja "16 anos" ou "17 anos", você pode tratar isso de acordo com sua lógica
                console.error("Idade não suportada para arredondamento");
                return;
            }

            // Atualiza o conteúdo da div de informação com o valor formatado
            divInfoInv.textContent = new Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR'
            }).format(roundedValue);
        } else {
            // Se o valor selecionado for vazio ou indefinido, você pode tratar isso de acordo com sua lógica
            console.error("Valor selecionado inválido");
        }
    });



    //ESCOLHA POSIÇÃO
    // Obtém o elemento select, o botão e a div de informação
    const selectPosicao = document.getElementById("id-selectPosiçao");
    const divInfoPosicao = document.getElementById("div-infoPosiçao");
    const btnCBPosicao = document.getElementById("CBPosiçao");

    // Adiciona um ouvinte de evento de clique ao botão
    btnCBPosicao.addEventListener("click", function () {
        // Atualiza o conteúdo da div de informação com o valor selecionado no select
        divInfoPosicao.textContent = selectPosicao.value;
    });



    //ESCOLHA NOME COMPLETO
    // Obtenha referência ao botão CBNome e ao input inputNome
    const btnCBNome = document.getElementById("CBNome");
    const inputNome = document.getElementById("inputNome");
    const divInfoNome = document.getElementById("div-infoNome");

    // Adicione um ouvinte de evento de clique ao botão CBNome
    btnCBNome.addEventListener("click", function () {
        // Obtenha o valor digitado no inputNome
        const nomeValue = inputNome.value.trim();

        // Verifique se o valor não está vazio
        if (nomeValue) {
            // Atualize o conteúdo da div-infoNome com o valor do input
            divInfoNome.textContent = nomeValue;
        } else {
            // Caso o valor seja vazio, você pode tratar isso de acordo com sua lógica
            console.error("Nome inválido");
        }
    });



    //ESCOLHA NOME CONHECIDO
    // Obtenha referência ao botão CBNome e ao input inputNome
    const btnCBNomeConhecido = document.getElementById("CBNomeConhecido");
    const inputNomeConhecido = document.getElementById("inputNomeConhecido");
    const divInfoNomeConhecido = document.getElementById("div-infoNomeConhecido");

    // Adicione um ouvinte de evento de clique ao botão CBNome
    btnCBNomeConhecido.addEventListener("click", function () {
        // Obtenha o valor digitado no inputNome
        const nomeValue = inputNomeConhecido.value.trim();

        // Verifique se o valor não está vazio
        if (nomeValue) {
            // Atualize o conteúdo da div-infoNome com o valor do input
            divInfoNomeConhecido.textContent = nomeValue;
        } else {
            // Caso o valor seja vazio, você pode tratar isso de acordo com sua lógica
            console.error("Nome inválido");
        }
    });



    //ESCOLHA NACIONALIDADE
    function showNationalitySuggestions() {
        const inputNacionalidade = document.getElementById("inputNacionalidade");
        const suggestionsDiv = document.getElementById("suggestions");
    
        const nacionalidadeValue = inputNacionalidade.value.trim();
    
        if (nacionalidadeValue.length < 3) {
            suggestionsDiv.style.display = "none";
            suggestionsDiv.innerHTML = "";
            return;
        }
    
        fetch('../../../JogadoresEAFC.csv')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                const playersData = lines.slice(1).map(line => line.split(','));
                const nationalities = playersData.map(player => player[7]).filter(Boolean);
                
                const uniqueNationalities = Array.from(new Set(nationalities));
    
                if (nacionalidadeValue === "") {
                    suggestionsDiv.style.display = "none";
                    suggestionsDiv.innerHTML = "";
                } else {
                    suggestionsDiv.style.display = "block";
                    suggestionsDiv.innerHTML = "";
    
                    uniqueNationalities.forEach(nationality => {
                        if (nationality.toLowerCase().includes(nacionalidadeValue.toLowerCase())) {
                            const suggestion = document.createElement('p');
                            suggestion.textContent = nationality;
                            suggestion.addEventListener('click', () => {
                                inputNacionalidade.value = nationality;
                                suggestionsDiv.style.display = "none";
                            });
                            suggestionsDiv.appendChild(suggestion);
                        }
                    });
                }
            })
            .catch(error => {
                console.error("Erro ao buscar sugestões de nacionalidade:", error);
            });
    }
    
    // Adicione um ouvinte de evento de entrada (input) ao inputNacionalidade
    inputNacionalidade.addEventListener("input", showNationalitySuggestions);


    // Obtenha referência ao botão CBNome e ao input inputNome
    const btnCBNacionalidade = document.getElementById("CBNacionalidade");
    const divInfoNacionalidade = document.getElementById("div-infoNacionalide");

    // Adicione um ouvinte de evento de clique ao botão CBNome
    btnCBNacionalidade.addEventListener("click", function () {
        // Obtenha o valor digitado no inputNome
        const nomeValue = inputNacionalidade.value.trim();

        // Verifique se o valor não está vazio
        if (nomeValue) {
            // Atualize o conteúdo da div-infoNome com o valor do input
            divInfoNacionalidade.textContent = nomeValue;
        } else {
            // Caso o valor seja vazio, você pode tratar isso de acordo com sua lógica
            console.error("Nome inválido");
        }
    });



    //ESCOLHA ALTURA
    // Obtenha referência ao botão CBNome e ao input inputNome
    const btnCBAltura = document.getElementById("CBAltura");
    const inputAltura = document.getElementById("inputAltura");
    const divInfoAltura = document.getElementById("div-infoAltura");

    // Adicione um ouvinte de evento de clique ao botão CBNome
    btnCBAltura.addEventListener("click", function () {
        // Obtenha o valor digitado no inputNome
        const nomeValue = inputAltura.value.trim();

        // Verifique se o valor não está vazio
        if (nomeValue) {
            // Atualize o conteúdo da div-infoNome com o valor do input
            divInfoAltura.textContent = nomeValue + " cm";
        } else {
            // Caso o valor seja vazio, você pode tratar isso de acordo com sua lógica
            console.error("Nome inválido");
        }
    });



    //ESCOLHA PESO
    // Obtenha referência ao botão CBNome e ao input inputNome
    const btnCBPeso = document.getElementById("CBPeso");
    const inputPeso = document.getElementById("inputPeso");
    const divInfoPeso = document.getElementById("div-infoPeso");

    // Adicione um ouvinte de evento de clique ao botão CBNome
    btnCBPeso.addEventListener("click", function () {
        // Obtenha o valor digitado no inputNome
        const nomeValue = inputPeso.value.trim();

        // Verifique se o valor não está vazio
        if (nomeValue) {
            // Atualize o conteúdo da div-infoNome com o valor do input
            divInfoPeso.textContent = nomeValue + " kg";
        } else {
            // Caso o valor seja vazio, você pode tratar isso de acordo com sua lógica
            console.error("Nome inválido");
        }
    });
    


    //ESCOLHA CARACTERÍSTICA PRINCIPAL
    // Obtém o elemento select, o botão e a div de informação
    const selectCP = document.getElementById("id-selectCP");
    const divInfoCP = document.getElementById("div-infoCaracteristicaPrincipal");
    const btnCBCP = document.getElementById("CBCP");

    // Adiciona um ouvinte de evento de clique ao botão
    btnCBCP.addEventListener("click", function () {
        // Obtém o valor selecionado no select
        const selectedValue = selectCP.value;

        // Verifica se o valor já existe na div da outra função
        if (divInfoCS.textContent !== selectedValue) {
            // Atualiza o conteúdo da div de informação
            divInfoCP.textContent = selectedValue;
        }
    });



    //ESCOLHA CARACTERÍSTICA SECUNDÁRIA
    // Obtém o elemento select, o botão e a div de informação
    const selectCS = document.getElementById("id-selectCS");
    const divInfoCS = document.getElementById("div-infoCaracteristicaSecundaria");
    const btnCBCS = document.getElementById("CBCS");

    // Adiciona um ouvinte de evento de clique ao botão
    btnCBCS.addEventListener("click", function () {
        // Verifica se a posição é "GK" e torna o botão inacessível
        if (divInfoPosicao.textContent.trim() === "GK") {
            btnCBCS.disabled = true;
            return; // Sai da função se a posição for "GK"
        }

        // Obtém o valor selecionado no select
        const selectedValue = selectCS.value;

        // Verifica se o valor já existe na div da outra função
        if (divInfoCP.textContent !== selectedValue) {
            // Atualiza o conteúdo da div de informação
            divInfoCS.textContent = selectedValue;
        }
    });

    // Adiciona um ouvinte de evento de mudança ao select
    selectCS.addEventListener("change", function () {
        // Habilita o botão quando o valor do select é alterado
        btnCBCS.disabled = false;
    });





//CONTEÚDO DO MODAL DE CONFIRMAÇÃO DA BASE

    // OVR
    // Obtém os elementos necessários
    const divInfoInvestimento = document.getElementById("div-infoInvestimento");
    const divInfoOVRF = document.getElementById("div-infoOVRF");
    const botaoConfirmarModal = document.getElementById("botaoConfirmarModal");



    const modalConfirmaçaoJogador = document.getElementById("modalBase2");

    botaoConfirmarModal.addEventListener("click", function () {
        modalPromoçaoJogador.style.display = 'none';
        modalConfirmaçaoJogador.style.display = 'block';
    })



    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        if (divInfoIdade.textContent.trim() === "16 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 2000000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 18:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "17 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 1400000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 18:
                case 17:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "18 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 1400000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 18:
                case 17:
                case 16:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "19 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 1100000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                case 18:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 17:
                case 16:
                case 15:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "20 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 800000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                case 18:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 17:
                case 16:
                case 15:
                case 14:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "21 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 550000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 19:
                case 18:
                case 17:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 16:
                case 15:
                case 14:
                case 13:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "22 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 350000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                case 19:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 18:
                case 17:
                case 16:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 15:
                case 14:
                case 13:
                case 12:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } else if (divInfoIdade.textContent.trim() === "23 anos") {
            const investimentoTexto = divInfoInvestimento.textContent.replace(/\s/g, '').replace(',', '.');
            const investimentoValue = parseFloat(investimentoTexto);
            const numSorteios = Math.floor(investimentoValue / 200000);

            if (investimentoValue <= 0) {
                return;
            }

            let maiorNumero = 0;
            for (let i = 0; i < numSorteios; i++) {
                const sorteio = Math.floor(Math.random() * 20) + 1;
                if (sorteio > maiorNumero) {
                    maiorNumero = sorteio;
                }
            }

            let resultadoFinal;

            switch (maiorNumero) {
                case 20:
                case 19:
                case 18:
                    resultadoFinal = Math.floor(Math.random() * (75 - 68 + 1)) + 68;
                    break;
                case 17:
                case 16:
                case 15:
                    resultadoFinal = Math.floor(Math.random() * (67 - 60 + 1)) + 60;
                    break;
                case 14:
                case 13:
                case 12:
                case 11:
                case 10:
                    resultadoFinal = Math.floor(Math.random() * (59 - 52 + 1)) + 52;
                    break;
                default:
                    resultadoFinal = Math.floor(Math.random() * (51 - 44 + 1)) + 44;
                    break;
            }

            divInfoOVRF.textContent = resultadoFinal;
        } 
    });



    //NOME CONHECIDO
    // Obtém os elementos necessários
    const divInfoInvestimentoF = document.getElementById("div-infoInvestimentoF");

    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        // Copia o conteúdo da div-infoNome para div-infoNomeF
        divInfoInvestimentoF.textContent = divInfoInv.textContent;
        divInfoNomeF.textContent = divInfoNome.textContent;
        divInfoNomeConhecidoF.textContent = divInfoNomeConhecido.textContent;
        divInfoIdadeF.textContent = divInfoIdade.textContent;
        divInfoNacionalidadeF.textContent = divInfoNacionalidade.textContent;
        divInfoAlturaF.textContent = divInfoAltura.textContent;
        divInfoPesoF.textContent = divInfoPeso.textContent;
        divInfoPesoF.textContent = divInfoPeso.textContent;
        divInfoPosicaoF.textContent = divInfoPosicao.textContent;

    });


    //NOME COMPLETO
    // Obtém os elementos necessários
    const divInfoNomeF = document.getElementById("div-infoNomeF");

    //NOME CONHECIDO
    // Obtém os elementos necessários
    const divInfoNomeConhecidoF = document.getElementById("div-infoNomeConhecidoF");

    //IDADE
    // Obtém os elementos necessários
    const divInfoIdadeF = document.getElementById("div-infoIdadeF");

    //NACIONALIDADE
    // Obtém os elementos necessários
    const divInfoNacionalidadeF = document.getElementById("div-infoNacionalidadeF");

    //ALTURA
    // Obtém os elementos necessários
    const divInfoAlturaF = document.getElementById("div-infoAlturaF");

    //PESO
    // Obtém os elementos necessários
    const divInfoPesoF = document.getElementById("div-infoPesoF");

    //POSIÇÃO
    // Obtém os elementos necessários
    const divInfoPosicaoF = document.getElementById("div-infoPosiçaoF");


    
    //PERNA RUIM
    // Obtém os elementos necessários
    const divInfoPernaRuimF = document.getElementById("div-infoPernaRuimF");
    const divInfoCaracteristicaPrincipal = document.getElementById("div-infoCaracteristicaPrincipal");
    const divInfoCaracteristicaSecundaria = document.getElementById("div-infoCaracteristicaSecundaria");

    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        // Verifica se o conteúdo textual presente na div-infoCaracteristicaPrincipal é "Perna Ruim"
        if (divInfoCaracteristicaPrincipal.textContent.trim() === "Perna Ruim") {
            // Gera um número aleatório entre 0 e 1
            const randomNumber = Math.random();

            // Determina o valor com base nas novas porcentagens
            let result;
            if (randomNumber < 0.1) {
                result = 3;
            } else if (randomNumber < 0.65) {
                result = 4;
            } else {
                result = 5;
            }

            // Exibe o resultado na div-infoPernaRuimF
            divInfoPernaRuimF.textContent = "até " + result + " estrelas";
        }
        // Verifica se o conteúdo textual presente na div-infoCaracteristicaSecundaria é "Perna Ruim"
        else if (divInfoCaracteristicaSecundaria.textContent.trim() === "Perna Ruim") {
            // Gera um número aleatório entre 0 e 1
            const randomNumber = Math.random();

            // Determina o valor com base nas novas porcentagens
            let result;
            if (randomNumber < 0.4) {
                result = 3;
            } else if (randomNumber < 0.8) {
                result = 4;
            } else {
                result = 5;
            }

            // Exibe o resultado na div-infoPernaRuimF
            divInfoPernaRuimF.textContent = "até " + result + " estrelas";
        } else {
            // Caso contrário, verifica se a posição é "GK"
            if (divInfoPosicao.textContent.trim() === "GK") {
                // Gera um número aleatório entre 0 e 1
                const randomNumber = Math.random();
    
                // Determina o valor com base nas novas porcentagens
                let result;
                if (randomNumber < 0.4) {
                    result = 1;
                } else if (randomNumber < 0.8) {
                    result = 2;
                } else {
                    result = 3;
                }
    
                // Exibe o resultado na div-infoPernaRuimF
                divInfoPernaRuimF.textContent = "até " + result + " estrelas";
            } else {
                // Caso contrário, aplica as porcentagens padrão
                const randomNumber = Math.random();
                let result;
                if (randomNumber < 0.3) {
                    result = 2;
                } else if (randomNumber < 0.85) {
                    result = 3;
                } else {
                    result = 4;
                }
                divInfoPernaRuimF.textContent = "até " + result + " estrelas";
            }
        }
    });



    //PACE
    const divInfoPaceF = document.getElementById("div-infoPaceF");

    botaoConfirmarModal.addEventListener("click", function () {
        // Obtém o valor da div-infoOVRF e converte para ponto flutuante
        const ovrfTexto = divInfoOVRF.textContent.replace(/\s/g, '').replace(',', '.');
        const ovrfValue = parseFloat(ovrfTexto);
    
        // Verifica se o ovrfValue é um número válido antes de continuar
        if (isNaN(ovrfValue)) {
            console.log("O valor na div-infoOVRF não é um número válido. A função não será executada.");
            return; // Sai da função se o valor não for válido
        }

        let resultadoPaceF;


        //PACE (CP) - GOLEIROS
        if (divInfoCP.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "GK") {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 1) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 5) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 25) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 65) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 85) {
                categoriaSorteioA = "Categoria5";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria6";
            } else {
                categoriaSorteioA = "Categoria7";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 40; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 45; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 50; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 55; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 5) + 60; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = Math.floor(Math.random() * 5) + 65;
                    break;
                case "Categoria7":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // 70% de chance para 96, 30% para 97
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - ZAGUEIROS - OVR 44-59 - ALTURA ACIMA DE 186 CM
        if (divInfoCP.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 44 && ovrfValue <= 59 && parseInt(divInfoAltura.textContent) >= 187) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 35) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 70) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 85) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 60; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 65; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 80 : Math.random() < 0.6 ? 81 : Math.random() < 0.75 ? 82 : Math.random() < 0.85 ? 83 : Math.random() < 0.95 ? 84 : 85;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - ZAGUEIROS - OVR 60-75 - MAIS DE 186CM
        if (divInfoCP.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 60 && ovrfValue <= 75 && parseInt(divInfoAltura.textContent) >= 187) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 20) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 60) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 80) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 92) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 60; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 65; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 80 : Math.random() < 0.6 ? 81 : Math.random() < 0.75 ? 82 : Math.random() < 0.85 ? 83 : Math.random() < 0.95 ? 84 : 85;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - ZAGUEIROS - OVR 44-59
        if (divInfoCP.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 44 && ovrfValue <= 59  && parseInt(divInfoAltura.textContent) <= 186) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 28) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 70) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 92) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 90 : Math.random() < 0.7 ? 91 : Math.random() < 0.8 ? 92 : Math.random() < 0.85 ? 93 : Math.random() < 0.9 ? 94 : Math.random() < 0.94 ? 95 : Math.random() < 0.97 ? 96 : 97;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - ZAGUEIROS - OVR 60-75
        if (divInfoCP.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 60 && ovrfValue <= 75 && parseInt(divInfoAltura.textContent) <= 186) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 19) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 59) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 89) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 90 : Math.random() < 0.7 ? 91 : Math.random() < 0.8 ? 92 : Math.random() < 0.85 ? 93 : Math.random() < 0.9 ? 94 : Math.random() < 0.94 ? 95 : Math.random() < 0.97 ? 96 : 97;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CS) - ZAGUEIROS - OVR 44-59
        if (divInfoCS.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 44 && ovrfValue <= 59) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 35) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 70) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 85) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 60; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 65; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 80 : Math.random() < 0.6 ? 81 : Math.random() < 0.75 ? 82 : Math.random() < 0.85 ? 83 : Math.random() < 0.95 ? 84 : 85;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CS) - ZAGUEIROS - OVR 60-75
        if (divInfoCS.textContent.trim() === "Pace" && divInfoPosicao.textContent.trim() === "CB" && ovrfValue >= 60 && ovrfValue <= 75) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 20) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 60) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 80) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 92) {
                categoriaSorteioA = "Categoria4";
            } else {
                categoriaSorteioA = "Categoria5";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 60; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 65; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 70; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.random() < 0.4 ? 80 : Math.random() < 0.6 ? 81 : Math.random() < 0.75 ? 82 : Math.random() < 0.85 ? 83 : Math.random() < 0.95 ? 84 : 85;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }



        //PACE (CP) - JOGADORES DE LINHA - OVR 44-59 - MAIS DE 186CM
        if (divInfoCP.textContent.trim() === "Pace" && ovrfValue >= 44 && ovrfValue <= 59 && parseInt(divInfoAltura.textContent) >= 187) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 50) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 80) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 98) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria5";
            } else {
                categoriaSorteioA = "Categoria6";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - JOGADORES DE LINHA - OVR 60-75 - MAIS DE 186CM
        if (divInfoCP.textContent.trim() === "Pace" && ovrfValue >= 60 && ovrfValue <= 75 && parseInt(divInfoAltura.textContent) >= 187) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 25) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 70) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 90) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 97) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria5";
            } else {
                categoriaSorteioA = "Categoria6";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }



        //PACE (CP) - JOGADORES DE LINHA - OVR 44-59
        if (divInfoCP.textContent.trim() === "Pace" && ovrfValue >= 44 && ovrfValue <= 59) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 30) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 65) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 85) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 98) {
                categoriaSorteioA = "Categoria5";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria6";
            } else {
                categoriaSorteioA = "Categoria7";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
                case "Categoria7":
                    sorteioB = Math.random() < 0.7 ? 96 : 97; // 70% de chance para 96, 30% para 97
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CP) - JOGADORES DE LINHA - OVR 60-75
        if (divInfoCP.textContent.trim() === "Pace" && ovrfValue >= 60 && ovrfValue <= 75) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 15) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 45) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 85) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 98) {
                categoriaSorteioA = "Categoria5";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria6";
            } else {
                categoriaSorteioA = "Categoria7";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
                case "Categoria7":
                    sorteioB = Math.random() < 0.7 ? 96 : 97; // 70% de chance para 96, 30% para 97
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CS) - JOGADORES DE LINHA - OVR 44-59
        if (divInfoCS.textContent.trim() === "Pace" && ovrfValue >= 44 && ovrfValue <= 59) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 50) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 80) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 95) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 98) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria5";
            } else {
                categoriaSorteioA = "Categoria6";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }


        //PACE (CS) - JOGADORES DE LINHA - OVR 60-75
        if (divInfoCS.textContent.trim() === "Pace" && ovrfValue >= 60 && ovrfValue <= 75) {
            // SorteioA
            let sorteioA = Math.random() * 100; // Gera um número aleatório de 0 a 100
            let categoriaSorteioA;
            
            if (sorteioA < 25) {
                categoriaSorteioA = "Categoria1";
            } else if (sorteioA < 70) {
                categoriaSorteioA = "Categoria2";
            } else if (sorteioA < 90) {
                categoriaSorteioA = "Categoria3";
            } else if (sorteioA < 97) {
                categoriaSorteioA = "Categoria4";
            } else if (sorteioA < 99) {
                categoriaSorteioA = "Categoria5";
            } else {
                categoriaSorteioA = "Categoria6";
            }
        
            // SorteioB
            let sorteioB;
            switch (categoriaSorteioA) {
                case "Categoria1":
                    sorteioB = Math.floor(Math.random() * 5) + 75; // Sorteia entre 75 e 79
                    break;
                case "Categoria2":
                    sorteioB = Math.floor(Math.random() * 5) + 80; // Sorteia entre 80 e 84
                    break;
                case "Categoria3":
                    sorteioB = Math.floor(Math.random() * 5) + 85; // Sorteia entre 85 e 89
                    break;
                case "Categoria4":
                    sorteioB = Math.floor(Math.random() * 3) + 90; // Sorteia entre 90 e 92
                    break;
                case "Categoria5":
                    sorteioB = Math.floor(Math.random() * 2) + 93; // 70% de chance para 93, 30% para 94
                    break;
                case "Categoria6":
                    sorteioB = 95;
                    break;
            }
        
            // Valor final
            resultadoPaceF = sorteioB;
            divInfoPaceF.textContent = resultadoPaceF;
            return;
        }



        if (divInfoPosicao.textContent.trim() === "GK") {
            resultadoPaceF = 40;
        } else {
            // Calcula o valor a ser exibido na div-infoPaceF (valor da div-infoOVRF + 5)
            resultadoPaceF = ovrfValue + 5;
    
            // Garante que o resultadoPaceF seja no mínimo 60
            resultadoPaceF = Math.max(resultadoPaceF, 60);
        }
    
        // Define o conteúdo da div-infoPaceF com o resultadoPaceF
        divInfoPaceF.textContent = resultadoPaceF;
    });



    //DEMAIS ATRIBUTOS
    // Obtém os elementos necessários
    const divDemaisC = document.getElementById("div-demaisC");
    const divDemaisC2 = document.getElementById("div-demaisC2");
    const divDemaisC3 = document.getElementById("div-demaisC3");
    const divDemaisC4 = document.getElementById("div-demaisC4");
    const divDemaisC5 = document.getElementById("div-demaisC5");
    const divDemaisC6 = document.getElementById("div-demaisC6");
    const divDemaisC7 = document.getElementById("div-demaisC7");

    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        const posicaoTexto = divInfoPosicao.textContent.trim();
        let resultadoDemaisC;

        if (posicaoTexto === "CB" || posicaoTexto === "RB" || posicaoTexto === "LB" || posicaoTexto === "CDM") {
            // Se a posição for "CB", "RB", "LB" ou "CDM", ajusta o cálculo
            resultadoDemaisC = parseFloat(divInfoOVRF.textContent) + 10;
        } else if (posicaoTexto === "GK") {
            // Se a posição for "GK", ajusta o conteúdo conforme a especificação
            resultadoDemaisC = parseFloat(divInfoOVRF.textContent) + 7;
            divDemaisC.textContent = "Atributos de goleiro - até " + resultadoDemaisC;
            divDemaisC2.textContent = "Força - até " + resultadoDemaisC;
            divDemaisC3.textContent = "Força do chute - até " + resultadoDemaisC;
            divDemaisC4.textContent = "Impulsão - até " + resultadoDemaisC;
            divDemaisC5.textContent = "Reação - até " + resultadoDemaisC;
            divDemaisC6.textContent = "Visão - até " + resultadoDemaisC;
            divDemaisC7.textContent = "Demais atributos - até 35";
            return; // Sai da função, pois não há mais verificações necessárias
        } else {
            // Caso contrário, calcula o valor padrão (div-infoOVRF + 7)
            resultadoDemaisC = parseFloat(divInfoOVRF.textContent) + 7;
        }
    
        // Define o conteúdo da div-demaisC com o resultadoDemaisC
        divDemaisC.textContent = "até " + resultadoDemaisC;
    });



    //CARACTERÍSTICA PRINCIPAL
    const divCPF = document.getElementById("div-CPF");

    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        // Obtém o valor numérico da div-infoOVRF
        const valorOVRF = parseFloat(divInfoOVRF.textContent);        
        
        // Adiciona a condição para verificar o conteúdo da div-infoCaracteristicaPrincipal
        if (divInfoCP.textContent.trim() === "Perna Ruim") {
            divCPF.textContent = "Perna Ruim - " + divInfoPernaRuimF.textContent; // Substitui o conteúdo com base em div-infoPaceF
            return;
        }        
        
        // Adiciona a condição para verificar o conteúdo da div-infoCaracteristicaPrincipal
        if (divInfoCP.textContent.trim() === "Pace") {
            divCPF.textContent = "Pace - " + divInfoPaceF.textContent; // Substitui o conteúdo com base em div-infoPaceF
            return;
        }

        // Verifica se a posição é "GK"
        if (divInfoPosicao.textContent.trim() === "GK") {
            // Verifica o intervalo do valorOVRF e define o conteúdo da div-CPF para "GK"
            if (valorOVRF >= 44 && valorOVRF <= 59) {
                divCPF.textContent = divInfoCP.textContent + " - " + "até 67";
            } else if (valorOVRF >= 60 && valorOVRF <= 75) {
                divCPF.textContent = divInfoCP.textContent + " - " + "até 83";
            } else {
                // Caso contrário, você pode definir um valor padrão ou deixar como está
                divCPF.textContent = ""; // Defina o valor padrão ou deixe vazio conforme necessário
            }
            return; // Sai da função, pois não há mais verificações necessárias
        }
    
        // Verifica o intervalo do valorOVRF e define o conteúdo da div-CPF
        if (valorOVRF >= 44 && valorOVRF <= 59) {
            divCPF.textContent = divInfoCP.textContent + " - " + "até 75";
        } else if (valorOVRF >= 60 && valorOVRF <= 75) {
            divCPF.textContent = divInfoCP.textContent + " - " + "até 85";
        } else {
            // Caso contrário, você pode definir um valor padrão ou deixar como está
            divCPF.textContent = ""; // Defina o valor padrão ou deixe vazio conforme necessário
        }
    

    

    });



    //CARACTERÍSTICA SECUNDÁRIA
    const divCSF = document.getElementById("div-CSF");

    // Adiciona um ouvinte de evento de clique ao botão "botaoConfirmarModal"
    botaoConfirmarModal.addEventListener("click", function () {
        // Obtém o valor numérico da div-infoOVRF
        const valorOVRF = parseFloat(divInfoOVRF.textContent);

        // Verifica se a posição é "GK"
        if (divInfoPosicao.textContent.trim() === "GK") {
            divCSF.textContent = "-"; // Define o conteúdo como "-"
            return; // Sai da função, pois não há mais verificações necessárias
        }
    
        // Verifica a posição
        if (divInfoPosicao.textContent.trim() === "CB" ||
            divInfoPosicao.textContent.trim() === "RB" ||
            divInfoPosicao.textContent.trim() === "LB" ||
            divInfoPosicao.textContent.trim() === "CDM") {
            // Caso o conteúdo textual da div de id "div-infoPosiçao" for "CB" ou "RB" ou "LB" ou "CDM" e o valor for 71 ou mais
            if (valorOVRF >= 71) {
                const novoConteudoCSF = valorOVRF + 10;
                divCSF.textContent = divInfoCS.textContent + " - até " + novoConteudoCSF;
            } else {
                // Verifica o intervalo do valorOVRF e define o conteúdo da div-CSF
                if (valorOVRF >= 44 && valorOVRF <= 59) {
                    divCSF.textContent = divInfoCS.textContent + " - até 70";
                } else if (valorOVRF >= 60 && valorOVRF <= 75) {
                    divCSF.textContent = divInfoCS.textContent + " - até 80";
                } else {
                    // Caso contrário, você pode definir um valor padrão ou deixar como está
                    divCSF.textContent = ""; // Defina o valor padrão ou deixe vazio conforme necessário
                }
            } 
        } else {
            // Caso o conteúdo textual da div de id "div-infoPosiçao" não for "CB" ou "RB" ou "LB" ou "CDM" e o valor for 74 ou mais
            if (valorOVRF >= 74) {
                const novoConteudoCSF = valorOVRF + 7;
                divCSF.textContent = divInfoCS.textContent + " - até " + novoConteudoCSF;
            } else {
                // Verifica o intervalo do valorOVRF e define o conteúdo da div-CSF
                if (valorOVRF >= 44 && valorOVRF <= 59) {
                    divCSF.textContent = divInfoCS.textContent + " - até 70";
                } else if (valorOVRF >= 60 && valorOVRF <= 75) {
                    divCSF.textContent = divInfoCS.textContent + " - até 80";
                } else {
                    // Caso contrário, você pode definir um valor padrão ou deixar como está
                    divCSF.textContent = ""; // Defina o valor padrão ou deixe vazio conforme necessário
                }
            }
        }
    
        // Adiciona a condição para verificar o conteúdo da div-infoCaracteristicaPrincipal
        if (divInfoCS.textContent.trim() === "Pace") {
            divCSF.textContent = "Pace - " + divInfoPaceF.textContent; // Substitui o conteúdo com base em div-infoPaceF
        }
    
        // Adiciona a condição para verificar o conteúdo da div-infoCaracteristicaPrincipal
        if (divInfoCS.textContent.trim() === "Perna Ruim") {
            divCSF.textContent = "Perna Ruim - " + divInfoPernaRuimF.textContent; // Substitui o conteúdo com base em div-infoPaceF
        }
    });



})



