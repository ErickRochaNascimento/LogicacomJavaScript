let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    let num1 = parseInt(prompt('Digite um numero inteiro:'));
    let num2 = parseInt(prompt('Digite um numero inteiro:'));

    let soma = num1 + num2;
    alert(`Resultado da soma: ${soma}`);

}
