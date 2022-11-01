// var maximumProduct = function(nums) {
//   nums.sort((a, b) => a - b)
//   const length = nums.length

//   const l = nums[0] * nums[1] * nums[length - 1]
//   const m = nums[length - 3] * nums[length - 2] * nums[length - 1]

//   return l >= m ? l : m
// }

var maximumProduct = function(nums) {
  let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER
  let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER

  for(let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (n < min1) {
      min2 = min1
      min1 = n
    } else if (n < min2) {
      min2 = n
    }
    
    if (n > max1) {
      max3 = max2
      max2 = max1
      max1 = n
    } else if (n > max2) {
      max3 = max2
      max2 = n
    } else if (n > max3) {
      max3 = n
    }
  }


  let l = min1 * min2 * max1
  let r = max3 * max2 * max1

  return l >= r ? l : r
}

const nums = [0, 0, 0, 0]
console.log(maximumProduct(nums))