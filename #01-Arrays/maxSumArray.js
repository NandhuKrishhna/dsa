// // Kadane's algorithm
//   //[1,2,3-4,-2,4,-3,-1,7,-9]
  function maxArray(array) {
    let max = array[0];
    let sum = 0;
    let start = 0, end = 0, tempStart = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];  
        if (sum > max) {
            max = sum;
            start = tempStart; 
            end = i;  
        }     
        if (sum < 0) {
            sum = 0;
            tempStart = i + 1;
        }
    }
    console.log("Max sum:", max);
    console.log("Subarray with max sum:", array.slice(start, end + 1));  // Display the subarray
    return max;
}

console.log(maxArray([1, 2, -3, -4, -2, 4, -3, 1, 7, -9]));

// const arr = [1, 2, -3, -4, -2, 4, -3, 1, 7, -9];
// console.log(arr.slice(0,1));