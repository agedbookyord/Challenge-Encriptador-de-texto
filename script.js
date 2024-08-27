const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const img = document.querySelector('.contenedorImagen');
const contenedor = document.querySelector('.contenedorParrafo');
const resultado = document.querySelector('.resultado');
const btnCopiar = document.querySelector('.btn-copy');
const cajaTexto = document.querySelector(".areatexto");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar
btnCopiar.onclick = copiar;

function encriptar(){
    ocultarAdelante();
    const texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

function desencriptar(){
    ocultarAdelante();
    const texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

function recuperarTexto(){
    return cajaTexto.value;
}

function ocultarAdelante(){
    img.classList.add("ocultar");
    contenedor.classList.add("ocultar");
} 

function encriptarTexto(mensaje){
    return mensaje
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje) {
    return mensaje
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiar() {
    navigator.clipboard.writeText(resultado.textContent).then(() => {
        console.log("Texto copiado al portapapeles");

        if (window.getSelection) {
            const range = document.createRange();
            range.selectNodeContents(resultado);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            alert("Texto copiado")
        }
    
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}