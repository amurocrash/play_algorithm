// var findLHS = function(nums) {
//   const length = nums.length
//   if (length <= 1) {
//     return 0
//   }

//   nums.sort((a, b) => a - b)

//   let last
//   let maxLength = 0
//   for(let i = 0; i < length; i++) {
//     const n = nums[i]
//     if (last !==undefined && n - last === 1) {
//       // findLength
//       let curLength = 0
//       for(let j = 0; j < length; j++) {
//         if (nums[j] === n || nums[j] === last) {
//           curLength++
//         }
//       }

//       if (curLength > maxLength) {
//         maxLength = curLength
//       }
//     }

//     last = n
//   }

//   return maxLength
// }

var findLHS = function(nums) {
  const length = nums.length
  if (length <= 1) {
    return 0
  }

  // nums.sort((a, b) => a - b)

  const map = new Map()
  nums.forEach(n => {
    let count = map.get(n)
    if (count === undefined) {
      map.set(n, 1)
    } else {
      map.set(n, count + 1)
    }
  })

  let maxLength = 0
  for(const entry of map) {
    const [n, count] = entry
    const count1 = map.get(n + 1)
    if (count1 !== undefined) {
      const curLength = count1 + count
      if (curLength > maxLength) {
        maxLength = curLength
      }
    }
  }

  return maxLength
}

const nums = [1,3,2,2,5,2,3,7]
// const nums = [1, 2, 3, 4]
// const nums = [1, 1, 1, 1]
console.log(findLHS(nums))