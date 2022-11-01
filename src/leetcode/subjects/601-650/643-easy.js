// 连续子数组，不能排序
var findMaxAverage = function(nums, k) {
  const length = nums.length
  if (length <= k) {
    return nums.reduce((prev, next) => prev + next, 0) / Math.min(length, k)
  }

  let l = 0
  let k_ = l + k - 1

  let max
  while(k_ <= length - 1) {
    let sum = 0
    for(let i = l; i <= k_; i++) {
      sum += nums[i]
    }
    const avg = sum / k
    if (max === undefined || avg > max) {
      max = avg
    }

    l++
    k_++
  }

  return max
}

// const nums = [1,12,-5,-6,50,3], k = 4
const nums = [5], k = 2
console.log(findMaxAverage(nums, k))