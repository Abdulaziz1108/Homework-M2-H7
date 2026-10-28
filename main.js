const students = [
    { name: 'Ruslan', age: 20, score: 85, isActive: true },
    { name: 'Asema', age: 17, score: 92, isActive: true },
    { name: 'Samir', age: 22, score: 45, isActive: false },
    { name: 'Adilet', age: 19, score: 70, isActive: true },
];


console.log(students);
console.log('Количество студентов:', students.length);
console.log('Первый студент:', students[0].name, students[0].age);


for (let i = 0; i < students.length; i++) {
    const score = students[i].score;
    let result;

    if (score >= 80 && score <= 100) {
        result = 'Отлично';
    } else if (score >= 60 && score <= 79) {
        result = 'Хорошо';
    } else if (score >= 40 && score <= 59) {
        result = 'Удовлетворительно';
    } else {
        result = 'Не сдал';
    }

    console.log(students[i].name + ': ' + result);
}


for (let i = 0; i < students.length; i++) {
    const student = students[i];
    let status;

    if (student.isActive) {
        status = 'Активен';
    } else {
        status = 'Неактивен';
    }

    console.log('Студент: ' + student.name);
    console.log('Возраст: ' + student.age);
    console.log('Баллы: ' + student.score);
    console.log('Статус: ' + status);
}


function checkStudent(student) {
    let result;

    if (student.score >= 80 && student.score <= 100) {
        result = 'Отлично';
    } else if (student.score >= 60 && student.score <= 79) {
        result = 'Хорошо';
    } else if (student.score >= 40 && student.score <= 59) {
        result = 'Удовлетворительно';
    } else {
        result = 'Не сдал';
    }

    console.log('Имя: ' + student.name + ', баллы: ' + student.score + ', результат: ' + result);
}


for (let i = 0; i < students.length; i++) {
    checkStudent(students[i]);
}


students[0].age = 21;          
students[2].score = 65;        
students[2].isActive = true;   

students.push({ name: 'Meerim', age: 18, score: 95, isActive: true });


console.log(students);



console.log('Студенты с баллами 80 и выше:');
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 80) {
        console.log(students[i].name);
    }
}

console.log('Активные студенты:');
for (let i = 0; i < students.length; i++) {
    if (students[i].isActive) {
        console.log(students[i].name);
    }
}

let passedCount = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
        passedCount++;
    }
}
console.log('Сдали экзамен:', passedCount);


function getAverageScore(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].score;
    }

    return sum / students.length;
}


console.log('Средний балл:', getAverageScore(students));