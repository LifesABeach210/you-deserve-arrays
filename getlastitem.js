const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt(">"));
let arraylength = userArray.length;
let lastItem = userArray[arraylength-1];

console.log(lastItem);
