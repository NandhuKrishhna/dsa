class TreeNode {
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

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.isEmpty()) {
      this.root = newNode;
      return;
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

  preOrder(root){
    if(root){
        console.log(root.data);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right);
        console.log(root.data);
    }
  }

  findParent(data, node = this.root , parent = null){
    if(!node) return null;
    if(node.data === data) return parent? parent.data : null;
    if(data < node.data){
      return this.findParent(data, node.left, node)
    }else{
      return this.findParent(data, node.right, node)
      
    }
  }
  findChildren(data){
    const node  = this.search(data);
    if(!node) return null;

    const children = {};
    if(node.left) children.left = node.left.data;
    if(node.right) children.right = node.right.data;
    return children
  }

  search(data, node = this.root) {
    if (!node) return false;
    if (data < node.data) return this.search(node.left, data);
    if (data > node.data) return this.search(node.right, data);
    return node;
  }

  findLeafNodes(node = this.root, leafNodes = []){
    if(!node) return leafNodes;
    if(!node.left && !node.right){
      leafNodes.push(node.data)
    }
    this.findLeafNodes(node.left, leafNodes);
    this.findLeafNodes(node.right, leafNodes)
    return leafNodes;
  }
  findheight(node = this.root){
    if(!node) return -1;
    return Math.max(this.findheight(node.left), this.findheight(node.right)) + 1
  }
  findDepth(data, node = this.root, depth = 0){
    if(!node) return -1;
    if(node.data === data) return depth;
    if(data < node.data){
      return this.findDepth(data, node.left, depth+1)
    }else{
      return this.findDepth(data, node.right, depth+1)
    }
  }

  isBst(node = this.root, min = null,max = null){
    if(!node) return true;
    if((min!== null && node.data <= min) || (max !== null && node.data >= max)) return false;
    return this.isBst(node.left, min, node.data)&&this.isBst(node.right, node.data, max)
  }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(9);
bst.insert(3);

bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(15);
bst.insert(13);
bst.insert(22);
bst.insert(14);
console.log("PreORder Traversal");
bst.preOrder(bst.root)
console.log("INORder Traversal");
bst.inOrder(bst.root)
console.log("PostORder Traversal");
bst.postOrder(bst.root)
console.log('Parent Data :', bst.findParent(5));
console.log('Children Data :', bst.findChildren(10));
console.log('Leaf Nodes :', bst.findLeafNodes());
console.log('Height of the tree : ', bst.findheight());
console.log("Is a valid BST:", bst.isBst()); 