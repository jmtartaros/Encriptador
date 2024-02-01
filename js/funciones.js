const vocalesEncriptadas = ["ai", "enter","imes","ober","ufat"];
const vocales = ["a", "e" ,"i", "o", "u"];
const almacenar = [];
let desencriptar = document.getElementById("desencriptar").addEventListener("click", desencriptarTexto);
let encriptar = document.getElementById("encriptar").addEventListener("click", encriptarTexto);
const textArea = document.getElementById("textarea");


function encriptarTexto(){
        let contenido = textArea.value;
        // convierte el string en un Array, saparando cada letra
        let caracter = contenido.split("");
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
                if (caracter.length === 0) {
                        insertarElemento("h2", "No se encontraron vocales para encriptar.");
                } else  {
                        agregarTexto(caracter.join(""));
                        textArea.value = caracter.join("");
                        almacenar.push(caracter.join(""));
                        insertarElemento("h2 ","Texto Encriptado Exitosamente.");
                        console.log(caracter);
                        eliminarMensaje();
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

function insertarElemento(elemento, texto){
        let nuevoElemento = document.querySelector(elemento);
        nuevoElemento.innerHTML = texto;
        
}


function agregarTexto(texto){
        const añadirTexto = document.getElementById("cripto");
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="textos-2 ">
                <p class="texto-cripto" >${texto}</p>
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
