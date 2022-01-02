"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error'); // тернарный оператор (3 оператора)
4 + 4 // бинарный оператор
+'4'; // унарный оператор

const num2 = '50'; // строка

switch (num2) { // строгое сравнение в конструкции 
    case '49':
        console.log('Неверно');
        break; // остановка выполнения кейса
    case '100':
        console.log('Неверно');
        break;
    case '50':
        console.log('В точку!');
        break;
    default: // значение по умолчанию
        console.log('Не в этот раз');
        break;
}