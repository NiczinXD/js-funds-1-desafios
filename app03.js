/*
Nome      : desafios3
Finalidade: curso JavaScript: utilizando tipos, variáveis e funções
Observação: 04 Operadores
Data      : 15/06/2024
*/

const read = require ('readline-sync');
const { pare, ok, pula } = require('./app00.js');
const color = require('@colors/colors');
console.clear();
console.log("Utilizando tipos, variaveis, e funçoes".green);
console.log(
'04 Operadores'.green
);
pare();

console.log("1- Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente.".cyan);

ok();
let saldo = 1000;
let deposito = 0;
let saque = 0;
console.log(`Seu saldo: ${saldo}`);

console.log("Exiba os resultados finais no console.".cyan);

let operacao = Number(read.question("Quanto voce quer depositar?: "));
saldo = saldo + operacao;
console.log(`Deposito concluido com sucesso! Saldo atual: ${saldo}`);

operacao = Number(read.question("Quanto voce vai sacar?: "));
saldo = saldo - operacao;
console.log(`Saque concluido com sucesso! Saldo atual: ${saldo}`)

pare();

console.log('2- Crie uma variável numérica com um valor.'.cyan);

ok()
let numero = Number(read.question('Informe um numero: '));

console.log("Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.".cyan);

numero % 2 == 0 ? console.log('número par') : console.log('número impar');

pare();

console.log('3- Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade.'.cyan);

ok();
let userLogado = true;
let permissaoAdm = false;

console.log('Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.'.cyan);

if(userLogado && permissaoAdm){
	console.log("Acesso concedido");;
} else {
	console.log("Acesso negado, seu usuario não é Adm");
}
pula();

console.log("outro caso");
pula();
permissaoAdm = true;

if(userLogado && permissaoAdm){
	console.log("Acesso concedido");;
} else {
	console.log("Acesso negado, seu usuario não é Adm");
}

pare();

console.log('4- Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira.'.cyan);
pula();
ok()
let var1 = true;
let var2 = false;

console.log('Exiba o resultado no console.'.cyan);
pula()
let result = var1 || var2;
console.log(result);

pare();

console.log('5- Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.'.cyan)

pula();
ok();
let idadeMinima = 18;
let idadeDoUsuario = Number(read.question('Qual a sua idade? '));
 
console.log('Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.'.cyan);

if (idadeDoUsuario >= idadeMinima){
    console.log('Pode comprar o ingresso');
}else{
    console.log('Nao pode comprar o ingresso');
}
