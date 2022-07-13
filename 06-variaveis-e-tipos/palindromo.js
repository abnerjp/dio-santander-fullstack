function itIsPalindromeTestOne(texto) {
  if (!texto) return "Valor inexistente";

  return texto.split("").reverse().join("") === texto;
}

function itIsPalindromeTestTwo(texto) {
  if (!texto) return "Valor inexistente";

  for(let i = 0; i < texto.length / 2; i++) {
    if (texto[i] !== texto[texto.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(itIsPalindromeTestOne("ovo"));
console.log(itIsPalindromeTestTwo("ovo"));