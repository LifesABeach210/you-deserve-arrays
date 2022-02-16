const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("enter your array:"));
userArray.includes();
/*let firstItem = userArray[0];
let thirdItem = userArray[2];
let arrayLength = userArray.length[10];
let lastItem = userArray[arrayLength-1];
let longList = userArray.length[10];
var btrue = Boolean('true')
var bfalse = Boolean('false')*/
//console.log("the third item in the array is"+thirdItem);

//consol.log("your array is this" +typeof);

//if (userArray = thirdItem){
//console.log("the third index in thhis array is"+thirdItem);

//}else {
//console.log("the last index in the array is"+lastItem);
//}
//if (longList!==arrayLength){console.log(bfalse);
for (let index = 0; index < userArray.length; index++) {
    console.log(userArray[index]);
    
}