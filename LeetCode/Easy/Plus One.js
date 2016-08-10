/**
 * Title: Plus One
 *
 * Function: Given a non-negative number represented as an array of digits, plus one to the number.
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/plus-one/
 */

/**
* @param {number[]} digits
* @return {number[]}
*/
const plusOne = function(digits) {
  let carry = 1;
  const length = digits.length;

  for (let i = length - 1; i>= 0; i--) {
    digits[i] += carry;
    carry = 0;

    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([9]));
