/*// Задача # 1
var question = prompt('Каково официальное название "JavaScript"', '');
if (question === 'Ecmascript') {
    alert('Верно!');
} else {
    alert('Не знаете? "Ecmascript"')
}

// Задача # 2
var number = prompt('введите любое число', '');
if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else if (number === 0) {
    alert('0');
}*/

// Задача #3 ХЗ !!!!
var question31 = prompt('Кто пришел?', 'Админ');
if (question31 === 'Админ') {
    question32 = prompt('Пароль?', 'Черный Властелин')

    if (question32 === 'Черный Властелин') {
        alert('Добро пожаловать');
    } else if (question32 === null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (question31 === null) {
    alert('Вход отменён');
} else {
    alert('Я Вас не знаю');
}
// if (question32 === 'Черный Властелин') {
//     alert('Добро пожаловать');
// } else if (question32 === null) {
//     alert('Вход отменён');
// } else {
//     alert('Пароль неверен');
// }

/*
// Задача #4
var i = 0;
while (i < 3) {
    alert("номер" + i + "!");
    i++;
}

// Задача #5
var number;
do {
    number = prompt('Введите число больше 100');
} while (number <= 100 && number)*/
