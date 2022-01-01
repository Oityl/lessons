"use strict";

console.log('arr' + " - object");
console.log(4 + +"5"); // унарный + (+ перед чем-то)

let incr = 10,
    decr = 10; // форма задания переменных через ,

// постфиксная формы
// incr++; // инкремент (увеличение значения на 1)
// decr--; // декремент (уменьшение значения на 1)

// префиксная форма
// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// постфиксная форма сначала возвращает старое значение
console.log(incr++);
console.log(decr--);

// префиксная форма сразу возвращает новое значение
console.log(++incr);
console.log(--decr);

console.log(5%2); // деление с остатком

console.log(2*4 == 8); // оператор сравнения
console.log(2*4 == '8');
console.log(2*4 === '8'); // строгое сравнение по значению и типу данных

console.log(2 + 2 * 2 != 8); // оператор отрицания
console.log(2 + 2 * 2 != '6'); // строгое сравнение по значению и типу данных
console.log(2 + 2 * 2 !== '6');

// && - оператор и
// || - оператор или

const isChecked = false,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || !isClose); // оператор отрицания