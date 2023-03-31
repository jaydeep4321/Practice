//File Reader: Create a program that reads a text file and displays
// its contents to the console.

const fs = require("fs");
const prompt = require("prompt-sync")();

let fileName = prompt("Enter Your filename: ");

const data = fs.readFileSync(`${fileName}`, "utf-8");

// const dataObj = JSON.parse(data);

// console.log(dataObj);

console.log(data);
