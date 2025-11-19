class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}


class BinerySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    insertData(data) {
        const newNode = new Node(data);
        if (this.isEmpty) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    };

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
}