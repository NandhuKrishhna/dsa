function isValidParentheses(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };



    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        console.log("char",char);
        
        if (map[char]) { 
            const topElement = stack.length > 0 ? stack.pop() : '#';
            console.log(`${char}`);
            console.log(`${topElement}`);
            
            if (topElement !== map[char]) {
                console.log(`${map[char]}","${topElement}`);
                return false;
            } else {
                console.log(`${map[char]}`);
             
            }
        } else { 
            stack.push(char);
            console.log(`${char}`);
            console.log(`[${stack.join(', ')}]`);
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        console.log(`[${stack.join(', ')}]`);
        console.log('INVALID');
        return false;
    }
}

const input = "{{[()]}}";
console.log("Is valid?:", isValidParentheses(input));
