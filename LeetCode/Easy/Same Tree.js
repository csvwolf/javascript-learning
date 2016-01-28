/**
 * Created by SkyAo on 16/1/23.
 *
 * Title: Same Tree
 *
 * Function: Given two binary trees, write a function to check if they are equal or not.
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/same-tree/
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * The recursive method to judge whether two binary tree is the same.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {     // if have got to the leaf node, this mean the branch is the same, so return true
        return true;
    } else if (p && q && (p.val != q.val) || !p || !q)  // else, when p.val != q.val or one of the node is null
        return false;
    else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);  // when all node is the same, return true
    }
};

/**
 * The iterator method to judge whether two binary tree is the same.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree2 = function(p, q) {
    var currentArr = [],
        nextArr = [],
        length = 0;

    // construct a two dimensional array, without this, currentArr[0] will be undifined
    currentArr[0] = [];
    currentArr[1] = [];

    // put the root node in the array
    if (p) {
        currentArr[0] = [p];
    }
    if (q) {
        currentArr[1] = [q];
    }

    do {
        // without nextArr = [], the currentArr value will be changed since their address is the same
        nextArr = [];
        nextArr[0] = [];
        nextArr[1] = [];

        // the layer's node number is the same
        if (currentArr[0].length != currentArr[1].length) {
            return false;
        } else {
            length = currentArr[0].length;
        }


        for (var i = 0; i < length; i++) {
            console.log(!currentArr[1]);
            // if the node is not the same
            if (currentArr[0][i] && currentArr[1][i] && currentArr[0][i].val != currentArr[1][i].val || (!currentArr[0][i] || !currentArr[1][i]) && currentArr[0][i] != currentArr[1][i]) {
                return false;
            }

            if (currentArr[0][i]) {
                nextArr[0].push(currentArr[0][i].left);
                nextArr[0].push(currentArr[0][i].right);
            }

            if (currentArr[1][i]) {
                nextArr[1].push(currentArr[1][i].left);
                nextArr[1].push(currentArr[1][i].right);
            }


        }

        currentArr = nextArr;
    } while (currentArr[0].length > 0 || currentArr[1].length > 0);

    return true;
};