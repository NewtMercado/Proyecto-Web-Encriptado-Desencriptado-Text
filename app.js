// Función para asignar texto a un elemento HTML por su id
function AsignarTextoElemento(Id, Texto) {
    let ElementoHTML = document.getElementById(Id); // Obtiene el elemento HTML por su id
    ElementoHTML.innerHTML = Texto; // Asigna el texto proporcionado al elemento HTML
    return;
}

// Función para encriptar el texto de entrada
function Encripta() {
    let texto_input = document.querySelector("input").value; // Obtiene el valor del campo de entrada
    let texto_encriptado = texto_input.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat"); // Reemplaza las letras por sus equivalentes encriptados
    AsignarTextoElemento("decrypt-output", texto_encriptado); // Asigna el texto encriptado al elemento de salida

    LimpiarCaja("encrypt-input"); // Limpia el campo de entrada
    HabilitarDesabilitarDesencriptar();
    return;
}

function HabilitarDesabilitarDesencriptar() {
    let botonDesencriptar = document.querySelector(".decrypt-button"); // Selecciona el botón de desencriptar

    // Habilita el botón de desencriptar
    if (botonDesencriptar.disabled == false){
        botonDesencriptar.disabled = true;
         // Cambia el color de fondo y el color del texto del botón de desencriptar
    botonDesencriptar.style.backgroundColor = "#6c757d"; // Cambia el color de fondo (verde)
    botonDesencriptar.style.color = "#fff"; // Cambia el color del texto (blanco)
    }
    else{
        botonDesencriptar.disabled = false;
         // Cambia el color de fondo y el color del texto del botón de desencriptar
    botonDesencriptar.style.backgroundColor = "#007bff"; // Cambia el color de fondo (verde)
    botonDesencriptar.style.color = "#fff"; // Cambia el color del texto (blanco)
    }
    return;
}
// Función para desencriptar el texto de entrada
function Desencripta() {
    let texto_input = document.querySelector("input").value; // Obtiene el valor del campo de entrada
    let texto_desencriptado = texto_input.replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ai/g, "a")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u"); // Reemplaza las palabras encriptadas por sus letras originales
    AsignarTextoElemento("decrypt-output", texto_desencriptado); // Asigna el texto desencriptado al elemento de salida

    LimpiarCaja("decrypt-output"); // Limpia el campo de entrada
    HabilitarDesabilitarDesencriptar();
    return;
}

// Función para limpiar el campo de entrada
function LimpiarCaja(id) {
    let caja = document.getElementById(id); // Obtiene el elemento del campo de entrada por su id
    caja.value = ""; // Limpia el contenido del campo de entrada

    return;
}

// Función para copiar el texto en el campo de salida al portapapeles
function copiar() {
    let copiarSalida = document.getElementById("decrypt-output").innerText; // Obtiene el texto del campo de salida
    let textArea = document.createElement("textarea"); // Crea un elemento textarea temporal
    textArea.value = copiarSalida; // Asigna el texto a copiar al textarea
    document.body.appendChild(textArea); // Agrega el textarea al documento
    textArea.select(); // Selecciona el texto en el textarea
    document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
    document.body.removeChild(textArea); // Elimina el textarea del documento
    alert('Texto copiado al portapapeles'); // Muestra una alerta indicando que el texto ha sido copiado
}
