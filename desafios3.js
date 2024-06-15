/*
Nome      : desafios3
Finalidade: curso JavaScript: utilizando tipos, variáveis e funções
Observação: 04 Operadores
Data      : 15/06/2024
*/

const read = require ('readline-sync');
const color = require('@colors/colors');
console.clear;
function pare(){
    let espere = read.question("Pressione a tecla <enter> para continuar...");
    console.clear();
}

console.log(
'04 Operadores'.rainbow
)

console.log 
("1- Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.".yellow);
let saldo = 0;
let deposito = 0;
let saque = 0;

deposito = Number(read.question('Quanto voce quer depositar?: '));
saldo = saldo + deposito;
console.log(`seu saldo atual é ${saldo}`);

saque = Number(read.question('Quanto voce quer sacar?: '));
saldo = saldo - saque;
console.log(`seu saldo agora é ${saldo}`);
pare();


console.log
('2- Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.'.green);
let numero = Number(read.question('Informe um numero: '));
numero % 2 == 0 ? console.log('é par') : console.log('é impar');
pare();

console.log
('3- Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.'.blue);
let usuario = read.question("Cadastre um login para o usuario ");
let resposta = read.question("Esse usuario eh administrador s/n ");
let admin = resposta === 's' ? true : false;
let nome = read.question("Informe o nome do usuario cadastrado ");

if(nome === usuario && admin){
    console.log(`Olá, ${nome} sua permissao de ADM esta liberada`);
} else{
    console.log(`SEU NOJENTO ESTAVA TENTANDO SE PASSAR PELO ${nome}? ACHA QUE NAO PERCEBI?`);
}
pare();

console.log
('4- Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.'.red);

let var1 = true;
let var2 = false;
if (var1 || var2){ 
    console.log('Verdade');
}
pare();

console.log
('5- Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.'.cyan);

let menorDeIdade = 0;
let maiorDeIdade = 18;
let idadeDoUsuario = Number(read.question('Qual a sua idade? ')); 

if (idadeDoUsuario >= maiorDeIdade){
    console.log('Pode comprar o ingresso');
}else{
    console.log('Nao pode comprar o ingresso');
}
