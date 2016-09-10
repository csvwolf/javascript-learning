/**
 * Title: First Unique Character in a String
 *
 * Function: Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/first-unique-character-in-a-string/
 */
/**
 * @param  {string} s
 * @return {number}
 */
const firstUniquChar = function(s) {
  const arr = [...new Set(s)];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (s.indexOf(arr[i]) === s.lastIndexOf(arr[i])) return s.indexOf(arr[i]);
  }

  return -1;
}

const firstUniquChar2 = function(s) {
  const countList = {};
  const length = s.length;

  for (let i = 0; i < length; i++) {
    countList[s[i]] = !countList[s[i]] ? 1 : countList[s[i]] + 1;
  }

  for (let i = 0; i < length; i++) {
    if (countList[s[i]] === 1) return i;
  }

  return -1;
}
console.log(firstUniquChar2('loveleetcode'));
