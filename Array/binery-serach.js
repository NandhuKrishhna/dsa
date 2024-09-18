function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
        console.log(low ,'<=', high);
      // Find the middle index
      let mid = Math.floor((low + high) / 2);
      console.log('Mid : ',mid);
      // Check if the target is at the middle
      console.log(`if ${arr[mid]} === ${target}`);
      if (arr[mid] === target) {
        console.log(mid);
        return mid; // Target found, return the index
      } 
      // If the target is greater, ignore the left half
      else if (arr[mid] < target) {
        console.log(`if ${arr[mid]} < ${target}`);
        low = mid + 1;
        console.log(low);
      } 
      // If the target is smaller, ignore the right half
      else {
        high = mid - 1;
        console.log('High : ',high);
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72];
  const target = 23;
  const result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log('Element not found');
  }
  