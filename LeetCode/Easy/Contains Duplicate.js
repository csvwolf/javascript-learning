/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: Contains Duplicate
 *
 * Function: Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/contains-duplicate/
 */

/**
 * common method: use array that after sort to compare
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var length = nums.length;

    nums.sort();

    for (var i = 0; i < length - 1; i++) {
        if (nums[i] == nums[i+1]) {
            return true;
        }
    }

    return false;
};

/**
 * judge whether the object has key named num in array, the object key is num.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function(nums) {
    var length = nums.length,
        obj = {};

    for (var i = 0; i < length; i++) {
        if (nums[i] in obj) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }

    return false;
};

console.log(containsDuplicate2([1, 5, 3, 2]));