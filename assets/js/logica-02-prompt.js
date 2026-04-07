function exemplo01() {
    //Sting
    let nome = prompt("Digite se nome:");
    let sobrenome = prompt("Digite se sobrenome:");

    //Gerar o nome completo
    //Concatenando nome, espaço e sobrenome
    let nomeCompleto = nome + " " + sobrenome;

    alert("Nome Completo:" + nomeCompleto)
}

function conversaoStringParaInt() {
    //Tudo que o usuario digitar vem como String(texto)

    //Converter uma string psrs int
    //"8" => 8

    let numero1 = parseInt("8");
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function conversaoStringParaIntAlternativo() {
    //Tudo que o usuario digitar vem como String(texto)

    //Converter uma string psrs int
    //"8" => 8

    let numero1 = parseInt(prompt("Digite o numero 1"));
    let numero2 = parseInt(prompt("Digite o numero 2"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}


function conversaoStringParaFloat() {
    // Converter de String para float

    let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas trabalhadas:"));
    let valorHora = parseFloat(prompt("Digite o valor da hora:"));

    let salarioBruto = quantidadeHoras * valorHora;

    alert(
        "Quantidade de horas: " + quantidadeHoras +
        "\nValor da Hora: " + valorHora +
        "\nSalário Bruto: " + salarioBruto
    );
}

function exemplo2(){
    let nome = prompt("Digite o nome do atleta:");
    let peso = parseFloat(prompt("Digite o peso:"));
    let imc = peso / (altura * altura);

    alert(
        "Atleta: " + nome + " tem IMC " + imc
    )
}

function exemplo03(){
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"))
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - anoNascimento

    alert(
        "Idade: " + idade
    )
}

function exemplo04(){
    let modelo = prompt("Informe o modelo do carro:");
    let ano = parseInt(prompt("Informe o ano do carro:"));

    let velocidadeMaxima = parseInt(prompt("Digite a velocidade maxima do veiculo:"));
    let tempoViagemHoras = parseInt(prompt("Digite as horas da viagem:"));

    let distancia = velocidadeMaxima * tempoViagemHoras;

    alert(
        "Carro: " + modelo + 
        "\nAno: " + ano +
        "Distancia estimada: " + distancia + "km"
    )
    
}
