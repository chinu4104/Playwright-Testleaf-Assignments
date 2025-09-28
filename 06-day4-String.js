/* 1. Problem (JavaScript)
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Examples:
Input: s = "Hello World" → Output: 5 (last word "World")
Input: s = " fly me to the moon " → Output: 4 (last word "moon")
Input: s = "luffy is still joyboy" → Output: 6 (last word "joyboy") */

let x= "Hello world"
let y= " fly me to the moon "
let z= "luffy is still joyboy"

spiltAndPrintLastWord(x)
spiltAndPrintLastWord(y)
spiltAndPrintLastWord(z)

function spiltAndPrintLastWord(value){
let t = value.trim();
t = t.split(" ");
console.log(`The length of the last word \"${t[t.length-1].trim()}\" is ${+t[t.length-1].length}`);
}

// 2. Check two strings are anagrams
function checkAnagrams(word1, word2){
    sortedWord1 = word1.trim().toUpperCase().split("").sort().join();
    sortedWord2 = word2.trim().toUpperCase().split("").sort().join();
    return console.log(`The words ${word1} and ${word2} are anagrams is \"${sortedWord1 === sortedWord2}\"`);
}
checkAnagrams("listen", "silent")
checkAnagrams("hello", "world")