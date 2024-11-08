function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is already in the map and within the current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }

        // Update the map with the current character's index
        charMap.set(currentChar, right);

        // Calculate the length of the current substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
const result  = lengthOfLongestSubstring( "abcabcbb")
console.log(result);