interface ICachorro {
  readonly nome: string;
  readonly idade: number;
  readonly parqueFavorito?: string
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
  nome;
  idade;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro("Apolo", 14);
cao.idade = 8;

console.log(cao)