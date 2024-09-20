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
            this.head = newNode;
            return 
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
   

    mergeLinkedList(list1, list2) {
        let dummy = new Node(0);
        let current = dummy;

        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 !== null && l2 !== null) {
            if (l1.data <= l2.data) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

     
        if (l1 !== null) {
            current.next = l1;
        }

        if (l2 !== null) {
            current.next = l2;
        }
        let mergedList = new LinkedList();
        mergedList.head = dummy.next;
        return mergedList;
    }


    printList(){
        let current = this.head;
        let result  = [];
        while(current){
            result.push(current.data)
            current = current.next
        }
        console.log(result.join(" -> "));
    }
}

const list2= new LinkedList();
const list1 = new LinkedList()
list1.addData(7)
list1.addData(6)
list1.addData(2)
list1.addData(9)
list1.addData(3)
list2.addData(8);
list2.addData(6);
list2.addData(5);
list2.addData(1);
list2.printList()
list1.printList()
const mergedList = new LinkedList()
const result = mergedList.mergeLinkedList(list1,list2);
result.printList()