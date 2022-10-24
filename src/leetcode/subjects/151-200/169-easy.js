/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
    你可以假设数组是非空的，并且给定的数组总是存在多数元素。

    示例 1：

    输入：nums = [3,2,3]
    输出：3

    示例 2：

    输入：nums = [2,2,1,1,1,2,2]
    输出：2

 */

var majorityElement = function(nums) {
  const length = nums.length
  if (length === 1) {
    return nums[0]
  }

  const map = new Map()
  for(let i = 0; i < length; i++) {
    const n = nums[i]
    let count = map.get(n)
    if (count === undefined) {
      map.set(n, 1)
    } else {
      map.set(n, count + 1)
      if ((count + 1) > (length / 2)) {
        return n
      }
    }
  }

  return null
}

const nums = [3, 2, 3]
console.log(majorityElement(nums))