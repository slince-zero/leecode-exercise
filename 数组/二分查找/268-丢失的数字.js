/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const newNums = nums.sort((a, b) => a - b)
    let left = 0
    let right  = newNums.length - 1
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(newNums[mid] === mid){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}; 