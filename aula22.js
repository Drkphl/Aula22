// const prompt = require("prompt-sync")();
// let Numeros = [];

// let numero = prompt("Digite um número: ");
// if (isNaN(Number(numero))) {
//     console.log("Número inválido");
// } else {
//     Numeros = numero.split("");
// }

// for (let i = 0; i < Numeros.length; i++) {
//     for (let j = i + 1; j < Numeros.length; j++) {
//         if (Numeros[i] < Numeros[j]) {
//             let ordem = Numeros[i];
//             Numeros[i] = Numeros[j];
//             Numeros[j] = ordem;
//         }
//     }
// }
// console.log(Numeros.join(""));

// const prompt = require("prompt-sync")({ sigint: true });

// function maiorNumeroPossivel(num) {
//     return parseInt(num.split("").sort((a, b) => b - a).join(""),10);
// }

// const numero = prompt("Por favor, forneça um número: ");
// const resultado = maiorNumeroPossivel(numero);
// console.log("O maior número possível com os algarismos fornecidos é: " + resultado);