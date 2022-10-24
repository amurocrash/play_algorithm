const { arr2BinaryTree } = require('../data-structure/binary-tree')

// 计算某个节点算上自己的最大节点数，周长 = depth - 1

let max
function _traverse(node) {
  if (!node) {
    return 0
  }

  const dl = _traverse(node.left)
  const dr = _traverse(node.right)
  const h = dl + dr // h = dl - 1 + dr - 1 + 2 (node本身还有两条边连到左右子树)
  if (max === undefined || h > max) {
    max = h
  }
  // _traverse(node.left)
  // _traverse(node.right)
  return Math.max(dl, dr) + 1
}

var diameterOfBinaryTree = function(root) {
  max = undefined
  _traverse(root)
  return max
}

// const root = arr2BinaryTree([1, 2, 3, 4, 5])
// const root = arr2BinaryTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])
console.log(diameterOfBinaryTree(root))


