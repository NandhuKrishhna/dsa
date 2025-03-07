const arr = [1, 2, 3, 4, 5, 6, 7];

const findAvergaOfArray = (arr) => {
  return arr.reduce((cur, acc) => (cur += acc), 0) / arr.length;
};
console.log(findAvergaOfArray(arr));
