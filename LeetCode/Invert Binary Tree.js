/**
 * Created by SkyAo on 16/1/22.
 *
 * Title: Invert Binary Tree
 *
 * Function: Invert a binary tree.
 *
 * Numbers of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/invert-binary-tree/
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * The recursive method to invert a tree
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var temp;
    if (root) {
        temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);
    }

    return root;
};

/**
 * The iterator method to invert a tree
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree2 = function(root) {
    var temp,
        rootArr = [],
        childrenNodeArr = [];

    if (root) {
        rootArr.push(root);
    }

    while (rootArr.length > 0) {
        rootArr.forEach(function(node) {
            temp = node.left;
            node.left = node.right;
            node.right = temp;

            if (node.left)
                childrenNodeArr.push(node.left);
            if (node.right)
                childrenNodeArr.push(node.right);
        });

        rootArr = childrenNodeArr;
        childrenNodeArr = [];
    }

    return root;
};