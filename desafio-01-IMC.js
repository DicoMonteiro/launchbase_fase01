// Cálculo do IMC

const nome = "Pedro";
const peso = 87;
const altura = 1.85;

const imc = peso / (altura * altura);

//console.log(imc)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`)
}
