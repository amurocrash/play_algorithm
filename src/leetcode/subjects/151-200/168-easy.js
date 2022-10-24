/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

示例 1：

输入：columnNumber = 1
输出："A"

示例 2：

输入：columnNumber = 28
输出："AB"

示例 3：

输入：columnNumber = 701
输出："ZY"

示例 4：

输入：columnNumber = 2147483647
输出："FXSHRXW"

 */

// 65 - 90
var convertToTitle = function(columnNumber) {
  let title = ''

  while(columnNumber > 0) {
    columnNumber = columnNumber - 1 // 十进制数字是从0-9, 26进制就是0-25，这里先减1
    let cur = columnNumber % 26

    const c = String.fromCharCode(cur + 65)
    columnNumber = Math.floor(columnNumber / 26)
    title = `${c}${title}`
  }

  return title
}

const columnNumber = 701
const title = convertToTitle(columnNumber)
console.log(title)