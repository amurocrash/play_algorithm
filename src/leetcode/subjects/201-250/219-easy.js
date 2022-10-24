var containsNearbyDuplicate = function(nums, k) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    
    const lastIndex = map.get(n)
    if (lastIndex === undefined) {
      map.set(n, i)
    } else {
      if (i - lastIndex <= k) {
        return true
      } else {
        map.set(n, i)
      }
    }
  }

  return false
}