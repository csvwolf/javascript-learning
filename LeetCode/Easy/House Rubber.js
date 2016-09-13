/**
 * Title: House Rubber
 *
 * Translation: 你是一个专业强盗，并计划沿街去盗窃每一个住户。
 * 每个房子都有一定量的现金，阻止你盗窃的唯一阻碍是相邻的两个房子之间有安全系统。
 * 一旦这两个房子同时被盗窃，系统就会自动联系警察。
 * 给定一系列非负整数代表每个房子的金钱，
 * 求出再不惊动警察的情况下能盗窃到的最大值。
 *
 * Numbers of Method:
 *
 * Problem Link: https://leetcode.com/problems/house-robber/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const length = nums.length;

  if (length === 0) return 0;
  if (length >= 2) nums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }

  return nums[length - 1];
};
console.log(rob([2]));
console.log(rob([2, 1]));
console.log(rob([2, 1, 3]));
console.log(rob([2, 1, 3, 15]));
console.log(rob([2, 1, 3, 15, 25]));
// 2 => 2
// 2 1 => 2
// 2 1 3 => 5
// 2 1 3 15 =>  17
// 2 1 3 15 25 => 2 3 25
