const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0];


function sumOfOldNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 !== 0 ? (sum += num) : sum), 0);
};
console.log(sumOfOldNumbers(arr))