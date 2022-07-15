
function multiplyArray (myArray, value) {
  return myArray.map((item) => item * value);
}

const nums = [1, 2, 4, 3];

console.log("this -> maçã", multiplyArray(nums, 2));
console.log("this -> laranja", multiplyArray(nums, 2));