"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
atualizaCampoSaldo(saldo);
function atualizaCampoSaldo(valor) {
    campoSaldo.innerHTML = valor.toString();
}
function somarAoSaldo(valorParaSomar) {
    if (isNaN(valorParaSomar))
        return;
    saldo += valorParaSomar;
    atualizaCampoSaldo(saldo);
}
function limparSaldo() {
    saldo = 0;
    atualizaCampoSaldo(saldo);
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
