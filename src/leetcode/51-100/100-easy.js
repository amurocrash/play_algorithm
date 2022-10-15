/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

    如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

    示例 1：

    输入：p = [1,2,3], q = [1,2,3]
    输出：true

    示例 2：

    输入：p = [1,2], q = [1,null,2]
    输出：false

    示例 3：

    输入：p = [1,2,1], q = [1,1,2]
    输出：false

 */

const { TreeNode } = require("../data-structure/binary-tree")

var isSameTree = function(p, q) {
  return _traverse(p, q)
}

function _traverse(p, q) {
  if (p === null && q === null) {
    return true
  } else if (p !== null && q === null || p === null && q !== null || p.val !== q.val) {
    return false
  } else {
    return _traverse(p.left, q.left) && _traverse(p.right, q.right)
  }
}

const p = new TreeNode(1, new TreeNode(2))
const q = new TreeNode(1, null, new TreeNode(2))
isSameTree(p, q)