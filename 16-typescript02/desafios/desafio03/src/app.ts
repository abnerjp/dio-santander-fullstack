// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldo: number = 0;
atualizaCampoSaldo(saldo);

function atualizaCampoSaldo(valor: number): void {
  campoSaldo.innerHTML = valor.toString();
}

function somarAoSaldo(valorParaSomar: number): void {
  if (isNaN(valorParaSomar)) return;
  saldo += valorParaSomar;
  atualizaCampoSaldo(saldo);
}

function limparSaldo(): void {
  saldo = 0;
  atualizaCampoSaldo(saldo);
}

botaoAtualizar.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value));  
});

botaoLimpar.addEventListener('click', function () {
  limparSaldo();
});
