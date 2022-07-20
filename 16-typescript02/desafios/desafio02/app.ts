// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Occupation {
  Atriz,
  Padeiro,
}
interface Person {
  nome: string;
  idade: number;
  profissao: Occupation;
}

let pessoa1: Person = {
  nome: "maria",
  idade: 29,
  profissao: Occupation.Atriz
};

let pessoa2 = {} as Person;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Occupation.Padeiro;

let pessoa3: Person = {
  nome: "laura",
  idade: 32,
  profissao: Occupation.Atriz
};

let pessoa4: Person = {
  nome: "carlos",
  idade: 19,
  profissao: Occupation.Padeiro
}