function longestRepeatingSubstring(input) {
    let maxLength = 0;   // Maximum length of repeating characters found
    let currentChar = ''; // Current character being evaluated
    let currentCount = 0; // Current count of repeating characters
    let longestSubstring = ''; // Longest substring of repeating characters

    for (let i = 0; i < input.length; i++) {
        // If the current character is the same as the previous one
        if (input[i] === currentChar) {
            currentCount++; // Increment the count
        } else {
            // If the current sequence is longer than the max found, update
            if (currentCount > maxLength) {
                maxLength = currentCount;
                longestSubstring = currentChar.repeat(maxLength); // Update longest substring
            }
            // Update currentChar and reset currentCount
            currentChar = input[i];
            currentCount = 1; // Reset count for the new character
        }
    }

    // Final check for the last sequence
    if (currentCount > maxLength) {
        longestSubstring = currentChar.repeat(currentCount);
    }

    return longestSubstring; // Return the longest repeating substring
}

// Example usage
const input = 'aaaabbaabb';
const output = longestRepeatingSubstring(input);
console.log(output); // Output: "aaaa"
