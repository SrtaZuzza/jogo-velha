var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');
var vencedorSelecionado = document.getElementById('vencedorSelecionado');
// var quadrados = document.getElementsByClassName('quadrado');

changePlayer("x")

function pickSpot(id) {
    if(vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== "-") {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    if(jogador === "x") {
        jogador = "o";
    } else {
        jogador = "x";
    }

    changePlayer(jogador);
    checkWinner();
}

function changePlayer(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkWinner() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)) {
        changeColor(quadrado1, quadrado2, quadrado3);
        changeWinner(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)) {
        changeColor(quadrado4, quadrado5, quadrado6);
        changeWinner(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)) {
        changeColor(quadrado7, quadrado8, quadrado9);
        changeWinner(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)) {
        changeColor(quadrado1, quadrado4, quadrado7);
        changeWinner(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)) {
        changeColor(quadrado2, quadrado5, quadrado8);
        changeWinner(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)) {
        changeColor(quadrado3, quadrado6, quadrado9);
        changeWinner(quadrado3);
        return;
    }
    if(checaSequencia(quadrado1, quadrado5, quadrado9)) {
        changeColor(quadrado1, quadrado5, quadrado9);
        changeWinner(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)) {
        changeColor(quadrado3, quadrado5, quadrado7);
        changeWinner(quadrado3);
    }
}

function changeWinner(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if(quadrado2.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function changeColor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "#8cff9b";
    quadrado2.style.background = "#8cff9b";
    quadrado3.style.background = "#8cff9b";
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    
    for(let i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color = "#eee";
        quadrado.innerHTML = "-";
    }
    changePlayer("x")
}