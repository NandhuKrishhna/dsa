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

    // Add a child to a specified parent node using BFS
    add(data, parentData) {
        console.log(`Attempting to add node '${data}' under parent '${parentData}'`);
        const newNode = new Node(data);
        const parent = this.findNodeByBfs(parentData);
        if (parent) {
            parent.addChild(newNode);
            console.log(`Successfully added node '${data}' under parent '${parentData}'`);
            return true;
        }
        console.log(`Parent node '${parentData}' not found. Failed to add node '${data}'`);
        return false;
    }

    // Find a node using BFS
    findNodeByBfs(data) {
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
    findNodeByDfs(data, node = this.root) {
        console.log(`Checking node '${node.data}'`);
        if (!node) return null;
        if (node.data === data) {
            console.log(`Node '${data}' found`);
            return node;
        }
        for (let child of node.children) {
            const found = this.findNodeByDfs(data, child);
            if (found) return found;
        }
        return null;
    }

    // Find the height of the tree with detailed logs
    findHeight(node = this.root, level = 0) {
        if (!node) {
            console.log(`Reached a null node at level ${level}`);
            return -1; // Base case: empty subtree
        }

        if (node.children.length === 0) {
            console.log(`Leaf node '${node.data}' at level ${level}: height = 0`);
            return 0; // Leaf node
        }

        console.log(`Calculating height for node '${node.data}' at level ${level}`);

        // Recursively find the height of each child
        let heights = node.children.map(child => this.findHeight(child, level + 1));

        // The height of the current node is 1 plus the maximum height among its children
        const height = 1 + Math.max(...heights);

        console.log(`Height at node '${node.data}' (level ${level}): ${height}`);
        return height;
    }

    // Find the depth of a specific node
    findDepth(data, node = this.root, currentDepth = 0) {
        console.log(`Checking node '${node.data}' at depth ${currentDepth}`);
        if (!node) return -1; // Node not found
        if (node.data === data) {
            console.log(`Node '${data}' found at depth ${currentDepth}`);
            return currentDepth;
        }
        for (let child of node.children) {
            const depth = this.findDepth(data, child, currentDepth + 1);
            if (depth !== -1) return depth;
        }
        console.log(`Node '${data}' not found in the subtree of '${node.data}'`);
        return -1; // Node not found in this branch
    }

    // Find the parent of a node with the given data
    findParent(data, node = this.root, parent = null) {
        if (!node) return null;

        if (node.data === data) {
            return parent ? parent.data : null;
        }

        for (let child of node.children) {
            if (child.data === data) {
                return node.data;
            }
            const foundParent = this.findParent(data, child, node);
            if (foundParent) return foundParent;
        }

        return null; // Node not found
    }


    // Get the children of a node with the given data
    getChildren(data) {
        console.log(`Attempting to retrieve children of node '${data}'`);
        const node = this.findNodeByBfs(data);
        if (node) {
            if (node.children.length === 0) {
                console.log(`Node '${data}' has no children.`);
                return [];
            }
            console.log(`Children of node '${data}': ${node.children.map(child => child.data).join(', ')}`);
            return node.children;
        }
        console.log(`Node '${data}' not found in the tree.`);
        return null;
    }

    // Get all leaf nodes in the tree
    getLeafNodes() {
        console.log(`Starting search for leaf nodes in the tree.`);
        const leaves = [];
        this._getLeafNodes(this.root, leaves);
        if (leaves.length === 0) {
            console.log(`The tree has no leaf nodes.`);
        } else {
            console.log(`Leaf nodes in the tree: ${leaves.map(node => node.data).join(', ')}`);
        }
        return leaves;
    }

    // Helper method to recursively find leaf nodes
    _getLeafNodes(node, leaves) {
        if (!node) return;
        if (node.children.length === 0) {
            console.log(`Found leaf node: '${node.data}'`);
            leaves.push(node);
        }
        for (let child of node.children) {
            this._getLeafNodes(child, leaves);
        }
    }

    // Print the tree structure
    print(node = this.root, prefix = '') {
        console.log(prefix + node.data);
        for (let child of node.children) {
            this.print(child, prefix + '--');
        }
    }
}
const tree = new GeneralTree('A');

tree.add('B', 'A');
tree.add('C', 'A');
tree.add('D', 'A');

tree.add('E', 'B');
tree.add('F', 'B');

tree.add('G', 'C');

tree.add('H', 'D');
tree.add('I', 'D');

console.log('\nInitial Tree Structure:');
tree.print();
// Find the parent of node 'B'
const parentB = tree.findParent('B');
console.log(`Parent of node 'B': ${parentB ? parentB : 'None'}`);

// Find the parent of node 'A' (root)
const parentA = tree.findParent('A');
console.log(`Parent of node 'A': ${parentA ? parentA : 'None'}`);

// Find the parent of node 'I'
const parentI = tree.findParent('I');
console.log(`Parent of node 'I': ${parentI ? parentI : 'None'}`);

// Attempt to find the parent of a non-existent node 'Z'
const parentZ = tree.findParent('Z');
console.log(`Parent of node 'Z': ${parentZ ? parentZ : 'None'}`);
tree.getChildren('B')
tree.getLeafNodes()