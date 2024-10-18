class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Binery{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,data){
        if(!root){
            return false
        }else{
            if(data === root.data){
                return true
            }else if(data < root.data){
                return this.search(root.left, data)
            }else{
                return this.search(root.right, data)
            }
        }
    }
    isEmpty() {
        return this.root === null;
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
          if (!root.left && !root.right) {
            return null;
          }
          if (!root.left) {
            return root.right;
          } else if (!root.right) {
            return root.left;
          }
          root.data = this.min(root.right);
          root.right = this.deleteNode(root.right, root.data);
        }
        return root;
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
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
      }
      postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
      }
}
const result = new Binery();
console.log(result.isEmpty());
result.insert(10);
result.insert(5);
result.insert(7);
result.insert(3);
result.insert(15);
console.log(result.search(result.root, 10));
console.log(result.search(result.root, 5));
console.log(result.search(result.root, 6));
console.log(result.search(result.root, 100));
result.preOrder(result.root)
console.log("--------------");
result.inOrder(result.root)
console.log("--------------");
result.postOrder(result.root)
result.deleteNode(result.root, 15)
console.log("--------------");
result.postOrder(result.root)