alert('Boas vindas ao nosso site!');

let numeroDigitado = prompt('Digite um número para realizar a contagem regressiva?');
let contador = 0;

while(contador <= numeroDigitado){
    alert(`${contador}`);
    contador++;
}

alert('Fim!')