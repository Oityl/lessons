"use strict";

// To String

// 1)
console.log(typeof(String(null))); // преобразование null в строку
console.log(typeof(String(4))); // преобразование числа в строку

// 2)
console.log(typeof(5 + '')); // конкатенация => строка

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4'))); // преобразование строки в число

// 2)
console.log(typeof(+'5')); // унарный плюс => число

// 3)
console.log(typeof(parseInt("15px", 10))); // преобразование c помощью метода

// любые ответы от пользователя = строка
let answer = +prompt("Hello", "");

// To boolean

// '' пустая строка
// ' ' не пустая строка

// 0, '', null, undefined, NaN; => false

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"4444"));