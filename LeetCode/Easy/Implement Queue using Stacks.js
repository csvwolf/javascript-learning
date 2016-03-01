/**
 * Created by SkyAo on 16/2/7.
 *
 * Title: Implement Queue using Stacks
 *
 * Function: Implement the following operations of a queue using stacks.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/implement-queue-using-stacks/
 */

/**
 * @constructor
 */
var Queue = function() {
    this.data = [];
    this.reverseData = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.data.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    while(this.data.length !== 1) {
        this.reverseData.push(this.data.pop());
    }

    this.data.pop();

    while (this.reverseData.length !== 0) {
        this.data.push(this.reverseData.pop());
    }
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var result;

    while(this.data.length !== 1) {
        this.reverseData.push(this.data.pop());
    }

    result = this.data.pop();

    this.reverseData.push(result);

    while(this.reverseData.length !== 0) {
        this.data.push(this.reverseData.pop());
    }

    return result;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.data.length === 0;
};

console.log([].push(5));