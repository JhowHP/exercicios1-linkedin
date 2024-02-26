var titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = "Esse é um novo título!";

titulo.onclick = function() {
    titulo.innerHTML = "O titulo foi clicado"
};