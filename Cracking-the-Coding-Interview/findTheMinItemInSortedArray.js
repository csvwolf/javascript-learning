/**
 * 一个有序数组经过循环移动，元素的顺序可能变为3 4 5 6 7 1 2，怎么样才能找出数组中最小的元素。
 *
 * 普通的方法比较简单，这里其实可以用二分法来处理。
 */

// const findTheMinItemInSortArray = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = parseInt(right / 2, 10);
//
//   while (middle > left) {
//     if (middle - left === 1 && arr[middle] < arr[left]) {
//       break;
//     }
//
//     if (arr[right] < arr[middle]) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//
//     middle = parseInt((left + right) / 2, 10);
//   }
//
//   return arr[middle];
// }

/**
 * 分治法
 * @author yhaoao
 */
const findTheMinItemInSortArray2 = function (arr) {

  if (arr.length === 1) {
    return arr[0];
  }
  let right = arr.length;
  let middle = parseInt(right / 2, 10);

  let larr = arr.splice(0, middle);
  let rarr = arr;

  let larrl = larr[0];
  let larrr = larr[larr.length-1];

  let rarrl = rarr[0];
  let rarrr = rarr[rarr.length-1];

  if (larrl > larrr) {
    return findTheMinItemInSortArray2(larr);
  } else if (rarrl > rarrr) {
    return findTheMinItemInSortArray2(rarr);
  } else {
    return Math.min(larrl, larrr, rarrl, rarrr);
  }
}
console.log(findTheMinItemInSortArray2([4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));
console.log(findTheMinItemInSortArray2([1, 2, 5, 6, 7, 9, 11]));
console.log(findTheMinItemInSortArray2([6, 7, 1, 2, 3, 4, 5]));
