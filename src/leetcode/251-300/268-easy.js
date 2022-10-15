var missingNumber = function(nums) {
  const sorted = nums.sort((a, b) => a - b)
  if (nums[0] !== 0) {
    return 0
  }

  const length = sorted.length

  for (let i = 0; i < length - 1; i++) {
    if (sorted[i + 1] - sorted[i] > 1) {
      return sorted[i] + 1
    }
  }

  return sorted[length - 1] + 1
}

const nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
const r = missingNumber(nums)
console.log(r)