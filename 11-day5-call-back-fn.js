let browser = "Chrome";
function checkBrowserVersion(x) {
    console.log("Before timeout and call back fn")
    setTimeout(() => {
        x(browser);
    }, 2000);   
}

function callBackFn(browser){
    console.log(`The browser version is ${browser}`)
}

checkBrowserVersion(callBackFn);