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
        var url = "https://fmarques2680.github.io/modocarreiraonline/JogadoresDoMundo/JogadoresDoMundo.html";
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
salvarNoLocalStorage("salvarNomeClube", "clubeSelecionado1");
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