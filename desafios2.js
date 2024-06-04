const read = require ('readline-sync');
const color = require('@colors/colors');

console.log(
"03 Tipos de dados".rainbow
);

console.log(
"1- Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.".green
);

let frase = "Olá meu nome tem acento";
console.log(`Olá você sabia que a frase "${frase}" tem 23 letras de comprimento? Ah e ela maiúscula fica assim "OLÁ MEU NOME TEM ACENTO"`);

console.log(
"2- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.".red
);

let indefinido;
let nulo = null

console.log(indefinido);
console.log(nulo);

console.log(
"3- Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.".blue
);

let string = console.log('Olá eu sou uma string :D');
let numero = Number(console.log('E eu sou um numero :D'));
let booleano = Number(read.question('Da um numero '));

if(booleano >= 0){
    console.log('Eu sou um booleano verdadeiro :)');
}else{
    console.log('Eu sou um booleano de mentira );');
}

console.log(`${string} ${numero} ${booleano}`);

console.log(
"4- Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.".yellow
);

let varNumerica = 5
let varString = "3"

console.log(varNumerica);
console.log(`${varNumerica}`);

console.log(varString);
varString = Number("3")
console.log(varString)

console.log(
"5- Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.".cyan
);

let variavelComString = "Eu sou superior a tudo e a todos";
console.log(variavelComString .toUpperCase);
console.log(variavelComString .toLowerCase);
