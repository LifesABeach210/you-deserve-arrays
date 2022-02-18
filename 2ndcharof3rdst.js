const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("enter your array:"));
let thirditem = userArray[2];
let secondChar = thirditem[1];

if (typeof thirditem==="string"){
    console.log(secondChar)
}else if (typeof thirditem!=="string"){
    console.log("error");
}