let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
// let maiorNota = notas[0];
// let menorNota = notas[0];
// let notasAcimaMedia = 0;
// let notasAbaixoMedia = 0;

function total(num) {
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
        return soma;
    }

    //     function Maior() {
    //         if (notas[i] > maiorNota) {
    //             maiorNota = notas[i];
    //         }
    //     }

    //     if (notas[i] < menorNota) {
    //         menorNota = notas[i];
    //     }

    //     if (notas[i] >= 6) {
    //         console.log(notas[i]);
    //         notasAcimaMedia++;
    //     } else {
    //         notasAbaixoMedia++;
    //     }
    // }

    // console.log(soma / notas.length); // ref A
    // console.log(maiorNota, menorNota); // ref B
    // console.log(notasAcimaMedia); // ref C
    // console.log("reprovados:", notasAbaixoMedia); // ref E

    // notas.push(8.0); // ref D

    // // ref D
    // for (let i = 0; i < notas.length; i++) {
    //     console.log(notas[i]);
}

console.log(total());
