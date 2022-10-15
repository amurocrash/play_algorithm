/**
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
    在「杨辉三角」中，每个数是它左上方和右上方的数的和。

    示例 1:

    输入: rowIndex = 3
    输出: [1,3,3,1]

    示例 2:

    输入: rowIndex = 0
    输出: [1]

    示例 3:

    输入: rowIndex = 1
    输出: [1,1]
     
 */

function _getRow(rowIndex) {
  if (rowIndex === 1) {
    return [1]
  } else {
    const last = _getRow(rowIndex - 1)
    const cur = []
    cur.push(1)
    for (let i = 1; i <= rowIndex - 2; i++) {
      cur.push(last[i - 1] + last[i])
    }

    cur.push(1)
    return cur
  }
}

var getRow = function(rowIndex) {
  return _getRow(rowIndex + 1)
}

const rowIndex = 4
console.log(getRow(rowIndex))