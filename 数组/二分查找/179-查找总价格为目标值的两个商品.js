/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度 O(n^2)，空间复杂度 O(1)-暴力搜索
var twoSum = function (price, target) {
  for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
      if (price[i] + price[j] === target) {
        return [price[i], price[j]]
      }
    }
  }
}

// 时间复杂度 O(nlogn)，空间复杂度 O(1)-二分搜索
var twoSum = function (price, target) {
  for (let i = 0; i < price.length; i++) {
    let left = i + 1
    let right = price.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (price[i] + price[mid] === target) {
        return [price[i], price[mid]]
      } else if (price[i] + price[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
}
