function multiplyArray (myArray, thisArg) {
  return myArray.map(function(item) {
    return item * this.value;
  }, thisArg);
}

const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

const nums = [1, 2];

console.log("this -> maçã", multiplyArray(nums, maca));
console.log("this -> laranja", multiplyArray(nums, laranja));