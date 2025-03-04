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

    addData(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head  = newNode
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
               
            }
            current.next = newNode
        }
    }
    
    size(){
        let count=0;
        let current = this.head;
        while(current){
            count++;
            current= current.next;
        }
        return count;
    }
   
    convertLinkedListToArray(data){
        let newArray = [];
        let current = this.head;
        while(current){
            newArray.push(current.data);
            current = current.next
        }
        return newArray
    }


}

const list  = new LinkedList()
list.addData(1)
list.addData(2)
list.addData(3)
list.addData(4)
list.addData(5)
list.addData(6)
console.log(list.size());
console.log(list.convertLinkedListToArray());