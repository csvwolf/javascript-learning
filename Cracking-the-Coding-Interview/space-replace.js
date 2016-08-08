/**
 * 编写一个方法，将字符串中的空格全替换为%20
 */

/**
 * 使用正则表达式的方法
 * @param  {[String]} str
 * @return {[String]}
 */
const replaceSpace = function(str) {
  return str.replace(/ /ig, '%20');
};

/**
 * 利用一般的方法
 * 这里简单用reduce反向遍历
 * @param  {[String]} str
 * @return {[String]}    
 */
const replaceSpace2 = function(str) {
  let spaceCounter = 0;
  const length = str.length;
  const arr = [...str];
  arr.forEach((val) => {
    if (val === ' ') spaceCounter++;
  });

  let newLength = length + spaceCounter * 2;

  arr.reduceRight((prev, curr) => {
    console.log('curr', prev)
    newLength--;
    if (prev === ' ') {
      arr[newLength--] = '0';
      arr[newLength--] = '2';
      arr[newLength] = '%';
    } else {
      arr[newLength] = prev;
    }

    return curr;
  });

  return arr.join('');
}

console.log(replaceSpace2('Hello World'));
