/*
Nome      : desafios4
Finalidade: curso JavaScript: utilizando tipos, variáveis e funções
Observação: 05 Funções
Data      : 17/06/2024
*/

const read = require ('readline-sync');
const { pare, ok, pula } = require('./app00')
const color = require('@colors/colors');
console.clear();

console.log('curso JavaScript: utilizando tipos, variaveis e funçoes'.green);
console.log('05 Funçoes'.green);
pare();

console.log('1-Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.'.cyan)
pula();

ok();

function recebeNome(nome){
    nome = read.question('qual o seu nome? ')
    console.log(`Olá ${nome}, muito prazer em conhece-lo`);
}
pula();

console.log('Em seguida, chame a função e exiba a saudação no console.'.cyan);
recebeNome();
pare();

console.log('2-Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).'.cyan)
pula();

ok();

function recebeIdade(idade){
    idade = read.question('Quantos anos voce tem? ');

    if (idade >= 18){
        console.log('Maior de idade');
    } else {
	console.log('Menor de idade');
    }
}

console.log('Imprima o resultado no console.'.cyan);
pula();

recebeIdade();
pare();

console.log('3-Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse().'.cyan);
pula();

ok();

function verificaPalindromo(palavra){
    let palavraInvertida;
    let array1  = [];
    let x = 0;
    while(x <= palavra.length){
        array1.push(palavra[x]);
        x++
    }
    let resultado = array1.reverse();
    palavraInvertida = resultado.join("");
    if(palavra == palavraInvertida){
        return true;
    } else {
        return false;
    }
}

console.log('Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.'.cyan);

let palavra = read.question("Informe a palavra: ").toUpperCase();
console.log(verificaPalindromo(palavra) ? "É um Palíndromo" : "Não é um Palindromo");
pare();

console.log('4-Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.'.cyan); 
pula();

ok();

function recebeNumeros(numero1, numero2, numero3){
    let auxiliar = numero1
    if(numero2 > auxiliar){
        auxiliar = numero2;
    }
    if(numero3 > auxiliar){
        auxiliar = numero3;
    }
    console.log(`${auxiliar} é o maior dos 3`);
}

let recebeNumero1 = Number(read.question('Informe o numero: '));
let recebeNumero2 = Number(read.question('Informe o numero: '));
let recebeNumero3 = Number(read.question('Informe o numero: '));

console.log('Imprima o maior valor no console.'.cyan);

recebeNumeros(recebeNumero1, recebeNumero2, recebeNumero3);
pare();

console.log('5-Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.'.cyan); 
pula();

ok();


const calculaPotencia = (base, expoente) => {
    let aux = 1;
    for (let index = 1; index <= expoente; index++){
        aux = aux * base;
    }
    return aux;
}
pula();

console.log('A função deve calcular a potência da base elevada ao expoente e retornar o resultado.'.cyan);
let base = read.question('Informe a base: ');
let expoente = read.question('Informe o expoente: ');
console.log(calculaPotencia(base, expoente));

pare();
