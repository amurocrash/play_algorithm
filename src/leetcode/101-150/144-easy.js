/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

      示例 1：

      输入：root = [1,null,2,3]
      输出：[1,2,3]

      示例 2：

      输入：root = []
      输出：[]

      示例 3：

      输入：root = [1]
      输出：[1]

      示例 4：

      输入：root = [1,2]
      输出：[1,2]

      示例 5：

      输入：root = [1,null,2]
      输出：[1,2]

 */

// 递归
// function _preorder(node, res) {
//   if (!node) {
//     return
//   }

//   res.push(node.val)
//   _preorder(node.left, res)
//   _preorder(node.right, res)
// }

// var preorderTraversal = function(root) {
//   const res = []
//   _preorder(root, res)
//   return res
// }

// 迭代
var preorderTraversal = function(root) {
  if (!root) {
    return []
  }

  const res = []
  const stack = []
  stack.push(root)

  while(stack.length > 0) {
    const node = stack.pop()
    res.push(node.val)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return res
}