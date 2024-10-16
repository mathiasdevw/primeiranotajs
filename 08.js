function multiplos3(contador) {
    const multiplos = contador.filter(numero => numero % 3 === 0);
    console.log("Total de múltiplos: ", multiplos.length);
    return multiplos; 
}

const numeros = [1,2,3,4,5,6,
                 7,8,9,10,15,17,19];
console.log(multiplos3(numeros)); 