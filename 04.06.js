var combustivel = "Alcool";
switch (combustivel) {
    case "Gás":
    case "Alcool":
        console.log("Preço: R$ 3.00");
        break;
    case "Gasolina":
        console.log("Preço: R$3.30");
        break;
    case "Diesel":
        console.log("Preço: R$2,70");
        break;
    default:
        console.log("Tipo de combustivel desconhecido");
}
