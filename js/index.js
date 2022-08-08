
//encontrar altura e largura dinamicamente
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;
let criaMosquito;

let criaMosquitoTempo;

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750

}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {

    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1

    if (tempo < 0) {

        //vitoria

        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'

    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)



function posicaoRandomica() {

    //remover mosquito anterior caso exista

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //afetar pontos de vida

        //console.log('Elemento selecionado: v' + vidas)

        if (vidas > 3) {

            //Game Over
            window.location.href = 'fim_de_jogo.html'



        } else {

            document.getElementById('v' + vidas).src = "./img/coracao_vazio.png"
            vidas++
        }

    }


    //criando posições randomicas
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html

    let mosquito = document.createElement('img');

    mosquito.src = 'img/mosca.png';

    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //tamanho e lado aleatorio do mosquito

    mosquito.style.left = posicaoX + 'px'

    mosquito.style.top = posicaoY + 'px'

    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

    mosquito.id = 'mosquito'


    //remocao do mosquito ao clicar nele
    mosquito.onclick = function () {
        this.remove()
    }

}




//tamanhos randomicos

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//orientação da imagem : direita esquerda

function ladoAleatorio() {

    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }

}

//criaçao e remoçao dos mosquitos a cada tempo

criaMosquito = setInterval(function () {
    posicaoRandomica()
}, criaMosquitoTempo)



