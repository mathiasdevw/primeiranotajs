function quadradomaiorquedez(contador) {
    return contador
        .filter(numero => numero > 10)
        .map(numero => numero * numero);
}

const numeros = [5, 12, 3, 18, 9, 37, 10, 17, 50, 2, 7, 9, 90];
const resultado = quadradomaiorquedez(numeros);
console.log(resultado); 

