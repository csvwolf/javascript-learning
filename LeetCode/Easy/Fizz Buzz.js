/**
 * Title: Fizz Buzz
 *
 * Function: Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/fizz-buzz/
 */

 /**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
    else if (i % 3 === 0) arr.push('Fizz');
    else if (i % 5 === 0) arr.push('Buzz');
    else arr.push(i.toString());
  }

  return arr;
};