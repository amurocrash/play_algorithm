const { arr2BinaryTree } = require('../../data-structure/binary-tree')

let minGap
let lastVal
function _inOrder(node) {
  if (!node) {
    return
  }

  _inOrder(node.left)
  const val = node.val
if (lastVal !== undefined && (minGap === undefined || (Math.abs(val - lastVal) < minGap))) {
    minGap = Math.abs(val - lastVal)
  }
  lastVal = val

  _inOrder(node.right)
}

var minDiffInBST = function(root) {
  minGap = undefined
  lastVal = undefined

  _inOrder(root)
  return minGap
}

// const root = arr2BinaryTree([4, 2, 6, 1, 3])
const root = arr2BinaryTree([27,null,34,null,58,50,null,44])
console.log(minDiffInBST(root))

