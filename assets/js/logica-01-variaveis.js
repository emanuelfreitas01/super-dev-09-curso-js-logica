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

function exemploBoolean() {
    // Quando entra na empresa
    let tenhoFeriasVencidas = false;

    // Completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias Vencidas?" + tenhoFeriasVencidas)
}

function calcularSalario() {
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com"
    let valorHora = 150.60; // por hora de streeming
    let horasPorMes = 50;
    let beneficiosDonate = 3500.98;

    // Calcular o sálario bruto
    let salarioBruto = valorHora * horasPorMes;

    // Calcular o salário liquido
    let salarioLiquido = salarioBruto + beneficiosDonate;

    alert(
        "Colaborador: " + colaborador +
        "\nEmail: " + email +
        "\nValor por Horas: R$" + valorHora.toFixed(2) +
        "\nHoras por Mês: " + horasPorMes +
        "\nSalário bruto: R$" + salarioBruto.toFixed(2) +
        "\nBeneficio Donate: R$" + beneficiosDonate.toFixed(2) +
        "Salario liquido: R$" + salarioLiquido.toFixed(2)
    )
}

// <button type="button" onclick="calcularTempoMes()">Calcular Segundos</button>
function calcularTempoMes() {
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

    alert(
        "Segundos por minuto: " + segundosPorMinuto +
        "\nMinutos por hora: " + minutosPorHora +
        "\nHoras por dia: " + horasPorDia +
        "\nSegundos por dia: " + segundosPorDia
    );
}