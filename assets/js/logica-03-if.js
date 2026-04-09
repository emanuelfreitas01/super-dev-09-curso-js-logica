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

function avaliarRegular() {
    regular = regular + 1;
}

function avaliarBom() {
    bom = bom + 1;
}

function avaliarOtimo() {
    otimo = otimo + 1;
}

function finalizarAvalicao() {
    alert(
        "Avaliações: \n Regular: " + regular + "\n Bom:" + bom + "\n Ótimo: " + otimo
    );

    regular = 0;
    bom = 0;
    otimo = 0;
}

function exemploOperadorLogicoE() {
    let idade = parseInt(prompt("Digite a idade:"));

    //0, 1, 2, 3, 4, 5, 6, ..., 17
    if ((idade >= 0) && (idade <= 17)) {
        alert("Criança ou adolescente");
    } else if (idade >= 18) {
        alert("Adulto")
    } else {
        alert("Idade Inválida")
    }
}

/* 
Tabela Verdade Operador E
V e V =>  V
V e F =>  F
F e V =>  F
F e F =>  F
 */

function exemploOperadorLogicoOu() {
    let transporte = prompt("Digite o meio de transporte para viajar");

    // pipeline |
    if ((transporte === "moto") || (transporte = "carro")) {
        alert("Viajar de boas");
    } else {
        alert("Não vamos viajar");
    }
}

/*
    limpar Banheiro ou lumpar janelas => pão de queijo com queijo de minas
    caso contrário ....

    Tabela Verdade Ou
    V ou V => V
    V ou F => V
    F ou V => V
    F ou F => F
 */

function exemploLoja() {
    let nome1 = prompt("Digite o nome do jogo 1");
    let categoria1 = prompt("Digite a categoria do jogo");
    let precoBase1 = 399.90;

    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1 = 0;

    if ((categoria1 === "moba") || (categoria1 === "fps")) {
        percentualDesconto1 = 0.10;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "aventura") || (categoria1 === "rpg")) {
        percentualDesconto1 = 0.15;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "roguelike") || (categoria1 === "soulslike")) {
        percentualDesconto1 = 0.20;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }

    let nome2 = prompt("Digite o nome do jogo 2");
    let categoria2 = prompt("Digite a categoria do jogo");
    let precoBase2 = 190.99;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0;

    if ((categoria2 === "moba") || (categoria2 === "fps")) {
        percentualDesconto2 = 0.10;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "aventura") || (categoria2 === "rpg")) {
        percentualDesconto2 = 0.15;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "roguelike") || (categoria2 === "soulslike")) {
        percentualDesconto2 = 0.20;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }

    let totalPedido = precoComDesconto1 + precoComDesconto2;

    alert(
        "Nome do Jogo: " + nome1 +
        "\nCategoria: " + categoria1 +
        "\nPreço Base: R$" + precoBase1.toFixed(2) +
        "\nValor do desconto: R$" + precoDesconto1.toFixed(2) +
        "\nPercentual de desconto: " + percentualDesconto1 * 100 + "%" +
        "\nPreço do Jogo 1: R$" + precoComDesconto1.toFixed(2) +

        "\nNome do Jogo: " + nome2 +
        "\nCategoria: " + categoria2 +
        "\nPreço Base: R$" + precoBase2.toFixed(2) +
        "\nValor do desconto: R$" + precoDesconto2.toFixed(2) +
        "\nPercentual de desconto: " + percentualDesconto2 * 100 + "%" +
        "\nPreço do Jogo 1: R$" + precoComDesconto2.toFixed(2) +

        "\n\nTotal: R$" + totalPedido
    )
}