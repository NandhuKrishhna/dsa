//LinkList 
// Insertion


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }


  addFirst(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode
  }


  addLast(data){
    const newNode = new Node(data);

    if(!this.head){
      this.head = newNode;
      return;
    }

    // Traverse to the last node
    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = newNode;
  }

  printList(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addFirst(10); 
list.addLast(20);
list.addFirst(5); 
list.addLast(30);  

list.printList(); 
