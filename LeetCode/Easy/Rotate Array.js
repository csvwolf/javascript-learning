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

var rotate3 = function(nums, k) {
  k %= nums.length;

  reverse(0, nums.length - k - 1);
  reverse(nums.length - k, nums.length - 1);
  reverse(0, nums.length - 1);

  function reverse(s, e) {
    for (let i = s, count = (e - s + 1) >> 1; count--; i++) {
      const j = s + e - i;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
};

var rotate4 = function(nums, k) {
  k %= nums.length;

  let count = nums.length;

  let i = 0;
  let index = i;
  let nextIndex;
  let prev = nums[i];

  do {
    nextIndex = (index + k) % nums.length;
    [nums[nextIndex], prev] = [prev, nums[nextIndex]];
    index = nextIndex;
    count--;

    if (nextIndex === i) {
      index = ++i;
      prev = nums[i];
    }
  } while (count > 0);
};

var nums = [1, 2];

rotate2(nums, 0);

console.log(nums);
