// Assignment with var
//1. Declare a const name as browserName (global) 
// 2. Assign value as Chrome
const browserName = "Chrome";

//3.Create a function by name getBrowserName
function getBrowserName(browserName) {
    //4. Create if condition inside function to check if browser is chrome, then
    if (browserName === "Chrome") {
        //5. Declare a local variable (browserName) 
        var browserName = "New Chrome";
    }
    //and print that variable inside function (outside block)
    console.log("The browser name is "+browserName, "--- Printed outside the if block and within the function")
}

//6. Call that function from the javascript 
getBrowserName(browserName);
console.log("The browser name is "+browserName, "Global-- outside the function")

//######################################################################################################
// Assignment with let 
const browserName1 = "Safari";

function getBrowserNameWithLet(browserName1) {
    if (browserName1 === "Safari") {
        let browserName1 = "New Safari";
    }
    console.log("The browser name is "+browserName1)
}

getBrowserNameWithLet(browserName1);
console.log("The browser name is "+browserName1)