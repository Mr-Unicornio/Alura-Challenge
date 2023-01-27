function encriptartxt (){
    
    var txtEntrante = document.querySelector(".txtarea").value;
    var txtEncrip = txtEntrante.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    document.querySelector(".mensaje").value = txtEncrip ;
    document.querySelector(".txtarea").value = "";   
    document.querySelector(".mensaje").style.backgroundImage = "none";
}


function desencriptartxt () {
    var txtEntrante = document.querySelector(".txtarea").value;
    var txtEncrip = txtEntrante.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a")
    .replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".mensaje").value = txtEncrip ;
    document.querySelector(".txtarea").value = "";   
    document.querySelector(".mensaje").style.backgroundImage = "none";
}

function copiar(){
    var texto = document.getElementById("mensajeid");
    texto.select();
    document.execCommand("copy");
}