/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

    示例 1：

    输入：s = "Hello World"
    输出：5
    解释：最后一个单词是“World”，长度为5。
    示例 2：

    输入：s = "   fly me   to   the moon  "
    输出：4
    解释：最后一个单词是“moon”，长度为4。
    示例 3：

    输入：s = "luffy is still joyboy"
    输出：6
    解释：最后一个单词是长度为6的“joyboy”。

 */

// 正向找
// var lengthOfLastWord = function(s) {

//   let count = 0
//   let lastCount = 0
//   for (let i = 0; i < s.length; i++) {
//     const cur = s[i]
//     if (cur === ' ') {
//       if (count > 0) {
//         lastCount = count
//         count = 0
//       }
//     } else {
//       count++
//     }
//   }

//   return count > 0 ? count : lastCount
// }

// 负向找
var lengthOfLastWord = function(s) {
  let count = 0
  for(let i = s.length - 1; i >= 0; i--) {
    const cur = s[i]
    if (cur !== ' ') {
      count++
    } else {
      if (count > 0) {
        break
      }
    }
  }

  return count
}

function test() {
  const s = "Hello World"
  console.log(lengthOfLastWord(s))
}

test()