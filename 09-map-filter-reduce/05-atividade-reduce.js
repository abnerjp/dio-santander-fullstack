const listOfItems = [
  {
    name: "creme dental",
    price: 5,
  },
  {
    name: "arroz",
    price: 25,
  },
  {
    name: "tomate",
    price: 7,
  },
];

function calculateTheFinalBalance(items, balanceAvailable) {
  return items.reduce((previousValue, currentValue) => {
    return previousValue - currentValue.price;
  }, balanceAvailable);
}


const balanceAvailable = 100;

console.log("valor restante na carteira:", calculateTheFinalBalance(listOfItems, balanceAvailable));
