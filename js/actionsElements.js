"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // внутри род. элемента
      oneHeart = document.querySelector('.heart');
    //   wrapper = document.querySelector('.wrapper');

console.dir(box);

// свойства в styles - inline свойства (в JS имена в виде camelCase)
// box.style.backgroundColor = 'blue';
// box.style.width = '500px'; // не число, а строка

box.style.cssText = 'background-color: blue; width: 500px'; // указание стилей в виде css кода

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; необходимо указывать определенный элемент, а не весь псевдомассив
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создание элемента (тега)
// const text = document.createTextNode('Тут был я'); node - узел
// элемент на странице - node

// className - устарело
div.classList.add('black'); // добавить класс

// в старом коде обращение через род. элементам

// document.body.append(div); // вставляет узлы или строки с текстом в конец страницы
// wrapper.appendChild(div); // устарело

// document.body.querySelector('.wrapper').append(div); // вставляет узлы или строки с текстом в конец Element

wrapper.prepend(div); // вставляет узлы или строки с текстом в начало Element

// hearts[0].before(div); // вставляет узлы или строки с текстом перед Element
// wrapper.insertBefore(div, hearts[2]); // устарело

// hearts[0].after(div); // вставляет узлы или строки с текстом после Element

// circles[0].remove(); // удалить указанный элемент со страницы
// wrapper.removeChild(hearts[1]); // устарело

hearts[0].replaceWith(circles[0]); // заменить указанные элементы
// wrapper.replaceChild(circles[0], hearts[1]); // устарело

// div.innerHTML = "<h1>Hello World</h1>"; // HTML структура
// div.textContent = "Hello"; // только текст

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
// afterbegin - сразу после открывающего тега  element
// afterend - после element
// beforebegin - до самого element
// beforeend - сразу перед закрывающим тегом element