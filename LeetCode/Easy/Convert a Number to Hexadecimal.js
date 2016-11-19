/**
 * Title: Convert a Number to Hexadecimal
 * 
 * Function: Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.
 * 
 * Numbers of Method:
 * 
 * Problem Link: https://leetcode.com/problems/convert-a-number-to-hexadecimal/
 */

/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
  const table = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let result = '';
  
  if (num === 0) return '0';
  else if (num < 0) num = 4294967295 + num + 1;
  
  while (num !== 0) {
    result = table[num % 16] + result;
    num = parseInt(num / 16);
  }
  

  return result;
};

console.log(toHex(-2))