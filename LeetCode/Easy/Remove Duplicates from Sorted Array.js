/**
 * Title: Remove Duplicates from Sorted Array
 *
 * Function: Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  nums = [...new Set(nums)];
  return nums.length;
};

console.log(removeDuplicates([1, 2, 2]));
