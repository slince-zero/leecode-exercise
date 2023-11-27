/**
 * @param {number} n
 * @return {number}
 */

// 数学
// var arrangeCoins = function (n) {
//     return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
// }

// 二分
var arrangeCoins = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if ((mid * (mid + 1)) / 2 <= n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
