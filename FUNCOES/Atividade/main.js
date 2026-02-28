function consultar() {

    let nome = document.getElementById("Nome").value;
    let nascimento = parseInt(document.getElementById("Nascimento").value);
    let ano = parseInt(document.getElementById("Atual").value);

    let idade = ano - nascimento;
    let aposentar = idade >= 65 && idade > 0;


    let statusIdade;
    if (idade >= 18) {
        statusIdade = "Maior de idade";
    } else {
        statusIdade = "Menor de idade";
    }

    let statusAposentadoria = aposentar
        ? "Já pode se aposentar"
        : "Ainda não pode se aposentar";

    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
        "Nome: " + nome + "<br>" +
        "Idade: " + idade + " anos<br>" +
        "Status: " + statusIdade + "<br>" +
        "Aposentadoria: " + statusAposentadoria;
}