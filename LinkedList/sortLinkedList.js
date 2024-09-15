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
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    getMiddle(head) {
        if (!head) return head;
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    mergeSort(head) {
        if (!head || !head.next) {
            console.log("Base case reached with head:", head ? head.data : null);
            return head;
        }

        let middle = this.getMiddle(head);
        let nextOfMiddle = middle.next;
        middle.next = null;

        console.log("Splitting list:");
        this.printList(head); // Print the first half
        this.printList(nextOfMiddle); // Print the second half

        let left = this.mergeSort(head);
        let right = this.mergeSort(nextOfMiddle);

        console.log("Merging sorted halves:");
        this.printList(left); // Print the sorted left half
        this.printList(right); // Print the sorted right half

        return this.sortedMerge(left, right);
    }

    sortedMerge(left, right) {
        if (!left) {
            console.log("Left is null, returning right:", right ? right.data : null);
            return right;
        }
        if (!right) {
            console.log("Right is null, returning left:", left ? left.data : null);
            return left;
        }

        let result = null;
        if (left.data <= right.data) {
            result = left;
            console.log("Left value less or equal. Adding left:", left.data);
            result.next = this.sortedMerge(left.next, right);
        } else {
            result = right;
            console.log("Right value less. Adding right:", right.data);
            result.next = this.sortedMerge(left, right.next);
        }

        return result;
    }

    printList(node) {
        let result = [];
        while (node) {
            result.push(node.data);
            node = node.next;
        }
        console.log(result.join(' -> '));
    }
}

const list = new LinkedList();
list.addlist(4);
list.addlist(2);
list.addlist(1);
list.addlist(3);

console.log("Original list:");
list.printList(list.head);

console.log("-------------");
console.log("Starting merge sort:");
list.head = list.mergeSort(list.head);

console.log("Sorted list:");
list.printList(list.head);
