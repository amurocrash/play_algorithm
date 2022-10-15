/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
    在「杨辉三角」中，每个数是它左上方和右上方的数的和。

    示例 1:

    输入: numRows = 5
    输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    示例 2:

    输入: numRows = 1
    输出: [[1]]

 */

function _generate(numRows, res) {
  if (numRows === 1) {
    res.push([1])
  } else {
    _generate(numRows - 1, res)
    const last = res[res.length - 1]
    const cur = []
    cur.push(1)
    for (let i = 1; i <= numRows - 2; i++) {
      cur.push(last[i - 1] + last[i])
    }
    cur.push(1)
    res.push(cur)
  }
}

var generate = function(numRows) { 
  const res = []
  _generate(numRows, res)
  return res
}

const numRows = 5
const res = generate(numRows)
console.log(res)