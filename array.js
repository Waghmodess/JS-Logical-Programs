let arr = [1, 2, 1, 3, 2, 4, 3, 5];

// 1. Remove duplicates from the array using in-built method.
let x = Array.from(new Set(arr));
console.log(x);

// OR

// Remove duplicates from the array using spread operator.
x = [...new Set(arr)];
console.log(x);

// 2 Remove duplicates from the array without using in-built method.
function removeDup(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

x = removeDup(arr);
console.log(x);

// OR

function removeDuplicates(arr) {
    let uniqueElements = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements[arr[i]]) {
            uniqueElements[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result
}

x = removeDuplicates(arr);
console.log(x);

// 3. Reverse the given array using in-built method.
x = x.reverse();
console.log(x);

// OR

// Reverse the given array without using in-built method.
let a = [];
for (let i = x.length - 1; i >= 0; i--) {
    a.push(x[i]);
}
console.log(a);

// OR

// Reverse the given array using Reduce method.
x = x.reduce((item, currentArr) => [currentArr, ...item], []);
console.log(x);

// 3. Find the Maximum and Minimum number from given Array.
let max = x[0];
let min = x[0];
for (let i = 0; i <= x.length; i++) {
    if (x[i] > max) { max = x[i] }
    if (x[i] < min) { min = x[i] }
}
console.log(max, min);

// OR

let max1 = Math.max(...x);
let min1 = Math.min(...x);
console.log(max1, min1);
