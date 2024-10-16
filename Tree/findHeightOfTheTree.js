class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    addChild(childNode){
        this.children.push(childNode)
    }
}

class GeneralTree {
    constructor(data) {
        this.root = new Node(data);
    }
    


    add(data,parentData){
        const newNode = new Node(data);
        const parent = this.findNodeByBfs(parentData);
        if(parent){
            parent.addChild(newNode)
            return true
        };
        return false;
    }

    findNodeByBfs(data){
        const queue  = [this.root];
        while(queue.length > 0){
           const current =  queue.shift();
           if(current.data === data){
            return current
           }
           for( let child of current.children){
            queue.push(child)
           }
        }
        return false;
    }
    findNOdeByDfs(data, node = this.root){
        if(!node) return null;
        if(node.data === data){
            return node;
        }
        for(let child of node.children){
           const found =  this.findNOdeByDfs(data,child);
           if(found) return found
        }
        return null
    }

    findHeight(node = this.root) {
        if (!node) return -1;
        if (node.children.length === 0) return 0;
        let heights = node.children.map(child => this.findHeight(child));
        return 1 + Math.max(...heights);
    }
    findDepth(data, node = this.root , currentDepth = 0){
        if(!node) return -1;
        if(node.data === data) return currentDepth;
        for(let child of node.children){
           const depth =  this.findDepth(data, child, currentDepth + 1);
           if(depth !== -1) return depth
        }
        return -1

    }
}

const tree = new GeneralTree('A');
tree.add('B','A');
tree.add('C','A');
tree.add('D','A');

tree.add('E', 'B');
tree.add('F', 'B');

tree.add('G', 'C');

tree.add('H', 'D');
tree.add('I', 'D');

const heightOfTree = tree.findHeight();
console.log(heightOfTree);
const depth = tree.findDepth('I');
console.log(depth);