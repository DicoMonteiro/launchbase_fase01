

// Calculo de média de classs de students

const class01 = [
    {
        name: 'Apolo',
        grade: 10
    },
    {
        name: 'Raphael',
        grade: 8.5
    },
    {
        name: 'Cicrano',
        grade: 4
    },
    {
        name: "Mais um student",
        grade: 10
    }

]

const class02 = [
    {
        name: 'Adriano',
        grade: 6
    },
    {
        name: 'Monteiro',
        grade: 7
    },
    {
        name: 'Fulano',
        grade: 1
    },
    {
        name: 'Josimara',
        grade: 2.5
    }

]

// Refatorando a function:
//function calculateAverage(students) {
//    return (students[0].grade + students[1].grade + students[2].grade) / 3
//}

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i ++){
        sum += students[i].grade;
        //console.log(sum)
    }
    //console.log(sum / students.length);
    const average = sum / students.length
    //return sum / students.length 
    return average
}


function sendMessage(average, turma) {
    if (average >= 5) {
        console.log(`The average of class ${turma} was ${average}. Congrations!!!`)
    } else {
        console.log(`The average of class ${turma} was down of 5. Is not good.`)
    }
}


/* 
Marcar um student como flunked se a grade 
for menor que 5. 
E também enviar uma mensagem
*/

// Function para marcar o student como flunked ou não
function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
    //console.table(students)
}

//markAsFlunked(class01)

// Function para enviar mensagem de flunked ou não
function sendMessageflunked(student) {
    if(student.flunked) {
        console.log(`The student ${student.name} was flunked!`)
    } else {
        console.log(`The student ${student.name} was aproved!`)
    }
}

// Function para verificar todo processo dos students

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}


const averageclass01 = calculateAverage(class01)
const averageclass02 = calculateAverage(class02)

sendMessage(averageclass01, "class01")
sendMessage(averageclass02, "class02")

studentsFlunked(class01);
studentsFlunked(class02);

console.table(class01);
console.table(class02)