function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    console.log(`Input String: "${s}"`);
    
    for (let char of s) {
        console.log(`Processing character: "${char}"`);
        
        if (char === '(' || char === '{' || char === '[') {
            // If it’s an opening bracket, push it onto the stack
            stack.push(char);
            console.log(`Opening bracket found. Stack after push: [${stack.join(', ')}]`);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.length === 0) {
                console.log(`Closing bracket "${char}" found but stack is empty. Returning false.`);
                return false; // No opening bracket to match
            }
            
            const topElement = stack.pop();
            console.log("TopElement :",topElement);
            console.log(`Closing bracket "${char}" found. Popped from stack: "${topElement}". Stack after pop: [${stack.join(', ')}]`);
            console.log('topElement','bracketMap[char]');
            if (topElement !== bracketMap[char]) {
                console.log(`Mismatch! Expected "${bracketMap[char]}" but found "${topElement}". Returning false.`);
                return false; // Mismatched brackets
            }
        }
    }

    // If the stack is empty, it means all brackets are balanced
    const isBalanced = stack.length === 0;
    console.log(`Final Stack: [${stack.join(', ')}]`);
    console.log(`Is the string valid? ${isBalanced}`);
    return isBalanced;
}

// Test cases
console.log(isValid("()"));        // Output: true
// console.log(isValid("()[]{}"));    // Output: true
// console.log(isValid("(]"));        // Output: false
// console.log(isValid("([)]"));      // Output: false
// console.log(isValid("{[]}"));      // Output: true
