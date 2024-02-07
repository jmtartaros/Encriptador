const vocalesEncriptadas = [ "ai", "enter","imes","ober","ufat"];
const vocales = ["a", "e" ,"i", "o", "u"];
const almacenar = [];
const desencriptar = document.getElementById("desencriptar").addEventListener("click", desencriptarTexto);
const encriptar = document.getElementById("encriptar").addEventListener("click", encriptarTexto);
const textArea = document.getElementById("textarea");


//Crea un boton en el html
let rect = document.getElementById("rectangulo");
const copiarTexto = document.createElement("button");
copiarTexto.id = "copiar";
copiarTexto.innerHTML = "Copiar";
let segundoHijo = rect.lastElementChild;
segundoHijo.appendChild(copiarTexto);

function encriptarTexto(){
        console.log("Función encriptarTexto ejecutada");
        let contenido = textArea.value;
        // convierte el string en un Array, saparando cada letra
        let caracter = contenido.split("");
        let limiteDePalabras = 300;
        // recorre el Array 
        caracter.forEach((elemento, index) => {
                 //indexof nos indica en que posicion se encuentra la vocal en el elemento
                const vocalIndex = vocales.indexOf(elemento.toLowerCase());
                if (vocalIndex !== -1) {
                        caracter[index] = vocalesEncriptadas[vocalIndex]; // Si el elemento no se encuentra no cambiara el valor de este
                        eliminarElement("muñeco");
                        eliminarElement("parrafo");
                }
        });

        if (caracter.length > limiteDePalabras) {
                insertarElemento("h3", `Se extendio el límite de ${limiteDePalabras} caracteres permitidos.`);
                eliminarMensaje();
        } else {
                if (caracter.length === 0) {
                        insertarElemento("h2", "No se encontraron vocales para encriptar.");
                } else  {
                        agregarTexto(caracter.join(""));
                        textArea.value = caracter.join("");
                        almacenar.push(caracter.join(""));
                        insertarElemento("h2 ","Texto Encriptado Exitosamente.");
                        limpiarCaja();
                        eliminarMensaje();
                        copiarTexto.style.display = "inline-block";
                }
        }
}
function desencriptarTexto() {
        const texto = textArea.value;
        let desencriptarCaracter = texto;
        vocalesEncriptadas.forEach((vocalEncriptada, vocalIndex) => {
                //? Utiliza una expresión regular para reemplazar todas las ocurrencias de la vocal encriptada
                const revertirEncriptacion = new RegExp(vocalEncriptada, 'ig');
                desencriptarCaracter = desencriptarCaracter.replace(revertirEncriptacion, vocales[vocalIndex]);
        });
        
        textArea.value = desencriptarCaracter;
        
        console.log(desencriptarCaracter);
}

document.addEventListener("DOMContentLoaded", function () {
        const botonCopiar = document.getElementById("copiar");
        if (botonCopiar) {
                botonCopiar.addEventListener("click", copiarMensajeEncriptado);
        }
})
function copiarMensajeEncriptado() {
        const claseElemento = 'texto-cripto';
        // Obtener todos los elementos con la clase especificada
        const elementosEncriptados = document.querySelectorAll("." + claseElemento);
        // Concatenar el texto de todos los elementos
        let textoConcatenado = "";
        elementosEncriptados.forEach(function(elemento) {
                textoConcatenado += elemento.innerText.trim() + '\n';
        });
        // Crear un área de texto temporal
        const textArea = document.createElement("textarea");
        textArea.value = textoConcatenado;
        // Añadir el área de texto temporal al cuerpo del documento
        document.body.appendChild(textArea);
        // Seleccionar y copiar el texto dentro del área de texto temporal
        textArea.select();
        document.execCommand("copy");
        // Eliminar el área de texto temporal después de copiar
        document.body.removeChild(textArea);
}
function insertarElemento(elemento, texto){
        let nuevoElemento = document.querySelector(elemento);
        nuevoElemento.innerHTML = texto;
        
}
function agregarTexto(texto){
        const añadirTexto = document.getElementById("textos");
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="textos-2 ">
                <p class="texto-cripto">${texto}</p>
        </div>
        `;
        añadirTexto.appendChild(element);
}
function eliminarMensaje(){
        let mensaje = document.querySelector(".mensaje");
        setTimeout(function() {
                mensaje.remove();
        }, 3000);
}
function eliminarElement(id) {
        let element = document.getElementById(id);
        if(element){
                element.remove();
        }
}
function limpiarCaja() {
        document.getElementById("textarea").value = "";
}
