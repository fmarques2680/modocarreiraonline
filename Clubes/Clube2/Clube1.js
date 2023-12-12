document.addEventListener("DOMContentLoaded", function () {

    // // Exemplo de requisição GET
    // fetch('https://backendmco.vercel.app/api', {
    //     method: 'GET',
    //     mode: 'cors',
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Erro:', error));

    // // Exemplo de requisição POST
    // fetch('https://backendmco.vercel.app/api', {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ key: 'value' }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Erro:', error));

    // // Exemplo de requisição PUT
    // fetch('https://backendmco.vercel.app/api', {
    //     method: 'PUT',
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ key: 'new value' }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Erro:', error));



    function carregarDados() {
        const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.4.5' } };
    
        fetch('https://backendmco.vercel.app/api', options)
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
    
    carregarDados();
    carregarDadosLocalStorage();


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
            headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.4.5' },
            body: JSON.stringify(objeto)
        };

        fetch('https://backendmco.vercel.app/api', options)
        .then(response => response.json())
        .then(response => {
            const objeto = response;
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.4.5' },
                body: JSON.stringify(objeto)
            };
    
            return fetch('https://backendmco.vercel.app/api', options);
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));
    
    }



    const botaoSalvarPagina = document.getElementById("salvarPagina")

    botaoSalvarPagina.addEventListener("click", function() {
        salvarDados();
    })



    

    const botaoClubes = document.getElementById("id-botaoClubes");

    botaoClubes.addEventListener("click", function () {
        window.location.href = "../../Clubes/Clubes.html";
    });





    //Link para Jogadores do Mundo
    const botaoJogadoresMundo = document.getElementById("id-botaoJogadoresMundo");

    botaoJogadoresMundo.addEventListener("click", function () {
        var url = "https://fmarques2680.github.io/modocarreiraonline/JogadoresDoMundo/JogadoresDoMundo.html";
        window.location.href = url;
    });

    //Link para Base
    const botaoBase = document.getElementById("id-botaoEmBreve-2");

    botaoBase.addEventListener("click", function () {
        window.location.href = "Base.html";
    });



    // //NOME DO CLUBE
    // window.addEventListener("load", function () {

    //     if (clubeSelecionado !== null) {
    //         var divclubeSelecionado = document.getElementById("clubeInfo");

    //         divclubeSelecionado.innerText = clubeSelecionado;
    //     }
    // });



    // LOCAL STORAGE
    // Recupere o valor do clube da URL:
    const urlParams = new URLSearchParams(window.location.search);
    const clube = urlParams.get("clube");

    // Exiba o valor do clube na página:
    const clubeInfo = document.getElementById("clubeInfo");

    const clubeInfoTexto = clubeInfo.textContent;



    //Salva o valor do clube na página:
    // Recupere o valor armazenado na chave "clubeSelecionado" do Local Storage
    var clubeSelecionado = localStorage.getItem('clubeSelecionado1');

    // Se houver um valor armazenado, atualize o conteúdo do elemento "clubeInfo"



    // Função para salvar os dados da tabela no localStorage
    function salvarDadosLocalStorage() {
        // Obtenha a tabela e suas linhas
        var tabela = document.getElementById('elenco-table');
        var linhas = tabela.getElementsByTagName('tr');

        // Crie um array para armazenar os dados
        var dados = [];

        // Itere sobre as linhas e salve os dados em um array
        for (var i = 1; i < linhas.length; i++) {
            var colunas = linhas[i].getElementsByTagName('td');
            var linhaDados = [];

            for (var j = 0; j < colunas.length; j++) {
                linhaDados.push(colunas[j].innerText);
            }

            dados.push(linhaDados);
        }

        // Converta os dados para JSON e salve no localStorage
        localStorage.setItem('dadosTabela2', JSON.stringify(dados));
    }


    // Função para carregar os dados da tabela do localStorage
    function carregarDadosLocalStorage() {
        // Verifique se há dados no localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');

        if (dadosArmazenados) {
            // Converta os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);

            // Obtenha a tabela
            var tabela = document.getElementById('elenco-table');
            var tbody = tabela.querySelector('tbody');

            // Remova todas as linhas existentes no corpo da tabela
            tbody.innerHTML = '';

            // Itere sobre os dados e adicione as linhas ao corpo da tabela
            for (var i = 0; i < dados.length; i++) {
                var linha = tbody.insertRow(-1);

                for (var j = 0; j < dados[i].length; j++) {
                    var celula = linha.insertCell(j);
                    celula.innerText = dados[i][j];
                }

                // Adicione as classes de formatação condicional diretamente nas células
                var posicaoCell = linha.cells[0];
                var ovrCell = linha.cells[1];
                var paceCell = linha.cells[8];
                var clubeCell = linha.cells[9];


                aplicarFormatacaoCondicional(posicaoCell, ovrCell);
                aplicarFormatacaoCondicional2(paceCell, clubeCell);
            }
        }

        // Carregar a variável anoAtual do localStorage
        var anoAtual = parseInt(localStorage.getItem('anoAtual')) || 2023;

        // Atualizar a temporada atual
        const temporadaAtual = document.getElementById("id-temporadaAtual");
        var textoTemporadaAtual = temporadaAtual.textContent;

        if (temporadaAtual) {
            temporadaAtual.textContent = textoTemporadaAtual + " " + anoAtual + "/" + (anoAtual + 1);
        }
    }



    //Função da formatação condicional de Posição e OVR:
    function aplicarFormatacaoCondicional(posicaoCell, ovrCell) {
        // Obtenha os valores das células
        var valorCelulaPosicao = posicaoCell.textContent;
        var valorCelulaOVR = ovrCell.textContent;

        // Adicione classes de formatação condicional
        if (valorCelulaPosicao === 'GK') {
            posicaoCell.classList.add('class-GK');
        } else if (valorCelulaPosicao === 'CB' || valorCelulaPosicao === 'RB' || valorCelulaPosicao === 'LB' || valorCelulaPosicao === 'RWB' || valorCelulaPosicao === 'LWB') {
            posicaoCell.classList.add('class-DEF');
        } else if (valorCelulaPosicao === 'CDM' || valorCelulaPosicao === 'CM' || valorCelulaPosicao === 'RM' || valorCelulaPosicao === 'LM' || valorCelulaPosicao === 'CAM') {
            posicaoCell.classList.add('class-MID');
        } else if (valorCelulaPosicao === 'CF' || valorCelulaPosicao === 'RW' || valorCelulaPosicao === 'LW' || valorCelulaPosicao === 'ST') {
            posicaoCell.classList.add('class-ATA');
        }

        if (valorCelulaOVR >= 1 && valorCelulaOVR <= 64) {
            ovrCell.classList.add('class-bronze');
        } else if (valorCelulaOVR >= 65 && valorCelulaOVR <= 74) {
            ovrCell.classList.add('class-silver');
        } else if (valorCelulaOVR >= 75 && valorCelulaOVR <= 99) {
            ovrCell.classList.add('class-gold');
        }


    }

    function aplicarFormatacaoCondicional2(paceCell, clubeCell) {
        paceCell.classList.add('class-colunaPace');
        clubeCell.style.display = 'none';
    }




    const modalFinalizaçaoTemporada = document.getElementById("id-modalFinalizarTemporada");
    const botaoAbrirModalFinalizaçaoTemporada = document.getElementById("id-botaoAbrirModalFinalizarTemporada");

    modalFinalizaçaoTemporada.style.display = 'block';

    botaoAbrirModalFinalizaçaoTemporada.addEventListener("click", function () {
        modalFinalizaçaoTemporada.classList.add("visible");
    });



    //BOTÃO DE FINALIZAR TEMPORADA
    const botaoBModalFinalizarTemporada = document.getElementById("id-botaoBModalFinalizarTemporada");

    const textoConfirmaçaoFinalizarTemporada = document.getElementById("id-mensagemConfirmaçaoFinalizarTemporada");
    const botaoModalFinalizarTemporada = document.getElementById("id-botaoModalFinalizarTemporada");
    const botaoModalNaoFinalizarTemporada = document.getElementById("id-botaoModalNaoFinalizarTemporada");


    botaoBModalFinalizarTemporada.addEventListener("click", function () {
        botaoModalFinalizarTemporada.classList.add("visible");
        botaoModalNaoFinalizarTemporada.classList.add("visible");
        textoConfirmaçaoFinalizarTemporada.classList.add("visible");
    });

    botaoModalNaoFinalizarTemporada.addEventListener("click", function () {
        botaoModalFinalizarTemporada.classList.remove("visible");
        botaoModalNaoFinalizarTemporada.classList.remove("visible");
        textoConfirmaçaoFinalizarTemporada.classList.remove("visible");
    });







    //TABELA DE ELENCO 
    //INPUT INICIALMENTE
    const input = document.getElementById("id-input");

    input.style.display = "none"; // Input oculto



    //BOTÃO DE ADICIONAR JOGADOR AO ELENCO
    const botaoAdicionarJogador = document.getElementById("id-botaoAdicionarJogadorElenco");

    botaoAdicionarJogador.addEventListener("click", function () { // Função de exibir o input quando o botão for clicado
        input.style.display = "block";



        //FUNÇÃO QUE MOSTRA SUGESTÕES
        input.addEventListener('input', showSuggestions); // Ouvinte faz: respondendo ao evento 'input', 'showSuggestions' estará sendo chamada

        const suggestions = document.getElementById("suggestions");


        function showSuggestions() {

            const inputText = input.value; // Variável que armazena o valor do input

            // Verifica se o comprimento do texto de entrada é pelo menos 3 caracteres
            if (inputText.length < 3) {
                suggestions.style.display = "none";
                suggestions.innerHTML = "";
                return; // Sai da função se o comprimento for inferior a 3 caracteres
            }

            fetch('../../JogadoresEAFC.csv') // Faz uma solicitação ao arquivo CSV
                .then(response => response.text()) // Resposta da solicitação convertida em texto
                .then(data => {
                    const lines = data.split('\n'); // Cada linha se torna um elemento
                    const playersData = lines.slice(1).map(line => line.split(',')); // Ignora a 1ª linha e mapeia cada linha transformado-a em um array com elementos separados por vírgula
                    const players = playersData.map(player => player[1]).filter(Boolean); // Cria um array chamado 'players' que contém os valores da coluna 2 e remove qualquer valor vazio

                    if (inputText === "") { // Se o input estiver vazio...
                        suggestions.style.display = "none";
                        suggestions.innerHTML = ""; // Remove qualquer conteúdo do elemento de ID "suggestions"
                    } else { // Se o input NÃO estiver vazio...
                        suggestions.style.display = "block";
                        suggestions.innerHTML = ""; // Remove qualquer conteúdo prévio do elemento de ID "suggestions" 

                        players.forEach(player => { // Cria um loop que itera por todos os jogadores
                            if (player.toLowerCase().includes(inputText.toLowerCase())) { // Verifica se o nome do jogador (em letras minúsculas) contém o texto digitado (em letras minúsculas)
                                const suggestion = document.createElement('p'); // Cria um elemento <p> para exibir a sugestão do jogador
                                suggestion.textContent = player; // Define o conteúdo do texto de 'suggestion'
                                suggestion.addEventListener('click', () => {
                                    input.value = player; // Define que, no click, o valor do input é o 'player'
                                    suggestions.style.display = "none";
                                    displayPlayerInfo(playersData, player);
                                });
                                suggestions.appendChild(suggestion); // Em 'suggestions', adiciona 'suggestion'
                            }
                        });
                    }
                });
        }



        // FUNÇÃO QUE EXIBE INFORMAÇÕES DO JOGADOR SELECIONADO
        function displayPlayerInfo(data, selectedPlayer) {

            const selectedPlayerData = data.find(player => player[1] === selectedPlayer); //No array 'data', é procurado o primeiro jogador que corresponde ao 'selectedPlayer'. O resultado é armazenado na variável 'selectedPlayerData'

            if (selectedPlayerData) { // Verifica se o jogador com o nome selecionado foi encontrado
                addPlayerToTable(selectedPlayerData); // Chama a função 'addPlayerToTable' e passa 'selectedPlayerData' como argumento
                input.value = ""; // Esvazia o input depois da seleção do jogador
                input.style.display = "none"; // Oculta o input depois da seleção do jogador
                reorderTable(); // Chama a função de reorganizar a tabela

                salvarDadosLocalStorage();
            }
        }
    });



    //FUNÇÃO QUE FORMATA O VALOR ESTIMADO DOS JOGADORES
    function formatCurrency(value) {
        value = value.slice(0, -2); // Remove os dois últimos caracteres de 'value'

        const numericValue = parseFloat(value); // A string 'value' é convertida em número

        const formattedValue = new Intl.NumberFormat('pt-PT', { // O valor 'numericValue' é formatado em euros usando o objeto 'Intl.NumberFormat', formatando pela localização pt-PT
            style: 'currency', // Estilo de formatação: moeda
            currency: 'EUR' // Especificação da moeda: euro
        }).format(numericValue);

        return formattedValue;
    }



    //FUNÇÃO PARA ADICIONAR O JOGADOR À TABELA DE ELENCO
    const elencoBody = document.getElementById("elenco-body");


    function addPlayerToTable(playerData) {
        const playerName = playerData[0];

        // Verifica se o jogador já está na tabela
        if (isPlayerInTable(playerName)) {
            console.log('Jogador já está na tabela');
            return;
        }

        //INSERÇÃO DE LINHA E CÉLULAS À TABELA
        const newRow = elencoBody.insertRow(); // Insere uma nova linha ('<tr>') à tabela
        const cellPosicao = newRow.insertCell(0); // Daqui pra baixo, insere uma nova célula ('<td>') à tabela
        cellPosicao.classList.add('class-colunaPosiçao');
        const cellOVR = newRow.insertCell(1);
        const cellNome = newRow.insertCell(2);
        const cellNacionalidade = newRow.insertCell(3);
        const cellIdade = newRow.insertCell(4);
        const cellAltura = newRow.insertCell(5);
        const cellPeso = newRow.insertCell(6);
        const cellValorEstimado = newRow.insertCell(7);
        const cellPace = newRow.insertCell(8);
        cellPace.classList.add('class-colunaPace');
        const cellClube = newRow.insertCell(9);
        cellClube.style.display = 'none';

        var clubeInfoElement = document.getElementById('id-linkClube1');
        var conteudoClubeInfo = clubeInfoElement.textContent;

        //ESPECIFICAÇÃO DA INFORMAÇÃO "POSIÇÃO"
        const posicao = playerData[2].split(' ')[0]; // Separa a informação da coluna [2] em espaços e pega a primeira palavra

        //PREENCHIMENTO DAS CÉLULAS
        // Adiciona o conteúdo textual nos lugares específicos
        cellPosicao.textContent = posicao;
        cellOVR.textContent = playerData[3];
        cellNome.textContent = playerData[0];
        cellNacionalidade.textContent = playerData[7];
        cellIdade.textContent = playerData[5];
        cellAltura.textContent = playerData[11] + " cm";
        cellPeso.textContent = playerData[12] + " kg";
        cellValorEstimado.textContent = formatCurrency(playerData[4]); // Uso da função de formatação em euros
        cellPace.textContent = playerData[8];
        cellClube.textContent = conteudoClubeInfo;


        //FORMATAÇÃO CONDICIONAL DAS CÉLULAS
        const valorCelulaPosiçao = cellPosicao.textContent;

        if (valorCelulaPosiçao === 'GK') {
            cellPosicao.classList.add('class-GK');
        } else if (valorCelulaPosiçao === 'CB' || valorCelulaPosiçao === 'RB' || valorCelulaPosiçao === 'LB' || valorCelulaPosiçao === 'RWB' || valorCelulaPosiçao === 'LWB') {
            cellPosicao.classList.add('class-DEF');
        } else if (valorCelulaPosiçao === 'CDM' || valorCelulaPosiçao === 'CM' || valorCelulaPosiçao === 'RM' || valorCelulaPosiçao === 'LM' || valorCelulaPosiçao === 'CAM') {
            cellPosicao.classList.add('class-MID');
        } else if (valorCelulaPosiçao === 'CF' || valorCelulaPosiçao === 'RW' || valorCelulaPosiçao === 'LW' || valorCelulaPosiçao === 'ST') {
            cellPosicao.classList.add('class-ATA');
        }


        const valorCelulaOVR = cellOVR.textContent;

        if (valorCelulaOVR >= 1 && valorCelulaOVR <= 64) {
            cellOVR.classList.add('class-bronze');
        }
        else if (valorCelulaOVR >= 65 && valorCelulaOVR <= 74) {
            cellOVR.classList.add('class-silver');
        }
        else if (valorCelulaOVR >= 75 && valorCelulaOVR <= 99) {
            cellOVR.classList.add('class-gold');
        }
    }



    // Função para verificar se um jogador já está na tabela
    function isPlayerInTable(playerName) {
        const tableRows = elencoBody.getElementsByTagName("tr");

        for (let i = 0; i < tableRows.length; i++) {
            const playerNameInTable = tableRows[i].cells[2].textContent; // Assume que o nome do jogador está na terceira célula
            if (playerNameInTable === playerName) {
                return true; // Jogador encontrado na tabela
            }
        }

        return false; // Jogador não encontrado na tabela
    }



    //FUNÇÃO QUE ESPECIFICA A ORDEM DOS JOGADORES POR POSIÇÃO
    function getPositionOrder(position) {

        const positionOrder = {
            "GK": 1,
            "CB": 2,
            "RB": 3,
            "RWB": 4,
            "LB": 5,
            "LWB": 6,
            "CDM": 7,
            "CM": 8,
            "RM": 9,
            "LM": 10,
            "CAM": 11,
            "CF": 12,
            "RW": 13,
            "LW": 14,
            "ST": 15
        };

        return positionOrder[position] || 999; // Se a posição do jogador não existir, o jogador ficará na posição 999
    }



    //FUNÇÃO PARA REORDENAR A TABELA COM BASE NAS POSIÇÕES
    function reorderTable() {
        const rows = Array.from(elencoBody.rows);

        rows.sort((a, b) => {
            const positionA = a.cells[0].textContent;
            const positionB = b.cells[0].textContent;

            const orderA = getPositionOrder(positionA);
            const orderB = getPositionOrder(positionB);

            if (orderA !== orderB) {
                return orderA - orderB;
            } else {
                const valueA = parseFloat(a.cells[1].textContent);
                const valueB = parseFloat(b.cells[1].textContent);

                if (valueA !== valueB) {
                    return valueB - valueA;
                } else {
                    // Se os valores da segunda coluna forem iguais, use a ordem alfabética da terceira coluna
                    const textA = a.cells[2].textContent.toLowerCase();
                    const textB = b.cells[2].textContent.toLowerCase();

                    return textA.localeCompare(textB);
                }
            }
        });

        for (const row of rows) {
            elencoBody.appendChild(row);
        }
    }





    //REMOÇÃO DE JOGADORES DO ELENCO
    const botaoRemover = document.getElementById("id-botaoRemoverJogadorElenco");
    const mensagemRemocao = document.getElementById("instrucao-remocao");

    let selecting = false; // Inicializa a variável 'selecting' como F


    // Função para ativar o modo de seleção:
    botaoRemover.addEventListener("click", () => {

        selecting = !selecting; // Alterna a variável 'selecting' entre V e F

        const rows = document.querySelectorAll("#elenco-table tbody tr"); // Seleciona todas as linhas da tabela


        rows.forEach(row => { // Itera 'rows' (todas as linhas) em loop

            if (selecting) { // Se 'selecting' for V
                mensagemRemocao.style.display = "block"; // Exibe a mensagem de instrução
                row.classList.add("selectable-row"); // Adiciona uma classe
                row.addEventListener("click", handleRowClick); // Adiciona a função de click em cada linha, e ao clicar, a função handleRowClick é chamada
            } else { // Se 'selecting' for F
                mensagemRemocao.style.display = "none"; // Oculta a mensagem de instrução
                row.classList.remove("selectable-row"); // Remova a classe
                row.removeEventListener("click", handleRowClick); // Remove a função de click citada
            }
        });


    });


    // Função para desativar o modo de seleção:
    function deselectRows() {
        selecting = false; // Torna a variável 'selecting' como F

        const rows = document.querySelectorAll("#elenco-table tbody tr"); // Seleciona todas as linhas

        rows.forEach(row => {
            row.classList.remove("selectable-row");
            row.removeEventListener("click", handleRowClick);
        });

    }



    //FUNÇÃO DO MODAL DE CONFIRMAÇÃO DE EXCLUSÃO DE JOGADOR
    function openConfirmationModal(playerName, onConfirm, onCancel, row) {

        const modal = document.getElementById("confirmation-modal");
        const modalText = document.getElementById("modal-text");
        const confirmButton = document.getElementById("modal-confirm-button");
        const cancelButton = document.getElementById("modal-cancel-button");
        const overlay = document.querySelector(".overlay");

        modal.style.display = "block";
        overlay.style.display = "block";

        modalText.textContent = `Tem certeza que deseja remover ${playerName} do elenco?`;


        confirmButton.addEventListener("click", () => {
            onConfirm(row);

            modal.style.display = "none";
            overlay.style.display = "none";
            mensagemRemocao.style.display = "none";

            const rows = document.querySelectorAll("#elenco-table tbody tr");

            rows.forEach(row => {
                row.classList.remove("selectable-row");
            });

            salvarDadosLocalStorage();
        });


        cancelButton.addEventListener("click", () => {
            onCancel();

            modal.style.display = "none";
            overlay.style.display = "none";
            mensagemRemocao.style.display = "none";

            const rows = document.querySelectorAll("#elenco-table tbody tr");
            rows.forEach(row => {
                row.classList.remove("selectable-row");
            });

        });


        modal.style.display = "block";
    }


    // A função do modal de confirmação de exclusão sendo chamado:
    function handleRowClick(event) {
        if (selecting) {

            const playerName = event.currentTarget.cells[2].textContent; // Obtém o nome do jogador

            openConfirmationModal(playerName, (row) => {
                row.remove();
                reorderTable();
            }, () => {

            }, event.currentTarget);

            deselectRows();
        }
    }



    //ALTERAÇÃO DE POSIÇÃO DE UM JOGADOR
    const botaoMudarPosicao = document.getElementById("id-botaoMudarPosiçaoJogadorElenco");
    const mensagemAlteraçaoPosiçao = document.getElementById("instrucao-mudança-posiçao")


    botaoMudarPosicao.addEventListener("click", () => {

        selecting = true;

        mensagemAlteraçaoPosiçao.style.display = "block";

        const rows = document.querySelectorAll("#elenco-table tbody tr");

        rows.forEach(row => {
            row.classList.add("selectable-row");
            row.addEventListener("click", handlePositionChangeClick);
        });
    });


    const opcoesPosicao = ["GK", "CB", "RB", "RWB", "LB", "LWB", "CDM", "CM", "RM", "LM", "CAM", "CF", "RW", "LW", "ST"];


    // Clique em um jogador para mudar sua posição:
    function handlePositionChangeClick(event) {
        if (selecting) {

            const playerName = event.currentTarget.cells[2].textContent; // Nome do jogador é obtido a partir da linha da tabela selecionada

            playerToChangePosition = event.currentTarget; // Salva a referência da linha do jogador a ser alterado

            openPositionChangeModal(playerName); // Função do modal de mudança de posição é chamada
        }
    }


    // Função do modal de mudança de posição:
    function openPositionChangeModal(playerName, onConfirm) {

        const modal2 = document.getElementById("position-modal");
        const modalText = document.getElementById("p-modal-text");
        const select = document.getElementById("id-position-select");
        const confirmButton = document.getElementById("p-modal-confirm-button");
        const cancelButton = document.getElementById("p-modal-cancel-button");
        const overlay = document.querySelector(".overlay");

        modalText.textContent = `Nova posição principal de ${playerName}:`;

        modal2.style.display = "block";
        overlay.style.display = "block";


        confirmButton.addEventListener("click", () => {

            const newPosition = select.value;

            if (playerToChangePosition) {
                playerToChangePosition.cells[0].textContent = newPosition;
            }

            playerToChangePosition = null; // Limpa a referência

            modal2.style.display = "none";
            overlay.style.display = "none";
            mensagemAlteraçaoPosiçao.style.display = "none";

            reorderTable();

            salvarDadosLocalStorage();

            //aplicarFormatacaoCondicional();
        });


        cancelButton.addEventListener("click", () => {

            playerToChangePosition = null; // Limpa a referência

            modal2.style.display = "none";
            overlay.style.display = "none";
            mensagemAlteraçaoPosiçao.style.display = "none";
        });


        modal2.style.display = "block";

    }










    //A PARTIR DAQUI, A LÓGICA BÁSICA DA TABELA ESTÁ FEITA. AGORA HAVERÃO AS ALTERAÇÕES DA TABELA DE ACORDO COM AS TEMPORADAS PASSANDO.


    //ANO INICIAL DO UNIVERSO
    let anoAtual = parseInt(localStorage.getItem('anoAtual')) || 2023;

    const temporadaAtual = document.getElementById("id-temporadaAtual"); //Temporada atual

    const botaoFimTemporada = document.getElementById("id-botaoModalFinalizarTemporada"); //Botão de fim de temporada



    //SELECT COM OS NOMES DOS JOGADORES


    //JOGADOR SUB-23 MAIS SURPREENDENTE
    function escolherJogadorSelect() {
        const select = document.getElementById("id-selectAdicionarJogador1SS23");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorLista1SS23");
        const listaJogadores1 = document.getElementById("listaJogadores1SS23");
        const listaJogadores2 = document.getElementById("listaJogadores2SS23");
        const listaJogadores3 = document.getElementById("listaJogadores3SS23");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            const idade = parseInt(linhas[i].cells[4].textContent, 10); // Obtém a idade da quinta coluna

            // Verifica se a idade é menor ou igual a 23 antes de adicionar à lista
            if (idade <= 23) {
                const optionJogador = document.createElement("option");
                optionJogador.text = colunaNome;
                optionJogador.value = colunaNome;
                select.appendChild(optionJogador);
            }
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Limpa a lista antes de adicionar um novo jogador
                listaJogadores1.innerHTML = "";

                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect();




    //2º JOGADOR SUB-23 MAIS SURPREENDENTE
    // Preenche o select com os nomes dos jogadores da tabela
    function escolherJogadorSelect2() {
        const select = document.getElementById("id-selectAdicionarJogador2SS23");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorLista2SS23");
        const listaJogadores1 = document.getElementById("listaJogadores1SS23");
        const listaJogadores2 = document.getElementById("listaJogadores2SS23");
        const listaJogadores3 = document.getElementById("listaJogadores3SS23");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            const idade = parseInt(linhas[i].cells[4].textContent, 10); // Obtém a idade da quinta coluna

            // Verifica se a idade é menor ou igual a 23 antes de adicionar à lista
            if (idade <= 23) {
                const optionJogador = document.createElement("option");
                optionJogador.text = colunaNome;
                optionJogador.value = colunaNome;
                select.appendChild(optionJogador);
            }
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Limpa a lista antes de adicionar um novo jogador
                listaJogadores2.innerHTML = "";

                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores2.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect2();



    //DEMAIS JOGADORES SUB-23 DO TIME
    // Preenche o select com os nomes dos jogadores da tabela
    function escolherJogadorSelect3() {
        const select = document.getElementById("id-selectAdicionarJogador3SS23");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorLista3SS23");
        const listaJogadores1 = document.getElementById("listaJogadores1SS23");
        const listaJogadores2 = document.getElementById("listaJogadores2SS23");
        const listaJogadores3 = document.getElementById("listaJogadores3SS23");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            const idade = parseInt(linhas[i].cells[4].textContent, 10); // Obtém a idade da quinta coluna

            // Verifica se a idade é menor ou igual a 23 antes de adicionar à lista
            if (idade <= 23) {
                const optionJogador = document.createElement("option");
                optionJogador.text = colunaNome;
                optionJogador.value = colunaNome;
                select.appendChild(optionJogador);
            }
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores3.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect3();



    //3 JOGADORES MAIS SURPREENDENTES
    // Preenche o select com os nomes dos jogadores da tabela
    function escolherJogadorSelect4() {
        const select = document.getElementById("id-selectAdicionarJogadorPS");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaPS");
        const listaJogadores1 = document.getElementById("listaJogadoresPS");
        const listaJogadores2 = document.getElementById("listaJogadoresSS");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Verifica se a lista já possui 3 jogadores
                if (listaJogadores1.getElementsByTagName("li").length >= 3) {
                    // Não permite adicionar mais jogadores se a lista atingiu o limite
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }



        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);
    }


    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect4();



    //2 JOGADORES SURPREENDENTES SECUNDÁRIOS
    // Preenche o select com os nomes dos jogadores da tabela
    function escolherJogadorSelect5() {
        const select = document.getElementById("id-selectAdicionarJogadorSS");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaSS");
        const listaJogadores1 = document.getElementById("listaJogadoresSS");
        const listaJogadores2 = document.getElementById("listaJogadoresPS");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Verifica se a lista já possui 3 jogadores
                if (listaJogadores1.getElementsByTagName("li").length >= 2) {
                    // Não permite adicionar mais jogadores se a lista atingiu o limite
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);
    }


    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect5();



    //APERTURA - MELHOR DEFESA - TITULARES
    function escolherJogadorSelect6() {
        const select = document.getElementById("id-selectAdicionarJogadorTMDA");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaTMDA");
        const listaJogadores1 = document.getElementById("listaJogadoresTMDA");
        const listaJogadores2 = document.getElementById("listaJogadoresRMDA");
        const listaJogadores3 = document.getElementById("listaJogadoresT2MDA");
        const listaJogadores4 = document.getElementById("listaJogadoresR2MDA");
        const listaJogadores5 = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores4) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores5)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Verifica se a lista já possui 3 jogadores
                if (listaJogadores1.getElementsByTagName("li").length >= 10) {
                    // Não permite adicionar mais jogadores se a lista atingiu o limite
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect6();



    //APERTURA - MELHOR DEFESA - TITULAR MENOS IMPACTANTE
    function escolherJogadorSelect7() {
        const select = document.getElementById("id-selectAdicionarJogadorTMIMDA");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaTMIMDA");
        const listaJogadores1 = document.getElementById("listaJogadoresTMDA");
        const listaJogadores2 = document.getElementById("listaJogadoresRMDA");
        const listaJogadores3 = document.getElementById("listaJogadoresT2MDA");
        const listaJogadores4 = document.getElementById("listaJogadoresR2MDA");
        const listaJogadores5 = document.getElementById("listaJogadoresTMIMDA");


        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores4) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores5)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Limpa a lista antes de adicionar um novo jogador
                listaJogadores5.innerHTML = "";

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores5.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect7();



    //APERTURA - MELHOR DEFESA - RESERVAS
    function escolherJogadorSelect8() {
        const select = document.getElementById("id-selectAdicionarJogadorRMDA");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaRMDA");
        const listaJogadores1 = document.getElementById("listaJogadoresRMDA");
        const listaJogadores2 = document.getElementById("listaJogadoresTMDA");
        const listaJogadores3 = document.getElementById("listaJogadoresT2MDA");
        const listaJogadores4 = document.getElementById("listaJogadoresR2MDA");
        const listaJogadores5 = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores4) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores5)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect8();



    //APERTURA - 2ª MELHOR DEFESA - TITULARES
    function escolherJogadorSelect9() {
        const select = document.getElementById("id-selectAdicionarJogadorT2MDA");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaT2MDA");
        const listaJogadores1 = document.getElementById("listaJogadoresT2MDA");
        const listaJogadores2 = document.getElementById("listaJogadoresR2MDA");
        const listaJogadores3 = document.getElementById("listaJogadoresTMDA");
        const listaJogadores4 = document.getElementById("listaJogadoresRMDA");
        const listaJogadores5 = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores4) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores5)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Verifica se a lista já possui 3 jogadores
                if (listaJogadores1.getElementsByTagName("li").length >= 11) {
                    // Não permite adicionar mais jogadores se a lista atingiu o limite
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect9();



    //APERTURA - 2ª MELHOR DEFESA - RESERVAS
    function escolherJogadorSelect10() {
        const select = document.getElementById("id-selectAdicionarJogadorR2MDA");
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const botaoAdicionarJogadorLista = document.getElementById("id-botaoAdicionarJogadorListaR2MDA");
        const listaJogadores1 = document.getElementById("listaJogadoresR2MDA");
        const listaJogadores2 = document.getElementById("listaJogadoresT2MDA");
        const listaJogadores3 = document.getElementById("listaJogadoresTMDA");
        const listaJogadores4 = document.getElementById("listaJogadoresRMDA");
        const listaJogadores5 = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const colunaNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna

            const optionJogador = document.createElement("option");
            optionJogador.text = colunaNome;
            optionJogador.value = colunaNome;
            select.appendChild(optionJogador);
        }

        // Adiciona um jogador à lista
        function adicionarJogador() {
            const jogadorSelecionado = select.value;

            if (jogadorSelecionado) {
                // Verifica se o jogador já está em outra lista
                if (jogadorEstaNaLista(jogadorSelecionado, listaJogadores1) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores2) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores3) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores4) ||
                    jogadorEstaNaLista(jogadorSelecionado, listaJogadores5)) {
                    // Não exibe erro, apenas retorna sem adicionar o jogador
                    return;
                }

                // Adiciona o jogador à lista
                const itemLista = document.createElement("li");
                itemLista.textContent = jogadorSelecionado;
                listaJogadores1.appendChild(itemLista);

                // Limpa a seleção do select
                select.value = "";
            }
        }

        botaoAdicionarJogadorLista.addEventListener("click", adicionarJogador);

        // Verifica se o jogador está em uma determinada lista
        function jogadorEstaNaLista(jogador, lista) {
            const itensLista = lista.getElementsByTagName("li");
            for (let i = 0; i < itensLista.length; i++) {
                if (itensLista[i].textContent === jogador) {
                    return true;
                }
            }
            return false;
        }
    }

    // Executa a função para preencher o select ao carregar a página
    escolherJogadorSelect10();






    //Atualização da temporada atual:
    botaoFimTemporada.addEventListener("click", () => {
        anoAtual++;
        temporadaAtual.textContent = "Temporada" + " " + anoAtual + "/" + (anoAtual + 1);

        // Obtenha a tabela e suas linhas
        var tabela = document.getElementById('elenco-table');
        var linhas = tabela.getElementsByTagName('tr');

        // Itere sobre as linhas (começando da segunda linha, pois a primeira é o cabeçalho)
        for (var i = 1; i < linhas.length; i++) {
            var colunaIdade = linhas[i].cells[4]; // A quinta coluna (índice 4) contém a idade

            // Obtém o valor atual da célula e converte para número
            var idadeAtual = parseInt(colunaIdade.textContent, 10);

            // Incrementa a idade
            var novaIdade = idadeAtual + 1;

            // Atualiza o conteúdo da célula com a nova idade
            colunaIdade.textContent = novaIdade;
        }


        // Salva o anoAtual no localStorage
        localStorage.setItem('anoAtual', anoAtual);

        atualizarPace();



        atualizarOVR();
        atualizarOVR2();
        atualizarOVR3();
        atualizarOVR4();
        atualizarOVR5();
        atualizarOVR6();
        atualizarOVR7();
        atualizarOVR8();
        atualizarOVR9();
        atualizarOVR10();
        atualizarOVR11();
        atualizarOVR12();
        atualizarOVR13();
        atualizarOVR14();
        atualizarOVR15();
        atualizarOVR16();






        modalFinalizaçaoTemporada.style.display = 'none';


        // Salve os dados atualizados no localStorage
        salvarDadosLocalStorage();
    })

    reorderTable();
    //aplicarFormatacaoCondicional();











    //ATUALIZAÇÃO AUTOMÁTICA DO OVR
    function atualizarOVR() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");

        for (let i = 1; i < linhas.length; i++) {
            const idade = parseInt(linhas[i].cells[4].textContent, 10); // Obtém a idade da quinta coluna
            let ovrA = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrB = ovrA; // Valor inicial, caso não seja necessário alterar

            const posicao = linhas[i].cells[0].textContent.trim(); // Obtém o texto da primeira coluna (posição)

            // Lógica de atualização do OVR para goleiros
            if (posicao === "GK") {
                if (idade <= 26) {
                    if (ovrA >= 1 && ovrA <= 77) {
                        ovrB = ovrA + 2;
                    } else if (ovrA >= 78 && ovrA <= 82) {
                        ovrB = ovrA + 1;
                    } else if (ovrA >= 83) {
                        ovrB = ovrA + 0;
                    }
                } else if (idade >= 27 && idade <= 32) {
                    if (ovrA >= 1 && ovrA <= 77) {
                        ovrB = ovrA + 1;
                    } else if (ovrA >= 78) {
                        ovrB = ovrA + 0;
                    }
                } else if (idade >= 33 && idade <= 36) {
                    if (ovrA >= 1 && ovrA <= 98) {
                        ovrB = ovrA + 0;
                    }
                } else if (idade >= 37 && idade <= 39) {
                    if (ovrA >= 1 && ovrA <= 98) {
                        ovrB = ovrA - 2;
                    }
                } else if (idade >= 40 && idade <= 42) {
                    if (ovrA >= 1 && ovrA <= 87) {
                        ovrB = ovrA - 3;
                    } else if (ovrA >= 88) {
                        ovrB = ovrA - 4;
                    }
                } else if (idade >= 43) {
                    if (ovrA >= 1 && ovrA <= 82) {
                        ovrB = ovrA - 4;
                    } else if (ovrA >= 83 && ovrA <= 87) {
                        ovrB = ovrA - 5;
                    } else if (ovrA >= 88) {
                        ovrB = ovrA - 6;
                    }
                }
            }

            // Lógica de atualização do OVR para jogadores de linha
            else if (idade <= 24) {
                if (ovrA >= 1 && ovrA <= 77) {
                    ovrB = ovrA + 2;
                } else if (ovrA >= 78 && ovrA <= 82) {
                    ovrB = ovrA + 1;
                }
                // Se o OVR for 83 ou mais, não é necessário atualizar (ovrB permanece igual a ovrA)
            } else if (idade >= 25 && idade <= 27) {
                if (ovrA >= 1 && ovrA <= 77) {
                    ovrB = ovrA + 1;
                }
                // Se o OVR for 78 ou mais, não é necessário atualizar (ovrB permanece igual a ovrA)
            } else if (idade >= 28 && idade <= 32) {
                // Não é necessário alterar o OVR
            } else if (idade >= 33 && idade <= 36) {
                ovrB = ovrA - 1;
            } else if (idade >= 37 && idade <= 39) {
                if (ovrA >= 1 && ovrA <= 87) {
                    ovrB = ovrA - 2;
                } else if (ovrA >= 88) {
                    ovrB = ovrA - 3;
                }
            } else if (idade >= 40 && idade <= 42) {
                if (ovrA >= 1 && ovrA <= 82) {
                    ovrB = ovrA - 3;
                } else if (ovrA >= 83 && ovrA <= 87) {
                    ovrB = ovrA - 4;
                } else if (ovrA >= 88) {
                    ovrB = ovrA - 5;
                }
            } else if (idade >= 43) {
                if (ovrA >= 1 && ovrA <= 77) {
                    ovrB = ovrA - 4;
                } else if (ovrA >= 78 && ovrA <= 82) {
                    ovrB = ovrA - 5;
                } else if (ovrA >= 83 && ovrA <= 87) {
                    ovrB = ovrA - 6;
                } else if (ovrA >= 88) {
                    ovrB = ovrA - 7;
                }
            }


            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrB;


        }


    }








    //ATUALIZAÇÃO AUTOMÁTICA DO PACE
    function atualizarPace() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");

        for (let i = 1; i < linhas.length; i++) {
            const idade = parseInt(linhas[i].cells[4].textContent, 10); // Obtém a idade da quinta coluna
            let paceOld = parseFloat(linhas[i].cells[8].textContent); // Obtém o valor atual da nona coluna
            let paceNew = paceOld; // Valor inicial, caso não seja necessário alterar

            if (idade <= 24) {
                if (paceOld >= 1 && paceOld <= 77) {
                    paceNew = paceOld + 2;
                } else if (paceOld >= 78 && paceOld <= 82) {
                    paceNew = paceOld + 1;
                }
            } else if (idade >= 25 && idade <= 27) {
                if (paceOld >= 1 && paceOld <= 77) {
                    paceNew = paceOld + 1;
                }
            } else if (idade >= 28 && idade <= 32) {

            } else if (idade >= 33 && idade <= 36) {
                paceNew = paceOld - 1;
            } else if (idade >= 37 && idade <= 39) {
                if (paceOld >= 1 && paceOld <= 87) {
                    paceNew = paceOld - 2;
                } else if (paceOld >= 88) {
                    paceNew = paceOld - 3;
                }
            } else if (idade >= 40 && idade <= 42) {
                if (paceOld >= 1 && paceOld <= 82) {
                    paceNew = paceOld - 3;
                } else if (paceOld >= 83 && paceOld <= 87) {
                    paceNew = paceOld - 4;
                } else if (paceOld >= 88) {
                    paceNew = paceOld - 5;
                }
            } else if (idade >= 43) {
                if (paceOld >= 1 && paceOld <= 77) {
                    paceNew = paceOld - 4;
                } else if (paceOld >= 78 && paceOld <= 82) {
                    paceNew = paceOld - 5;
                } else if (paceOld >= 83 && paceOld <= 87) {
                    paceNew = paceOld - 6;
                } else if (paceOld >= 88) {
                    paceNew = paceOld - 7;
                }
            }


            // Atualiza o valor na tabela
            linhas[i].cells[8].textContent = paceNew;
        }
    }





    //JOGADORES SURPREENDENTES SUB-23
    //SUB-23 MAIS SURPREENDENTE
    function atualizarOVR2() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadores1SS23 = document.getElementById("listaJogadores1SS23");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrB = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrC = ovrB; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadores1SS23"
            if (jogadorEstaNaLista(jogadorNome, listaJogadores1SS23)) {
                if (ovrB >= 1 && ovrB <= 51) {
                    ovrC = ovrB + 10;
                } else if (ovrB >= 52 && ovrB <= 59) {
                    ovrC = ovrB + 6;
                } else if (ovrB >= 60 && ovrB <= 67) {
                    ovrC = ovrB + 3;
                } else if (ovrB >= 68 && ovrB <= 75) {
                    ovrC = ovrB + 1;
                }
                // Se ovrB for 76 ou mais, ovrC permanece igual a ovrB (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrC;
        }
    }

    // Função para verificar se o jogador está na lista
    function jogadorEstaNaLista(jogador, lista) {
        const itensLista = lista.getElementsByTagName("li");
        for (let i = 0; i < itensLista.length; i++) {
            if (itensLista[i].textContent === jogador) {
                return true;
            }
        }
        return false;
    }











    //2º SUB-23 MAIS SURPREENDENTE
    function atualizarOVR3() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadores2SS23 = document.getElementById("listaJogadores2SS23");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrC = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrD = ovrC; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadores2SS23"
            if (jogadorEstaNaLista(jogadorNome, listaJogadores2SS23)) {
                if (ovrC >= 1 && ovrC <= 51) {
                    ovrD = ovrC + 8;
                } else if (ovrC >= 52 && ovrC <= 59) {
                    ovrD = ovrC + 5;
                } else if (ovrC >= 60 && ovrC <= 67) {
                    ovrD = ovrC + 2;
                } else if (ovrC >= 68 && ovrC <= 75) {
                    ovrD = ovrC + 1;
                }
                // Se ovrC for 76 ou mais, ovrD permanece igual a ovrC (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrD;
        }
    }


    //3º SUB-23 MAIS SURPREENDENTE
    function atualizarOVR4() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadores3SS23 = document.getElementById("listaJogadores3SS23");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrD = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrE = ovrD; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadores3SS23"
            if (jogadorEstaNaLista(jogadorNome, listaJogadores3SS23)) {
                if (ovrD >= 1 && ovrD <= 51) {
                    ovrE = ovrD + 6;
                } else if (ovrD >= 52 && ovrD <= 59) {
                    ovrE = ovrD + 4;
                } else if (ovrD >= 60 && ovrD <= 67) {
                    ovrE = ovrD + 2;
                } else if (ovrD >= 68 && ovrD <= 75) {
                    ovrE = ovrD + 0;
                }
                // Se ovrD for 76 ou mais, ovrE permanece igual a ovrD (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrE;
        }
    }



    //JOGADORES SURPREENDENTES
    //JOGADORES SURPREENDENTES PRINCIPAIS
    function atualizarOVR5() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresPS = document.getElementById("listaJogadoresPS");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrE = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrF = ovrE; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresPS" e em pelo menos uma das outras listas
            if (
                jogadorEstaNaLista(jogadorNome, listaJogadoresPS) &&
                (jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores3SS23")) ||
                    jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores2SS23")) ||
                    jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores1SS23")))
            ) {
                if (ovrE >= 1 && ovrE <= 54) {
                    ovrF = ovrE + 7;
                } else if (ovrE >= 55 && ovrE <= 62) {
                    ovrF = ovrE + 5;
                } else if (ovrE >= 63 && ovrE <= 69) {
                    ovrF = ovrE + 3;
                } else if (ovrE >= 70 && ovrE <= 77) {
                    ovrF = ovrE + 2;
                } else if (ovrE >= 78 && ovrE <= 97) {
                    ovrF = ovrE + 0;
                }

                // Se ovrE for 78 ou mais, ovrF permanece igual a ovrE (acréscimo de 0)
            }

            // Adiciona uma nova condição para verificar se o jogador está apenas na lista "listaJogadoresPS"
            else if (jogadorEstaNaLista(jogadorNome, listaJogadoresPS)) {
                if (ovrE >= 1 && ovrE <= 54) {
                    ovrF = ovrE + 12;
                } else if (ovrE >= 55 && ovrE <= 62) {
                    ovrF = ovrE + 8;
                } else if (ovrE >= 63 && ovrE <= 69) {
                    ovrF = ovrE + 5;
                } else if (ovrE >= 70 && ovrE <= 77) {
                    ovrF = ovrE + 3;
                } else if (ovrE >= 78 && ovrE <= 97) {
                    ovrF = ovrE + 1;
                }
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrF;
        }
    }



    //JOGADORES SURPREENDENTES SECUNDÁRIOS
    function atualizarOVR6() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresPS = document.getElementById("listaJogadoresSS");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrF = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna
            let ovrG = ovrF; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresPS" e em pelo menos uma das outras listas
            if (
                jogadorEstaNaLista(jogadorNome, listaJogadoresPS) &&
                (jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores3SS23")) ||
                    jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores2SS23")) ||
                    jogadorEstaNaLista(jogadorNome, document.getElementById("listaJogadores1SS23")))
            ) {
                if (ovrF >= 1 && ovrF <= 54) {
                    ovrG = ovrF + 4;
                } else if (ovrF >= 55 && ovrF <= 62) {
                    ovrG = ovrF + 2;
                } else if (ovrF >= 63 && ovrF <= 69) {
                    ovrG = ovrF + 1;
                } else if (ovrF >= 70 && ovrF <= 77) {
                    ovrG = ovrF + 1;
                } else if (ovrF >= 78 && ovrF <= 97) {
                    ovrG = ovrF + 0;
                }

                // Se ovrF for 78 ou mais, ovrG permanece igual a ovrF (acréscimo de 0)
            }

            // Adiciona uma nova condição para verificar se o jogador está apenas na lista "listaJogadoresPS"
            else if (jogadorEstaNaLista(jogadorNome, listaJogadoresPS)) {
                if (ovrF >= 1 && ovrF <= 54) {
                    ovrG = ovrF + 7;
                } else if (ovrF >= 55 && ovrF <= 62) {
                    ovrG = ovrF + 4;
                } else if (ovrF >= 63 && ovrF <= 69) {
                    ovrG = ovrF + 3;
                } else if (ovrF >= 70 && ovrF <= 77) {
                    ovrG = ovrF + 1;
                } else if (ovrF >= 78 && ovrF <= 97) {
                    ovrG = ovrF + 0;
                }
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrG;
        }
    }


    //APERTURA - MELHOR DEFESA - TITULARES
    function atualizarOVR7() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresTMDA = document.getElementById("listaJogadoresTMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrG = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrH = ovrG; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresTMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresTMDA)) {
                if (ovrG >= 1 && ovrG <= 69) {
                    ovrH = ovrG + 5;
                } else if (ovrG >= 70 && ovrG <= 77.5) {
                    ovrH = ovrG + 3;
                } else if (ovrG >= 77.51 && ovrG <= 82.5) {
                    ovrH = ovrG + 2;
                } else if (ovrG >= 82.51 && ovrG <= 92.5) {
                    ovrH = ovrG + 1;
                } else if (ovrG >= 92.51 && ovrG <= 97) {
                    ovrH = ovrG + 0.5;
                }
                // Se ovrG for 76 ou mais, ovrH permanece igual a ovrG (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrH;
        }
    }



    //MELHOR DEFESA - TITULAR MENOS IMPACTANTE
    function atualizarOVR8() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresTMIMDA = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrOld = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrNew = ovrOld; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresTMIMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresTMIMDA)) {
                if (ovrOld >= 1 && ovrOld <= 69) {
                    ovrNew = ovrOld + 2.5;
                } else if (ovrOld >= 70 && ovrOld <= 77.5) {
                    ovrNew = ovrOld + 1.5;
                } else if (ovrOld >= 77.51 && ovrOld <= 82.5) {
                    ovrNew = ovrOld + 1;
                } else if (ovrOld >= 82.51 && ovrOld <= 92.5) {
                    ovrNew = ovrOld + 0.5;
                } else if (ovrOld >= 92.51 && ovrOld <= 97) {
                    ovrNew = ovrOld + 0.25;
                }
                // Se ovrOld for 76 ou mais, ovrNew permanece igual a ovrOld (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrNew;
        }
    }



    //APERTURA - MELHOR DEFESA - RESERVAS
    function atualizarOVR9() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresRMDA = document.getElementById("listaJogadoresRMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrH = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrI = ovrH; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresRMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresRMDA)) {
                if (ovrH >= 1 && ovrH <= 69) {
                    ovrI = ovrH + 2.5;
                } else if (ovrH >= 70 && ovrH <= 77.5) {
                    ovrI = ovrH + 1.5;
                } else if (ovrH >= 77.51 && ovrH <= 82.5) {
                    ovrI = ovrH + 1;
                } else if (ovrH >= 82.51 && ovrH <= 92.5) {
                    ovrI = ovrH + 0.5;
                } else if (ovrH >= 92.51 && ovrH <= 97) {
                    ovrI = ovrH + 0.25;
                }
                // Se ovrH for 76 ou mais, ovrI permanece igual a ovrH (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrI;
        }
    }



    //APERTURA - 2ª MELHOR DEFESA - TITULARES
    function atualizarOVR10() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresT2MDA = document.getElementById("listaJogadoresT2MDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrI = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrJ = ovrI; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresT2MDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresT2MDA)) {
                if (ovrI >= 1 && ovrI <= 69) {
                    ovrJ = ovrI + 2.5;
                } else if (ovrI >= 70 && ovrI <= 77.5) {
                    ovrJ = ovrI + 1.5;
                } else if (ovrI >= 77.51 && ovrI <= 82.5) {
                    ovrJ = ovrI + 1;
                } else if (ovrI >= 82.51 && ovrI <= 92.5) {
                    ovrJ = ovrI + 0.5;
                } else if (ovrI >= 92.51 && ovrI <= 97) {
                    ovrJ = ovrI + 0.25;
                }
                // Se ovrI for 76 ou mais, ovrJ permanece igual a ovrI (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrJ;
        }
    }



    //APERTURA - 2ª MELHOR DEFESA - RESERVAS
    function atualizarOVR11() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresR2MDA = document.getElementById("listaJogadoresR2MDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrJ = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrK = ovrJ; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresR2MDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresR2MDA)) {
                if (ovrJ >= 1 && ovrJ <= 69) {
                    ovrK = ovrJ + 1.25;
                } else if (ovrJ >= 70 && ovrJ <= 77.5) {
                    ovrK = ovrJ + 0.75;
                } else if (ovrJ >= 77.51 && ovrJ <= 82.5) {
                    ovrK = ovrJ + 0.5;
                } else if (ovrJ >= 82.51 && ovrJ <= 92.5) {
                    ovrK = ovrJ + 0.25;
                } else if (ovrJ >= 92.51 && ovrJ <= 97) {
                    ovrK = ovrJ + 0;
                }
                // Se ovrJ for 76 ou mais, ovrK permanece igual a ovrJ (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrK;
        }
    }



    //CLAUSURA (DEFESA) A PARTIR DAQUI:



    //APERTURA - MELHOR DEFESA - TITULARES
    function atualizarOVR12() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresTMDA = document.getElementById("listaJogadoresTMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrG = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrH = ovrG; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresTMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresTMDA)) {
                if (ovrG >= 1 && ovrG <= 69) {
                    ovrH = ovrG + 5;
                } else if (ovrG >= 70 && ovrG <= 77.5) {
                    ovrH = ovrG + 3;
                } else if (ovrG >= 77.51 && ovrG <= 82.5) {
                    ovrH = ovrG + 2;
                } else if (ovrG >= 82.51 && ovrG <= 92.5) {
                    ovrH = ovrG + 1;
                } else if (ovrG >= 92.51 && ovrG <= 97) {
                    ovrH = ovrG + 0.5;
                }
                // Se ovrG for 76 ou mais, ovrH permanece igual a ovrG (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrH;
        }
    }



    //MELHOR DEFESA - TITULAR MENOS IMPACTANTE
    function atualizarOVR13() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresTMIMDA = document.getElementById("listaJogadoresTMIMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrOld = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrNew = ovrOld; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresTMIMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresTMIMDA)) {
                if (ovrOld >= 1 && ovrOld <= 69) {
                    ovrNew = ovrOld + 2.5;
                } else if (ovrOld >= 70 && ovrOld <= 77.5) {
                    ovrNew = ovrOld + 1.5;
                } else if (ovrOld >= 77.51 && ovrOld <= 82.5) {
                    ovrNew = ovrOld + 1;
                } else if (ovrOld >= 82.51 && ovrOld <= 92.5) {
                    ovrNew = ovrOld + 0.5;
                } else if (ovrOld >= 92.51 && ovrOld <= 97) {
                    ovrNew = ovrOld + 0.25;
                }
                // Se ovrOld for 76 ou mais, ovrNew permanece igual a ovrOld (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrNew;
        }
    }



    //APERTURA - MELHOR DEFESA - RESERVAS
    function atualizarOVR14() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresRMDA = document.getElementById("listaJogadoresRMDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrH = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrI = ovrH; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresRMDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresRMDA)) {
                if (ovrH >= 1 && ovrH <= 69) {
                    ovrI = ovrH + 2.5;
                } else if (ovrH >= 70 && ovrH <= 77.5) {
                    ovrI = ovrH + 1.5;
                } else if (ovrH >= 77.51 && ovrH <= 82.5) {
                    ovrI = ovrH + 1;
                } else if (ovrH >= 82.51 && ovrH <= 92.5) {
                    ovrI = ovrH + 0.5;
                } else if (ovrH >= 92.51 && ovrH <= 97) {
                    ovrI = ovrH + 0.25;
                }
                // Se ovrH for 76 ou mais, ovrI permanece igual a ovrH (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrI;
        }
    }



    //APERTURA - 2ª MELHOR DEFESA - TITULARES
    function atualizarOVR15() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresT2MDA = document.getElementById("listaJogadoresT2MDA");

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent; // Obtém o nome da terceira coluna
            let ovrI = parseFloat(linhas[i].cells[1].textContent); // Obtém o valor atual da segunda coluna (incluindo decimais)
            let ovrJ = ovrI; // Valor inicial, caso não seja necessário alterar

            // Verifica se o jogador está na lista "listaJogadoresT2MDA"
            if (jogadorEstaNaLista(jogadorNome, listaJogadoresT2MDA)) {
                if (ovrI >= 1 && ovrI <= 69) {
                    ovrJ = ovrI + 2.5;
                } else if (ovrI >= 70 && ovrI <= 77.5) {
                    ovrJ = ovrI + 1.5;
                } else if (ovrI >= 77.51 && ovrI <= 82.5) {
                    ovrJ = ovrI + 1;
                } else if (ovrI >= 82.51 && ovrI <= 92.5) {
                    ovrJ = ovrI + 0.5;
                } else if (ovrI >= 92.51 && ovrI <= 97) {
                    ovrJ = ovrI + 0.25;
                }
                // Se ovrI for 76 ou mais, ovrJ permanece igual a ovrI (acréscimo de 0)
            }

            // Atualiza o valor na tabela
            linhas[i].cells[1].textContent = ovrJ;
        }
    }



    //APERTURA - 2ª MELHOR DEFESA - RESERVAS
    function atualizarOVR16() {
        const tabela = document.getElementById("elenco-table");
        const linhas = tabela.getElementsByTagName("tr");
        const listaJogadoresR2MDA = document.getElementById("listaJogadoresR2MDA");

        const valoresFinaisOVR = [];

        for (let i = 1; i < linhas.length; i++) {
            const jogadorNome = linhas[i].cells[2].textContent;
            let ovrJ = parseFloat(linhas[i].cells[1].textContent);
            let ovrK = ovrJ;

            if (jogadorEstaNaLista(jogadorNome, listaJogadoresR2MDA)) {
                // Lógica para atualizar ovrK
                if (ovrJ >= 1 && ovrJ <= 69) {
                    ovrK = ovrJ + 1.25;
                } else if (ovrJ >= 70 && ovrJ <= 77.5) {
                    ovrK = ovrJ + 0.75;
                } else if (ovrJ >= 77.51 && ovrJ <= 82.5) {
                    ovrK = ovrJ + 0.5;
                } else if (ovrJ >= 82.51 && ovrJ <= 92.5) {
                    ovrK = ovrJ + 0.25;
                } else if (ovrJ >= 92.51 && ovrJ <= 97) {
                    ovrK = ovrJ + 0;
                }
                // Se ovrJ for 76 ou mais, ovrK permanece igual a ovrJ (acréscimo de 0)
            }

            linhas[i].cells[1].textContent = ovrK;


        }


    }




    //VALOR ESTIMADO ATUALIZADO A PARTIR DAQUI:















































});


