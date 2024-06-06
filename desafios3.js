const read = require ('readline-sync');
const color = require('@colors/colors');

console.log(
'04 Operadores'.rainbow
)

console.log
("Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.".yellow);
let valorDoSaldo = Number(read.question('Quanto voce tem na conta?: '));
let deposito = valorDoSaldo - 25;
let saque = deposito + 10;
console.log(`voce depositou ${deposito} voce pode pegar de volta quando quiser!`);
console.log(`você sacou ${saque} desfrute o seu dinheiro`);

console.log
('Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.'.green);
let numero = 2;
numero == 2 ? console.log('é par') : console.log('é impar');

console.log
('Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.'.blue);
let usuario = 'Fernando';
let permissaoDeAdm = 'Fernando';

if(permissaoDeAdm === usuario){
    console.log('Olá, Fernando sua permissao de ADM esta liberada');
} else{
    console.log('SEU NOJENTO ESTAVA TENTANDO SE PASSAR PELO FERNANDO? ACHA QUE NAO PERCEBI?');
}

console.log
('Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.'.red);

let verdadeiro = true;
let falso = false;
if (verdadeiro == true || falso == false){ 
    console.log('espera.....você nao eh de verdade?....');
}

console.log
('Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.'.bgWhite);

let menorDeIdade = 0;
let maiorDeIdade = 18;

if (menorDeIdade < maiorDeIdade){
    console.log('Sai daqui criança');
}else{
    console.log('que criança oq seu bosta');
}
