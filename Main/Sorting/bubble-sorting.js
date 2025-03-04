function bubbleSortByLength(arr) {
  let n = arr.length, swapped;

  for (let i = 0; i < n; i++) {
      swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
          // Compare based on string length
          if (arr[j].length < arr[j + 1].length) {
              // Swap if the length of arr[j] is less than arr[j+1]
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swapped = true;
          }
      }
      if (!swapped) {
          break;
      }
  }
  return arr;
}

let stringArray = ["apple", "banana", "kiwi", "pear", "grapefruit"];
const result = bubbleSortByLength(stringArray);
console.log(result);
