function somaElementos(contador) {
    return contador.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [10, 22, 33, 44, 51, 1];
const resultado = somaElementos(numeros);
console.log(resultado); 