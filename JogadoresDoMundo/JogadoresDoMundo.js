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



//LINKS PARA AS PÁGINAS
//LINK PARA CLUBES
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-botaoClubes")



    botaoClubes.addEventListener("click", function () {
        var url = "https://modocarreiraonline.github.io/alpha/Clubes/Clubes.html";
        window.location.href = url;
    })
})

//LINK PARA JOGADORES DO MUNDO
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-botaoJogadoresMundo")



    botaoClubes.addEventListener("click", function () {
        var url = "https://modocarreiraonline.github.io/alpha/JogadoresDoMundo/JogadoresDoMundo.html";
        window.location.href = url;
    })
})



//PESQUISA DE JOGADORES
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("id-input");
    const suggestions = document.getElementById("suggestions");
    const playerInfo = document.getElementById("player-info");

    input.addEventListener('input', showSuggestions);

    function showSuggestions() {
        const inputText = input.value;

        if (inputText.length < 3) {
            suggestions.style.display = "none";
            suggestions.innerHTML = "";
            return; // Sai da função se o comprimento for inferior a 3 caracteres
        }

        // Fazer uma solicitação para o arquivo JogadoresEAFC.csv (seguindo as políticas de segurança do seu servidor)
        fetch('../JogadoresEAFC.csv')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n'); // Dividir o arquivo em linhas
                const playersData = lines.slice(1).map(line => line.split(',')); // Ignorar a primeira linha (cabeçalho)
                const players = playersData.map(player => player[1]).filter(Boolean);

                if (inputText === "") {
                    suggestions.style.display = "none";
                    suggestions.innerHTML = "";
                } else {
                    suggestions.style.display = "block";
                    suggestions.innerHTML = "";

                    players.forEach(player => {
                        if (player.toLowerCase().includes(inputText.toLowerCase())) {
                            const suggestion = document.createElement('p');
                            suggestion.textContent = player;
                            suggestion.addEventListener('click', () => {
                                input.value = player;
                                suggestions.style.display = "none";
                                displayPlayerInfo(playersData, player);
                            });
                            suggestions.appendChild(suggestion);
                        }
                    });
                }
            });
    }
    



//POS
    //ATUALIZAÇÃO DE POSIÇÃO DE JOGADORES
    function atualizarPosicaoDoJogador() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }
    function atualizarPosicaoDoJogador11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var posicaoElement = document.getElementById('id-posiçao');
    
                    // Se o elemento existe
                    if (posicaoElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        posicaoElement.textContent = jogador[0];
                    }
                }
            }
        } 
    }



//CLU
    //ATUALIZAÇÃO DE CLUBE DE UM JOGADOR
    function atualizarClubeDoJogador() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }
    function atualizarClubeDoJogador11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-clube');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[9];
                    }
                }
            }
        }
    }
    function verificarClubeLigaBangu11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-clube"
            var clubeElement = document.getElementById('id-clube');
    
            // Se o elemento existe
            if (clubeElement) {
                // Obtém o conteúdo textual do elemento
                var conteudoAtual = clubeElement.textContent.trim();
    
                // Verifica se o conteúdo atual existe no décimo elemento de algum item do array
                var encontrado = dados.some(function (item) {
                    return item[9] === conteudoAtual;
                });
    
                // Se o conteúdo atual for encontrado, atualiza para "-"
                if (encontrado) {
                    clubeElement.textContent = "-";
                }
            }
        }
    }



//OVR
    //ATUALIZAÇÃO DE OVR DE UM JOGADOR
    function atualizarOVRDoJogador() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }
    function atualizarOVRDoJogador11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-ovr');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[1];
                    }
                }
            }
        }
    }



//IDADE
    //ATUALIZAÇÃO DE IDADE DE UM JOGADOR
    function atualizarIdadeDoJogador() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }
    function atualizarIdadeDoJogador11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-idade');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[4];
                    }
                }
            }
        }
    }



