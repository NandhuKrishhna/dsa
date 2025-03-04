class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0;
    }

    print(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }else{
            console.log(this.items.join(" <-"));
        }
    }
    reverse(){
        if(this.isEmpty()) return null;
        let topEl = this.pop();
        this.reverse()
        this.insertAtEnd(topEl)
    }
    insertAtEnd(element){
        if(this.isEmpty()){
            this.push(element)
            return
        }
        let topEl = this.pop();
        this.insertAtEnd(element);
        this.push(topEl)
    }
}
const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.reverse()
stack.print()