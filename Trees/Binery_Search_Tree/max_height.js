// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Recursive function to find the maximum depth
var maxDepth = function(root) {
    if (root === null) {
        console.log("Reached a leaf node, returning 0");
        return 0; // Base case: if the node is null, the depth is 0
    }

    console.log(`Visiting node with value: ${root.val}`);

    // Recursively find the depth of left and right subtrees
    let leftDepth = maxDepth(root.left);
    console.log(`Left depth of node ${root.val} is ${leftDepth}`);

    let rightDepth = maxDepth(root.right);
    console.log(`Right depth of node ${root.val} is ${rightDepth}`);

    // Return the greater of the two depths plus 1 (for the current node)
    let currentDepth = Math.max(leftDepth, rightDepth) + 1;
    console.log(`Returning depth of node ${root.val}: ${currentDepth}`);
    return currentDepth;
};

// Example usage:
// Let's create the tree [3,9,20,null,null,15,7]

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log("Maximum depth of the tree: " + maxDepth(root));
