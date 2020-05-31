

// Calculo de média de turmas de alunos

const turma01 = [
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
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }

]

const turma02 = [
    {
        nome: 'Adriano',
        nota: 6
    },
    {
        nome: 'Monteiro',
        nota: 7
    },
    {
        nome: 'Fulano',
        nota: 1
    },
    {
        nome: 'Josimara',
        nota: 2.5
    }

]

// Refatorando a function:
//function calculoMedia(alunos) {
//    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
//}

function calculoMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i ++){
        soma += alunos[i].nota;
        //console.log(soma)
    }
    //console.log(soma / alunos.length);
    const media = soma / alunos.length
    //return soma / alunos.length 
    return media
}


const mediaTurma01 = calculoMedia(turma01)
const mediaTurma02 = calculoMedia(turma02)

function enviaMensagem(media, turma) {
    if (media >= 5) {
        console.log(`A média da turma ${turma} foi ${media}. Parabéns!!!`)
    } else {
        console.log(`A méida da turma ${turma} foi abaixo de 5.`)
    }
}

enviaMensagem(mediaTurma01, "Turma01")
enviaMensagem(mediaTurma02, "Turma02")



/* 
Marcar um aluno como reprovado se a nota 
for menor que 5. 
E também enviar uma mensagem
*/

// Function para marcar o aluno como reprovado ou não
function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
    //console.table(alunos)
}

//marcarComoReprovado(turma01)

// Function para enviar mensagem de reprovado ou não
function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} foi reprovado!`)
    } else {
        console.log(`O Aluno ${aluno.nome} foi aprovado!`)
    }
}

// Function para verificar todo processo dos alunos

function alunoRepvoado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoRepvoado(turma01);
alunoRepvoado(turma02);

console.table(turma01);
console.table(turma02)