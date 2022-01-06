"use strict";

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script');
script.src = "js/scripts/test.js";
document.body.append(script); // загрузка скрипта после всей страницы

function loadScript(src) { // динамическое формирование скриптов
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

// загружаются последовательно
loadScript("/js/scripts/test.js");
loadScript("/js/scripts/some.js");