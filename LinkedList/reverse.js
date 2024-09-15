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
list.addList(36)
list.addList(25)
list.addList(24)
list.addList(23)
list.addList(22)
list.printList()
console.log('-----------------');
list.reverseList()
list.printList()