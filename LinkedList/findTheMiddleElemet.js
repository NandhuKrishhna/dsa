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


    addList(data){
      const newNode  = new Node(data)
      newNode.next = this.head;
      this.head = newNode;
    }
    findtheMid(){
        let a = this.head;
        let b = this.head;
        if(!this.head) return null;

        while(a && b.next){
            a = a.next;
            b = b.next.next;
        }

        return a.data
    }
   
    
}

const list = new LinkedList();
list.addList(32);
list.addList(33);
list.addList(34);
list.addList(36);
list.addList(36);
console.log(list.findtheMid());
//----------------------------------------------------

