/**
 * Title: Reverse Vowels of a String
 *
 * Function: Write a function that takes a string as input and reverse only the vowels of a string.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

const reverseVowels = function(s) {
  const arr = [...s];
  let length = 0;
  const vowels = [];
  arr.forEach((elem, index) => {
    if ('aeiouAEIOU'.indexOf(elem) !== -1) {
      vowels.push({elem, index});
    }
  });

  length = vowels.length;

  for (let i = 0; i < length; i++) {
    arr[vowels[i].index] = vowels[length - i - 1].elem;
  }

  return arr.join('');
}

console.log(reverseVowels2('lEetcode'));
