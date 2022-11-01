var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const val = nums[mid]
    if (val === target) {
      return mid
    } else if (target < val) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  
  return -1
}