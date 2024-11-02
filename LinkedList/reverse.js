class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addList(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }
    reverseList() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        
        this.head = prev;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current= current.next
        }
    }
}

let list =new LinkedList()
list.addList(1)
list.addList(2)
list.addList(3)
list.addList(4)
list.addList(5)
list.printList()
console.log('-----------------');
list.reverseList()
list.printList()