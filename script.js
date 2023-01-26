const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const Copiar = document.querySelector(".copiar");


var matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
   const textoEncriptado = encriptar(textArea.value);
   mensaje.value = textoEncriptado;
   textArea.value = "";
   mensaje.style.backgroundImage = "none";
   Copiar.style.visibility = "visible"
}


function encriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();

   // let matrizCodigo = [["e", "entrer"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
     stringDesencriptada = stringDesencriptada.toLowerCase()
    //let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufst"]];
   

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada
}

function copiar() {
    let textoCopiar = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(textoCopiar);
    mensaje.value = "";
}