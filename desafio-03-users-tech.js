// Usuáros e tecnologia

// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um 'nome' e suas 'tecnologias' (novo array), por exemplo:

/* 
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Pedro", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Jasmine", tecnologias: ["HTML", "Node.js"] }
]

*/

const usuarios = [
    { nome: "Adriano", tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "Ruby"] },
    { nome: "Fabiano", tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "Java", "Python", "Ruby"] },
    { nome: "Christiano", tecnologias: ["HTML", "Teste", "JavaScript"] },
    { nome: "Marta", tecnologias: ["Python", "Java", "JavaScript"] },
    { nome: "Paula", tecnologias: ["Ruby", "CSS", "Node.js"] }
]


function informationUser(users) {
    for(let i = 0; i < users.length; i++) {
        console.log(`${users[i].nome} trabalha com ${users[i].tecnologias.join(', ')}`)
    }
}

informationUser(usuarios)


// Busca por Tecnologia

/* 
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto e retorna SE o usuário trabalha com CSS ou não. 
Essa função deve retornar um boolean "true/false"

Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnlogias do usuário até encontrar se ele trabaha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
}

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
}

*/

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    //let status = false
    for(let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === "CSS") {
            return true
            //status = true
            //break;
        } //else {
          //  status = false
       // }
    }
    return false
}


function enviarMensagemUsuarioUsaCSS(users) {
    for(let i = 0; i < users.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(users[i]);
        if (usuarioTrabalhaComCSS) {
            console.log(`O usuário ${users[i].nome} trabalha com CSS`);
        }
    }
}

enviarMensagemUsuarioUsaCSS(usuarios)