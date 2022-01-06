"use strict";
// Событие – это сигнал от браузера о том, что что-то произошло

const 
    // btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// }; // переопределить заново функцию

// слушатель событий
// btn.addEventListener('click', () => { // клик
//     alert('Click');
// }); // событие, функция

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => { // наведение мышки
//     console.log('Hover');
// });

// let i = 0;
const deleteElement = (e) => { // event - объект события
    // console.log(e);
    console.log(e.type); // тип события
    console.log(e.target); // исходный элемент, на котором произошло событие
    console.log(e.currentTarget); // текущий исходный элемент
    // e.target.remove();

    // i++;
    // if (i == 1) { // выполнить 1 раз
    //     btn.removeEventListener('click', deleteElement); // удалить обработчик событий
    // }
};

// btn.addEventListener('click', deleteElement); // создать обработчик событий

// всплытие событий - на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе,
// затем выше и так далее, вверх по цепочке предков

// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // once - выполнить только 1 раз
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // отменить стандартное поведение браузера

    console.log(event.target);
});