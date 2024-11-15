function cambiarColor(idelemento, valor) {
    document.getElementById(idelemento).style.color = valor;
}

function cambiarTamano(idelemento, valor) {
    document.getElementById(idelemento).style.fontSize = valor;
}

function cambiarTexto(idelemento, valor) {
    document.getElementById(idelemento).innerText = valor;
}

function cambiarEstiloLista(idelemento, valor) {
    document.getElementById(idelemento).style.listStyleType = valor;
}

function agregarElemento(idelemento, valor) {
    document.getElementById(idelemento).innerHTML += valor;
}

function negrita(idelemento, valor) {
    document.getElementById(idelemento).style.fontWeight = valor;
}

function centrar(idelemento, valor) {
    document.getElementById(idelemento).style.textAlign = valor;
}

function cambiarCursiva(idelemento, valor) {
    document.getElementById(idelemento).style.fontStyle = valor;
}

function cambiarFondo(idelemento, valor) {
    document.getElementById(idelemento).style.backgroundColor = valor;
}

function agregarEspaciado(idelemento, valor) {
    document.getElementById(idelemento).style.padding = valor;
}

function agregarBorde(idelemento, valor) {
    document.getElementById(idelemento).style.border = valor;
}

function aumentarAncho(idelemento, valor) {
    document.getElementById(idelemento).style.width = valor;
}