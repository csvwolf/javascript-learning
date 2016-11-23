/**
 * Title: Two Sum
 * 
 * Function: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * Numbers of Method: 
 * 
 * Problem Link: https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let numList = nums.slice().sort((a, b) => a - b);
  let small = 0;
  let large = nums.length - 1;

  while (small <= large) {
    if (numList[small] + numList[large] === target) break;
    else if (numList[small] + numList[large] > target) large--;
    else small++;
  }
  return [nums.indexOf(numList[small]), nums.lastIndexOf(numList[large])];
};

console.log(twoSum([3,2,4], 6));