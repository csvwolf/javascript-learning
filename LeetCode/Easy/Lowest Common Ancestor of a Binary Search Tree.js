/**
 * Created by SkyAo on 16/1/29.
 *
 * Title: Lowest Common Ancestor of a Binary Search Tree
 *
 * Function: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var smallNode = null,
        greatNode = null,
        currentNode = root;

    if (p.val == q.val) {
        return p;
    }

    if (p.val < q.val) {
        smallNode = p;
        greatNode = q;
    } else {
        smallNode = q;
        greatNode = p;
    }

    while (currentNode) {
        if (smallNode.val == currentNode.val)
            return smallNode;
        if (greatNode.val == currentNode.val)
            return greatNode;

        if (smallNode.val < currentNode.val && greatNode.val > currentNode.val)
            return currentNode;

        if (smallNode.val < currentNode.val)
            currentNode = currentNode.left;
        else
            currentNode = currentNode.right;
    }

};
