/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  //   for (let i = 0; i < letters.length; i++) {
  //     if (letters[i] > target) {
  //       return letters[i]
  //     }
  //   }
  //   return letters[0]

  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (letters[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return letters[left % letters.length]
}
