const { arr2BinaryTree } = require('../data-structure/binary-tree')
/**
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

    示例 1：

    输入：root = [1,null,2,3]
    输出：[3,2,1]

    示例 2：

    输入：root = []
    输出：[]

    示例 3：

    输入：root = [1]
    输出：[1]

 */

// function _postorder(node, res) {
//   if (node === null) {
//     return
//   }

//   _postorder(node.left, res)
//   _postorder(node.right, res)
//   res.push(node.val)
// }

// var postorderTraversal = function(root) {
//   const res = []
//   _postorder(root, res)
//   return res
// }

var postorderTraversal = function(root) {
  if (!root) {
    return []
  }

  const res = []
  const stack = []

  stack.push(root)
  while(stack.length > 0) {
    const node = stack[stack.length - 1]
    if ((node.left && node.right) && (!node.left.marked || !node.right.marked)) {
      if (!node.right.marked) {
        stack.push(node.right)
      }
      
      if (!node.left.marked) {
        stack.push(node.left)
      } 

    } else if (node.left && !node.left.marked && !node.right) {
      stack.push(node.left)
    } else if (!node.left && node.right && !node.right.marked) {
      stack.push(node.right)
    } else {
      stack.pop()
      res.push(node.val)
      node.marked = true
    }
  }

  return res
}

const arr = [1,2,3,4,5,6,null,7,8,9]
const root = arr2BinaryTree(arr)
const res = postorderTraversal(root)
console.log(res)
