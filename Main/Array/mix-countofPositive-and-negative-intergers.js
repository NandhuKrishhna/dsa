function maximumCount(nums) {
    console.log("Input array:", nums);

    // Binary search to find the first positive number
    function findFirstPositive(nums) {
        let left = 0, right = nums.length - 1;
        console.log("\nStarting to find the first positive number:");
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            console.log(`  left: ${left}, right: ${right}, mid: ${mid}, nums[mid]: ${nums[mid]}`);
            
            if (nums[mid] > 0) {
                console.log(`  nums[mid] (${nums[mid]}) is positive, move right to mid-1`);
                right = mid - 1;  // Move to the left half
            } else {
                console.log(`  nums[mid] (${nums[mid]}) is not positive, move left to mid+1`);
                left = mid + 1;   // Move to the right half
            }
        }

        console.log(`First positive number is at index: ${left}`);
        return left;  // Index of the first positive number
    }

    // Binary search to find the last negative number
    function findLastNegative(nums) {
        let left = 0, right = nums.length - 1;
        console.log("\nStarting to find the last negative number:");
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            console.log(`  left: ${left}, right: ${right}, mid: ${mid}, nums[mid]: ${nums[mid]}`);
            
            if (nums[mid] < 0) {
                console.log(`  nums[mid] (${nums[mid]}) is negative, move left to mid+1`);
                left = mid + 1;   // Move to the right half
            } else {
                console.log(`  nums[mid] (${nums[mid]}) is not negative, move right to mid-1`);
                right = mid - 1;  // Move to the left half
            }
        }

        console.log(`Last negative number is at index: ${right}`);
        return right;  // Index of the last negative number
    }

    const firstPositiveIndex = findFirstPositive(nums);
    const lastNegativeIndex = findLastNegative(nums);

    console.log("\nIndices found:");
    console.log(`  First positive index: ${firstPositiveIndex}`);
    console.log(`  Last negative index: ${lastNegativeIndex}`);

    // Count of negative numbers
    const negativeCount = lastNegativeIndex + 1;
    console.log(`Negative count: ${negativeCount}`);
    
    // Count of positive numbers
    const positiveCount = nums.length - firstPositiveIndex;
    console.log(`Positive count: ${positiveCount}`);

    // Return the maximum of both counts
    const result = Math.max(negativeCount, positiveCount);
    console.log(`Maximum count of positive or negative numbers: ${result}`);
    
    return result;
}

// Example usage:
const nums = [-3, -2, -1, 0, 1, 2, 3];
console.log("Maximum count of positive or negative numbers:", maximumCount(nums));
