class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Binary {
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
  
    // Find the minimum value in a subtree
    min(root) {
      if (!root.left) {
        return root.data;
      } else {
        return this.min(root.left);
      }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }
    // Delete a node from the BST
    deleteNode(root, data) {
      if (root === null) {
        return null;
      }
  
      console.log(`Visiting node with value: ${root.data}`);
  
      if (data < root.data) {
        console.log(`Going left to delete ${data}`);
        root.left = this.deleteNode(root.left, data);
      } else if (data > root.data) {
        console.log(`Going right to delete ${data}`);
        root.right = this.deleteNode(root.right, data);
      } else {
        console.log(`Found node to delete: ${data}`);
        
        // Case 1: Node has no children
        if (!root.left && !root.right) {
          console.log(`Node ${data} is a leaf node. Deleting it.`);
          return null;
        }
  
        // Case 2: Node has one child
        if (!root.left) {
          console.log(`Node ${data} has only right child. Replacing with right child.`);
          return root.right;
        } else if (!root.right) {
          console.log(`Node ${data} has only left child. Replacing with left child.`);
          return root.left;
        }
  
        // Case 3: Node has two children
        console.log(`Node ${data} has two children. Finding the minimum value from the right subtree.`);
        root.data = this.min(root.right);
        console.log(`Replacing node ${data} with ${root.data}`);
        
        // Recursively delete the in-order successor
        root.right = this.deleteNode(root.right, root.data);
      }
      return root;
    }
  }
  
  // Example usage:
  const tree = new Binary();
  tree.insert(50);
  tree.insert(30);
  tree.insert(70);
  tree.insert(20);
  tree.insert(40);
  tree.insert(60);
  tree.insert(80);
  tree.inOrder(tree.root)
  console.log('Tree structure built.');
  console.log('Deleting node with value 50...');
  tree.deleteNode(tree.root, 70);
  tree.inOrder(tree.root)
  
  