/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((a, b) => a + b)
  const bobSum = bobSizes.reduce((a, b) => a + b)
  const diff = (aliceSum - bobSum) / 2
  const set = new Set(bobSizes)
  for (const size of aliceSizes) {
    if (set.has(size - diff)) {
      return [size, size - diff]
    }
  }
}
