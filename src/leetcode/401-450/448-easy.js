// 给你一个含 n 个整数的数组 nums，其中 nums[i] 在区间 [1, n] 内。
// 注意n是确定的，是数组的长度，WCNM…… !!!!
// var findDisappearedNumbers = function(nums) {
//   const numsSorted = nums.sort((a, b) => a - b)

//   const res = []
//   let last = 0
//   for(let i = 0; i < numsSorted.length; i++) {
//     const cur = numsSorted[i]
//     if (cur - last > 1) { // 7 - 4 = 3
//       for (let j = last + 1; j < cur; j++) {
//         res.push(j)
//       }
//     }
//     last = cur
//   }

//   const n = nums.length
//   if (last < n) {
//     for (let i = last + 1; i <= n; i++) {
//       res.push(i)
//     }
//   }

//   return res
// }

var findDisappearedNumbers = function(nums) {
  const n = nums.length
  const set = new Set()
  nums.forEach(e => {
    set.add(e)
  })

  const res = []
  for(let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      res.push(i)
    }
  }

  return res
}

const nums = [1, 2, 3, 4, 5, 5]
console.log(findDisappearedNumbers(nums))