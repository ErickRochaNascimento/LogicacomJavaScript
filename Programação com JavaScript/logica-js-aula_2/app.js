alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}! Com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}! Com ${tentativas} tentativas`);
        }else{
            alert(`O número secreto é maior que ${chute} Com ${tentativas} tentativas`);
        }
        tentativas++;
    }
}
