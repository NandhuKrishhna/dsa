// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0
//     }

//     addToEnd(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.size++
//             return
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next
//         };
//         current.next = newNode;
//         this.size++

//     }

//     printList() {
//         let current = this.head;
//         let output = "";
//         while (current) {
//             output += current.data;
//             if (current.next) {
//                 output += " -> "
//             }
//             current = current.next;
//         }
//         console.log(output, "-> null")
//     };

//     addtoStart(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++
//     };

//     addToMiddle(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.size++
//             return
//         }
//         let slow = this.head;
//         let fast = this.head;
//         let prev = null
//         while (fast && fast.next) {
//             prev = slow
//             slow = slow.next;
//             fast = fast.next.next
//         };
//         newNode.next = slow;
//         prev.next = newNode;
//         this.size++

//     };
//     addToPosition(position, data) {
//         const newNode = new Node(data)
//         const index = position - 1;
//         if (index > this.size || index < 0) {
//             throw new Error(`position should be greater that 0 and smaller than ${this.size}`)
//         };
//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             this.size++
//             return
//         }

//         let count = 0;
//         let prev = null;
//         let current = this.head;
//         while (count < index) {
//             prev = current;
//             current = current.next;
//             count++
//         }
//         prev.next = newNode;
//         newNode.next = current;
//         this.size++
//     };
//     addFive() {
//         let current = this.head;
//         console.log(current)
//         while (current.next) {
//             console.log("entering to the loop")
//             if (current.data % 2 == 0 && current.next.data !== 5) {
//                 const newNode = new Node(5)
//                 newNode.next = current.next;
//                 current.next = newNode;
//                 current = newNode.next
//             } else {
//                 current = current.next
//             }

//         }
//     }
// }

// const list = new LinkedList();
// list.addToEnd(1)
// list.addToEnd(2)
// list.addToEnd(3)
// list.addToEnd(4)
// list.addToEnd(5)
// list.addToEnd(6)
// list.addToEnd(7)
// list.addFive()
// list.printList()
const arr = [1, [2, 3], [4, [5]]].flat();       // [1, 2, 3, 4, [5]]
const arr1 = [1, [2, [3, [4]]]].flat(2);         // [1, 2, 3, [4]]
console.log(arr1)
console.log(arr)