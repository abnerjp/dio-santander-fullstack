const pessoa = {
  nome: "Mariana",
  idade: 30,
  profissao: "dev",
}


pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
  nome: "Andre",
  idade: 25,
  profissao: "pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome: "Andre",
  idade: 25,
  profissao: "dev"
}

enum Profissao {
  Professoa,
  Atriz,
  Desenvolvedora,
  JogadorFutebol
}


interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
  nome: "Jessica",
  idade: 26,
  profissao: Profissao.Desenvolvedora,
  materias: ["matematica", "algoritmos"]
}

const monica: Estudante = {
  nome: "Monica",
  idade: 26,
  materias: ["matematica", "algoritmos"]
}

function listar(lista: string[]) {
  lista.forEach((item) => console.log("-", item));
}

listar(monica.materias);