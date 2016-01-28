/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: Number of 1 Bits
 *
 * Function: Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/number-of-1-bits/
 */

/**
 * count the string of binary code of 1s
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var binary = n.toString(2),
        counter = 0,
        start = 0;
    while ((start = binary.indexOf('1', start)) !== -1) {
        counter++;
        start++;
    }

    return counter;
};

/**
 * count using dec to binary principle
 * @param n - a positive integer
 * @returns {number}
 */
var hammingWeight2 = function(n) {
    var counter = 0,
        num = n;

    while (num > 0) {

        if (num % 2) {
            counter++;
        }

        num = Math.floor(num / 2);
    }

    return counter;
};

console.log(hammingWeight2());