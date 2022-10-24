/**
 * 给定一个二叉树，找出其最大深度。
    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
    说明: 叶子节点是指没有子节点的节点。

    示例：
    给定二叉树 [3,9,20,null,null,15,7]，

        3
      / \
      9  20
        /  \
      15   7
    返回它的最大深度 3 。

 */

const { arr2BinaryTree } = require("../data-structure/binary-tree");

function _maxDepth(node) {
  if (node.left === null && node.right === null) {
    return 1
  } else if (node.left !== null && node.right === null) {
    return 1 + _maxDepth(node.left)
  } else if (node.left === null && node.right !== null) {
    return 1 + _maxDepth(node.right)
  } else {
    return 1 + Math.max(_maxDepth(node.left), _maxDepth(node.right))
  }
}

var maxDepth = function(root) {
  if (root === null) {
    return 0
  }

  return _maxDepth(root)
}

const arr = [3, 9, 20, null, null, 15, 7]
const root = arr2BinaryTree(arr)
const depth = maxDepth(root)

console.log(depth)