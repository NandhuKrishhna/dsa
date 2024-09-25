function flattenArrayRecursive(arr) {
    let result = [];
    function flattenHelper(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (typeof subArray[i] === 'object' && subArray[i] !== null) {
                flattenHelper(subArray[i]);
            } else {
                result.push(subArray[i])
            }
        }
    }

    flattenHelper(arr);
    return result;
}


const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArrayRecursive(nestedArray)); 

