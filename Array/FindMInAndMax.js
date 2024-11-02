function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;  // Update second largest
            largest = arr[i];         // Update largest
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; 
        }
    }

    return secondLargest === -Infinity ? "No second largest element" : secondLargest;
}

// Example usage
let arr = [3, 5, 7, 1, 8, 4, 9];
let secondLargest = findSecondLargest(arr);
console.log("The second largest element is:", secondLargest);
