/**
 * 
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
    你可以假设除了整数 0 之外，这个整数不会以零开头。

    示例 1：

    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。

    示例 2：

    输入：digits = [4,3,2,1]
    输出：[4,3,2,2]
    解释：输入数组表示数字 4321。

    示例 3：

    输入：digits = [0]
    输出：[1]

 */

// var plusOne = function(digits) {
//   let carry = 1
//   for (let i = digits.length - 1; i >= 0; i--) {
//     const cur = digits[i]
//     const sum = cur + carry
//     if (sum >= 10) {
//       digits[i] = 0
//       carry = 1
//     } else {
//       digits[i] = sum
//       carry = 0
//     }
//   }

//   if (carry > 0) {
//     digits.unshift(carry)
//   }

//   return digits
// }

// pro find 9
// 1、9 not exist in tail, only tail + 1, O(1)
// 2、9 exist and in tail but not all, add 1 to length - countOf9 - 1, and make all 9 to 0, O(numberOf(9))
// 3、9 is all, O(n)
var plusOne = function(digits) {
  const length = digits.length
  if (digits[length - 1] !== 9) {
    digits[length - 1] = digits[length - 1] + 1
    return digits
  } else {
    let countOf9 = 0
    for (let i = length - 1; i >= 0; i--) {
      const cur = digits[i]
      if (cur === 9) {
        countOf9++
        digits[i] = 0
      } else {
        break
      }
    }

    if (countOf9 === length) {
      digits.unshift(1)
    } else {
      digits[length - countOf9 - 1] = digits[length - countOf9 - 1] + 1
    }

    return digits
  }  
}

function test() {
  let digits = [1, 3, 3, 3]
  digits = plusOne(digits)
  console.log(digits)
}

test()