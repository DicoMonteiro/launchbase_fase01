// Vetores e objetos

const programador = {
    nome: "Adriano",
    idade: 35,
    tecnologias: [
        {
            nome: "Ruby",
            especialidade: "API/WEB"
        },
        {
            nome: "Java",
            especialidade: "API/WEB"
        },
        {
            nome: "Python",
            especialidade: "API/WEB"
        },
        {
            nome: "JavaScript",
            especialidade: "API/WEB/MOBILE"
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[3].nome} com especialidade ${programador.tecnologias[3].especialidade}`);