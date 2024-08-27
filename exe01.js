alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let palpite = prompt('Escolha um número entre 1 e 20');

//se chute for igual ao número secreto
if (palpite == numeroSecreto) {
    alert(`É isso mesmo! Você descobriu o número secreto, ${numeroSecreto}.`);
} else {
    alert('Você errou!')
}
