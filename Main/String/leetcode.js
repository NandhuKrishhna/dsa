// const reverseString = (arr, start, end) => {
//     if (start >= end) return;
 

//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     reverseString(arr, start + 1, end - 1);
//  };
 
function reverseArray(arr, e) {
    // Base case: when e is less than 0, return an empty array
    if (e < 0) {
        console.log("Base case reached, returning empty array.");
        return [];
    }

    console.log(`Calling reverseArray with e = ${e}, current element: '${arr[e]}'`);

    // Recursively call reverseArray and concatenate the element at index e
    let rev = reverseArray(arr, e - 1);

    console.log(`Concatenating '${arr[e]}' to '${rev}'`);

    return rev +arr[e] // Append current element to the reversed rest
}

const arr = ["h", "e", "l", "l", "o"];
const result = reverseArray(arr, arr.length - 1);
console.log(`Final result: ${result}`);  // Output: ['o', 'l', 'l', 'e', 'h']
