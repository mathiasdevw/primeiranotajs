function quadradosMaioresQueDez(numeros) {
    return numeros.filter(x => x > 10).map(x => x ** 2);
}
