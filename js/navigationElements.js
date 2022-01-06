"use strict";

// Методы для взаимодействия с узлами (node)

// document.head // получить HTML head
// document.body // получить HTML body

// console.log(document.body);

console.log(document.documentElement); // получить HTML страницы

// console.log(document.body.childNodes); // получить дочерние узлы (или дети) – элементы, которые лежат внутри данного
// text - перенос строку - узел (node), не отображается в браузере

// console.log(document.body.firstChild); // получить первый дочерний узел (node)
// console.log(document.body.lastChild); // получить последний дочерний узел (node)

// получить родителя определённого элемента (можно * раз)
// console.log(document.querySelector('#current').parentNode.parentNode);

// data атрибуты
// получить атрибут с помощью селектора
// console.log(document.querySelector('[data-current="3"]').nextSibling); // получить следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousSibling); // получить предыдущий элемент

// Методы для взаимодействия с элементами (тегами)

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.body.firstElementChild);

// childElement - не существует, но можно вручную

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { // определяем текстовый узел (node)
        continue; // пропустить период цикла
    }

    console.log(node);
}