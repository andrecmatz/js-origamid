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