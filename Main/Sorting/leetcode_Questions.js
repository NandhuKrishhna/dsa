// Merge Intervals 56

// Merge Sort Implementation with logging
function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log("Base case reached with:", arr);
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    console.log("Splitting array:", arr, "into", arr.slice(0, mid), "and", arr.slice(mid));

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    console.log("Merging:", left, "and", right);
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i][0] < right[j][0]) {
            console.log("Taking element from left:", left[i]);
            result.push(left[i]);
            i++;
        } else {
            console.log("Taking element from right:", right[j]);
            result.push(right[j]);
            j++;
        }
    }

    // Collect remaining elements
    while (i < left.length) {
        console.log("Taking remaining element from left:", left[i]);
        result.push(left[i++]);
    }
    while (j < right.length) {
        console.log("Taking remaining element from right:", right[j]);
        result.push(right[j++]);
    }

    console.log("Merged result:", result);
    return result;
}

// Merge Intervals Function with logging
var mergeIntervals = function(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals using custom merge sort
    console.log("Original intervals:", intervals);
    intervals = mergeSort(intervals);
    console.log("Sorted intervals:", intervals);

    // Merging the intervals
    let result = [intervals[0]];
    console.log("Initial result:", result);

    for (let i = 1; i < intervals.length; i++) {
        let prev = result[result.length - 1];
        console.log(prev);
        let curr = intervals[i];
        console.log(curr);

        console.log("Checking overlap between", prev, "and", curr);

        if (curr[0] <= prev[1]) {
            // Overlapping intervals, merge them
            console.log("Merging intervals:", prev, "and", curr);
            prev[1] = Math.max(prev[1], curr[1]);
            console.log("Merged interval:", prev);
        } else {
            // No overlap, add current interval to result
            console.log("No overlap, adding current interval to result:", curr);
            result.push(curr);
        }
    }

    console.log("Final merged intervals:", result);
    return result;
};

// Example usage
let intervals = [[1,3], [2,6], [8,10], [15,18]];
console.log("Merge Intervals Result:", mergeIntervals(intervals));  
