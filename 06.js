class Fila {
    constructor(){
        this.item = [];
    }

    enfileirar(item){
        this.item.push(item);
        console.log(`${item} Adicionado na fila`);
    }

    tirarfila(){
        if (this.estaVazia()){
            console.log("Fila Vazia");
            return null;
        } else {
            const removido = this.item.shift(); // Remove o primeiro item da fila
            console.log(`${removido} Removido da fila`);
            return removido;
        }
    }

    estaVazia(){
        return this.item.length === 0;
    }

    mostrar(){
        console.log("Fila:", this.item.join(", "));
    }
}

const fila = new Fila();
fila.enfileirar(10);
fila.enfileirar(20);

fila.mostrar();

fila.tirarfila();
fila.mostrar();
