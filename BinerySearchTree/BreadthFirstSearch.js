class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Binery {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  isEmpty() {
    return this.root === null;
  }
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, data) {
    if (!root) return false;
    if (data === root.data) return true;
    else if (data < root.data) return this.search(root.left, data);
    else return this.search(root.right, data);
  }
 levelOrder(){
   const queue = [];
   queue.push(this.root)
   while(queue.length){
    let curr = queue.shift();
    console.log(curr.data);
    if(curr.left){
      queue.push(curr.left)
    }
    if(curr.right){
      queue.push(curr.right)
    }
   }
 }
 min(root){
  if(!root.left){
    return root.data;
  }else{
    return this.min(root.left)
  }
 }
 max(root){
  if(!root.right){
    return root.data
  }else{
    return this.max(root.right)
  }
 }
 secondLargest(root){
   if(!root || (!root.left && !root.right)) return null;
   let parent = null;
   let current = root;
   
   while(current.right){
    parent = current;
    current = current.right
   }
   if(current.left){
    return this.max(current.left)
   }
   return parent.data
  }
 secondSmallest(root){
  if(!root || (!root.left && !root.right)) return null;
  let parent = null, current = root;
  while(current.left){
    parent = current;
    current = current.left;
  }
  if(current.right) return this.min(current.right)
    return parent.data
 }
}


const res = new Binery();
res.insert(10);
res.insert(5);
res.insert(3);
res.insert(7);
res.insert(15);
console.log(res.isEmpty());
console.log("--------");
console.log(res.search(res.root, 10));
console.log(res.search(res.root, 1));
res.levelOrder();
console.log("Max : ",res.max(res.root));
console.log("Min : ",res.min(res.root));
 console.log("SecondLargest : ",res.secondLargest(res.root));
 console.log("SecondSmallest : ",res.secondSmallest(res.root));