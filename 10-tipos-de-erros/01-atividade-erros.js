function validaArray(myArray, num) {
  try {

    if (!myArray && !num) throw new ReferenceError("Envie os parâmetros");
    
    if (typeof myArray !== "object") throw new TypeError("Array precisa ser do tipo object");
    
    if (typeof num !== "number") throw new TypeError("Número precisa ser do tipo number");
    
    if (myArray.length !== num) throw new RangeError("Tamanho inválido");

    return myArray;
  } catch(e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é RangeError");
      console.log(e.message);
    }
    else {
      console.log("Tipo de erro não esperado:", e);
    }
  }
}

console.log("------------------------------")
console.log(validaArray());
console.log("------------------------------")
console.log(validaArray([]));
console.log("------------------------------")
console.log(validaArray([1, 2]));
console.log("------------------------------")
console.log(validaArray([], ""));
console.log("------------------------------")
console.log(validaArray(1, 2));
console.log("------------------------------")
console.log(validaArray([1, 2], 2));
console.log("------------------------------")
console.log(validaArray([1, 2], 3));