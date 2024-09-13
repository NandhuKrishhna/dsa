// Find the Missing Number
// Problem: Given an array of size n containing numbers from 1 to n+1, with one number missing, find the missing number.
// Example: Input: [1, 2, 4, 5, 6] → Output: 3

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}
