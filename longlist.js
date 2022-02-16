const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("enter your array:"));
let arrayLength = userArray.length[10];
let lastItem = userArray[arrayLength-1];
let Boolean = arrayLength>10;

if (arrayLength<10) {
    console.log(Boolean);
}