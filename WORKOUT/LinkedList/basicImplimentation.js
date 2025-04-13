export class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    //* (add) begin, end , middle , specific positon;
    addAtBegining(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        this.size++
    };

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
        console.log(output, "-> null")
    }
    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.size++
            return
        };
        let current = this.head;
        while (current.next) {
            current = current.next;
        };
        current.next = newNode
        this.size++
    }
    addAtMiddle(data) {
        const newNode = new Node(data);
        if (!this.head || !this.head.next) {
            this.head = newNode;
            this.size++
            return
        }
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next
        }
        //* 1-2-3-4-5-6  3 is middle 80.next -> slow.next 80-4-5-6 slow.next 
        // console.log("Middle is ", slow)
        newNode.next = slow.next;
        slow.next = newNode
        this.size++


    }

    addToPosition(positon, data) {
        let index = positon - 1
        if (index > this.size || index < 0) {
            throw new Error("position out of bound")
        }
        const newNode = new Node(data)
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode
            this.size++
            return
        } else {
            let current = this.head;
            let prev = null;
            let count = 0;

            while (count < index) {
                prev = current;
                current = current.next;
                count++
            }
            //* 1-2-3-4-5-6 prev.next = newNode and newNode.
            prev.next = newNode;
            newNode.next = current;


            this.size++
        }

    }

    deleteAtStart() {
        if (this.head) {
            this.head = this.head.next
        }
    }
    deleteAtEnd() {
        if (!this.head || !this.head.next) {
            this.head = null;
            this.size--
            return
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null
    }
    deleteATMiddle() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return

        }
        let slow = this.head;
        let fast = this.head;
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next;
            fast = fast.next.next
        }
        prev.next = slow.next
    }
    deletePosition(position) {
        let index = position - 1;
        if (index < 0 || index > this.size) {
            throw new Error("position out of bound");

        }
        if (index === 0) {

        }
        let current = this.head
        let prev = null;
        let count = 0
        while (count < index) {
            prev = current
            current = current.next
            count++
        };
        //* 5-4-3-2-1-null  3:index(2) 
        prev.next = current.next;



    }

    reverse() {
        let next = null, prev = null, current = this.head
        while (current) {
            next = current.next;
            current.next = prev
            prev = current
            current = next;
        }
        this.head = prev
    }
}


const list = new LinkedList();
list.addAtBegining(1)
list.addAtBegining(2)
list.addAtBegining(3)
list.addAtBegining(4)
list.addAtBegining(5)
//* 5-4-3-2-1-null
list.addAtEnd(90)
//* 5-4-3-2-1-90-null
list.addAtMiddle(1000)
//* 5-4-3-2-1000-1-90-null
list.addAtMiddle(9999)
//* 5-4-3-2-9000-1000-1-90-null
list.addToPosition(2, 555)
//* 5-555-4-3-2-9000-1000-1-90-null
list.deleteAtStart()
list.deleteAtEnd()
list.deleteATMiddle()
list.printList()
list.deletePosition(2)
list.printList()
list.reverse();
list.printList()