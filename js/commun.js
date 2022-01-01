"use strict";
// вся информация поступающая от пользователя в виде строк

// эти команды блокируют вывод страницы в body
// есть функции, которые существуют внутри браузера
// alert('Hello'); // предупреждение пользователя

// const result = confirm("Are you here?"); // спросить пользователя
// console.log(result);

// + преобразование типа данных
// const answer = +prompt("Вам есть 18?", "18"); // подробно спросить пользователя
// console.log(typeof(answer));
// console.log(answer + 5);

const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
console.log(typeof(answers)); // object
console.log(typeof(null)); // ошибка JS