var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0
  }

  let max2
  let max1
  let maxIndex = -1

  nums.forEach((n, index) => {
    if (max1 === undefined || n > max1) {
      max2 = max1
      max1 = n
      maxIndex = index
    } else if (max1 > n && (max2 === undefined || n > max2)) {
      max2 = n
    }
  })

  if (max1 / max2 >= 2) {
    return maxIndex
  }

  return -1
}