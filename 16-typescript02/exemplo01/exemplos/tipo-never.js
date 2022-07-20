"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 2;
anyEstaDeVolta = "asd";
anyEstaDeVolta = true;
let stringTeste;
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "asdsa";
unknownValor = true;
let stringTeste2;
if (typeof unknownValor == "string") {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu erro", 500);
