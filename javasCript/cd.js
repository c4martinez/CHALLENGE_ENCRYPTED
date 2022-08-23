const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje 
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado 
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}

function copiar (){
    var mensajeEncriptado =  inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

btnEncriptar.onclick = encriptar; 

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;