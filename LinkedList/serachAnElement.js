class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        
    }
    
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addData(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    
    findElement(node) {
        if (!this.head) {
            return console.error("No data in the LinkedList");
        }
    
        let current = this.head;
        while (current) {
            if (node === current.data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    printList(){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.data)
            current = current.next
        }
        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();
list.addData(4)
list.addData(2)
list.addData(1)
list.addData(5)
list.addData(8)
list.printList()
const result = list.findElement(8)
console.log(result);