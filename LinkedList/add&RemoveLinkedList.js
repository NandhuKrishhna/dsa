// Implement a Singly Linked List: Create a basic linked list with methods to add, remove, and display elements.


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
    //add at start
    addList(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }
    //add at end
    addListAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    size(){
        let current = this.data;
        let count = 0;
        while (current){
            count++;
            current = current.next
        }
    }



    //add at any index
    addAtAny(index,data){
       const newNode = new Node(data)
      if(index<0 || index>this.size()){
        return console.error("Invalid Index");
        
      }

      if(index === 0 ){
       newNode.next = this.head;
       this.head = newNode
       return
      }

     let current = this.head;
     for (let i = 0; i < index-1; i++) {
          current = current.next
     }
     newNode.next = current.next;
     current.next = newNode;
     

    }

  
    //printing the values
  printList(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next
    }
  }

}


const list = new LinkedList();
list.addList(11);
list.addList(45);
list.addListAtEnd(99)
list.addList(66);
list.addList(77);
list.addAtAny(2,18)
list.printList()
