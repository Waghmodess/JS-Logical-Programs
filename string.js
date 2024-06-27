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

// Reverses each word in a sentence without using any inbuilt method
let sentence = "Hello world from ChatGPT";
function reverseWords(sentence) {
    let reversedSentence = '';
    let wordStart = 0;
    for (let i = 0; i <= sentence.length; i++) {
        // Check if we have reached the end of a word or the sentence
        if (i === sentence.length || sentence[i] === ' ') {
            // Reverse the current word
            for (let j = i - 1; j >= wordStart; j--) {
                reversedSentence += sentence[j];
            }
            // Add a space if it's not the end of the sentence
            if (i !== sentence.length) {
                reversedSentence += ' ';
            }
            // Update the start position for the next word
            wordStart = i + 1;
        }
    }
    return reversedSentence;
}

let result = reverseWords(sentence);
console.log(result); // "olleH dlrow morf TPGtahC"
