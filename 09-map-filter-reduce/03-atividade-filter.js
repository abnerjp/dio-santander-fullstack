function getEvenNumbers(myArray) {
  return myArray.filter((item) => item % 2 === 0);
}

const nums = [1, 2, 4, 3];

console.log("somente números pares:", getEvenNumbers(nums));