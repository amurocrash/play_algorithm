/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    示例 1：

    输入：n = 2
    输出：2
    解释：有两种方法可以爬到楼顶。
    1. 1 阶 + 1 阶
    2. 2 阶

    示例 2：

    输入：n = 3
    输出：3
    解释：有三种方法可以爬到楼顶。
    1. 1 阶 + 1 阶 + 1 阶
    2. 1 阶 + 2 阶
    3. 2 阶 + 1 阶
 */

// 递归 f(x) = f(x - 1) + f(x - 2)
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1
//   } else if (n === 2) {
//     return 2
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2)
//   }
// }

// 滚动数组（不需要用数组实现）
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }

  let res = 0
  let i = 3
  let n1 = 1
  let n2 = 2
  while(i <= n) {
    res = n1 + n2
    n1 = n2
    n2 = res
    i++
  }

  return res
}



const i = climbStairs(5)
console.log(i)