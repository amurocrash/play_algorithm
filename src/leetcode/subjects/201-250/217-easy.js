var containsDuplicate = function(nums) {
  const set = new Set()
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (set.has(n)) {
      return false
    } else {
      set.add(n)
    }
  }

  return true
}