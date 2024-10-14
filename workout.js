class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
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
  
    deleteNode(root, data) {
      if (root === null) {
        return null;
      }
  
      if (data < root.data) {
        root.left = this.deleteNode(root.left, data);
      } else if (data > root.data) {
        root.right = this.deleteNode(root.right, data);
      } else {
        // Node with only one child or no child
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.data = this.min(root.right);
        root.right = this.deleteNode(root.right, root.data);
      }
      return root;
    }
  
    // Find the minimum value node in the tree
    min(root) {
      while (root.left !== null) {
        root = root.left;
      }
      return root.data;
    }
  
    // Count the number of leaf nodes
    countLeafNodes(root) {
      if (root === null) {
        return 0; // No nodes
      }
      if (root.left === null && root.right === null) {
        return 1; // This is a leaf node
      }
      // Recursively count leaf nodes in left and right subtrees
      return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
    }
  }
  
  // Example Usage:
  const result = new BinarySearchTree();
  console.log(result.isEmpty()); // Output: true
  
  result.insert(10);
  result.insert(5);
  result.insert(15);
  result.insert(3);
  result.insert(7);
  result.insert(12);
  result.insert(18);
  
  console.log(result.search(result.root, 10)); // Output: true
  console.log(result.search(result.root, 99)); // Output: false
  
  // Count the number of leaf nodes
  const leafNodeCount = result.countLeafNodes(result.root);
  console.log(`Number of leaf nodes: ${leafNodeCount}`); // Output: Number of leaf nodes: 4
  