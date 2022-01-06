"use strict";

// JS - это объектно-ориентированный (ОО) язык программирования
// в JS все объекты это ассоциативные массивы
const obj = new Object(); // вариант создания объекта (лучше {})

const options = { // любые типы данных
    // свойство объекта
    name: 'test', // ключ: значение (пара)
    width: 1024,
    height: 1024,
    colors: { // вложенные объекты
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // метод объекта
        console.log("Тест");
    }
};

options.makeTest();

const {border, bg} = options.colors; // деструктурировать объект (разделить на части и поместить в отдельные переменные)
console.log(border);

// console.log(Object.keys(options).length); // генерируется массив с ключами объекта

// console.log(options["colors"]["border"]); // получить свойство объекта

// console.log(options.name);

// delete options.name; // удалить свойство объекта

// console.log(options);

let counter = 0;
for (let key in options) { // конструкция для перебора объекта
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        // counter++;
    }
    counter++;
}

console.log(counter);