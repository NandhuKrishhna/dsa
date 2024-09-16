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

    addlist(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    getMiddle(head = this.head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    splitListFunc(head = this.head) {
        if (!head || !head.next) {
            return head;
        }

        let middle = this.getMiddle(head);
        let nextMiddle = middle.next;
        middle.next = null; 

        let left = this.splitListFunc(head);
        let right = this.splitListFunc(nextMiddle);


        return this.sortLinkedlist(left, right);
    }

    sortLinkedlist(left, right) {
        if (!left) return right;
        if (!right) return left;

        let result = null;
        if (left.data <= right.data) {
            result = left;
            result.next = this.sortLinkedlist(left.next, right);
        } else {
            result = right;
            result.next = this.sortLinkedlist(left, right.next);
        }
        return result;
    }

    printlist(node = this.head) {
        let current = node;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();
list.addlist(4);
list.addlist(5);
list.addlist(2);
list.addlist(1);
list.addlist(7);
list.addlist(9);

console.log("Original list:");
list.printlist();

list.head = list.splitListFunc();

console.log("Sorted list:");
list.printlist();
