/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: Majority Element
 *
 * Function: Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var max,
        maxCounter = 0,
        currentCounter = 1,
        prevNum,
        length = nums.length;

    nums.sort();

    // if there is only one number, it will work by setting default value
    max = prevNum = nums[0];

    for (var i = 1; i < length; i++) {
        //console.log(nums[i], currentCounter, prevNum);

        if (prevNum === nums[i]) {
            //console.log('the same');
            currentCounter++;
        } else {
            if (currentCounter > maxCounter) {
                maxCounter = currentCounter;
                max = prevNum;
            }

            prevNum = nums[i];
            currentCounter = 1;
        }
    }

    // when last number is end, judge it.
    if (currentCounter > maxCounter) {
        maxCounter = currentCounter;
        max = prevNum;
    }

    return max;
};

console.log(majorityElement([3, 2, 3]));