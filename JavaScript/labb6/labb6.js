// Funktion 1:
// const hello = function() {
//  Console.log(‘Hello world’);
// }

const hello = () =>  console.log('Hello world');
  
hello();

// Funktion 2:
// const greet = function(name) {
//  console.log(‘Hej ‘ + name + ‘ hur mår du?’);
// }

const greet = (name) => console.log('Hej ' + name + ', hur mår du?');

greet('Johannes');

// Funktion 3:
// const calc = function(numberOne, numberTwo) {
//  return numberOne + numberTwo
// }

const calc = (numberOne, numberTwo) => numberOne + numberTwo;

console.log(calc(70,3));

// Funktion 4:
// const tip = function(sum, percent) {
//  let total = sum + sum * percent;
//  return total;
// }

const tip = (sum, percent) => sum + sum * percent;

console.log(tip( 70 , 0.20 ));

