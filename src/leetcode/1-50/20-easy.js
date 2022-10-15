/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
     

    示例 1：

    输入：s = "()"
    输出：true
    示例 2：

    输入：s = "()[]{}"
    输出：true
    示例 3：

    输入：s = "(]"
    输出：false

 */

var isValid = function(s) {
  const stack = []

  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else if (c === ')') {
      const s = stack.pop()
      if (s === '(') {
        continue
      } else {
        return false
      }
    } else if (c === ']') {
      const s = stack.pop()
      if (s === '[') {
        continue
      } else {
        return false
      }
    } else if (c === '}') {
      const s = stack.pop()
      if (s === '{') {
        continue
      } else {
        return false
      }
    } 
  }

  if (stack.length > 0) {
    return false
  }

  return true
}