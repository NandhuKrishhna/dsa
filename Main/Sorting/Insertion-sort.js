function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      // Compare the start property of objects
      while (j >= 0 && arr[j].start > key.start) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return arr;
}

const events = [
  { start: 14, end: 15 }, 
  { start: 9, end: 10 }, 
  { start: 11, end: 12 }
];

const result = insertionSort(events);
console.log(result);
