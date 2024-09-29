class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinerySearchTree {
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
  search(root, data){
    if(!root){
        return false
    }else{
      if(root.data === data){
        return true
      }else if(data < root.data){
        return this.search(root.left,data)
      }else{
        return this.search(root.right,data)
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }

}
const bst =  new BinerySearchTree()
bst.insert(34)
bst.insert(10)
bst.insert(14)
bst.insert(56)
console.log(bst.search(bst.root,34));
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,14));
console.log(bst.search(bst.root,50));