//Random Number Generator: Create a program that generates a random number between a specified range.
const prompt = require("prompt-sync")();

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// user input:
console.log("------------------Enter range --------------------");
let min = prompt("Enter min range: ");
min = Number(min);
let max = prompt("Enter max range: ");
max = Number(max);

// range:
console.log("Random Number is: ");
console.log(between(min, max));
