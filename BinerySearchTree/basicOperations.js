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

  isEmpty() {
    return this.root === null;
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
}

const result = new BinerySearchTree();
console.log(result.isEmpty());
result.insert(10);
result.insert(5);
result.insert(6);
result.insert(7);
result.insert(11);
console.log(result.search(result.root, 10));
console.log(result.search(result.root, 5));
console.log(result.search(result.root, 6));
console.log(result.search(result.root, 100));