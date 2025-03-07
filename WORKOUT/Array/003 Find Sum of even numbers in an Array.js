//* Find the sum of all the even numbers in the array;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const findSumOfEvenNumbers = (arr) => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? (sum += num) : sum), 0);
};

console.log(findSumOfEvenNumbers(arr));

//* without using inbuild methods...
const findSumOfEvenNums = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
};

console.log(findSumOfEvenNUms(arr));
