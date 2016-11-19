/**
 * Title: Add Strings
 * 
 * Function: Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.
 * 
 * Numbers of Method:
 * 
 * Problem Link: https://leetcode.com/problems/add-strings/ 
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let carry = 0;
  const offset = '0'.charCodeAt(0);
  let [larger, smaller] = num1.length < num2.length 
                          ? [num2, num1] : [num1, num2];
  let smallerIndex = smaller.length - 1;

  let result = [...larger].reduceRight((prev, curr) => {
    let plusNum = smallerIndex >= 0 ? smaller.charCodeAt(smallerIndex--) - offset : 0;
    curr = curr.charCodeAt(0) - offset;
    carry += (curr + plusNum);
    let temp = carry;
    carry = parseInt(carry / 10);
    return (temp - carry * 10) + prev;
  }, '');

  return carry ? carry + result : result;
};

console.log(addStrings('1', '0'))