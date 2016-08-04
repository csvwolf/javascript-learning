/**
 * 一个有序数组经过循环移动，元素的顺序可能变为3 4 5 6 7 1 2，怎么样才能找出数组中最小的元素。
 *
 * 普通的方法比较简单，这里其实可以用二分法来处理。
 */

const findTheMinItemInSortArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let middle = parseInt(right / 2, 10);

  while (middle > left) {
    if (middle - left === 1 && arr[middle] < arr[left]) {
      break;
    }

    if (arr[right] < arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    middle = parseInt((left + right) / 2, 10);
  }

  return arr[middle];
}

console.log(findTheMinItemInSortArray([3, 4, 5, 6, 7, 1, 2]));
console.log(findTheMinItemInSortArray([1, 2, 5, 6, 7, 9, 11]));
console.log(findTheMinItemInSortArray([6, 7, 1, 2, 3, 4, 5]));
