"use strict";

// let x = 5; alert( x++ ); // (5) постфиксная форма сначала возвращает старое значение
// [ ] + false - null + true
console.log(typeof([ ] + false)); // пустой массив преобразуется в строку при конкатенации
console.log([ ] + false - null + true); // NaN (Not a Number)

let y = 1;
let x = y = 2; // последовательное присваивание (по цепочке)
alert(x);

console.log([ ] + 1 + 2); // (12) конкатенация строк

alert( "1"[0] ); // (1) индекс элемента в строке

console.log(2 && 1 && null && 0 && undefined); // true && true && null
// И запинается на лжи (false)

console.log(!!( 1 && 2 ) === (1 && 2)); // false (boolean) === true

//        3         3    3
alert( null || 2 && 3 || 4 ); // (3) таблица приоритет операторов
// ИЛИ запинается на лжи (false)

// просто разные переменные с похожей информацией
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b);

alert( +"Infinity" ); // число

console.log("Ёжик" > "яблоко"); // посимвольное сравнение двух строк (таблица символов unicode)

//          2    2     2
console.log(0 || "" || 2 || undefined || true || falsе ); // 2