/**
 * Title: Intersection of Two Arrays
 *
 * Function: Given two arrays, write a function to compute their intersection.
 *
 * Number Of Methods: 1
 *
 * Problem Link: https://leetcode.com/problems/intersection-of-two-arrays/
 */

var unique = function(nums) {
  var filtered = [];
  nums.forEach((value) => {
    if (filtered.indexOf(value) === -1) {
      filtered.push(value);
    }
  });

  return filtered;
}

 /**
  * @param {number[]} nums1
  * @param {number[]} nums2
  * @return {number[]}
  */
var intersection = function(nums1, nums2) {
  let unique1 = unique(nums1);
  let unique2 = unique(nums2);
  let filtered = [];

  while (unique1.length > 0) {
    let temp = unique1.pop();

    if (unique2.indexOf(temp) !== -1) {
      filtered.push(temp);
    }
  }

  return filtered;
};

console.log(intersection([1, 2, 2, 1, 3], [2, 2, 3]));
