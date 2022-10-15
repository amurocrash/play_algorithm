/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。

    示例 1：

    输入：root = [1,2,2,3,4,4,3]
    输出：true

    示例 2：

    输入：root = [1,2,2,null,3,null,3]
    输出：false

 */

/**
 *        1
 *    2       2
 *  3   4   4   3
 */
function _symmetric(p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  } else {
    return _symmetric(p.left, q.right) && _symmetric(p.right, q.left)
  }
}

var isSymmetric = function(root) {
  if (root === null) {
    return false
  }
  
  return _symmetric(root.left, root.right)
}