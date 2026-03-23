//1
const num1 = 10;
const num2 = 5;
const soma = num1 + num2; // Utiliza o operador + [cite: 58, 59]
console.log(`A soma de ${num1} e ${num2} é igual a ${soma}`);

//2
const resultadoSubtracao = 50 - 25; // Utiliza o operador - [cite: 58]
console.log(`O resultado da subtração é: ${resultadoSubtracao}`);

//3
const produto = 8 * 7; // Utiliza o operador * [cite: 58]
console.log(`O produto é: ${produto}`);

//4
const quociente = 100 / 4; // Utiliza o operador / [cite: 58]
console.log(`O quociente da divisão é: ${quociente}`);

//5
console.log(10 == 10); // Retorna true. O operador == avalia a igualdade [cite: 66, 69, 197]

//6
const cidade1 = "Curitiba";
const cidade2 = "Londrina";
console.log(cidade1 != cidade2); // Retorna true. O operador != avalia a desigualdade [cite: 70, 71, 197]

//7
console.log(5 < 10); // Retorna true. Operador de comparação "menor" [cite: 72, 73, 197]

//8
let preco = 60;
console.log(preco > 50); // Retorna true. Operador de comparação "maior" [cite: 74, 76, 197]

//9
let valor = 20;
console.log(valor <= 20); // Retorna true. Operador "menor igual" [cite: 75, 77, 197]

//10
let idade = 18;
console.log(idade >= 18); // Retorna true. Verifica se a variável é maior ou igual a 18 [cite: 79, 109, 110, 197]

//11
let nota = 8;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado"; // Formato: condição ? expressão1 : expressão2 [cite: 116, 219]
console.log(resultado);

//12
let idadeUsuario = 16;
let status = idadeUsuario >= 18 ? 'adulto' : 'menor'; // Atribui 'adulto' se verdadeiro, 'menor' se falso [cite: 117, 118, 220]
console.log(status);

//13
const nome = "Maria";
const saudacao = `Olá, ${nome}!`; // Utiliza acentos graves e ${expressão} para inserir variáveis [cite: 124, 126, 241, 242]
console.log(saudacao);

//14
const produto = "Teclado";
const precoUnitario = 150;
const qtd = 2;
// Simplifica a concatenação tornando o código mais legível [cite: 125, 240]
console.log(`Você comprou ${qtd} unidades de ${produto} por R$ ${precoUnitario * qtd}.`);

//15
let nomeAluno = "Carlos";
let idadeAluno = 20;
// Une o operador ternário para a lógica e template literals para a formatação [cite: 133, 136]
let mensagem = idadeAluno >= 18 
    ? `Olá, ${nomeAluno}. Você é um adulto.` 
    : `Olá, ${nomeAluno}. Você é menor de idade.`;
console.log(mensagem); // [cite: 136, 137]