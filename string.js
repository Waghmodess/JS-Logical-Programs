// 1. Reverse the given array String:

let str = 'Hello';
let newStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);

// 2 Check the given string is palindrome or not.
let name$ = 'Dad';
function checkPalindrome(name$) {
    let str1 = name$.toLowerCase();
    let revStr = str1.split('').reverse().join('');
    if (str1 === revStr) {
        console.log(name$ + " is a palindrome.");
    } else {
        console.log(name$ + " is not a palindrome.");
    }
}
checkPalindrome(name$);

let input = name$.toLowerCase();
let revInput = '';
for (let i = input.length - 1; i >= 0; i--) {
    revInput += input[i];
}
if (input === revInput) {
    console.log('It is a palindrome');
} else {
    console.log('It is not a palindrome');
}