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
        var url = "https://fmarques2680.github.io/modocarreiraonline/Clubes/Clubes.html";
        window.location.href = url;
    })
})



//LINK PARA JOGADORES DO MUNDO
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-botaoJogadoresMundo")


    botaoClubes.addEventListener("click", function () {
        var url = "https://fmarques2680.github.io/modocarreiraonline/Clubes/Clubes.html";
        window.location.href = url;
    })
})


//LINK PARA OS CLUBES
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube1")
    botaoClubes.addEventListener("click", function () {
        var url = "https://fmarques2680.github.io/modocarreiraonline/Clubes/Clube1/Clube1.html";
        window.location.href = url;
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube2")
    botaoClubes.addEventListener("click", function () {
        var url = "https://fmarques2680.github.io/modocarreiraonline/Clubes/Clube2/Clube1.html";
        window.location.href = url;
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube3")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 3/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube4")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 4/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube5")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 5/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube6")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 6/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube7")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 7/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube8")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 8/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube9")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 9/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube10")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 10/Clube1.html"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const botaoClubes = document.getElementById("id-linkClube11")
    botaoClubes.addEventListener("click", function () {
        window.location.href = "Clube 11/Clube1.html"
    })
})



//FUNÇÕES DO LOCALSTORAGE SENDO CHAMADAS
salvarNoLocalStorage("id-linkClube1", "clubeSelecionado1");
carregarDoLocalStorage("clubeSelecionado1");
salvarNoLocalStorage("id-linkClube2", "clubeSelecionado2");
carregarDoLocalStorage("clubeSelecionado2");
salvarNoLocalStorage("id-linkClube3", "clubeSelecionado3");
carregarDoLocalStorage("clubeSelecionado3");
salvarNoLocalStorage("id-linkClube4", "clubeSelecionado4");
carregarDoLocalStorage("clubeSelecionado4");
salvarNoLocalStorage("id-linkClube5", "clubeSelecionado5");
carregarDoLocalStorage("clubeSelecionado5");
salvarNoLocalStorage("id-linkClube6", "clubeSelecionado6");
carregarDoLocalStorage("clubeSelecionado6");
salvarNoLocalStorage("id-linkClube7", "clubeSelecionado7");
carregarDoLocalStorage("clubeSelecionado7");
salvarNoLocalStorage("id-linkClube8", "clubeSelecionado8");
carregarDoLocalStorage("clubeSelecionado8");
salvarNoLocalStorage("id-linkClube9", "clubeSelecionado9");
carregarDoLocalStorage("clubeSelecionado9");
salvarNoLocalStorage("id-linkClube10", "clubeSelecionado10");
carregarDoLocalStorage("clubeSelecionado10");
salvarNoLocalStorage("id-linkClube11", "clubeSelecionado11");
carregarDoLocalStorage("clubeSelecionado11");



//ADICIONAR NOME DO CLUBE
function adicionarClube(inputId, divId, modalId) {
    var inputClube = document.getElementById(inputId).value;
    var divClubeSelecionado = document.getElementById(divId);
    var modalEdicaoClube = document.getElementById(modalId);

    divClubeSelecionado.innerText = inputClube;
    modalEdicaoClube.style.display = "none";
}

// Event listeners para os botões de editar
document.getElementById("Botao-A").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube1").style.display = "block";
});

document.getElementById("Botao-B").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube2").style.display = "block";
});
document.getElementById("Botao-C").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube3").style.display = "block";
});
document.getElementById("Botao-D").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube4").style.display = "block";
});
document.getElementById("Botao-E").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube5").style.display = "block";
});
document.getElementById("Botao-F").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube6").style.display = "block";
});
document.getElementById("Botao-G").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube7").style.display = "block";
});
document.getElementById("Botao-H").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube8").style.display = "block";
});
document.getElementById("Botao-I").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube9").style.display = "block";
});
document.getElementById("Botao-J").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube10").style.display = "block";
});
document.getElementById("Botao-K").addEventListener("click", function () {
    document.getElementById("id-modalEdiçaoClube11").style.display = "block";
});



//SALVAR NOME DO CLUBE
function salvarNoLocalStorage(botaoId, divId) {
    document.getElementById(botaoId).addEventListener("click", function () {
        var clubeSelecionadoText = document.getElementById(divId).innerText;
        localStorage.setItem(divId, clubeSelecionadoText);
    });
}

//CARREGAR NOME DO CLUBE
function carregarDoLocalStorage(divId) {
    // Obtém o valor armazenado no localStorage
    var clubeSelecionadoText = localStorage.getItem(divId);

    // Verifica se há um valor armazenado
    if (clubeSelecionadoText !== null) {
        // Atribui o valor à div correspondente
        document.getElementById(divId).innerText = clubeSelecionadoText;
    }
}