//Random Number Generator: Create a program that generates a random number between a specified range.
function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// range:

console.log(between(1112, 9999));
