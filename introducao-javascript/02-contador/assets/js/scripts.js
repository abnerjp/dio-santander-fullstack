var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function changeColor(elementSpan, color) {
  elementSpan.style.color = color;
}

function updateElementSpan(elementSpan, value) {
  elementSpan.innerHTML = value;

  let color = '#000'
  if (value < 0) 
    color = 'red';

  changeColor(elementSpan, color);
}

function increment() {
  currentNumber += 1;
  updateElementSpan(currentNumberWrapper, currentNumber);
}

function decrement() {
  currentNumber -= 1;
  updateElementSpan(currentNumberWrapper, currentNumber);
}