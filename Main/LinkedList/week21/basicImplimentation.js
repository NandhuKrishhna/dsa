class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
    console.log('Size : ', this.size)
  }
  atTHeEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++
    console.log('Size : ', this.size)

  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }
  deleteFirst(){
    if(this.head){
        this.head = this.head.next;
        this.size--
        console.log('Size : ', this.size)

    }
  }
  deleteLast(){
    if(!this.head) return;
    if(!this.head.next){
        this.head = null;
        return
    }
    let current = this.head;
    while(current.next && current.next.next){
        current = current.next;
    }
    current.next = null
    this.size--
    console.log('Size : ', this.size)

  }

  size(){
    return this.size
  }

  deleteFromIndex(position){
     let index = position -1 ;
    if(index < 0 || index >= this.size){
        console.log('The index is out of bounds')
        return;
    }
    let current = this.head;
    if(index === 0 ){
        this.head = this.head.next
    }else{
        let prev = null, count = 0 ;
        while(count < index){
            prev = current;
            current = current.next;
            count++

        }
        prev.next = current.next
    }
  }

  reverse(){
    let prev = null , current = this.head , next = null;
    while(current!==null){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev
  }

  deleteEvenValues(){
    while(this.head && this.head.data % 2 === 0){
      this.head = this.head.next
    }
    let current = this.head;
    while(current && current.next){
      if(current.next.data % 2 === 0){
        current.next = current.next.next; 
      }else{
       current = current.next
      }

    }
  }

  deleteOldValues(){
    while(this.head && this.head.data % 2 !==0){
      this.head = this.head.next
    }
    let current = this.head;
    while(current && current.next){
      if (current.next.data % 2 !==0) {
         current.next = current.next.next
      } else {
        current = current.next
      }
    }
  }
}

const list = new LinkedList();
list.addAtBegining(1);
list.addAtBegining(2);
list.addAtBegining(3);
list.addAtBegining(4);
list.addAtBegining(5);
list.addAtBegining(6);
list.addAtBegining(7);
list.addAtBegining(8)
list.traverse();
// list.deleteEvenValues();
list.deleteOldValues()
console.log('After removing the even numbers : ')
list.traverse()
// list.addAtBegining(6);
// list.atTHeEnd(99);
// list.traverse();
// console.log(list.search(99));
// console.log(list.search(98));
// list.deleteFirst()
// list.deleteLast()
// list.traverse()
// console.log("The length of LinkedList is : ",list.size)
// list.deleteFromIndex(2);
// list.traverse()
// list.reverse()
// console.log("After reversing :")
// list.traverse()

