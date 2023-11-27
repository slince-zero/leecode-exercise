/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (guess(mid) === 0) {
      return mid
    } else if (guess(mid) === 1) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}
