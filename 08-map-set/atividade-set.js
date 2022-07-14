const myArray = [30, 30, 50, 5, 1, 2, 2];

function obterValoresUnicos(myArray) {
  const mySet = new Set(myArray)
  return [...mySet];
}

console.log(obterValoresUnicos(myArray));