function isValidParentheses(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    console.log(`Input string: ${s}`);
    
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        console.log(`Character: ${char}`);

        // If it's a closing bracket, check if the top of the stack matches
        if (map[char]) {
            const topElement = stack.length > 0 ? stack.pop() : '#'; // Pop if stack is non-empty, else return a dummy value
            console.log(`  Closing bracket detected. Top of stack: ${topElement}`);
            
            if (topElement !== map[char]) {
                console.log(`  Mismatch! Expected ${map[char]} but found ${topElement}.`);
                return false;
            } else {
                console.log(`  Match! ${char} matches ${topElement}.`);
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
            console.log(`  Opening bracket. Stack after push:`, stack);
        }
    }

    // In the end, the stack should be empty if it's valid
    console.log(`Stack at the end:`, stack);
    return stack.length === 0;
}

// Example usage
const input = "{[()]}";  // You can try different inputs here
console.log("Input:", input);
console.log("Is valid?:", isValidParentheses(input));
console.log(isValidParentheses("[{]}"));
