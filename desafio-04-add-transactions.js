/* 
🚀 Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Booleanos;
Organização;
Padronização;
Escrita.
Intro
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

Adicionar transações
Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

{
  type: 'credit',
  value: 50.5
}

O type pode ser credit para créditos e debit para débitos da conta do usuário.

Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar um novo item no array de transações.

Relatórios

Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }

Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:

getAverageTransactionValue(); // 83.3

Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

getTransactionsCount(); // { credit: 5, debit: 3 }

Exemplo de resultado final do projeto:

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }

*/

const user = {
    name: "Maria",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'debit') {
        //user.transactions.push(transaction)
        user.balance -= transaction.value
    } else {
        //user.transactions.push(transaction)
        user.balance += transaction.value
    }
}


// Relatórios
function getHigherTransactionByType(typeOfTransaction) {
    let higherValue = 0;
    let object =  {}
    for (let transaction of user.transactions) {
        if (transaction.type == typeOfTransaction) {
            if (transaction.value > higherValue){
                higherValue = transaction.value
                // object = { type: transaction.type, value: transaction.value }
                object = transaction
            }    
        }
    }
    return object
}

function getAverageTransactionValue() {
    let sum = 0;
    for (let index = 0; index < user.transactions.length; index++) {
        sum += user.transactions[index].value    
    }
    let average = sum / user.transactions.length
    return average.toFixed(2)
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit++
        } else {
            count.debit++
        }   
    }
    return count
}


createTransaction({ type: 'credit', value: 120});
createTransaction({ type: 'credit', value: 70});
createTransaction({ type: 'credit', value: 30});
createTransaction({ type: 'credit', value: 150});
createTransaction({ type: 'debit', value: 50});
createTransaction({ type: 'debit', value: 80});
createTransaction({ type: 'debit', value: 90});

console.table(user)
console.log(user)
console.log(user.balance)

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());