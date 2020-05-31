// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

// Declarando Variaveis
//const nome = 'Adriano';
//const nome2 = 'Monteiro';
//const num1 = 10

// Concatenando variaveis com strings
//const nome3 = `Valeska e ${nome}`

//console.log(nome3);

// Sabendo os tipos de variaveis
//console.log(typeof nome)
//console.log(typeof num1)


//const aluno01 = 'Adriano';
//const aluno02 = 'Monteiro';
//const aluno03 = 'Fulano';

//const notaAluno01 = 9.8
//const notaAluno02 = 10
//const notaAluno03 = 2


// Realizando calculo
//const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// console.log(media)


// Parabenizar a turma se a média for maior/igual a 5.
//if (media >= 5) {
//    console.log(`A média da turma foi ${media}. Parabéns!!!`)
//} else {
//    console.log('A méida da turma foi abaixo de 5.')
//}


// Criando Objetos

const aluno01 = {
    nome: 'Adriano',
    nota: 9.8
}

const aluno02 = {
    nome: 'Monteiro',
    nota: 10
}

const aluno03 = {
    nome: 'Fulano',
    nota: 2
}


// Criando Array de Objetos

const alunos = [
    {
        nome: 'Apolo',
        nota: 10
    },
    {
        nome: 'Raphael',
        nota: 8.5
    },
    {
        nome: 'Cicrano',
        nota: 4
    }

]

// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// Parabenizar a turma se a média for maior/igual a 5.
if (media >= 5) {
    console.log(`A média da turma foi ${media}. Parabéns!!!`)
} else {
    console.log('A méida da turma foi abaixo de 5.')
}