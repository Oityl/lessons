"use strict"; // современный стандарт кода (указывать всегда в начале)
// a = 15;
// console.log(a);

// console.log(1);

// названия переменных чувствительны к регистру
// camelCase
// console.log(number); // вывод до того как была объявлена
let number = 5; // имя переменной может состоять из букв, цифр, $, _ (первый символ не цифра и не зарезервированные)
const leftBorderWidth = 1; // константа (использовать везде где это возможно)

number = 10;
// leftBorderWidth = 10;
console.log(number);

// прямых констант в JS не бывает
const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name); // hoisting - всплытие переменных
var name = 'Ivan'; // устаревший вариант использования, глобально (не рекомендуется)

{
    let result = 50;
    var result1 = 50;
}
// console.log(result);
// console.log(result1);

// ; - после логического блока
// alert(5)
// [].push('a');