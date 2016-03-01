/**
 * Created by SkyAo on 16/2/6.
 *
 * Title: Merge Two Sorted Lists
 *
 * Function: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * value is equal is allowed in the linked list
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var node1 = l1,
        node2 = l2,
        temp1 = null,
        temp2 = null,
        head = null;

    if (!node1 || !node2) {
        return node1 || node2;
    }

    if (node1.val > node2.val) {
        node1 = l2;
        node2 = l1;
    }

    head = node1;

    while (node2) {
        if (node1.next && node1.next.val > node2.val || !node1.next) {
            temp1 = node1.next;
            temp2 = node2.next;
            node1.next = node2;
            node2.next = temp1;
            node1 = node1.next;
            node2 = temp2;
        } else {
            node1 = node1.next;
        }
    }

    return head;
};
