// function sumArr(arr, l, r) {
//   let sum = 0

//   for(let i = l; i <= r; i++) {
//     sum += arr[i]
//   }

//   return sum
// }

// var pivotIndex = function(nums) {
//   const length = nums.length
//   if (length >= 1) {
//     for(let i = 0; i < length; i++) {
//       let sumLeft = 0
//       let sumRight = 0
//       if (i === 0) {
//         sumRight = sumArr(nums, i + 1, length - 1)
//       } else if (i === length - 1) {
//         sumLeft = sumArr(nums, 0, i - 1)
//       } else {
//         sumLeft = sumArr(nums, 0, i - 1)
//         sumRight = sumArr(nums, i + 1, length - 1)
//       }

//       if (sumLeft === sumRight) {
//         return i
//       }
//     }
//   }

//   return -1
// }



var pivotIndex = function(nums) {
  const total = nums.reduce((prev, next) => prev + next, 0)

  let sumLeft = 0
  let sumRight = total
  for(let i = 0; i < nums.length; i++) {
    sumLeft += (i - 1 < 0 ? 0 : nums[i - 1])
    sumRight -= nums[i]
    if (sumLeft === sumRight) {
      return i
    }
  }

  return -1
}

// const nums = [0]
const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))