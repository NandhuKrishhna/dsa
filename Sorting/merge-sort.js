
const sortArray = function(nums) { 
    console.log("Sorting array:", nums);
    let n = nums.length;
    if (n <= 1) {
        console.log("Base case reached with array:", nums);
        return nums; // Base case: single element or empty array is already sorted
    }

    // Split the array into two halves
    let mid = Math.floor(n / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    console.log("Left half:", left, "Right half:", right);

    // Recursively sort the left and right halves
    left = sortArray(left);
    right = sortArray(right);

    // Merge the sorted halves
    let merged = merge(left, right);
    console.log("Merged array:", merged);
    return merged;
};

const merge = function(left, right) {
    console.log("Merging:", left, right);
    let sortedArray = [];
    let i = 0, j = 0;

    // Merge the arrays by comparing elements from both left and right
    while (i < left.length && j < right.length) {
        console.log(`Comparing left[${i}] = ${left[i]} and right[${j}] = ${right[j]}`);
        if (left[i] < right[j]) {
            console.log(`Pushing left[${i}] = ${left[i]} into sorted array`);
            sortedArray.push(left[i]);
            i++;
        } else {
            console.log(`Pushing right[${j}] = ${right[j]} into sorted array`);
            sortedArray.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array, add them
    while (i < left.length) {
        console.log(`Pushing remaining left[${i}] = ${left[i]} into sorted array`);
        sortedArray.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array, add them
    while (j < right.length) {
        console.log(`Pushing remaining right[${j}] = ${right[j]} into sorted array`);
        sortedArray.push(right[j]);
        j++;
    }

    console.log("Resulting sorted array from merge:", sortedArray);
    return sortedArray;
};

// Example usage
const nums = [38, 27, 43, 3, 9, 82, 10];
console.log("Initial array:", nums);
console.log("Sorted Array:", sortArray(nums));
