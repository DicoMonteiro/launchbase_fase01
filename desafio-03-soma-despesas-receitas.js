/* 
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {}
Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3

*/

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];



function calculaSaldo(receitas, despesas) {
    let saldo = 0
    const receita = somaNumeros(receitas)
    const despsesa = somaNumeros(despesas)
    //console.log(receita)
    //console.log(despsesa)
    saldo = receita - despsesa
    return saldo 
}


function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

//function verificaDadosUsuario(usuarios) {
//    let saldo = 0;
//    let arrayReceitas = [];
//    let arrayDespesas = []; 
//    for (let i = 0; i < usuarios.length; i++) {
//        for (let e = 0; e < usuarios[i].receitas.length; e++) {
//            arrayReceitas.push(usuarios[i].receitas[e]);
//        }
//        for (let r = 0; r < usuarios[i].despesas.length; r++) {
//            arrayDespesas.push(usuarios[i].despesas[r]);
//        }
//
//        saldo = calculaSaldo(arrayReceitas, arrayDespesas)
//
//        if (saldo > 0) {
//            console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
//        } else {
//            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
//        }
//        saldo = 0;
//        arrayReceitas = [];
//        arrayDespesas = []; 
//    }
//}


function verificaDadosUsuario(usuarios) {
    
    for (let usuario of usuarios) {
        const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

        if (saldo > 0) {
            console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
        } else {
            console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
        }
    }
}

verificaDadosUsuario(usuarios)