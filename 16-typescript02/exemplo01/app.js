"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 30,
    profissao: "dev",
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: "Andre",
    idade: 25,
    profissao: "dev"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professoa"] = 0] = "Professoa";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorFutebol"] = 3] = "JogadorFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias: ["matematica", "algoritmos"]
};
const monica = {
    nome: "Monica",
    idade: 26,
    materias: ["matematica", "algoritmos"]
};
function listar(lista) {
    lista.forEach((item) => console.log("-", item));
}
listar(monica.materias);
