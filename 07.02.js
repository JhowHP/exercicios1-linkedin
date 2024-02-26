var texto = "Olá Mundo, meu nome é Lucas!"
texto.length;
console.log(texto.length);

// onde está incluído nome
if ( texto.includes("nome")) {
    console.log("Texto encontrado!");
}
else {
    console.log("Não encontrado.");
}

var posicao = texto.lastIndexOf("e");

//aparição da letra e por ultimo
if (posicao == -1) {
    console.log("Não Encontrado.");
}
else{
    console.log("Texto encontrado na posição " + posicao)
}