class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }


}
let firstNode = new Node(2)
let secondNode = new Node(3)
let thirdNode = new Node(4)
let fourthNode = new Node(5)

firstNode.left = secondNode
firstNode.right = thirdNode
secondNode.left = fourthNode
function inOrderTraversal(node) {
    if (node !== null) {
        console.log(node.data);
        inOrderTraversal(node.left);
        inOrderTraversal(node.right);
    }
}
inOrderTraversal(firstNode)