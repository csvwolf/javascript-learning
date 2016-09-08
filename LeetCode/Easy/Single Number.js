/**
 * Title: Single Number
 *
 * Function: Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/single-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const statistics = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    statistics[nums[i]] = statistics[nums[i]] ? statistics[nums[i]] + 1 : 1;
  }

  for (let index of Object.keys(statistics)) {
    if (statistics[index] === 1) return parseInt(index);
  }
};

const singleNumber2 = function(nums) {
  const m = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (m.has(nums[i])) m.set(nums[i], m.get(nums[i]) + 1);
    else m.set(nums[i], 1);
  }

  for (let [key, value] of m) {
    if (value === 1) return key;
  }
}

const singleNumber3 = function(nums) {
  const length = nums.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result = result ^ nums[i];
  }

  return result;
}
console.log(singleNumber3([1, 2, 1, 5, 2]));
