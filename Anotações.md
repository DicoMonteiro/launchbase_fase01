## Outra forma de desenvolver o Desafio-01-Aposentadoria

  
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}


## Outra forma de resolver o desafio 03 - Soma de Despesas e Receitas

// Soma de despesas e receitas

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    
    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}


## Detalhe da function de Verificar dados de Receitas e Despesas:

function verificaDadosUsuario(usuarios) {
    let saldo = 0;
    let arrayReceitas = [];
    let arrayDespesas = []; 
    for (let i = 0; i < usuarios.length; i++) {
        for (let e = 0; e < usuarios[i].receitas.length; e++) {
            arrayReceitas.push(usuarios[i].receitas[e]);
        }
        for (let r = 0; r < usuarios[i].despesas.length; r++) {
            arrayDespesas.push(usuarios[i].despesas[r]);
        }

        saldo = calculaSaldo(arrayReceitas, arrayDespesas)

        if (saldo > 0) {
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
        } else {
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
        }
        saldo = 0;
        arrayReceitas = [];
        arrayDespesas = []; 
    }
}