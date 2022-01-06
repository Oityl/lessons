"use strict";

function first() {
    // Do something
    setTimeout(function() { // задержка
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// результат функции не зависит от расположения в коде
first();
second();

// callback - это функция, которая должна быть выполнена после того, как другая функция завершила выполнение

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

// learnJS('JavaScript', function() { // анонимная функция (в дальнейшем её не вызвать снова)
//     console.log('Я прошел этот урок!');
// });

learnJS('JavaScript', done); // передача функции, а не вызов (без ())