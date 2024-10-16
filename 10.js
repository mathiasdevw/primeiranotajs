const numero = 10;

function numeroPrimo(num) {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }  
    return true;
}
if (numeroPrimo(numero)) {
    console.log(`número primo.`, numero);
} else {
    console.log(`não e primo.`, numero);
}

