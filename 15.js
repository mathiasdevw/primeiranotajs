function somamatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

const matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const resultado = somamatriz(matrizExemplo);
console.log(resultado);
