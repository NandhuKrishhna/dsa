const sortArray = function(nums) { 
    let n = nums.length;
    if (n <= 1) {
        return nums; 
    }

    let mid = Math.floor(n / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);

    left = sortArray(left);
    right = sortArray(right);

    return merge(left, right);
};

const merge = function(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }
    return sortedArray;
};

const zigzagArray = function(arr) {
    // Sort the array
    const sorted = sortArray(arr);
    
    // Rearrange in zigzag pattern
    for (let i = 0; i < sorted.length - 1; i++) {
        if (i % 2 === 0) { // Even index: arr[i] < arr[i + 1]
            if (sorted[i] >= sorted[i + 1]) {
                [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
            }
        } else { // Odd index: arr[i] > arr[i + 1]
            if (sorted[i] <= sorted[i + 1]) {
                [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
            }
        }
    }
    return sorted;
};

// Example usage
const nums = [3, 5, 2, 1, 6, 4];
console.log("Original array:", nums);
const zigzagged = zigzagArray(nums);
console.log("Zigzag Array:", zigzagged);
