function makeFirstMessage(num1, num2) {
  const saoIguais = num1 === num2 ? "são iguais" : "não são iguais";
  
  return `Os números ${num1} e ${num2} ${saoIguais}.`
}

function makeSecondMessage(num1, num2) {
  const soma = num1 + num2;
  const somaMaiorDez = soma > 10 ? "maior" : "menor";
  const somaMaiorVinte = soma > 20 ? "maior" : "menor";

  return `Sua soma é ${soma}, que é ${somaMaiorDez} que 10 e ${somaMaiorVinte} que 20.`
}

const verificaNumeros = (num1, num2) => {
  const firstMessage = makeFirstMessage(num1, num2);
  const secondMessage = makeSecondMessage(num1, num2);

  return `${firstMessage} ${secondMessage}`;
}

console.log(verificaNumeros(2, 2));