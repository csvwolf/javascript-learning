/**
 * Created by SkyAo on 16/2/7.
 *
 * Title: Implement Stack using Queues
 *
 * Function: Implement the following operations of a stack using queues.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/implement-stack-using-queues/
 */

/**
 * @constructor
 */
var Stack = function() {
    this.data = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.data.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    var length = this.data.length,
        i,
        top;

    for (i = 0; i < length - 1; i++) {
        this.data.push(this.data.shift());
    }

    this.data.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    var length = this.data.length,
        i,
        top;

    for (i = 0; i < length - 1; i++) {
        this.data.push(this.data.shift());
    }

    top = this.data.shift();

    this.data.push(top);

    return top;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.data.length === 0;
};