let nome = "Wendell";
let nascimento = 2003;
let ano = 2026;
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


console.log("Nome:", nome);
console.log("Idade:", idade + " anos");
console.log("Status:", statusIdade);
console.log("Aposentadoria:", statusAposentadoria);