
var browser1 = "Chrome"
launchBrowser(browser1)

var browser2 = "MicrosoftEdge"
launchBrowser(browser2)

var testRun1 = "Smoke"
testResult(testRun1)

var testRun2 = "LoadTest"
testResult(testRun2)



//test type function
function testResult(testType) {
    switch (true) {
        case (testType.toUpperCase() == "SMOKE"):           
            console.log("Runs Smoke")
            break;
        case (testType.toUpperCase() == "REGRESSION"):           
            console.log("Runs regression " )
            break;
        case (testType.toUpperCase() == "SANITY"):   
            console.log("Runs sanity" )
            break;
        default:
            console.log("Default : Runs Smoke " )
            break;
    }
}

//launch browser function
function launchBrowser(browser){
    if (browser.toUpperCase() == "CHROME") {
    console.log("The browser is Chrome")}
    else if(browser.toUpperCase() == "FIREFOX") {
    console.log("The browser is firefox " )}
    else if(browser.toUpperCase() == "SAFARI") {
     console.log("The browser is safari" )} 
    else {
    console.log("Its a other browser :" +browser)
    }
}