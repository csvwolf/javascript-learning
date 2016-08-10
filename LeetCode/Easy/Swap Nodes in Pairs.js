/**
 * Title: Swap Nodes in Pairs
 *
 * Function: Given a linked list, swap every two adjacent nodes and return its head.
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/swap-nodes-in-pairs/
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
const swapPairs = function(head) {
  let count = 1;
  let curr = head;
  let next = null;
  let prev = null;
  let prev_prev = null;

  while (curr) {
    next = curr.next;

    if (count % 2 === 0) {
      [prev.next, curr.next] = [curr.next, prev];
      if (prev_prev) {
        // prev's prev must point at current
        prev_prev.next = curr;
      }

      if (count === 2) {
        // head pointer should change
        head = curr;
      }
      // prev_prev should be stored for next using - it's the odd pointer(origin)
      prev_prev = curr.next;
    } else {
      prev = curr;
    }
    curr = next;
    count++;
  }

  return head;
};

const swapPairs2 = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prev = head;
  let curr = head.next;
  let next = head.next.next;
  let prev_prev = null;

  [head, prev_prev, prev.next, curr.next, prev] = [curr, prev, next, prev, next];

  while (prev !== null && prev.next !== null) {
    curr = prev.next;
    next = prev.next.next;
    [prev.next, prev_prev.next, curr.next, prev_prev, prev] = [next, curr, prev, prev, next];
  }

  return head;
}
