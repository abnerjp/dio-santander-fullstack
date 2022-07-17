// types
// interfaces

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executarSom(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal : IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executarSom: (alturaEmDecibeis) => console.log(`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  visaoNoturna: true,
  executarSom: (alturaEmDecibeis) => console.log(`${alturaEmDecibeis}dB`)
}