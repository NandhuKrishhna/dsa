class TreeNode{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChild(child){
        this.children.push(child)
    }
}
const root = new TreeNode