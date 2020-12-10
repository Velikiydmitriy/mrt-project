// Задача # 1
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
}

// Задача #3 ХЗ !!!!
var question3 = prompt('Кто пришел?', 'Админ');
if (question3 === 'Админ') {
    alert(question31 = prompt('Пароль?', 'Черный Властелин'));}
else
    (question31 === 'Черный Властелин')
    {
        alert('Добро пожаловать')
    }

// else if (question3 === 'Другое') {
//     alert('Я вас не знаю');
// } else if (question3 === false) {
//     alert('Вход отменен')
// }
//
// Задача #4
var i = 0;
while (i < 3) {
    alert("номер" + i + "!");
    i++;
}