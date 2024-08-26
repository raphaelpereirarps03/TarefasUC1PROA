// Função é uma sequência de comandos
function exibirCamada1() {
    document.getElementById("camada1").style.visibility="visible";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
}

function exibirCamada2() {
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="visible";
    document.getElementById("camada3").style.visibility="hidden";
}

function exibirCamada3() {
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="visible";
}

function someTudo() {
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
}