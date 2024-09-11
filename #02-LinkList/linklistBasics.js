 class Node{
  constructor(data){
    this.data = data;
    this.next - null;
  }
 }

 class LinkedList{
  constructor(){
    this.head = null;
  }

  addFirst(data){
    const newNode = new Node(data)
    newNode.next = this.head;
    this.head = newNode
  }

  addEnd(data){
    const newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      return
    }

  let current = this.head;
  while(current.next){
    current = current.next;
  }
    current.next = newNode;
  }

size(){
  let count = 0;
  let current = this.head;
  while(current.next){
    count++;
    current = current.next;
  }
  return count;
}

  addAt(index,data){
    if(index < 0 || index> this.size()){
      console.error("Invalid Index")
      return
    }
    const newNode = new Node(data)
if(index === 0){
  newNode.next = this.head
  this.head = newNode;
  return
}

let current = this.head;
for (let i = 0; i < index-1; i++) {
  current = current.next
}
 newNode.next = current.next;
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


 const list = new LinkedList()
 list.addFirst(4)
 list.addFirst(5)
 list.addEnd(45)
 list.addEnd(9)
 list.addAt(1,5)
 list.addAt(3,99)
 list.printList()
