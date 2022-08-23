const boton3 = document.getElementById("boton3");
const resultado = document.getElementById("resultado");
const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function(){ 
    const value = document.getElementById("mensaje").value;
    resultado.innerHTML = value;
    boton3.innerHTML
})
