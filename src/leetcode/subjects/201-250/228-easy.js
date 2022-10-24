/**
 * [0,2,3,4,6,8,9]
 */
var summaryRanges = function(nums) {
  const res = []

  let last
  let count = 0
  for(let i = 0; i <= nums.length; i++) {
    const n = nums[i]

    if (last === undefined) {
      count = 1
    } else {
      if (n === undefined || n - last > 1) { // n === undefined来标识循环结束，处理一下此时剩余的情况
        if (count === 1) {
          res.push(last + '')
        } else {
          res.push((last - count + 1) + '->' + last)
        }
        count = 1
      } else {
        count++
      }
    }

    last = n
  }

  return res
}

const nums = [0,2,3,4,6,8,9]
console.log(summaryRanges(nums))
