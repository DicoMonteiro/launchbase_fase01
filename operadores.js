/* ===================================================== 

OPERADORES DE COMPARAÇÃO

>   MAIOR
<   MENOR
>=  MAIOR IGUAL A
<=  MENOR IGUAL A
==  IGUAL A
=== IGUAL E DO MESMO TIPO
!=  DIFERENTE DE
!== DIFERENTE, INCLUSIVE DO TIPO

========================================================

DESAFIO 01

VERIFICAR SE A PESSOA É MAIOR OU IGUAL DE 18 ANOS

    SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR A ENTRADA
    SE A PESSOAR TIVER 17 ANOS, volte quando tiver 18 anos

*/

// console.log(5 > 4); // true
// console.log(5 < 4); // false
// console.log(4 >= 4); // true
// console.log(3 <= 4); //true

// const idade = 17

// console.log(idade > 15);

//if (idade >= 18) {
//    console.log('Permitir a entrada!!')
//} else {
//    console.log('Bloquear a entrada!!')
//}

//if(idade === 17) {
//    console.log('volte quando tiver 18 anos!')
//}


/* =========================================== 
OPERADORES DE LÓGICOS

&&      "E"  As duas condições devem ser verdadeiras
             para que a condição final seja verdadeira
||      "OU" Uma das condições deve ser verdadeira
             para que a condição final seja verdadeira
!       "NÃO" Nega uma condição             

==============================================*/


//console.log(5 == 5 && 6 ==6); //true
//console.log(5 == 5 && 6 != 6); //false
//console.log(5 != 5 || 6 == 6); //true
//console.log(5 == 5 || 6 != 6); //true
//console.log(!(5 > 6)); //true
//console.log(!(5 < 6)); //false


// Desafio 01 - Refatorado para melhor expressão 
//const idade = 18
//if (!(idade >= 18) || idade === 17) {
//    console.log('Bloquear a entrada!!')
//} else {
//    console.log('Permitir a entrada!!')
//}



// dar bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos



/* =========================================== 
OPERADORES DE ARITMÉTICOS

*       Multiplicação
/       Divisão
%       Resto da divisão
+       Adição
-       Subtração  

==============================================*/

console.log(2 * 2); //4
console.log(2 / 2); //1
console.log(2 % 1.5); //0.5
console.log(2 + 2); //4
console.log(2 - 2); //0