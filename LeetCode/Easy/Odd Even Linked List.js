/**
 * Created by SkyAo on 16/1/29.
 *
 * Title: Odd Even Linked List
 *
 * Function: Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/odd-even-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * Find the last Node of the singly linked list
 * @param {ListNode} head
 * @returns {ListNode}
 */
var findTheLastNode = function(head) {
    var currNode = head;

    if (!head) {
        return null;
    }

    while (currNode.next) {
        currNode = currNode.next;
    }

    return currNode;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    var lastNode = findTheLastNode(head),   // the last node of the init linked list, use it to compare whether should stop
        currentLastNode = lastNode,         // the last node of the current linked list
        counter = 0,
        currentNode = head,
        preNode = head,
        operatorNode = null;                // the node we operated now(the sequence is the init linked list

    while (operatorNode !== lastNode) {
        counter++;

        operatorNode = currentNode;

        // should judge if the current node is the end of the current linked list
        if (counter % 2 === 0 && currentNode !== currentLastNode) {
            preNode.next = currentNode.next;
            currentNode.next = null;
            currentLastNode.next = currentNode;
            currentLastNode = currentNode;
            currentNode = preNode.next;
        } else {
            preNode = currentNode;
            currentNode = currentNode.next;
        }

    }

    return head;

};
