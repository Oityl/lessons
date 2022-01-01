"use strict";

let number = 4.6;

console.log(4/0); // Infinity бесконечность
console.log(-4/0); // -Infinity -бесконечность
console.log('string' * 9); // NaN (Not a Number) - не число

const persone = "Alex"; // в JS нет разницы какие кавычки использовать
const string = `5`; // строка, а не число

const bool = true;

console.log(something); // null - не существует

let und;
console.log(und); // undefined - пусто, но существует

const obj = { // объект может содержать свойства - данные и методы - функции
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name); // при помощи . обратились к свойству объекта (рекомендуется)
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', {}, []]; // массив (любой тип данных)
console.log(arr[1]);