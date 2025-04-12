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


    addToEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data
            if (current.next) {
                output += " -> "
            }
            current = current.next
        }
        console.log(output, "-> null")
    }
}



function mergeLinkedList(list1, list2) {
    const dummyList = new Node(0);
    let tempList = dummyList
    let l1 = list1.head;
    let l2 = list2.head;
    while (l1 && l2) {
        if (l1.data < l2.data) {
            tempList.next = l1;
            l1 = l1.next;
        } else {
            tempList.next = l2;
            l2 = l2.next
        }
        tempList = tempList.next
    }

    if (l1) {
        tempList.next = l1;
    }
    if (l2) {
        tempList.next = l2
    }
    const mergedList = new LinkedList();
    mergedList.head = dummyList.next
    return mergedList

}
const list2 = new LinkedList()
const list = new LinkedList();
list.addToEnd(1)
list.addToEnd(3)
list.addToEnd(5)
list2.addToEnd(2)
list2.addToEnd(4)
list2.addToEnd(6);
list.printList()
list2.printList()
const merged = mergeLinkedList(list, list2);
merged.printList()