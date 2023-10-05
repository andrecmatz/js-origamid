// var idade = 18;

console.log(idade);

// Operadores aritmeticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// var total = soma - subtracao;

console.log(total);

// Operadores aritmeticos (Strings)

var soma = '100' + 50; // 10050 
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = 'Isso e 10';
console.log(isNaN(testeNaN));

// Operadores aritmeticos binarios

var total1 = 20 + 5 * 2; // 30 
var total2 = (20 + 5) * 2; // 50
// A ordem importa. O sistema segue a ordem de importancia matematica.
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores aritmeticos unarios

var x = 5;

// Caso o ++ esteja na frente, a soma so sera retornada no proximo console.log
// Caso esteja atras (++x), a soma sera retornada no exato momento em que aparecer no console.
// Em resumo, o ++x e o mesmo que x = x + 1
// Tambem existem os decrementos, trocando o sinal de + por -

console.log(x);
console.log(++x);

var idade = '18';
var somaIdade = 5;

console.log(+idade + somaIdade); // Transformamos a string em numero com o sinal de + | Isso tambem pode ser realizado adicionando o + em frente a string na var idade (var idade = + '18';)
console.log(+idade + -somaIdade); 

// Exercicios

// Qual o resultado da seguinte expressao?

var total = 10 + 5 * 2 / 2 + 20; // 35

console.log(total);

// Crie duas expressoes que retornem NaN 

var firstNaN = '18s' / 2;
var secondNaN = 'Isso e um NaN' - 2;

console.log(isNaN(firstNaN));
console.log(isNaN(secondNaN));

// Somar a string '200' com o numero 50 e retornar 250

var somaString = +'200' + 50;

console.log(somaString);

// Incremente o numero 5 ao resultado acima e retorne o seu valor incrementado

var x = 5;
console.log(++x);

// Como dividir o peso por 2?

// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade; // 80kg
// var pesoPorDois = peso / 2; // NaN (Not a number)

var numero = +'80' / 2
var unidade = 'kg'
var peso = numero + unidade;

console.log(peso);