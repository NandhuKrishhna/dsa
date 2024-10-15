class Node {
  constructor(data) {
      this.data = data;
      this.children = [];
  }

  // Adds a child node to the current node
  addChild(childNode) {
      this.children.push(childNode);
      console.log(`Added child '${childNode.data}' to parent '${this.data}'`);
  }
}

class GeneralTree {
  constructor(data) {
      this.root = new Node(data);
      console.log(`Created root node '${data}'`);
  }

  // Depth-First Search Traversal (Pre-Order)
  dfs(node = this.root) {
      if (!node) return;
      console.log(`Visiting node '${node.data}'`);
      for (let child of node.children) {
          this.dfs(child);
      }
  }

  // Breadth-First Search Traversal
  bfs() {
      const queue = [this.root];
      console.log(`Starting BFS Traversal`);
      while (queue.length > 0) {
          const current = queue.shift();
          console.log(`Visiting node '${current.data}'`);
          for (let child of current.children) {
              console.log(`Enqueuing child '${child.data}' of node '${current.data}'`);
              queue.push(child);
          }
      }
      console.log(`BFS Traversal Completed`);
  }

  // Add a child to a specified parent node
  add(data, parentData) {
      console.log(`Attempting to add node '${data}' under parent '${parentData}'`);
      const newNode = new Node(data);
      const parent = this.findBFS(parentData);
      if (parent) {
          parent.addChild(newNode);
          console.log(`Successfully added node '${data}' under parent '${parentData}'`);
          return true;
      }
      console.log(`Parent node '${parentData}' not found. Failed to add node '${data}'`);
      return false;
  }

  // Remove a node by its data
  remove(data, node = this.root) {
      console.log(`Attempting to remove node '${data}'`);
      for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].data === data) {
              node.children.splice(i, 1);
              console.log(`Successfully removed node '${data}' from parent '${node.data}'`);
              return true;
          } else {
              const removed = this.remove(data, node.children[i]);
              if (removed) return true;
          }
      }
      console.log(`Node '${data}' not found under parent '${node.data}'`);
      return false;
  }

  // Find a node using BFS
  findBFS(data) {
      console.log(`Starting BFS to find node '${data}'`);
      const queue = [this.root];
      while (queue.length > 0) {
          const current = queue.shift();
          console.log(`Checking node '${current.data}'`);
          if (current.data === data) {
              console.log(`Node '${data}' found`);
              return current;
          }
          for (let child of current.children) {
              console.log(`Enqueuing child '${child.data}' of node '${current.data}'`);
              queue.push(child);
          }
      }
      console.log(`Node '${data}' not found in BFS`);
      return null;
  }

  // Find a node using DFS
  findDFS(data, node = this.root) {
      console.log(`Checking node '${node.data}'`);
      if (!node) return null;
      if (node.data === data) {
          console.log(`Node '${data}' found`);
          return node;
      }
      for (let child of node.children) {
          const found = this.findDFS(data, child);
          if (found) return found;
      }
      return null;
  }

  // Find the height of the tree
  findHeight(node = this.root) {
      if (!node) return -1;
      if (node.children.length === 0) return 0;
      let heights = node.children.map(child => this.findHeight(child));
      const height = 1 + Math.max(...heights);
      console.log(`Height at node '${node.data}': ${height}`);
      return height;
  }

  // Print the tree structure
  print(node = this.root, prefix = '') {
      console.log(prefix + node.data);
      for (let child of node.children) {
          this.print(child, prefix + '--');
      }
  }
}
// Create a new general tree with root node 'A'
const tree = new GeneralTree('A');

// Add child nodes to the root node 'A'
tree.add('B', 'A');
tree.add('C', 'A');
tree.add('D', 'A');

// Add child nodes to node 'B'
tree.add('E', 'B');
tree.add('F', 'B');

// Add child node to node 'C'
tree.add('G', 'C');

// Add child nodes to node 'D'
tree.add('H', 'D');
tree.add('I', 'D');

// Perform DFS Traversal
console.log('\nDFS Traversal:');
tree.dfs();

// Perform BFS Traversal
console.log('\nBFS Traversal:');
tree.bfs();

// Search for a node using BFS
const searchValue = 'F';
console.log(`\nBFS Search for "${searchValue}":`);
const foundNodeBFS = tree.findBFS(searchValue);
console.log(`Result: ${foundNodeBFS ? 'Found' : 'Not Found'}`);

// Search for a node using DFS
const searchValueDFS = 'G';
console.log(`\nDFS Search for "${searchValueDFS}":`);
const foundNodeDFS = tree.findDFS(searchValueDFS);
console.log(`Result: ${foundNodeDFS ? 'Found' : 'Not Found'}`);

// Attempt to add a node to a non-existent parent
const addResult = tree.add('J', 'Z');
console.log(`\nAttempt to add node 'J' to non-existent parent 'Z': ${addResult ? 'Success' : 'Failure'}`);

// Remove a node
console.log(`\nRemoving node 'F':`);
tree.remove('B');

// Attempt to remove a non-existent node
console.log(`\nAttempting to remove node 'Z':`);
tree.remove('D');

// Find the height of the tree
console.log(`\nFinding the height of the tree:`);
const height = tree.findHeight();
console.log(`Height of the tree: ${height}`);

// Print the tree structure
console.log(`\nTree Structure:`);
tree.print();
