/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const resultSet = new Set()
  for (const num of nums1) {
    if (binarySearch(nums2, num) !== -1) {
      resultSet.add(num)
    }
  }

  return Array.from(resultSet)
}
