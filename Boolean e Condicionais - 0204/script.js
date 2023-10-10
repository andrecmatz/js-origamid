// Boolean

// Existem apenas dois valores booleanos, false ou true.
// Server para verificar se uma expressao e verdadeira com if, caso contrario else sera ativado.

var possuiGraduacao = false;

if(possuiGraduacao) {
    console.log('Possui graduacao.');
} else {
    console.log('Nao possui graduacao.')
}

// Retorna Possui graduacao e nao executa o else.

// Else if

var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('E verdadeiro.');
} else if(possuiDoutorado) {
    console.log('Possui doutorado.');
} else {
    console.log('Nao possui nada.');
}

// Truthy ou Falsy

var nome = 'Andre';

if(nome) {
    console.log(nome);
} else {
    console.log('Nome inexistente.')
}

// Falsy

if(false);
if(0); // ou -0
if(NaN); 
if(null);
if(undefined);
if(''); // ou "" ou ``

// Todo o resto e truthy

// Truthy

if(true);
if(1);
if('J');
if('Andre');
if(-5);
if({});

// Operador logico de negacao (inverter valor)
// O operador !, nega uma operacao booleana. Ou seja, !true e igual a false.

if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!''); // false

if(!possuiGraduacao) {
    console.log('Nao possui graduacao');
}

// Operadores de comparacao

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

var x = 10;

console.log(x === 10);

// Operadores Logicos && (e)

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cao'; // 'Cao'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true, ele ira retornar o ultimo valor verificado.
// Se algum valor for false, ele ira retornar o mesmo e nao ira  continuar a verificar o restante

var condicional = (5 - 5) && (5 + 5);

if(condicional) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// Retorna falso pois a primeira conta tem resultado 0, que e um valor falso.

// Operadores Logicos || (ou)

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cao'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);
// Retorna 10 pois e o primeiro valor true encontrado.

// Switch

var corFavorita = 'Verde';

switch(corFavorita) {
    case 'Azul':
        console.log('Olhe para o ceu.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta.')
        break;
    default:
        console.log('Feche os olhos.');
}

//  Exercicios

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 18;
var idadeMae = 49;

if(minhaIdade > idadeMae) {
    console.log('E maior.')
} else if(minhaIdade === idadeMae) {
    console.log('E igual');
} else {
    console.log('E menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Fix