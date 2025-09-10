alert('Boas vindas ao nosso site!');

let numeroDigitado = prompt('Digite um número:');

if(numeroDigitado < 0) {
    alert(`${numeroDigitado} é negativo`);
}else if(numeroDigitado > 0) {
    alert(`${numeroDigitado} é positivo`);
}else alert(`${numeroDigitado} é neutro`);
