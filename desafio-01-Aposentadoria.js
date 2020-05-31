// Cálculo de Aposentadoria

// Tempo de contribuição: Homem - 35 anos e Mulher - 30 anos
// Idade + tempo de contribuição para se aposentar: Homem - 95 anos e Mulher - 85 anos

const nome = "Silvana"
const sexo = "F"
// const idade = 48;
// const contribuicao = 23;
const idade = 58;
const contribuicao = 30;


if (sexo == 'F') {
    if (contribuicao >= 30){
        if ((idade + contribuicao) >= 85) {
            console.log(`${nome} você pode se aposentar!`)
        } else {
            console.log(`${nome} você ainda não pode se aposentar!`)
        }
    } else {
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
    

} else {
    if (contribuicao >= 35){
        if ((idade + contribuicao) >= 95) {
            console.log(`${nome} você pode se aposentar!`)
        } else {
            console.log(`${nome} você ainda não pode se aposentar!`)
        }
    } else {
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
}

