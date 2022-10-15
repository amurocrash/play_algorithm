/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
    本题中，一棵高度平衡二叉树定义为：
    一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

    示例 1：

    输入：root = [3,9,20,null,null,15,7]
    输出：true

    示例 2：

    输入：root = [1,2,2,3,3,null,null,4,4]
    输出：false

    示例 3：

    输入：root = []
    输出：true

 */

function _calHeight(p) {
  if (p === null) {
    return 0
  } 

  if (p.left && p.right) {
    return 1 + Math.max(_calHeight(p.left), _calHeight(p.right))
  } else if (p.left && !p.right) {
    return 1 + _calHeight(p.left)
  } else if (p.right && !p.left) {
    return 1 + _calHeight(p.right)
  } else {
    return 1
  }
}

function _traverse(root) {
  if (root === null) {
    return true
  }

  const queue = []
  queue.push(root)
  while(queue.length > 0) {
    const node = queue.pop()

    const leftHeight = _calHeight(node.left)
    const rightHeight = _calHeight(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false
    } else {
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return true
}

var isBalanced = function(root) {
  return _traverse(root)  
}