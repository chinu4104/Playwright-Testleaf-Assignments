// String panlindrom
let x = checkPalindfrom("racecar");
console.log(`The word is a racecar is a panlindrom : ${x}`)

let y = checkPalindfrom("Chinmaya");
console.log(`The word is a racecar is a panlindrom : ${y}`)


function checkPalindfrom(word){
    let consts = word.split("").join();
    let reserveSt=" ";
    for (let index = consts.length-1; index >=0; index--) {
        reserveSt = reserveSt+consts[index];}
    return consts.trim() === reserveSt.trim();
}