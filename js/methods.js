"use strict";

const str = "test";
const arr = [1, 2, 4];

// длинна массива и строки
console.log(str.length); // свойства пишеться через ., а не вызываются
console.log(arr.length);

console.dir(Number); // отображает список свойств указанного объекта

console.log(str[2] = 'd'); // напрямую строку изменить нельзя, только используя методы
console.log(str[2]); // получить определенный символ в строке

// не изменяет напрямую значение
console.log(str.toUpperCase()); // преобразованние строки в верхний регистр
console.log(str.toLowerCase()); // преобразованние строки в нижний регистр
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // (поиск подстроки) возвратить индекс искомого элемента в строке (-1 не найден)

const logg = "Hello world";

console.log(logg.slice(6, 11)); // возвратить (вырезать) элемент в строке
console.log(logg.slice(6)); // возвратить (вырезать) с начального элемента до конца строки
console.log(logg.slice(-5, -1)); // начинается с конца строки

console.log(logg.substring(6, 11)); // возвратить (вырезать) элемент в строке

console.log(logg.substr(6, 5)); // возвратить (вырезать) элемент в строке (c начала до указанного кол. элементов)

// Math - встроенная библиотека для работы с числами

const num = 12.2;
console.log(Math.round(num)); // округление к ближайшему целому

const test = "12.2 px";
console.log(parseInt(test)); // перевод в другую систему счисления (целое)
console.log(parseFloat(test)); // перевод в другую систему счисления (дробное)