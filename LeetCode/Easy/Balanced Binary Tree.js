/**
 * Created by SkyAo on 16/2/7.
 *
 * Title: Balanced Binary Tree
 *
 * Function: Given a binary tree, determine if it is height-balanced.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/balanced-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Caculate Depth of the tree
 * @param {TreeNode} root
 * @return {int} depth
 */
var getDepth = function(root) {
    if (!root)
        return 0;
    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var depthLeft, depthRight;

    if (!root)
        return true;
    if (!isBalanced(root.left)) {
        return false;
    }

    if (!isBalanced(root.right)) {
        return false;
    }

    depthLeft = getDepth(root.left);
    depthRight = getDepth(root.right);

    if (Math.abs(depthLeft - depthRight) > 1) {
        return false;
    }

    return true;
};
