/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  //   let count = 0
  //   for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[i].length; j++) {
  //       if (grid[i][j] < 0) count++
  //     }
  //   }
  //   return count
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    let left = 0
    let right = grid[i].length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (grid[i][mid] < 0) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    count += grid[i].length - left
  }
  return count
}
