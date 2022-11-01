function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function _merge(node1, node2) {
  if (node1 || node2) {
    const val1 = node1 === null ? 0 : node1.val
    const val2 = node2 === null ? 0 : node2.val

    const newNode = new TreeNode(val1 + val2)
    newNode.left = _merge(node1 === null ?  null : node1.left, node2 === null ? null : node2.left)
    newNode.right = _merge(node1 === null ? null : node1.right, node2 === null ? null : node2.right)

    return newNode
  } else {
    return null
  }
}

var mergeTrees = function(root1, root2) {
  return _merge(root1, root2)
}