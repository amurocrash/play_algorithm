var findLengthOfLCIS = function(nums) {
  let count = 1
  let max = count
  for(let i = 1; i < nums.length; i++) {
    const n = nums[i]
    if (n > nums[i - 1]) {
      count++
    } else {
      if (count > max) {
        max = count
      }
      count = 1
    }
  }

  if (count > max) {
    max = count
  }

  return max
}