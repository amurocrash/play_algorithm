/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 
    示例 1：

    输入：root = [1,null,2,3]
    输出：[1,3,2]

    示例 2：

    输入：root = []
    输出：[]

    示例 3：

    输入：root = [1]
    输出：[1]

 */

// 递归
// function _inorder(node, res) {
//   if (node === null) {
//     return
//   }

//   _inorder(node.left, res)
//   res.push(node.val)
//   _inorder(node.right, res)
// }

// var inorderTraversal = function(root) {
//   const res = []
//   _inorder(root, res)
//   return res
// }

// 迭代，用stack模拟递归
var inorderTraversal = function(root) {
  if (root === null) {
      return []
  }

  const res = []
  const stack = []

  stack.push(root)
  while(stack.length > 0) {
    // 先看下stack中的最后一个元素
    const node = stack[stack.length - 1]

    // 当前节点有左叶子，把左叶子加入stack继续循环
    if (node.left != null && node.left.marked !== true) {
      stack.push(node.left)
    } else {
      // 没有左叶子时，取出当前节点加入res，并标记已经访问过，如果有右叶子，放入stack
      stack.pop()
      res.push(node.val)
      node.marked = true
      if (node.right != null) {
        stack.push(node.right)
      }
    }
  }

  return res
  
}

