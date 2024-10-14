numero01 = 1
numero02 = 2

soma = numero01 + numero02
console.log(soma)

if (numero01 > numero02){
    console.log("O maior numero e o: ",numero01)
}else if (numero02 > numero01){
    console.log("O Maior numero e o: ", numero02)
}
else{
    console.log("Os numeros são iguais")
}


if (soma %2 == 0){
    console.log("NUmero e Par")
}else{
    console.log("Numero e  Impar")
}