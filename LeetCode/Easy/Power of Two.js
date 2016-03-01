/**
 * Created by SkyAo on 16/2/6.
 *
 * Title: Power of Two
 *
 * Function: Given an integer, write a function to determine if it is a power of two.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/power-of-two/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    if (n === 1) {
        return true;
    }

    if (n <= 2) {
        return n % 2 === 0;
    }

    return arguments.callee(n / 2);
};

console.log(isPowerOfTwo2(3));