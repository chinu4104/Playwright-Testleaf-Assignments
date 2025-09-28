var x = [1,2,3];
var y =[2,4,5]
console.log(`Example1: The intersection of given the two array is : ${intersection(x,y)}`);

var num1= [1,2,3,4,5,6,7];
var num2= [1,5,8,7,9,1];
console.log(`Example2: The intersection of given the two array is : ${intersection(num1,num2)}`)

var num3= [1,2,3,4,5,6,7];
var num4= [8,9,10];
console.log(`Example3: The intersection of given the two array is : ${intersection(num3,num4)}`)

var num3= [1,2,3,4,5,6,7,1];
var num4= [1,8,3,8,9,10,1];
console.log(`Example4: The intersection of given the two array is : ${intersection(num3,num4)}`)

function intersection(arr1, arr2) {
    let result = [];
    for (let x = 0; x < arr1.length; x++) {
        for (let y = 0; y < arr2.length; y++) {
           if (arr1[x] === arr2[y]) {
                if (!result.includes(arr1[x])) {
                    result.push(arr1[x]);   
                }
            }
        }
    } 
    return result;
}