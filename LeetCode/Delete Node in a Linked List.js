/**
 * Created by SkyAo on 16/1/22.
 *
 * Title: Delete Node in a Linked List
 *
 * Function: Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 *
 * Numbers of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/delete-node-in-a-linked-list/
 */

/**
 * Definition for singly-linked list.
 * @param val
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;

    return this;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    var nextNode = node.next;

    // In fact, in the problem, since it won't be tail, so the if-else is unnecessary
    if (nextNode) {
        node.val = nextNode.val;
        node.next = nextNode.next;
    } else {
        node = null;
    }

};
