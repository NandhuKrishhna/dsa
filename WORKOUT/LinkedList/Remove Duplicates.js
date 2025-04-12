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

    removeDuplicates() {
        const hashMap = {};
        let current = this.head;
        let prev = null;

        while (current) {
            if (hashMap[current.data]) {
                prev.next = current.next
            } else {
                hashMap[current.data] = true
                prev = current
            }
            current = current.next
        }
    }
}


const list = new LinkedList();
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.printList()
list.removeDuplicates()
list.printList()


class LinkedList2 {
    constructor() {
        this.head = null
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
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data == current.next.data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }
}

const list2 = new LinkedList2();
list2.addNode(5)
list2.addNode(5)
list2.addNode(4)
list2.addNode(4)
list2.addNode(3)
list2.addNode(3)
list2.addNode(2)
list2.addNode(2)
list2.addNode(1)
list2.addNode(1)
list2.printList()
list2.removeDuplicates()
list2.printList()