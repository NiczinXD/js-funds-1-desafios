/*
nome: desafios2
finalidade: Curso de JavaScript: Conhecendo Objetos
data: 25/03/25
*/

const read = require('readline-sync');
const { pare, ok, pula } = require('./app00.js');
const color = require('@colors/colors');
console.clear();
console.log("Utilizando tipos, variaveis e funçoes".green);
console.log(
"03 Tipos de dados".green
);
pare();

console.log("1- Crie uma variável contendo uma frase.".cyan);

console.log("ok");
let frase = "Bom dia";
console.log("Frase criada: ", frase);

console.log("Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiusculas.".cyan);

console.log(`Comprimento de Bom dia: ${frase.length}`);
console.log(`Bom dia em maiusculo: ${frase.toUpperCase()}`);
pare();

console.log("2- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined).".cyan);

console.log("ok");
let indefinido;
let nulo = null;

console.log("Exiba os valores no console.".cyan);

console.log(indefinido);
console.log(nulo);
pare();

console.log("3- Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.".cyan);

console.log("ok");
let string = 'frase'
let numero = Number(5);
let boolean = true;

console.log(`String: ${string}, Number: ${numero}, Boolean: ${boolean}`);
pare();

console.log("4- Crie uma variável numérica e uma string.".cyan);

let varNumerica = 5
let varString = "3"

console.log("Faça a conversão da variável numérica para string e da string para número.".cyan);

console.log("Antes:", varNumerica);
let aux1 = String(varNumerica);

console.log("Antes:", varString);
let aux2 = Number(varString);

console.log("Exiba os tipos de dados resultantes no console.".cyan);

console.log("Depois:", aux1);
console.log("Depois:", aux2);
pare();

console.log("5- Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.".cyan);

console.log("ok");
let variavelComString = "caguei";
console.log(`Palavra criada: ${variavelComString}`);

console.log("Exiba os resultados finais no console.".cyan);

console.log("Maiusculo:", variavelComString.toUpperCase());
console.log("minusculo:", variavelComString.toLowerCase());
console.log("Comprimento:", variavelComString.length);
