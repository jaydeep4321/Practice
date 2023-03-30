const prompt = require("prompt-sync")();

//----- This for reading a single line------//

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Who are you?", (name) => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

let number1 = prompt("Enter first number: ");
number1 = Number(number1);
let number2 = prompt("Enter second number: ");
number2 = Number(number2);

// let option = [1, 2, 3, 4];
console.log("---------Select Opration----------- \n");
console.log("1. Sum\n");
console.log("2. Subtraction\n");
console.log("3. Multiplication\n");
console.log("4. Division\n");

let option = prompt("Enter you choice: ");
option = Number(option);

console.log("------------ Answer-------------");
if (option === 1) {
  console.log(`sum of two number: ${number1 + number2}`);
} else if (option === 2) {
  console.log(`subtraction of two number: ${number1 - number2}`);
} else if (option === 3) {
  console.log(`multiplication of two number: ${number1 * number2}`);
} else if (option === 4) {
  console.log(`division of two number: ${number1 / number2}`);
}
