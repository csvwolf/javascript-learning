/**
 * Created by SkyAo on 16/2/3.
 *
 * Title: Reverse Linked List
 *
 * Function: Reverse a singly linked list.
 *
 * Numbers Of Method: 3
 *
 * Problem Link: https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Create Linked List
 * @param nodes
 * @returns {*}
 */
var createList = function(nodes) {
    var head = null,
        curr = null,
        length = nodes.length;

    if (!nodes)
        return null;
    else {
        head = new ListNode(nodes[0]);
        curr = head;

        for (var i = 1; i < length; i++) {
            curr.next = new ListNode(nodes[i]);
            curr = curr.next;
        }

        curr.next = null;
    }

    return head;
};

/**
 * use stack to reverse
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var stack = [],
        length,
        currp = head;

    if (head) {

        while (currp) {
            stack.push(currp);
            currp = currp.next;
        }

        head = stack.pop();
        currp = head;
        length = stack.length;


        for (var i = 0; i < length; i++) {
            currp.next = stack.pop();
            currp = currp.next;
        }

        currp.next = null;
    }

    return head;
};

/**
 * use iterative way to reverse
 * @param head
 * @returns {*}
 */
var reverseList2 = function(head) {
    var curr = head,
        prev = null,
        next = null;

    if (head) {

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head = prev;
    }

    return head;
};

/**
 * use recursive way to reverse
 * @param head
 * @returns {*}
 */
var reverseList3 = function(head) {
    var root;


    if (head == null || head.next == null) {
        return head;    // return the last node in the init linked list
    } else {
        root = arguments.callee(head.next); // avoid the affect of the function name
        head.next.next = head;
        head.next = null;
        return root;    // return the last node
    }
};

var head = createList([1, 2, 3]);
console.log(reverseList3(head));