/*var resposta = prompt("Por favor, insira seu nome:");
console.log("Olá, " + resposta + "! Bem-vindo!");

var ddd = "11";
var telefone = "85858585";

console.log ( "(" +ddd + ")" + telefone);
*/

var resposta = prompt("Quantos deseja?");
var quantidade = Number(resposta);

if (isNAaN(quantidade) ){
    alert("Não é um número");
}