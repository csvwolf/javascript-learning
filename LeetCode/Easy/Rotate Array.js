/**
 * Title: Rotate Array
 *
 * Function: Rotate an array of n elements to the right by k steps.
 *
 * Number Of Methods Now: 2
 *
 * Problem Link: https://leetcode.com/problems/rotate-array/
 */

 /**
  * @param {number[]} nums
  * @param {number} k
  * @return {void} Do not return anything, modify nums in-place instead.
  */
var rotate = function(nums, k) {
  let length = nums.length;
  let right = nums.splice(length - k, k);
  nums.unshift(...right);
};

var rotate2 = function(nums, k) {
  let temp;
  for (let i = 0; i < k; i++) {
    temp = nums.pop();
    nums.unshift(temp);
  }
}

var nums = [1, 2];

rotate2(nums, 0);

console.log(nums);
