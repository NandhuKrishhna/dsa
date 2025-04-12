class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };


    addNode(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
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
    }

    serach(position) {
        let index = position - 1;
        if (index < 0 || index > this.size) {
            throw new Error("position out of bound.")
        }
        if (index === 0) {
            return this.head.data
        }

        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next
            count++
        }
        return current.data
    }
};


const list = new LinkedList();
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.printList()
let serachIndex = 1
console.log("Value in the index ", serachIndex, "is", list.serach(serachIndex))