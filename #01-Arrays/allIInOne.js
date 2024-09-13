function quickSort(arr, prop) {
    if (arr.length <= 1) return arr;
  
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][prop] < pivot[prop]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, prop), pivot, ...quickSort(right, prop)];
  }
  
  let objectsArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Tom', age: 30 },
    { name: 'Emily', age: 28 }
  ];
  
  console.log(quickSort(objectsArray, 'age'));
  // Output: [{name: 'Jane', age: 22}, {name: 'John', age: 25}, {name: 'Emily', age: 28}, {name: 'Tom', age: 30}]
  


  function countSubarraysWithSumK(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === k) {
          count++;
        }
      }
    }
    return count;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let k = 5;
  console.log(countSubarraysWithSumK(arr, k)); // 2 ([2,3] and [5])
  