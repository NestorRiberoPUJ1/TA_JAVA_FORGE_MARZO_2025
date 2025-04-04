

function playAudio() {
    /* BUSCAMOS EL ELEMENTO DE AUDIO EN EL HTML */
    const audioSource = document.getElementById("soundtrack");
    /* LE DECIMOS QUE EMPIECE A REPRODUCIR */
    audioSource.play();
}

function hoverListItem(elemento) {
    elemento.style.backgroundColor = "rgb(139, 197, 255)";
    const descripcion = elemento.querySelector("p");
    descripcion.style.display = "block";
}
function unhoverListItem(elemento) {
    elemento.style.backgroundColor = "transparent";
    const descripcion = elemento.querySelector("p");
    descripcion.style.display = "none";
}