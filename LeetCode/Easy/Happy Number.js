/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: Happy Number
 *
 * Function: Write an algorithm to determine if a number is "happy".
 *           A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var str = n.toString(),
        sequence = [];
    // find if there is a loop
    while (sequence.indexOf(n) === -1) {
        sequence.push(n);
        n = str.split('').reduce(function(prev, curr) {
            return prev + Math.pow(parseInt(curr),2);
        }, 0);
        str = n.toString();
    }
    return n === 1;
};

console.log(isHappy(7));