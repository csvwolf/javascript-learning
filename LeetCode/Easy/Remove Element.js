/**
 * Title: Remove Element
 *
 * Function: Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let length = nums.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }

  nums.length = count;

  return count;
};

console.log(removeElement([2], 3));
