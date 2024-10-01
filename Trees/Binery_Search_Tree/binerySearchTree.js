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
  search(root, data) {
    if (!root) {
      return false;
    } else {
      if (root.data === data) {
        return true;
      } else if (data < root.data) {
        return this.search(root.left, data);
      } else {
        return this.search(root.right, data);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
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
  isEmpty() {
    return this.root === null;
  }
}
const bst = new BinerySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 7));
console.log(bst.search(bst.root, 3));
bst.postOrder(bst.root);

