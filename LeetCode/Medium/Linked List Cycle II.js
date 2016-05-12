/**
 * Created by SkyAo on 16/5/11.
 *
 * Title: Linked List Cycle II
 *
 * Function: Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * Numbers Of Methods: 1
 *
 * Problem Link: https://leetcode.com/problems/linked-list-cycle-ii/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var fast = head,
        slow = head;

    while (slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            while (fast !== head) {
                fast = fast.next;
                head = head.next;
            }

            return head;
        }
    }

    return null;
};