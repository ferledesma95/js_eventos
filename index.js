function respuestaClick (){
    console.log ("Funciona!!");
}

function pararseArriba(){
    boton.innerHTML = "Hola"
}
function salirDelBoton(){
    boton.innerHTML = "Adios"
}

function pararseEnTitulo() {
    titulo.innerText = "Probando probando"
}

function salirDeTitulo(){
    titulo.innerText = "JUGANDO con Eventos."
}

let boton = document.getElementById ("Boton");
boton.addEventListener ("click" , respuestaClick);
boton.addEventListener ("mouseover" , pararseArriba);
boton.addEventListener ("mouseout" , salirDelBoton);

let titulo = document.getElementById("Titulo");
titulo.addEventListener ("mouseover" , pararseEnTitulo);
titulo.addEventListener ("mouseout" , salirDeTitulo);
