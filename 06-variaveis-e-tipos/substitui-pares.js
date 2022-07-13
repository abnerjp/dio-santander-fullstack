function replaceEvenNumbers(arrayOfNumbers) {
  if (!arrayOfNumbers) return -1;
  if (!arrayOfNumbers.length) return -1;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] === 0) {
      console.log("já é zero..");
    } else if (arrayOfNumbers[i] % 2 === 0) {
      console.log(`substituindo ${arrayOfNumbers[i]} por zero..`);
      arrayOfNumbers[i] = 0;
    }
  }

  return arrayOfNumbers;
}

let array = [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 9, 10, 11, 11, 0]
console.log(replaceEvenNumbers(array))