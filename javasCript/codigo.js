const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnBoton1 = document.querySelector("#boton1");
const btnBoton2 = document.querySelector("#boton2");
const btnBoton3 = document.querySelector("#boton3");

function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje 
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
    inputMensaje.value = ""
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
    inputMensaje.value = ""
}

function copiar (){
    var mensajeEncriptado =  inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputResultado.value = ""
    alert("Mensaje copiado");
}

btnBoton1.onclick = encriptar; 

btnBoton2.onclick = desencriptar;

btnBoton3.onclick = copiar;