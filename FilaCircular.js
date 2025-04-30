// Fila circular

class FilaCircular {
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
    return this.#qtd === this.#elementos.length;        
    }

    isEmpty() {
        return this.#qtd === 0;
    }

    enqueue(dado) {
        if(!this.isFull()) {
            if (this.#fim === this.#elementos.length -1) { //caso o vetor esteja cheio
                this.#fim === 0;
            } else {
                this.#fim++;
                this.#elementos[this.#fim] = dado;
                this.#qtd++;
                return true;
            }
        }
        return false; // A fila está cheia
    }

    dequeue () {
        if (!this.isEmpty()) {
            if (this.#inicio === this.#elementos.length) {
                this.#inicio === 0;
            } else {
                const dado = this.#elementos[this.#inicio];
                this.#inicio++;
                this.#qtd--;
                return dado;
            }
        }
        else {
            return null; // fila vazia
        }
    }

    // VAI CAIR NA PROVA!!! ESTUDAR COMO E PQ FUNCIONA
    // toString deve ser criado em todas as classes que recebem dados
    toString () {
        let filaString = " ";
        let pos = this.#inicio;
        for (let i = 0; i < this.#qtd; i++) {
            filaString += this.#elementos[i] + " | ";
            if (pos === this.#elementos.length -1) {
                pos = 0;
            } else {
                pos++;
            }
        }
        console.log(filaString);
        return filaString;
    }

}// fim classe