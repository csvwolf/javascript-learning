/**
 * Title: Hamming Distance
 * 
 * Function: The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Numbers of Method: 1
 * 
 * Problem Link: https://leetcode.com/problems/hamming-distance/
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
  let result = x ^ y;
  let counter = 0;
  // Count the number of 1 in Binary Number
  while (result != 0) {
    if (result & 1 === 1) counter++;
    result >>= 1;
  }

  return counter;
};

console.log(hammingDistance(1, 4));