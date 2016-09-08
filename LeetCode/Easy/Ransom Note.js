/**
 * Title: Ransom Note
 *
 * Function: Given  an arbitrary  ransom  note  string and another string containing letters from  all the magazines,  write a function that will return true if the ransom  note can be constructed from the magazines ; otherwise, it will return false.  
 * Each letter  in  the  magazine string can  only be  used once  in  your ransom  note.
 *
 * Numbers of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/ransom-note/
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const magazineLength = magazine.length;
  const ransomLength = ransomNote.length;
  const magzStatistics = {};

  for (let i = 0; i < magazineLength; i++) {
    if (magzStatistics[magazine[i]]) {
      magzStatistics[magazine[i]]++;
    } else {
      magzStatistics[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomLength; i++) {
    if (magzStatistics[ransomNote[i]] && magzStatistics[ransomNote[i]] !== 0) {
      magzStatistics[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct('ac', 'aab'));
