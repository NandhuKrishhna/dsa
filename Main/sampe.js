class MyStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(x) {
      // Step 1: Push new element to queue2
      this.queue2.push(x);
      
      // Step 2: Move all elements from queue1 to queue2
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
      
      // Step 3: Swap queues
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
  
    pop() {
      return this.queue1.shift();
    }
  
    top() {
      return this.queue1[0];
    }
  
    empty() {
      return this.queue1.length === 0;
    }
  }
  


  // Instantiate the stack
const stack = new MyStack();

// Insert elements using push
stack.push(5);
console.log("Pushed 5");
stack.push(10);
console.log("Pushed 10");
stack.push(15);
console.log("Pushed 15");

// Check the top element
console.log("Top element:", stack.top()); // Should output 15

// Pop elements
console.log("Popped:", stack.pop()); // Should output 15
console.log("Top element after pop:", stack.top()); // Should output 10

// Check if the stack is empty
console.log("Is stack empty?", stack.empty()); // Should output false

// Pop remaining elements
console.log("Popped:", stack.pop()); // Should output 10
console.log("Popped:", stack.pop()); // Should output 5

// Check if the stack is empty now
console.log("Is stack empty?", stack.empty()); // Should output true
