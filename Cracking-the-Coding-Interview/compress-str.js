/**
 * 实现基本的字符串压缩功能：aabcccccaaa => a2b1c5a3，如果压缩后字符串没有变短，则返回源字符
 */

/**
 * 虽然看着简单 但实际上字符串拼接开销很大
 * 可以考虑先存数组，再组合（懒癌晚期……）
 * @param  {[String]} str
 * @return {[String]}
 */
const compressStr = function(str) {
  const length = str.length;
  let counter = 0;
  let result = '';
  let prevChar = null;

  for (let i = 0; i < length; i++) {
    if (str[i] !== prevChar) {
      if (counter !== 0) result += `${prevChar}${counter}`;
      prevChar = str[i];
      counter = 1;
    } else {
      counter++;
    }
  }

  result += `${prevChar}${counter}`;

  return result.length === length ? str : result;
};
console.log(compressStr('aabbccdd'));
