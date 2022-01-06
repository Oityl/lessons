"use strict";

let a = 5,
    b = a; // в примитивных типах - данные передается значение

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // передача значения по ссылке (ссылка на уже существующий объект)

// copy.a = 10; // изменяя что-то внутри копии, изменяется начальный объект

// console.log(copy);
// console.log(obj);

function copy(mainObj) { // скопировать объект с помощью цикла
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    // глубокие и поверхностные копии объекта
    c: { // при вложенной структуре появляется ссылочный тип данных (поверхностная копия)
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // соединить 2 объекта (независимая поверхностная копия объекта)

const clone = Object.assign({}, add); // в clone независимая поверхностная копия объекта
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; // ссылка на массив
const newArray = oldArray.slice(); // скопировать весь массив

newArray[1] = 'skdajSdsrwe';
console.log(newArray);
console.log(oldArray);

// Spread - оператор разворота (новый оператор ES9 2018)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // скопировать все элементы (развернуть массивы на структуры)

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // разложить массив на отдельные сущности

const array = ["a", "b"];

const newAarray = [...array]; // поверхностная копия массива, с помощью spread

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // поверхностная копия объекта, с помощью spread