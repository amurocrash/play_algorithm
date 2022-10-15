// var NumArray = function(nums) {
//   this.nums = nums
// }

// NumArray.prototype.sumRange = function(left, right) {
//   let sum = 0
//   while(left <= right) {
//     sum += this.nums[left]
//     left++
//   }

//   return sum
// }

// 构建sums数组，sums[0] = 0, sums[i + 1] = nums[i] + sums[i]
// 求l, r区间的和时，sum = sums[r + 1] - sum[i], 其实就是0 - r的和减去0 -> l - 1的和
var NumArray = function(nums) {
  this.sums = [0]
  for(let i = 0; i < nums.length; i++) {
    this.sums[i + 1] = this.sums[i] + nums[i]
  }
}

NumArray.prototype.sumRange = function(left, right) {
  return this.sums[right + 1] - this.sums[left]
}
