/**
 * Title: Sum of Two Integers
 *
 * Function: Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 *
 * Number Of Methods Now: 1
 *
 * Problem Link: https://leetcode.com/problems/sum-of-two-integers/
 */

 /**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
 var getSum = function(a, b) {
    let sum = a;
    let carry = b;

    while (carry) {
      let tmp = sum;

      sum = tmp ^ carry;
      carry = (tmp & carry) << 1;
    }

    return sum;
 };

 console.log(getSum(2, 3));
