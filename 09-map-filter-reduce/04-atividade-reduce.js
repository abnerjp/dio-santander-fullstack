function sumNumbersWithReduce(arrayNums) {
  return arrayNums.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}


const nums = [1, 2, 4, 3];

console.log("soma dos números:", sumNumbersWithReduce(nums));