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
        console.log(`Inserting ${data} as the root node`);
      return;
    }
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          console.log(`Inserting ${data} to the right of ${current.data}`);
          break;
        }
        current = current.left;
    } else if (data > current.data) {
        if(current.right === null){
            current.right = newNode;
            console.log(`Inserting ${data} to the left of ${current.data}`);
            break;
        }
        current = current.right
    }else{
          console.log(`Duplicate data ${data}, not inserting`);
        break;
      }
    }
  }
  isEmpty() {
    return this.root === null;
  }

  inOrder(node = this.root){
    if(node !== null){
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right)
    }
  }
}

const bst = new BinerySearchTree()
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(18);


console.log("In-order traversal of the BST:");
bst.inOrder();