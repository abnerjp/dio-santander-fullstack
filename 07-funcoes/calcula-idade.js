const pessoa1 = {
  nome: "Cliclano",
  idade: 30
}

const pessoa2 = {
  nome: "Beltrana",
  idade: 65
}

const animal = {
  nome: "Mylo",
  idade: 5,
  raca: "vira-lata"
}

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

console.log(calculaIdade.apply(pessoa1, [7]));
console.log(calculaIdade.call(pessoa2, 7));
console.log(calculaIdade.apply(animal, [7]));
