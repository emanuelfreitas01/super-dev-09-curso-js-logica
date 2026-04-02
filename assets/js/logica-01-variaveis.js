function exemploMensagem() {
    alert("Hello Wolrd minha primeira menssagem 'Emanuel'");
}

function exemploString() {
    //criando a variavel
    let nome = "Elias";
    let sobrenome = "Otto com Dois T";
    //Alterar o valor da variavel sobrenome
    sobrenome = "Otto";
    //Apresentando a variavel
    alert(nome);
    alert(sobrenome);
}

function exemploStringConcatenacao() {
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    //Concatenação: Juntar um String(texto) com alguma outra coisa

    //"Sabão em pó" + "" => "Sabão em pó "
    //"Sabão em pó " + "Omo" => "Sabão em pó Omo" 

    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro() {
    let produto = "Pc Gamer da Xuxa";
    let quantidaPcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidaPcs * quantidadeMemoriaPorPc;


    // "\n" serve para quebrar a linha
    alert("Produto: " + produto +
        "\nQuantidade de Pcs: " + quantidaPcs +
        "\nMemória RAM por PC: " + quantidadeMemoriaPorPc + "GB" +
        "\nTotal de GB dos PCs: " + totalGb + "GB"
    );
}

function exemploFloat() {
    let endereco = "Rua XV de Novembro";
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    // Quando entra na empresa
    let tenhoFeriasVencidas = false;

    // Completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias Vencidas?" + tenhoFeriasVencidas)
}