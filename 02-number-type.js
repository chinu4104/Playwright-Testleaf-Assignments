
var number = 0
numberType(number)
numberTypeWithIf(number)

var value = 0.1
numberType(value)
numberTypeWithIf(value)

var x = -0.2
numberType(x)
numberTypeWithIf(x)

var y = '-a'
numberType(y)
numberTypeWithIf(y)

//number type using switch 
function numberType(number) {
    switch (true) {
        case (number > 0):           
            console.log("The number " +number, "is positive")
            break;
        case (number < 0):           
            console.log("The number " +number, "is negative")
            break;
        case (number == 0):   
            console.log("The number " +number, "is zero")
            break;
        default:
             console.log("The number " +number, "is not a number.")
            break;
    }
}

//number type using if
function numberTypeWithIf(number) {
    if (number > 0) {
    console.log("The number " +number, "is positive")}
    else if(number < 0) {
    console.log("The number " +number, "is negative")}
    else if(number == 0) {
    console.log("The number " +number, "is zero")} 
    else {
    console.log("The number " +number, "is not a number.")
    }
}