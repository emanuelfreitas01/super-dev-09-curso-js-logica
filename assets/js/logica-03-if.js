function exemploBasico() {
    let numero = 2;

    // se o número é igual 1 faço alguma coisa
    if (numero === 1) {
        // Fazer alguma coisa
        alert("Um");
    } else { // else é o senão
        alert("outro número")
    }
}

function exemploBasico02() {
    let idade = parseInt(prompt("Informe sua idade:"));

    if (idade < 18) { // se a idade é menor que 18 anos
        alert("Menor de idade")
    } else if (idade < 60) { // se a idade for menor que 60 anos
        alert("Adulto")
    } else {// senão eu sei que é maior que 59
        alert("Idoso")
    }
}

function exemploBasico03() {
    let numero = parseInt(prompt("Informe um número"));

    // if (numero <= 1)
    if (numero < 0) {
        alert("Número negativo")
    } else if (numero > 0) {
        alert("Número positivo")
    } else {
        alert("Número neutro")
    }
}

function exemploProduto() {
    // produto
    //Maçã 0.80, Pera 1.20, Laranja 2.5, Banana 2.00
    // Senão for nehuma das opções ecerra a execução

    let produto = prompt("Digite o nome do produto:");
    let quantidade = parseInt(prompt("Digite a quantidade:"));

    let precoUnitario = 0;

    if (produto === "Maçã") {
        precoUnitario = 0.80;
    } else if (produto === "Pera") {
        precoUnitario = 1.20;
    } else if (produto === "Laranja") {
        precoUnitario = 2.;
    } else if (produto === "Banana") {
        precoUnitario = 2.0;
    } else {
        alert("Produto não cadastrado");
        return;
    }

    let total = quantidade * precoUnitario;

    alert(
        "Produto: " + produto +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitario: R$" + precoUnitario.toFixed(2) +
        "\nTotal: R$" + total.toFixed(2)
    );
}

let regular = 0;
let bom = 0;
let otimo = 0;

function avaliarRegular(){
    regular = regular + 1;
}

function avaliarBom(){
    bom = bom + 1;
}

function avaliarOtimo(){
    otimo = otimo + 1;
}

function finalizarAvalicao(){
    alert(
        "Avaliações: \n Regular: " + regular + "\n Bom:" + bom + "\n Ótimo: " + otimo
    );

    regular = 0;
    bom = 0;
    otimo = 0;
}
