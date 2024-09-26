class Stack {
    constructor(){
      this.items =[];
    }
  
    push(element){
      this.items.push(element)
    }
    pop(){
      if(this.isEmpty()) return null;
      return this.items.pop();
    }
    peek(){
      if(this.isEmpty()) return null;
      return this.items[this.size()-1];
    }
    isEmpty(){
      return this.size() === 0;
    }
    size(){
      return this.items.length
    }
    print(){
        if(this.size() === 0){
            console.log("Stack is empty");
        }else{
            console.log(this.items.join(" <- "));
        }
    }
  }
  
const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(9)
stack.push(5)
stack.print()
console.log(  stack.peek());
console.log(stack.size());
stack.pop()
stack.print()
console.log(stack.isEmpty());
console.log(stack.size());
console.log(  stack.peek());