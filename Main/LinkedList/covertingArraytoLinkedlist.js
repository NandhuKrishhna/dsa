let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

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
        newNode.next = this.head;
        this.head = newNode
    }

    convertArrayToLinkedList(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            this.addData(arr[i])
        }
    }
    addEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
            return
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }


    }
    convertArraytoLinked1(arr) {
      for (let index = 0; index < arr.length; index++) {
        this.addEnd(arr[index])
        
      }
    }
    printList() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data)
            current = current.next;
        }
        console.log(result.join("->"));
    }
}

const list = new LinkedList()
list.convertArrayToLinkedList(arr)
// list.convertArraytoLinked1(nums)
// console.log(list);
list.printList()