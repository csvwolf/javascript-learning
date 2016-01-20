/**
 * Created by SkyAo on 16/1/20.
 *
 * Title: Maximum Depth of Binary Tree
 *
 * Function: Given a binary tree, find its maximum depth.
 *
 * Numbers of Method Now: 2
 *
 * Problem Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * Defination for a binary tree node
 * @param val
 * @returns {TreeNode}
 * @constructor
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;

    return this;
}


var max = function(a, b) {
    return a > b ? a : b;
};

/**
 * The recursive method to get the depth
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null)
        return 0;

    //console.log(root.left.val);
    //console.log(root.left.right);


    return max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 * The iterator method to get the depth
 *
 * @param {TreeNode} root
 * @returns {number}
 */

var maxDepth2 = function(root) {
    var nodeArr = [];
    // the child node array
    var nextNodeArr = [];

    var depth = 0;

    // if root is null, there will be a error.
    if (root)
        nodeArr.push(root);

    while (nodeArr.length > 0) {
        nodeArr.forEach(function(value) {
            if (value.left) {
                nextNodeArr.push(value.left);
            }

            if (value.right) {
                nextNodeArr.push(value.right);
            }
        });
        depth++;
        nodeArr = nextNodeArr;
        nextNodeArr = [];
    }

    return depth;
};

var tree = new TreeNode(3);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(2);

//console.log(tree.left.left.val);
console.log(maxDepth2(tree));