//PACE
    //ATUALIZAÇÃO DE PACE DE UM JOGADOR
    function atualizarPaceDoJogador() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador2() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela2');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador3() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela3');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador4() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela4');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador5() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela5');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador6() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela6');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador7() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela7');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador8() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela8');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador9() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela9');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador10() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela10');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }
    function atualizarPaceDoJogador11() {
        // Recupera os dados do localStorage
        var dadosArmazenados = localStorage.getItem('dadosTabela11');
    
        if (dadosArmazenados) {
            // Converte os dados de volta para um array
            var dados = JSON.parse(dadosArmazenados);
    
            // Obtém o elemento com id "id-nome"
            var nomeElement = document.getElementById('id-nome');
    
            // Se o elemento existe
            if (nomeElement) {
                var nomeJogador = nomeElement.textContent;
    
                // Encontra o array correspondente ao jogador pelo nome
                var jogador = dados.find(function (item) {
                    return item[2] === nomeJogador;
                });
    
                // Se o jogador foi encontrado
                if (jogador) {
                    // Obtém o elemento com id "id-posicao"
                    var clubeElement = document.getElementById('id-pace');
    
                    // Se o elemento existe
                    if (clubeElement) {
                        // Atualiza o conteúdo de texto com a posição do jogador
                        clubeElement.textContent = jogador[8];
                    }
                }
            }
        }
    }



    //APRESENTAÇÃO DAS INFORMAÇÕES DO JOGADOR
    function displayPlayerInfo(data, selectedPlayer) {
        const selectedPlayerData = data.find(player => player[1] === selectedPlayer);
        if (selectedPlayerData) {
            const playerName = selectedPlayerData[0] || "-";
            const playerPosition = getFirstWord(selectedPlayerData[2]) || "-";
            const playerRating = selectedPlayerData[3] || "-";
            const playerAge = selectedPlayerData[5] || "-";
            const playerClub = selectedPlayerData[6] || "-";
            const playerNacionality = selectedPlayerData[7] || "-";
            const playerValue = formatCurrency(selectedPlayerData[4]) || "-";
            const playerPace = selectedPlayerData[8] || "-";
            const playerHeight = selectedPlayerData[11] || "-";
            const playerWeight = selectedPlayerData[12] || "-";

            playerInfo.innerHTML = `
            <p id="id-nome" class="class-nome">${playerName}</p>
            <div class="class-descriçaoEValores">
                <div class="class-descricaoInformaçoes">
                    <p class="class-ovr">OVR:</p>
                    <p class="class-posiçao">Posição:</p>
                    <p class="class-idade">Idade:</p>
                    <p class="class-altura">Altura:</p>
                    <p class="class-peso">Peso:</p>
                    <p class="class-clube">Clube:</p>
                    <p class="class-nacionalidade">Nacionalidade:</p>
                    <p class="class-valor">Valor estimado:</p>
                    <p class="class-pace">Pace:</p>
                </div>
                <div class="class-valoresInformaçoes">
                    <p id="id-ovr" class="class-ovr">${playerRating}</p>
                    <p id="id-posiçao" class="class-posiçao">${playerPosition}</p>
                    <p id="id-idade" class="class-idade">${playerAge}</p>                    
                    <p class="class-altura">${playerHeight} cm</p>
                    <p class="class-peso">${playerWeight} kg</p>
                    <p id="id-clube" class="class-clube">${playerClub}</p>
                    <p class="class-nacionalidade">${playerNacionality}</p>

                    <p class="class-valor">${playerValue}</p>
                    <p id="id-pace" class="class-pace">${playerPace}</p>
                </div>
            </div>
        `;

            atualizarPosicaoDoJogador();
            atualizarPosicaoDoJogador2();
            atualizarPosicaoDoJogador3();
            atualizarPosicaoDoJogador4();
            atualizarPosicaoDoJogador5();
            atualizarPosicaoDoJogador6();
            atualizarPosicaoDoJogador7();
            atualizarPosicaoDoJogador8();
            atualizarPosicaoDoJogador9();
            atualizarPosicaoDoJogador10();
            atualizarPosicaoDoJogador11();

            verificarClubeLigaBangu();
            verificarClubeLigaBangu2();
            verificarClubeLigaBangu3();
            verificarClubeLigaBangu4();
            verificarClubeLigaBangu5();
            verificarClubeLigaBangu6();
            verificarClubeLigaBangu7();
            verificarClubeLigaBangu8();
            verificarClubeLigaBangu9();
            verificarClubeLigaBangu10();
            verificarClubeLigaBangu11();

            atualizarClubeDoJogador();
            atualizarClubeDoJogador2();
            atualizarClubeDoJogador3();
            atualizarClubeDoJogador4();
            atualizarClubeDoJogador5();
            atualizarClubeDoJogador6();
            atualizarClubeDoJogador7();
            atualizarClubeDoJogador8();
            atualizarClubeDoJogador9();
            atualizarClubeDoJogador10();
            atualizarClubeDoJogador11();

            atualizarOVRDoJogador();
            atualizarOVRDoJogador2();
            atualizarOVRDoJogador3();
            atualizarOVRDoJogador4();
            atualizarOVRDoJogador5();
            atualizarOVRDoJogador6();
            atualizarOVRDoJogador7();
            atualizarOVRDoJogador8();
            atualizarOVRDoJogador9();
            atualizarOVRDoJogador10();
            atualizarOVRDoJogador11();

            atualizarIdadeDoJogador();
            atualizarIdadeDoJogador2();
            atualizarIdadeDoJogador3();
            atualizarIdadeDoJogador4();
            atualizarIdadeDoJogador5();
            atualizarIdadeDoJogador6();
            atualizarIdadeDoJogador7();
            atualizarIdadeDoJogador8();
            atualizarIdadeDoJogador9();
            atualizarIdadeDoJogador10();
            atualizarIdadeDoJogador11();

            atualizarPaceDoJogador();
            atualizarPaceDoJogador2();
            atualizarPaceDoJogador3();
            atualizarPaceDoJogador4();
            atualizarPaceDoJogador5();
            atualizarPaceDoJogador6();
            atualizarPaceDoJogador7();
            atualizarPaceDoJogador8();
            atualizarPaceDoJogador9();
            atualizarPaceDoJogador10();
            atualizarPaceDoJogador11();
            
            playerInfo.style.display = "block";
        }
    }


    
    // Função para formatar o valor como moeda (em euros)
    function formatCurrency(value) {
        // Remova os dois últimos caracteres (supondo que eles sejam "M" e "€")
        value = value.slice(0, -2);
        // Converta o valor para número (supondo que o valor original seja uma string numérica)
        const numericValue = parseFloat(value);
        // Formate o número como moeda (em euros)
        const formattedValue = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(numericValue);
        return formattedValue;
    }


    // Função para obter a primeira palavra de uma string
    function getFirstWord(str) {
        const words = str.split(" "); // Divida a string em palavras
        if (words.length > 0) {
            return words[0]; // Pegue a primeira palavra
        } else {
            return str; // Se não houver espaço, retorne a string original
        }
    }
});
