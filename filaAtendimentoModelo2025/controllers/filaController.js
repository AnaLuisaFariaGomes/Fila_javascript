const minhaFila = new FilaCircular(5);

function addElemento(){
    const novoElemento = 
       document.getElementById("txtnovoNome");
    if(!minhaFila.isFull()){
       minhaFila.enqueue(novoElemento.value);
       mostrarFila();
       novoElemento.value = " "; // limpa
       novoElemento.focus(); // cursor no input
    } 
    else
        alert("Fila cheia!");     
} // fim add

function mostrarFila() {
    const listaFila = document.getElementById("listFila");
    listaFila.textContent = minhaFila.toString();
} // fim mostrar

function atenderFila() {
    if(!minhaFila.isEmpty()){
        const atendido = minhaFila.dequeue();
        alert("Pessoa atendida: " + atendido);
        mostrarFila();
        // salvar no banco de texto do navegador
    } else {
        alert("Fila vazia!!")
    }
}// fim atender