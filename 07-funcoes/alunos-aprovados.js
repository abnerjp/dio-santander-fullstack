const alunos = [
  {
    nome: "fulano", 
    nota: 9,
    turma: "2A"
  },
  {
    nome: "ciclano", 
    nota: 8,
    turma: "1B"
  },
  {
    nome: "beltrano", 
    nota: 6,
    turma: "3D"
  },
  {
    nome: "abner", 
    nota: 10,
    turma: "1A"
  },
];

function alunosAprovados(arrayAlunos, media) {
  let aprovados = []

  for (let i = 0; i < arrayAlunos.length; i++) {
    
    const {nota, nome} = arrayAlunos[i]

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log("nome dos aprovados:", alunosAprovados(alunos, 6));