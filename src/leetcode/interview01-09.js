/**
 * 
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

    示例1:

    输入：s1 = "waterbottle", s2 = "erbottlewat"
    输出：True
    示例2:

    输入：s1 = "aa", s2 = "aba"
    输出：False
    提示：

    字符串长度在[0, 100000]范围内。
    说明:

    你能只调用一次检查子串的方法吗？

 */
var isFlipedString = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }

  if (s1 === s2) {
    return true
  }

  const res = []
  // length = 9 
  // i = 0, j = 0 j = 1 j = 2 ... j = 8
  // i = 1, j = 1 j = 2 j = 3 ... j = 8 j = 0
  // i = 2, j = 2 j = 3 j = 4 ... j = 8 j = 0 j = 1
  for (let i = 0; i < s1.length; i++) {
    let j = i
    let count = 0
    while(count < s1.length) {
      res.push(s1[j])
      if (j === s1.length - 1) {
        j = 0
      } else {
        j++
      }
      count++
    }
    

    if(res.join('') === s2) {
      return true
    } else {
      count = 0
      res.length = 0
    }
  }

  return false
}

function test() {
  const res = isFlipedString('waterbottle', 'erbottlewat')
  console.log(res)
}

test()