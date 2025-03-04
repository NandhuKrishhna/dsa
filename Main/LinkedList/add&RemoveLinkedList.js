function reverseStrings(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let reversedString = '';
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reversedString += arr[i][j]; // Reverse each string
        }
        result.push(reversedString); // Push reversed string into result
    }

    return result;
}

// Example usage:
const input = ['ab', 'cd'];
console.log(reverseStrings(input)); // Output: ['ba', 'dc']
