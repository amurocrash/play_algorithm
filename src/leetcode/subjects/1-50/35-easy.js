/**
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

    请必须使用时间复杂度为 O(log n) 的算法。

    示例 1:

    输入: nums = [1,3,5,6], target = 5
    输出: 2

    示例 2:

    输入: nums = [1,3,5,6], target = 2
    输出: 1

    示例 3:

    输入: nums = [1,3,5,6], target = 7
    输出: 4

 */

// 找到第一个大于等于target的位置
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const s = nums[mid]
    if (target > s) {
      l = mid + 1
    } else if (target < s) {
      r = mid - 1
    } else {
      return mid
    }
  }

  return l 
  // 如果数组中不存在target，二分查找最后一定会在一个l > r的情况下结束。
  // 此时l必然停留在一个大于target值，且前一个值正好小于target的地方（或不存在，比如数组所有值都大于target），这就是它插入的位置。
}

function test() {
  const nums = [1, 3, 5, 6], target = 2
  const i = searchInsert(nums, target)
  console.log(i)
}

test()