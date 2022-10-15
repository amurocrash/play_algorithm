/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"
    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。

 */

var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0]
  }

  let cur = ''
  let index = 0
  let prefix = ''

  let _continue = true
  while(true) {
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i]
      if (str === '') {
        _continue = false
        break
      }

      if (cur === '') {
        cur = str[index]
        // undefined时表示已经结束
        if (cur === undefined) {
          _continue = false
          break
        }
      } else if (cur !== str[index]) {
        _continue = false
        break
      }
    }

    if (_continue) {
      prefix += cur
      cur = ''
      index++
    } else {
      break
    }
  }

  return prefix
}

function test() {
  const strs = ["flower", "flower", "flower", "flower"]
  const prefix = longestCommonPrefix(strs)
  console.log(prefix)
}

test()