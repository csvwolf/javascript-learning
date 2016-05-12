/**
 * Created by SkyAo on 16/5/11.
 *
 * Title: Linked List Cycle
 *
 * Function: Given a linked list, determine if it has a cycle in it.
 *
 * Number Of Methods: 1
 *
 * Problem Link: https://leetcode.com/problems/linked-list-cycle/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fast = head,
        slow = head;

    // use two pointer to run
    while (slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
};