function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var moveZeroes = function(nums) {
  let firstZeroIndex = -1
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i]
    if (e === 0) {
      if (firstZeroIndex < 0) {
        firstZeroIndex = i
      }
    } else {
      if (firstZeroIndex >= 0) {
        swap(nums, firstZeroIndex, i)
        if (nums[firstZeroIndex + 1] === 0) {
          firstZeroIndex += 1
        }
      }
    }
  }
}

const nums = [0, 1, 0, 3, 12, 0, 15, 17, 19, 0, 0, 0, 25]
moveZeroes(nums)
console.log(nums)