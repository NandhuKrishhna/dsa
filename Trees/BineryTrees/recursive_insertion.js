class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insertRecursive(data) {
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

  isEmpty() {
    return this.root === null;
  }
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  serach(root, data) {
    if (!root) {
      return false;
    } else {
      if (root.data === data) {
        return true;
      } else if (data < root.data) {
        return this.serach(root.left, data);
      } else {
        return this.serach(root.right, data);
      }
    }
  }
}

const bst = new BST();

bst.insertRecursive(15);
bst.insertRecursive(25);
bst.insertRecursive(10);
bst.insertRecursive(7);
bst.insertRecursive(22);
bst.insertRecursive(17);
bst.insertRecursive(13);
bst.inOrder();
console.log(bst.serach(bst.root, 1));
console.log(bst.serach(bst.root, 17));
console.log(bst.serach(bst.root, 13));
