/**
 * Title: Pascal's Triangle
 *
 * Function: Given numRows, generate the first numRows of Pascal's triangle.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/pascals-triangle/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const nums = [];

  if (numRows > 0) nums[0] = [1];
  if (numRows > 1) nums[1] = [1, 1];

  for (let i = 2; i < numRows; i++) {
    nums[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) nums[i][j] = 1;
      else nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j];
    }
  }
  return nums;
};

generate(5);
