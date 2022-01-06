"use strict";

// document (браузерное окружение) существует для браузера DOM
const box = document.getElementById('box'); // обращение по id

console.log(box);

// псевдомассив элементов (HTMLCollection)
const btns = document.getElementsByTagName('button'); // обращение ко всем указанным тегам
const btns1 = document.getElementsByTagName('button')[1];

console.log(btns[0]);
console.log(btns[1]);

// псевдомассив элементов (HTMLCollection)
const circles = document.getElementsByClassName('circle'); // обращение по классу (имя класса без .)
console.log(circles);

// querySelector - новые методы
// псевдомассив элементов (NodeList)
// для селекторов обращение к классам с указаннием . и id с указаннием #
const hearts = document.querySelectorAll('.heart'); // обращение ко всем указанным элементам по любому методу
console.log(hearts);

hearts.forEach(item => { // метод только для псевдомассива NodeList, в отличии от HTMLCollection
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // обращение только к одному элементу по любому методу
console.log(oneHeart);