"use strict";

// touchstart - при начале касании элемента
// touchmove - при движении по элемента
// touchend - при завершении касании элемента
// touchenter - при начале перемещения точки касании в интерактивную область
// touchleave - при завершении перемещения точки касании с интерактивной областью
// touchcancel - при прерывании касаний

// происходит когда весь HTML был полностью загружен и пройден парсером (узлы)
window.addEventListener('DOMContentLoaded', () => { // window или document
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => { // объект события
        e.preventDefault(); // отменить стандартное поведение

        console.log('Start');

        // список точек касаний сенсорной поверхности
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');

        console.log(e.targetTouches[0].pageX); // координата по X
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

// touches
// targetTouches
// changedTouches

// hammer.js - библиотека