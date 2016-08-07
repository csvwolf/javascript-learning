/**
 * 一个字符串重新排列后能否变成另一个
 */

/**
 * 使用排序后的数组对比
 *
 * 使用哈希表的方法写太多了就不说了，这里是一个更方便的方法
 * @param  {[string]} str1
 * @param  {[string]} str2
 * @return {[boolean]}      [是否可以改变成另一个]
 */
const changedToAnotherOrNot = function(str1, str2) {
  const arr1 = [...str1];
  const arr2 = [...str2];
  const length = arr1.length;

  arr1.sort();
  arr2.sort();

  if (length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(changedToAnotherOrNot('aaa', 'aab'));
