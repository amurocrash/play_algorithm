var findMaxConsecutiveOnes = function(nums) {
  let count = 0
  let max = 0
  for(let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (cur === 1) {
      count++
    } else {
      if (count > max) {
        max = count
      }
      count = 0
    }
  }

  if (count > max) {
    max = count
  }

  return max
}

