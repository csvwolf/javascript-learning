/**
 * 实现一个算法，确定一个字符串的所有字符是否全部不同，假设不允许使用额外的数据结构，又该如何处理。
 */

/**
 * 最简单的玩法：Hash Table
 *
 * 注：JS中也不属于额外的东西，但在别的语言中属于。
 *
 * @param {String} str
 *
 * @return {Object} 统计表 是否unique
 */
const uniqueOrNot = function(str) {
  const table = {};
  let unique = true;

  [...str].forEach((val, index) => {
    let temp = table[val];
    if (unique) {
      table[val] = temp ? temp + 1 : 1;
      unique = table[val] <= 1;
    }
  });

  return {table, unique};
}

/**
 * 之后我们来使用数组，使用数组的前提条件是我们能知道长度，用它来做表
 *
 * 换言之，需要知道是ASCII还是UNICODE，简单当做是ASCII吧。
 *
 * @param  {[String]} str
 * @return {[Boolean]}     [字符串是否每个字符只出现一次]
 */
const uniqueOrNot2 = function(str) {
  const length = str.length;
  const table = new Array(256);
  let char = 0;

  if (length > 256) {
    return false;
  }

  table.fill(false);

  for (let i = 0; i < length; i++) {
    char = str.charCodeAt(i);
    if (!table[char]) {
      table[char] = true;
    } else {
      return false;
    }
  }

  return true;
}

/**
 * 接下来来用一个进阶版的，位运算，当然也有条件限制，而且比数组更坑爹
 *
 * 指定情况，比如只有A-Z/a-z或者只有数字（我们从最简单的只有数字演示吧）
 *
 * 之所以这么规定是因为对整型不同语言长度有不同限制。
 *
 * @param  {[String]} str
 * @return {[Boolean]}     [字符串是否每个字符只出现一次]
 */
const uniqueOrNot3 = function(str) {
  let checker = 0;
  let start = '0'.charCodeAt(0);
  let diff = 0;
  const length = str.length;

  for (let i = 0; i < length; i++) {
    diff = str.charCodeAt(i) - start;

    if ((checker & (1 << diff)) > 0) {
      return false;
    }

    checker = checker | diff;
  }

  return true;
}


console.log(uniqueOrNot3('1231'));
