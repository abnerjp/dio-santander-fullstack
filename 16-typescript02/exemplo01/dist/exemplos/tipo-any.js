"use strict";
let valorAny;
valorAny = 3;
valorAny = "olá";
valorAny = true;
let valorString1 = "teste";
valorString1 = valorAny;
let valorString2 = "textão";
function somarStrings(str1, str2) {
    console.log(str1 + str2);
}
somarStrings(valorString1, valorString2);
