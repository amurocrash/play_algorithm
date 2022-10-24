/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

    示例 1：

    输入:a = "11", b = "1"
    输出："100"

    示例 2：

    输入：a = "1010", b = "1011"
    输出："10101"

 */
// make a.length >= b 
// lengths s for short
function _add(a, b, length, lengths) {
  let res = []
  let carry = 0
  for(let i = length - 1; i >= 0; i--) {
    const j = i - (length - lengths)
    const x = parseInt(a[i])
    const y = j < 0 ? 0 : parseInt(b[j])
    let sum = x + y + carry
    if (sum === 3) {
      res[i] = 1
      carry = 1
    } else if (sum === 2) {
      res[i] = 0
      carry = 1
    } else {
      res[i] = sum
      carry = 0
    }
  }

  if (carry > 0) {
    res.unshift(1)
  }

  return res.join('')
}

var addBinary = function(a, b) {
  const length1 = a.length
  const length2 = b.length

  if (length1 >= length2) {
    return _add(a, b, length1, length2)
  } else {
    return _add(b, a, length2, length1)
  }
}

function test() {
  const a = "1111", b = "1111"
  const s = addBinary(a, b)
  console.log(s)
}

test()