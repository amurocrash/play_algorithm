const { arr2BinaryTree } = require('../data-structure/binary-tree')

let sum = 0
// 获取某个节点 左右节点.val的和 + 节点.val
function _nodeSum(node) {
  if (!node) {
    return 0
  }

  const sumLeft = _nodeSum(node.left)
  const sumRight = _nodeSum(node.right)
  sum += Math.abs(sumLeft - sumRight)
  return sumLeft + sumRight + node.val
}

var findTilt = function(root) {
  sum = 0
  _nodeSum(root)
  return sum
}

const root = arr2BinaryTree([1, 2, 3])
console.log(findTilt(root))