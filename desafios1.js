//02 Variáveis no JS
const read = require ('readline-sync');
const color = require('@colors/colors');

//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
let string = console.log('Eu sou uma string :D');
let numero = Number(console.log('Eu sou um numero :D'));
let booleano = Number(read.question('Da um numero '));
if(booleano >= 0){
    console.log('Eu sou verdadeiro :)');
}else{
    console.log('Eu sou de mentira );');
}
//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
let nome1 = 'Nicolas ';
let nome2 = 'Pinheiro';
let nome3 = nome1 + nome2;
console.log(nome1);
console.log(nome2);
console.log(nome3);
//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
let numero2 = 1;
let frasecombinada = 'EU SOU O ';
let frasetoda = frasecombinada + numero2;
console.log(frasetoda);
//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let variavelVlrQualquer = 'Valor qualquer'
console.log(variavelVlrQualquer);
variavelVlrQualquer = 'its a star man waiting in the sky';
console.log(variavelVlrQualquer);
//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var estouForaDoIf = console.log('EU SOU INEVITAVEL KARAMBAAAAa');
if(0 < 1){
    var estouForaDoIf = console.log('Aguardando multiversus lançar');
}
//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
let informaSeChove = read.question('Voce gosta de chuva? ');
if(informaSeChove = 'sim'){
    console.log('Entao nao leva guarda-chuva');
}else{
    console.log('Entao leva o guarda-chuva');
}
