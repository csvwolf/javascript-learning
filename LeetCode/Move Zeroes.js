/**
 * Created by SkyAo on 16/1/23.
 *
 * Title: Move Zeroes
 *
 * Function: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/move-zeroes/
 */
/**
 * @param nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var position,
        counter = 0;

    // Loop until there is no zero in the array
    while ((position = nums.indexOf(0)) != -1) {
        nums.splice(position, 1);   // delete the founded zero
        counter++;
    }

    // push zeros in the array
    while(counter--) {
        nums.push(0);
    }
};
