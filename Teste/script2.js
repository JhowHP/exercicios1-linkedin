function funcaoUm() {
    //alert("funcaoDois vai ser chamada");
    funcaoDois();  
  }
  
  function funcaoDois() {
    //alert("funcaoTres vai ser chamada");
    funcaoTres();
  }
  
  function funcaoTres() {
    //alert("funcaoQuatro vai ser chamada");
    funcaoQuatro();
  }
  
  function funcaoQuatro() {
    //alert("Vou mudar o titulo");
    meuTitulo.innerHTML = "Esse é um novo!";  
  }
  
  //alert("Documento JavaScript carregado");
  
  var meuTitulo = document.getElementById("tituloPrincipal");
  
  meuTitulo.onclick = function () {
    //alert("funcaoUm vai ser chamada");
    funcaoUm();
    //alert("funcaoUm foi chamada");
  } 
  
  