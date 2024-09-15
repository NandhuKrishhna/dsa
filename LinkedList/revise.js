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
    
    addAtBegining(data){
        const newNode =new Node(data)
        newNode.next = this.head;
        this.head = newNode
    }

    addAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode 
            return
        }
        let current = this.head;
        while(current.next){
            current  = current.next;
        }
        current.next = newNode;
    }
    size(){
        let count = 0;
        let current = this.head
        while(current){
            count++;
            current = current.next
        }
        return count
    }

    addAtIndex(index,data){
        const newNode = new Node(data)
        if(index < 0 || index > this.size()){
            return console.error("Invalid Index");
            
        }
        if(index === 0 ){
            newNode.next = this.head;
            this.head = newNode
        }

        let current = this.head;
        for( let i = 0 ; i < index-1 ; i ++){
            current = current.next;
            
        }
        newNode.next = current.next;
        current.next = newNode
    }
    

    removeFromStart(){
        if(!this.head) return null;
        this.head = this.head.next
    }
    removeFromEnd(){
        let current = this.head;
        while(current.next.next){
            current = current.next
        }
        current.next  = null;
    }

     removeFromIndex(index){
        if(index < 0 ||  index > this.size()){
            return console.error("Invalid Error");
            
        }
        if(index === 0 ){
            this.head = this.head.next
        }

        let current = this.head;
        for(let i = 0 ; i < index - 1 ; i++){
            current = current.next;
        }
        current.next
     }
}