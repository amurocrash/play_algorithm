function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [3,9,20,null,null,15,7]
//        3
//       / \
//      9  20
//        /  \
//       15   7
function arr2BinaryTree(arr) {
  if (!arr || arr.length === 0) {
    return null
  }

  let i = 0
  let root = new TreeNode(arr[i])
  let queue = []
  
  queue.push(root)
  while(queue.length > 0) {
    const node = queue.shift()

    const left = arr[++i]
    const right = arr[++i]
    if (left !== undefined && left !== null) {
      node.left = new TreeNode(left)
      queue.push(node.left)
    }

    if (right !== undefined && right !== null) {
      node.right = new TreeNode(right)
      queue.push(node.right)
    }
  }
  
  return root
}

module.exports = {
  TreeNode,
  arr2BinaryTree,
}