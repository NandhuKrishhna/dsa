class Node{
    constructor(data){
        this.data = data;
        this.children = [];

    
    }
    addChild(childNode){
        this.children.push(childNode)
    }
}

class GeneralTree{
    constructor(data) {
        this.root = new Node(data)
    }

    add(data,parentData){
        const newNode = new Node(data);
        const parent = this.findNodeByBFS(parentData);
        if(parent){
            parent.addChild(newNode);
            return true;
        }
        return false;
    }
    findNodeByBFS(parentData){
        const queue = [this.root];
        while(queue.length > 0 ){
            const current = queue.shift();
            if(current.data === parentData){
                return current;
            }
            for(let child of current.children){
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
    print(node = this.root, prefix = ""){
        console.log(prefix+node.data);
        for(let child of node.children){
            this.print(child,prefix + '--')
        }
    }

    //Depth-First Search
    dfs(node = this.root){
      if(!node) return;
      console.log(node.data);
      for(let child of node.children){
        this.dfs(child);
      }
    }
    bfs(){
        const queue = [this.root];
        while(queue.length > 0 ){
            const current = queue.shift();
            console.log(current.data);
            for(let child of current.children){
                queue.push(child)
            }
        }
    }
    remove(data, node = this.root){
        for(let i = 0; i < node.children.length; i++){
            if(node.children[i].data === data){
                node.children.splice(i,1);
                return true
            }else{
               const remove  =  this.remove(data,children[i]);
               if(remove) return true;
            }
        }
        return false
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
tree.print();
console.log('Traversal Depth First Search');
tree.dfs()
console.log('Traversal Breadth  First Search');
tree.bfs()
const search = tree.findNodeByBFS('T')
console.log(`Result: ${search ? 'Found' : 'Not Found'}`);

const serachByDfs = tree.findNOdeByDfs('D')
console.log(`Result: ${serachByDfs ? 'Found' : 'Not Found'}`);
tree.remove('B');
tree.dfs()
