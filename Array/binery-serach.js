function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid; 
      } 
      else if (arr[mid] < target) {
        low = mid + 1;

      } 
      else {
        high = mid - 1;
      }
    }
  
    return -1; 
  }
  
  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72];
  const target = 23;
  const result = binarySearch(sortedArray, target);
  
  console.log(result);