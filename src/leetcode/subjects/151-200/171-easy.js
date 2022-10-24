/**
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

      例如：

      A -> 1
      B -> 2
      C -> 3
      ...
      Z -> 26
      AA -> 27
      AB -> 28 
      ...
       

      示例 1:

      输入: columnTitle = "A"
      输出: 1

      示例 2:

      输入: columnTitle = "AB"
      输出: 28

      示例 3:

      输入: columnTitle = "ZY"
      输出: 701

 */

// 十进制 1026 = 6 * 10 ^ 0 + 2 * 10 ^ 1 + 0 * 10 ^ 2 + 1 * 10 ^ 3
// 这里把10换成26就行
var titleToNumber = function(columnTitle) {
  let length = columnTitle.length
  let res = 0

  for(let i = length - 1; i >= 0; i--) {
    const s = columnTitle[i]
    const c = s.charCodeAt() - 64 // 注意不是65

    res += c * Math.pow(26, length - 1 - i)
  }

  return res
}