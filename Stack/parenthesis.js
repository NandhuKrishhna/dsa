function isValidParentheses(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

   
        if (map[char]) {
            const topElement = stack.length > 0 ? stack.pop() : '#'; 
            if (topElement !== map[char]) {
                return false;
            }
        } else {

            stack.push(char);
        }
    }
    return stack.length === 0;
}

const input = "{]";
console.log("Is valid?:", isValidParentheses(input));
