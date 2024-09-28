class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      if (this.isEmpty()) return null;
      return this.items.pop();
  }

  peek() {
      if (this.isEmpty()) return null;
      return this.items[this.size() - 1];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  size() {
      return this.items.length;
  }

  print() {
      if (this.isEmpty()) {
          console.log("Stack is empty");
      } else {
          console.log(this.items.join(" <- "));
      }
  }
}

class QueueUsingStacks {
  constructor() {
      this.stack1 = new Stack(); // Used for enqueue
      this.stack2 = new Stack(); // Used for dequeue
  }

  // Enqueue operation (add element to the queue)
  enqueue(element) {
      this.stack1.push(element);
  }

  // Dequeue operation (remove and return the front element of the queue)
  dequeue() {
      if (this.stack2.isEmpty()) {
          // Transfer all elements from stack1 to stack2
          while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2.pop();
  }

  // Peek operation (returns the front element without removing it)
  peek() {
      if (this.stack2.isEmpty()) {
          // Transfer all elements from stack1 to stack2
          while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2.peek();
  }

  // Check if the queue is empty
  isEmpty() {
      return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  // Return the size of the queue
  size() {
      return this.stack1.size() + this.stack2.size();
  }

  // Improved Print method to display the queue in correct order
  print() {
      if (this.isEmpty()) {
          console.log("Queue is empty");
          return;
      }

      // Elements in stack2 are in reverse order, so reverse them to get correct order
      const stack2Elements = [...this.stack2.items].reverse();

      // Elements in stack1 are in normal order
      const stack1Elements = [...this.stack1.items];

      // Combine both parts to represent the full queue
      const fullQueue = stack2Elements.concat(stack1Elements);

      // Display the queue with front on the left and rear on the right
      console.log(fullQueue.join(" -> "));
  }
}

// Example usage
const queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueue operations:");
queue.print(); // Expected: 10 -> 20 -> 30

console.log("Dequeued element:", queue.dequeue()); // Should return 10
queue.print(); // Expected: 20 -> 30

queue.enqueue(40);
console.log("Queue after enqueuing 40:");
queue.print(); // Expected: 20 -> 30 -> 40

console.log("Front element:", queue.peek()); // Should return 20

console.log("Dequeued element:", queue.dequeue()); // Should return 20
queue.print(); // Expected: 30 -> 40
