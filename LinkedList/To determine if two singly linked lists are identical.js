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
        newNode.next= this.head;
        this.head = newNode
    }
    isIdentical(secondList){
        let list1 = this.head;
        let list2 = secondList.head


        while(list1 !== null && list2!== null){
            if(list1.data !== list2.data){
                return false;
            }
            list1 = list1.next;
            list2= list2.next;
        }
        if(list1 === null && list2 === null){
            return true
        }
       
    }

 printList(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current= current.next;
    }
 }
    
}


const list1 = new LinkedList()
const list2 = new LinkedList()


list1.addList(11)
list1.addList(12)
list1.addList(13)
list1.addList(14)
list1.addList(15)
list1.addList(16)

list2.addList(11)
list2.addList(12)
list2.addList(13)
list2.addList(14)
list2.addList(15)

list1.printList()
console.log('----------------');
list2.printList()
console.log(list1.isIdentical(list2));