function encriptar(){ 
    var fraseEncriptada="";
    const letras = [];
    var texto= document.getElementById('palabras_usuario').value;
    var palabra="";
   // Expresión regular para validar letras minúsculas sin acentos ni caracteres especiales
   var regex = /^[a-z]+$/;

   // Validar el texto ingresado
   if (texto !== "" && regex.test(texto)) { 
            console.log('encriptando'); 
            for(let i=0;i<texto.length;i++){
                if(texto[i]==="e"){
                    letras.push("enter");
                }else if(texto[i]==="i"){
                    letras.push("imes");
                }else if(texto[i]==="a"){
                    letras.push("ai");
                }else if(texto[i]==="o"){
                    letras.push("ober");
                }else if(texto[i]==="u"){
                    letras.push("ufat");
                }else{
                    letras.push(texto[i]);
                }  
            }
            //concatenacion de las palabras encriptadas
            for (let index = 0; index < letras.length; index++) {
                palabra = palabra.concat(letras[index]); 
            }
            fraseEncriptada=palabra;  
            document.getElementById('aviso_usuario').innerHTML='Encriptación realizada exitosamente';
            document.getElementById('instruccion_usuario').innerHTML=fraseEncriptada;
            modificarContenido(); 
            //almaceno la frase en memoria para descencriptar luego
            
    }else{
        document.getElementById('aviso_usuario').innerHTML='Ningún mensaje fue encontrado o se ingresaron caracteres no permitidos, como  letras mayusculas o acentos'; 
        document.getElementById('instruccion_usuario').innerHTML='Ingresa el texto que desees encriptar o desencriptar nuevamente.'; 
    }    
}

function desencriptar() {
    // Definir las conversiones de palabras a letras
    var Encriptada= document.getElementById('palabras_usuario').value;
    
    const conversiones = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    // Inicializar la cadena desencriptada
    let textoDescifrado = "";

    // Inicializar el índice para recorrer el texto encriptado
    let i = 0;

    // Iterar a través del texto encriptado
    while (i < Encriptada.length) {
        // Variable para comprobar si se encontró una conversión
        let conversiónEncontrada = false;

        // Revisar cada clave de conversión
        for (let clave in conversiones) {
            // Comprobar si la parte del texto coincide con alguna clave
            if (Encriptada.substring(i, i + clave.length) === clave) {
                // Añado la letra original al texto descifrado
                textoDescifrado += conversiones[clave];
                // Avanzo el índice por la longitud de la clave encontrada
                i += clave.length;
                // Marcar que se encontró una conversión
                conversiónEncontrada = true;
                break;
            }
        }

        // Si no se encontró una conversión, añado el carácter actual al texto descifrado
        if (!conversiónEncontrada) {
            textoDescifrado += Encriptada.charAt(i);
            i++;
        }
    }
    
    document.getElementById('aviso_usuario').innerHTML='Desencriptación realizada exitosamente';
    document.getElementById('instruccion_usuario').innerHTML=textoDescifrado;
}
