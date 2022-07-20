let anyEstaDeVolta: any;
anyEstaDeVolta = 2;
anyEstaDeVolta = "asd";
anyEstaDeVolta = true;

let stringTeste: string;
stringTeste = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor = "asdsa";
unknownValor = true;

let stringTeste2: string;
if (typeof unknownValor == "string") {
  stringTeste2 = unknownValor;
}