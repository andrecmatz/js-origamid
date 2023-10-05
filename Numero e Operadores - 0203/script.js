var idade = 18e2;

console.log(idade);

// Operadores aritmeticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
var total = soma - subtracao;

console.log(total);

// Operadores aritmeticos (Strings)

var soma = '100' + 50; // 10050 
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = 'Isso e 10';
console.log(isNaN(testeNaN));