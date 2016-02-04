/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: Remove Duplicates from Sorted List
 *
 * Function: Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var curr = head;

    if (!curr)
        return head;

    while (curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};