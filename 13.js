function substituir(frutas, novaFruta) {
    frutas.splice(1, 1, novaFruta);
    return frutas;
}

const frutas = ['maçã', 'banana', 'laranja', 'uva'];
const novafruta = 'abacaxi';
const resultado = substituir(frutas, novafruta);
console.log(resultado);

