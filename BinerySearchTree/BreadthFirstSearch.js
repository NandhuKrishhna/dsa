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
 deleteNode(root, data) {
  if (root === null) {
    return null;
  }
  if (data < root.data) {
    root.left = this.deleteNode(root.left, data);
  } else if (data > root.data) {
    root.right = this.deleteNode(root.right, data);
  } else {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }
    root.data = this.min(root.right);
    root.right = this.deleteNode(root.right, root.data);
  }
  return root;
}
preOrder(root){
  if(root){
      console.log(root.data);
      this.preOrder(root.left)
      this.preOrder(root.right)
  }
}
inOrder(root){
  if(root){
      this.inOrder(root.left)
      console.log(root.data);
      this.inOrder(root.right)
  }
}
postOrder(root){
  if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.data);
  }
}
}


const res = new Binery();
res.insert(10);
res.insert(11);
res.insert(32);
res.insert(40);
res.insert(50);
console.log(res.isEmpty());
console.log(res.search(res.root, 10));
console.log(res.search(res.root, 1));
res.levelOrder();
console.log("Max : ",res.max(res.root));
console.log("Min : ",res.min(res.root));
 console.log("SecondLargest : ",res.secondLargest(res.root));
 console.log("SecondSmallest : ",res.secondSmallest(res.root));