/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    return s.trim()

};

// Test Cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
console.log(lengthOfLastWord("")); // Output: 0
console.log(lengthOfLastWord("a")); // Output: 1
console.log(lengthOfLastWord("a ")); // Output: 1
console.log(lengthOfLastWord("  ")); // Output: 0
