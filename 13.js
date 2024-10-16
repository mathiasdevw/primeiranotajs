function substituir(frutas, novaFruta) {
    frutas.splice(1, 1, novaFruta);
    return frutas;
}

const frutas = ['maçã', 'banana', 'laranja', 'uva'];
const novaFruta = 'abacaxi';
const resultado = substituir(frutas, novaFruta);
console.log(resultado);

