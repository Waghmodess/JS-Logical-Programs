let arr = [1, 2, 1, 3, 2, 4, 3, 5];

// 1. Remove duplicates from the array using in-built method.
let x = Array.from(new Set(arr));
console.log(x);

// 2. Remove duplicates from the array using spread operator.
x = [...new Set(arr)];
console.log(x);

// 3. Remove duplicates from the array without using in-built method.
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