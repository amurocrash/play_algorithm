/**
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
    字母和数字都属于字母数字字符。
    给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

    示例 1：

    输入: s = "A man, a plan, a canal: Panama"
    输出：true
    解释："amanaplanacanalpanama" 是回文串。

    示例 2：

    输入：s = "race a car"
    输出：false
    解释："raceacar" 不是回文串。

    示例 3：

    输入：s = " "
    输出：true
    解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
    由于空字符串正着反着读都一样，所以是回文串。

 */

// 5 / 2 = 2 [0, 1, 2, 3, 4]
// 4 / 2 = 2 [0, 1, 2, 3]
function isUpper(s) {
  const c = s.charCodeAt()
  return c >= 65 && c <= 90
}

function isLetter(s) {
  const c = s.charCodeAt()
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c >= 48 && c <= 57)
}

// 0P false
// 
var isPalindrome = function(s) {
  const length = s.length
  if (length === 0 || length === 1) {
    return true
  }

  let l = 0
  let r = length - 1
  while(l < r) {
    let s1 = s[l]
    let s2 = s[r]

    if (isLetter(s1) && isLetter(s2)) {
      if (isUpper(s1)) {
        s1 = s1.toLowerCase()
      }

      if (isUpper(s2)) {
        s2 = s2.toLowerCase()
      }

      if (s1 !== s2) {
        return false
      } else {
        l++
        r--
      }
    } else if (isLetter(s1) && !isLetter(s2)) {
      r--
    } else if (!isLetter(s1) && isLetter(s2)) {
      l++
    } else {
      l++
      r--
    }
  }

  return true
}

const s = "0P"
const r = isPalindrome(s)
console.log(r)
