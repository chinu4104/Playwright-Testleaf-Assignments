


// Task 1: Function Declaration

function userProfile(name) {
    console.log(`Task 1: Hello ${name}!!!`)   
}
userProfile("Chinmaya");

//Task 2: Arrow Function

let double = (num) => console.log(`Task 2 :The doubled value of ${num} is ${num*2}`);
double(2);
double(7);

//Task 3: Anonymous Function
let timeout = function(){
    setTimeout(() => { console.log("Task 3: This message will be printed after 2 seconds ") }, 2000);
}
timeout();

//Task 4: Callback Function

function callBackFn() { console.log("Task 4: Its a call back function")}

function getUserDate(x){
    console.log("Task 4: Get user data function")
    setTimeout(() => {
        x();
    }, 3000);
}
getUserDate(callBackFn);
