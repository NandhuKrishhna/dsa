class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data;
            if (current.next) {
                output += " -> "
            }
            current = current.next
        }
        console.log(output)
    };
    isPalindrome() {
        let current = this.head;
        let stack = [];
        while (current) {
            stack.push(current.data);
            current = current.next
        }
        current = this.head
        while (current) {
            if (current.data !== stack.pop()) return false;
            current = current.next
        }
        return true
    }

    reverseTheSecondHalf() {
        let current = this.head
        let slow = this.head;
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next
        }
        let temp = slow
        let prev = null;
        let next = null
        while (temp) {
            //* store the next for trarve slow.next -> slow.next.next
            //* update the slow.next = prev slow-> null
            //* prev = slow
            //* slow = next
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        let firstHalf = this.head;
        while (firstHalf.next !== slow) {
            firstHalf = firstHalf.next
        }
        firstHalf.next = prev


    }

    reverseTheFirst() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next
        }

        //* reverse 
        let current = this.head;
        let prev = null;

        while (current !== slow) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        //* prev 1-4-5-null
        //* list 5 -> 4 -> 1 -> 2 -> 3
        //* head.next 5 -> 1 -> 2 -> 3
        //* head -> prev

        this.head.next = slow;
        this.head = prev

    }


}


const list = new LinkedList();
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.printList()
console.log(list.isPalindrome())
list.reverseTheSecondHalf();
list.printList()
list.reverseTheFirst();
list.printList()


