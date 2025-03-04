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

    addTwoLinkedLists(l1, l2) {
        let dummy = new Node(0);
        let current = dummy;
        let carry = 0;
        while (l1 || l2 || carry !== 0) {
            let val1 = (l1) ? l1.data : 0;
            let val2 = (l2) ? l2.data : 0;

            let sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);  
            let digit = sum % 10; 
            current.next = new Node(digit);
            current = current.next;
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }
        return dummy.next;
    }

}
const resultList = new LinkedList();
resultList.head = resultList.addTwoLinkedLists(list1.head, list2.head);
console.log("Sum of List 1 and List 2:");
resultList.printList();
