class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BineryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
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
  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder(node, result) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.data);
      this.inOrder(node.right, result);
    }
  }
  preOrderTravesal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }
  preOrder(node, result) {
    if (node) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }
  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }
  postOrder(node, result) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.data);
    }
  }

  search(data, node = this.root) {
    if (node === null) return false;
    if (data === node.data) return true;
    if (data < node.data) {
      return this.search(data, node.left);
    } else {
      return this.search(data, node.right);
    }
  }

  deleteNode(data, node = this.root){
    if(node === null) return null;
    if(data < node.data){
      node.left = this.deleteNode(data, node.left);
    }else if( data > node.data){
      node.right = this.deleteNode(data, node.right)
    }else{
      if(node.left === null){
        return node.right;
      }else if(node.righy === null){
        return node.left
      }else{
        const temp  =  this.findMin(node.right);
         node.data = temp.data;
         node.right = this.deleteNode(temp.data, node.right)
      }
    }
    return node;
  }

  findMin(node){
    while(node.left){
      node = node.left;
    }
    return node
  }

  levelOrderTravesal(){
    const result = [];
    const queue =[];
    if(this.root!== null){
      queue.push(this.root)
    }
    while(queue.length > 0){
      const current = queue.shift();
      result.push(current.data);
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return result;
  }
 
}

const tree = new BineryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("InOrder Traversal :");
console.log(tree.inOrderTraversal());

console.log("PreOrder Traversal :");
console.log(tree.preOrderTravesal());

console.log("PostOrder Traversal :");
console.log(tree.postOrderTraversal());

console.log("Search for 7: ", tree.search(7)); 

tree.deleteNode(50);

console.log("InOrder Traversal after deleting 50:");
console.log(tree.inOrderTraversal()); 
console.log('levelOrderTravesal', tree.levelOrderTravesal());