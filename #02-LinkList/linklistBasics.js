// class Node {
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

// let head = new Node(5);
// console.log("First Node : ",head);
// let sample = new Node(15)
// let secondNode = new Node(10)
// head.next = sample
// sample.next = secondNode

// console.log("Head Node:", head);       

/////////////////////////////////////////////////

//Insert at Start 
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

let head = new Node(2);
let mid = new Node(3);
head.next = mid;
//insert At start

// console.log(head);
function insertAtBegining(head, data){
   let newNode = new Node(data);
   newNode.next = head;
   return newNode;
}
let sample = new Node("MY Name is Nandhu Krishna")
head = insertAtBegining(head ,1)
console.log(head);

