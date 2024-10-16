function odernar(ordem){
    return ordem.sort((a,b) =>{
        if (a < b){
            return -1;
        }else if (a > b) {
            return 1;
        }else{
            return 0;
        }
    });
}
const frutas = ['maça', 'kiwi', 'uva']
const frutaordenada = odernar(frutas);
console.log(frutaordenada);