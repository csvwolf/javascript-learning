/**
 * Title: Pascal's Triangle II
 * 
 * Function: Given an index k, return the kth row of the Pascal's triangle.
 * 
 * Numbers of Method: 
 * 
 * Problem Link: https://leetcode.com/problems/pascals-triangle-ii/
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  let arr = [];

  for (let i = 0; i <= rowIndex; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }

  return arr[rowIndex];
};

console.log(getRow(0));