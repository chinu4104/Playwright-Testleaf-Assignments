let numberArray = [2,3,4,6,1,7,8,0,4];
let target = 8;
let resultsArray = [];

for (let i = 0; i <= numberArray.length-1; i++) {
    for (let j = 0; j<=numberArray.length-1; j++) {
        console.log(numberArray[i], numberArray[j]);
        if (numberArray[i] + numberArray[j] === target ) {
            resultsArray.push([i,j]);
        }
    }
}
console.log(resultsArray);