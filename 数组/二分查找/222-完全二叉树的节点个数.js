/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function (root) {
// //   if (!root) return 0
// //   return 1 + countNodes(root.left) + countNodes(root.right)

// }

function countNodes(root) {
  if (!root) return 0

  let height = computeHeight(root)

  function computeHeight(node) {
    let h = 0
    while (node.left !== null) {
      h++
      node = node.left
    }
    return h
  }

  function nodeExists(index, h, node) {
    let left = 0,
      right = Math.pow(2, h) - 1
    let count = 0

    while (count < h) {
      const mid = Math.ceil((left + right) / 2)
      if (index >= mid) {
        node = node.right
        left = mid
      } else {
        node = node.left
        right = mid - 1
      }
      count++
    }

    return node !== null
  }

  if (height === 0) return 1

  let upperCount = Math.pow(2, height) - 1
  let left = 0,
    right = upperCount

  while (left < right) {
    const indexToFind = Math.ceil((left + right) / 2)
    if (nodeExists(indexToFind, height, root)) {
      left = indexToFind
    } else {
      right = indexToFind - 1
    }
  }

  return upperCount + left + 1
}
