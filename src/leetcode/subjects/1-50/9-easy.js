/**
 * 
 * @param {给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

    例如，121 是回文，而 123 不是。
     

    示例 1：

    输入：x = 121
    输出：true
    示例 2：

    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
    示例 3：

    输入：x = 10
    输出：false
    解释：从右向左读, 为 01 。因此它不是一个回文数。

 */

var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  const _x  = x

  // 231 % 10 = 1
  // 231 / 10 = 23
  // 23 % 10 = 3
  // 23 / 10 = 2
  // 2 % 10 = 2
  // 2 / 10 = 0
  // const res = []
  let palindrome = 0
  // let count = 0
  while(x > 0) {
    const r = x % 10
    palindrome = palindrome * 10 + r
    // res.push(r)
    x = Math.floor(x / 10)
  }

  console.log(palindrome)

  if (_x === palindrome) {
    return true
  } else {
    return false
  }

}

function test() {
  isPalindrome(121)
}

test()