class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    addChild(childNode){
        this.children.push(childNode)
    }
}

class GeneralTree{
    constructor(data){
        this.root = new Node(data)
    }

    add(data,parentData){
       const newNode =  new Node(data);
       const parent = this.findNode(parentData);
       if(parent){
        parent.addChild(newNode)
        return true
       }
       return false;
    }

    findNode(data){
        const queue = [this.root];
        while(queue.length > 0 ){
           const current = queue.shift();
           if(current.data === data){
            return current;
           }
           for(let child of current.children){
              queue.push(child)
           }
        }
        return false;
    }
    dfs(node = this.root){
        if(!node) return;
        console.log(node.data);
        for(let child of node.children){
            this.dfs(child)
        }
    }
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
    getLeafNodes(){
        const leaves = [];
        this.getLeaves(this.root,leaves)
        if(leaves.length>0){
            console.log(leaves.map(leaf => leaf.data).join(","));
        }else{
            console.log("No leaf nodes");
        }
        return leaves
    
    }
    getLeaves(node,leaves){
        if(!node) return;
        if(node.children.length === 0 ){
            leaves.push(node);
        }
        for(let child of node.children){
            this.getLeaves(child,leaves)
        }

    }
    getChildren(data){
        const node = this.findNode(data);
        if(node){
            if(node.children.length === 0 ) return [];
            let children = node.children.map(child => child.data)
            return children;
        }
        return null
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
tree.dfs()
const parent = tree.findParent('B');
console.log(parent);
tree.getLeafNodes()
const children = tree.getChildren('B');
console.log(children.join(","));