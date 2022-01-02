"use strict";

let num = 20;

// замыкание – это функция вместе со всеми внешними переменными, которые ей доступны
function showFirstMessage(text) { // именовать функции выполняемым действием
    console.log(text);
    // функция переходит на уровень выше для поиска указанной переменой
    // let num = 10; // переменная объявлена и существует только внутри функции (локальная)
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

// функция вызывается перед объявлением
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// Function Declaration
function calc(a, b) {
    return (a + b); // вернуть значение и выйти из функции
    // console.log('dwed'); // unreachable - недоступный код для выполнения
}

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function Expression
const logger = function() {
    console.log("Hello");
};

logger(); // функция вызывается после объявления

// Стрелочные функции
const calc1 = (a, b) => { return a + b };
const calc2 = (a, b) => a + b;
const calc3 = a => a + 5;