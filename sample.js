function mergeSort(arr) {
  // Base case: if array has 1 or no elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Step 1: Divide the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);  // Left half
  let right = arr.slice(mid);    // Right half

  // Step 2: Recursively sort both halves
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let sortedArray = [];
  let i = 0, j = 0;

  // Compare elements from both arrays and add the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // If there are any remaining elements in the left array, add them
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // If there are any remaining elements in the right array, add them
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

// Example usage
let array = [5, 3, 8, 4, 2, 7, 1, 6];
let sortedArray = mergeSort(array);
console.log(sortedArray);
