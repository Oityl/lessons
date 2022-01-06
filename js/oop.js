"use strict";

// ООП - объектно орентированное программирование, в частности стиль в JS - прототипно ориентированное программирование

let str = "some";
let strObj = new String(str); // создался объект на основе примитива, а потом обратился в примитив

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const john = Object.create(soldier); // создание нового объекта с прототипным наследованием

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // установили прототип (устаревший формат, уже не используется)

// Object.setPrototypeOf(john, soldier); // установили прототип

console.dir(john.armor); // свойство у прототипа
john.sayHello();