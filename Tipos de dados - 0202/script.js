var nome = 'Andre'; // String
var idade = 18; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Como verificar o tipo de dado

var nome = 'Andre';
console.log(typeof nome);
// Retorna string

var idade = 18;
console.log(typeof idade);
// Retorna number

// Strings

var nome = 'Andre'; 
var sobrenome = 'Matzumura';
var nomeCompleto = nome + sobrenome; // Concatenando as duas trings
var nomeCompletoEspaco = nome + ' ' + sobrenome; // Concatenando as duas strings porem junto com uma string em vazio no meio, que simboliza o espaco.

console.log(nomeCompleto);
console.log(nomeCompletoEspaco);

var gols = 1000;
var frase = 'Raphael Veiga fez' + ' ' + gols + ' ' + 'gols'

console.log(frase);

var ano = '2018'
var mes = 8;

console.log(ano + mes); // Ele concatenou ao inves de somar, pois o 2018 foi indicado como String. Caso fosse um numero, seria somado e o resultado seria 2026.

//  Template String

var gols = 1000;
var frase1 = 'Veiga fez ' + gols + ' gols';
var frase2 = `Veiga fez ${gols * 2} gols`;

console.log(frase2);

// Exercicios

// Declare uma variavel contendo uma string

var palmeiras = 'melhor time do mundo'

console.log(palmeiras);

// Declare uma variavel contendo um numero dentro de uma string

var anoPalmeiras = '1914';

console.log(anoPalmeiras);

// Declare uma variavel com a sua idade

var idade = 18;

console.log(idade);

// Declare duas variaveis, uma com seu nome e outra com seu sobrenome e some as mesmas

var nome = 'Andre'; 
var sobrenome = 'Matzumura';
var nomeCompletoTemplateString = `${nome} ${sobrenome}`

console.log(nomeCompletoTemplateString);
console.log(typeof nomeCompletoTemplateString);

// Coloque a seguinte frase em uma variavel: Its time

var frase3 = `It's time`;
console.log(frase3);
