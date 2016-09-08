/**
 * Title: Power of Four
 *
 * Function: Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/power-of-four/
 *
 */

/**
 * @param {number} num
 * @return {boolean}
 *
 * Explain: https://www.hrwhisper.me/leetcode-power-four/
 */
const isPowerOfFour = function(num) {
  // num & (num - 1) power of two
  // 0x55555555 = 01010101...01
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
};

console.log(isPowerOfFour(2));
