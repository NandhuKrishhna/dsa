class Stack{
    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item)
    }

    pop(){
        if(this.stack.length === 0){
            return "Stack is empty"
        }
        return this.stack.pop()
    }
}