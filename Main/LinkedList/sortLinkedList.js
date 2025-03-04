class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addData(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    printList() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  
    getMiddle(head) {
      if (!head || !head.next) return head;
  
      let slow = head;
      let fast = head;
  
      while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  
    sortLinkedList(head) {
      // Base case: if the list is empty or has only one element, it's already sorted
      if (!head || !head.next) return head;
  
      // Get the middle of the list and split it
      let middle = this.getMiddle(head);
      let nextMiddle = middle.next;
      middle.next = null; // Split the list into two halves

      let left = this.sortLinkedList(head);
      let right = this.sortLinkedList(nextMiddle);
  
      // Merge the sorted halves
      return this.merge(left, right);
    }
  
    merge(left, right) {
      if (!left) return right;
      if (!right) return left;
  
      let result;
  
      if (left.data <= right.data) {
        result = left;
        result.next = this.merge(left.next, right);
      } else {
        result = right;
        result.next = this.merge(left, right.next);
      }
  
      return result;
    }
  }
  
  // Example usage
  let list = new LinkedList();
  list.addData(3);
  list.addData(1);
  list.addData(5);
  list.addData(2);
  list.addData(4);
  
  console.log("Original list:");
  list.printList();
  
  console.log("Sorted list:");
  list.head = list.sortLinkedList(list.head);
  list.printList();
  