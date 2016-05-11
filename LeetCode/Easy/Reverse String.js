/**
 * Created by SkyAo on 16/5/11.
 *
 * Title: Reverse String
 *
 * Function: Write a function that takes a string as input and returns the string reversed.
 *
 * Numbers Of Methods: 2
 *
 * Problem Link: https://leetcode.com/problems/reverse-string/
 */

/**
 * Simplest way to reverse
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};

/**
 * use iterator to store the value and return
 * @param s
 * @returns {*}
 */
var reverseString2 = function(s) {
    return s.split('').reduceRight(function(prev, curr) {
        return prev + curr;
    }, '');
};

console.log(reverseString2('hello'));