"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let frase = "O valor da soma é: ";
let devePrintar = true;
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(adicionarNumero(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value), devePrintar, frase));
});
