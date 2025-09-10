let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto
}

let min = 5;
let max = 10;


exibirTextoNaTela('h1','Jogo  do número secreto');
exibirTextoNaTela('p',`Escolha um número entre ${min} e ${max}`);


function verificarChute(){
    console.log('O botão foi clicadol');
}

function gerarNumeroAleatorio(max, min){
    parseInt(Math.random()* max + min);
}