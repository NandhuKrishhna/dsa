class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right= null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a new node with the given data
    insert(data) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
            console.log(`Inserted root node with data: ${data}`);
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper method for insertion
    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
                console.log(`Inserted node with data: ${newNode.data} to the left of node with data: ${node.data}`);
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                console.log(`Inserted node with data: ${newNode.data} to the right of node with data: ${node.data}`);
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Search for a node with the given data
    search(data) {
        return this._searchNode(this.root, data);
    }

    // Helper method for searching
    _searchNode(node, data) {
        if (node === null) {
            console.log(`Node with data ${data} not found.`);
            return false;
        }
        if (data === node.data) {
            console.log(`Node with data ${data} found.`);
            return true;
        }
        if (data < node.data) {
            return this._searchNode(node.left, data);
        } else {
            return this._searchNode(node.right, data);
        }
    }

    // Delete a node with the given data
    delete(data) {
        this.root = this._deleteNode(this.root, data);
    }

    // Helper method for deletion
    _deleteNode(node, data) {
        if (node === null) {
            console.log(`Node with data ${data} not found.`);
            return null;
        }

        if (data < node.data) {
            node.left = this._deleteNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this._deleteNode(node.right, data);
            return node;
        } else {
            // Node with only one child or no child
            if (node.left === null) {
                console.log(`Deleting node with data ${data} which has no left child.`);
                return node.right;
            } else if (node.right === null) {
                console.log(`Deleting node with data ${data} which has no right child.`);
                return node.left;
            }

            // Node with two children:
            // Get the inorder successor (smallest in the right subtree)
            const temp = this._findMinNode(node.right);
            console.log(`Deleting node with data ${data} which has two children. Inorder successor is ${temp.data}.`);
            node.data = temp.data;

            // Delete the inorder successor
            node.right = this._deleteNode(node.right, temp.data);
            return node;
        }
    }

    // Find the node with the minimum data value
    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // In-order traversal (Left, Root, Right)
    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    _inOrder(node, result) {
        if (node !== null) {
            this._inOrder(node.left, result);
            result.push(node.data);
            this._inOrder(node.right, result);
        }
    }

    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal() {
        const result = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node, result) {
        if (node !== null) {
            result.push(node.data);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
    }

    // Post-order traversal (Left, Right, Root)
    postOrderTraversal() {
        const result = [];
        this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node, result) {
        if (node !== null) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.data);
        }
    }

    // Level-order traversal (Breadth-First Search)
    levelOrderTraversal() {
        const result = [];
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.data);

            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        return result;
    }

    // Print the tree structure (for visualization)
    print() {
        this._printHelper(this.root, "", true);
    }

    _printHelper(node, indent, last) {
        if (node !== null) {
            console.log(indent + (last ? "└─ " : "├─ ") + node.data);
            indent += last ? "   " : "│  ";
            this._printHelper(node.left, indent, node.right === null);
            this._printHelper(node.right, indent, true);
        }
    }
}
const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("\nTree Structure:");
tree.print();
console.log("\nSearch for 40:", tree.search(40)); // Should return true
console.log("Search for 25:", tree.search(25)); // Should return false
console.log("\nDeleting node with data 20:");
tree.delete(20); // Deletes node 20

console.log("\nDeleting node with data 30:");
tree.delete(30); // Deletes node 30, which has children 40

console.log("\nTree Structure After Deletions:");
tree.print();
console.log("\nIn-order Traversal:", tree.inOrderTraversal());
console.log("Pre-order Traversal:", tree.preOrderTraversal());
console.log("Post-order Traversal:", tree.postOrderTraversal());
console.log("Level-order Traversal:", tree.levelOrderTraversal());
