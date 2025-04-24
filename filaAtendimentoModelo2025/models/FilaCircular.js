// FilaCircular.js

class Fila {
    // # == private
    #inicio;
    #fim;
    #qtd;
    #elementos; //vetor 

    constructor (tamanho=10) {
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array (tamanho);
    }

    // Métodos
    isFull() {
    return this.#fim === this.#elementos.length -1;        
    }

    isEmpty() {
        return this.#fim < this.#inicio;
    }

    enqueue(dado) {
        if(!this.isFull()) {
            this.#fim++;
            this.#elementos[this.#fim] = dado;
            this.#qtd++;
            return true;
        }
        return false; // A fila está cheia
    }

    dequeue () {
        if (!this.isEmpty()) {
            const dado = this.#elementos[this.#inicio];
            this.#inicio++;
            this.#qtd--;
            return dado;
        }
        else {
            return null;
        }
    }

    // toString deve ser criado em todas as classes que recebem dados
    toString () {
        let filaString = " ";
        for (let i = this.#inicio; i <= this.#fim; i++) {
            filaString += this.#elementos[i] + " | ";
        }
        console.log(filaString);
        return filaString;
    }

}// fim classe