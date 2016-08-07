/**
 * Title: Intersection of Two Arrays II
 *
 * Function: Given two arrays, write a function to compute their intersection.
 * Given two arrays, write a function to compute their intersection.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/
const intersect = function(nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  const result = [];

  let hashtable1 = {};
  let hashtable2 = {};

  nums1.forEach((val) => {
    if (hashtable1[val]) {
      hashtable1[val]++;
    } else {
      hashtable1[val] = 1;
    }
  });

  nums2.forEach((val) => {
    if (hashtable2[val]) {
      hashtable2[val]++;
    } else {
      hashtable2[val] = 1;
    }
  });

  Object.keys(hashtable1).forEach((val) => {
    if (hashtable2[val]) {
      let min = Math.min(hashtable1[val], hashtable2[val]);
      for (let i = 0; i < min; i++) {
        result.push(parseInt(val));
      }
    }
  });

  return result;
};

console.log(intersect([1, 2, 3], [3, 2, 3]));
