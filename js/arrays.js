"use strict";

const arr = [2, 13, 26, 8, 10]; // массив
arr.sort();
arr.sort(compareNum); // сортировка чисел по callback функции (передача callback функции)
// console.log(arr.length); // свойство length всегда возвращает индекс последнего элемента + 1
// arr[99] = 0;
// console.log(arr. length);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// метод перебора массива (нельзя использовать break и continue)
// arr.forEach(function(item, i, arr) { // значение, индекс (номер по порядку), ссылка на массив
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop(); // удалить последний элемент
// arr.push(10); // добавить элемент в конец массива

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) { // конструкция для перебора массива (можно использовать break и continue)
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", "); // сформировать массив из слов введенной строки (разделитель в строке)
products.sort(); // сортировка, как строку по алфавиту
console.log(products.join('; ')); // сформировать строку из массива (разделитель в строке)

// псевдомассив - это просто структура, которая хранит данные по порядку