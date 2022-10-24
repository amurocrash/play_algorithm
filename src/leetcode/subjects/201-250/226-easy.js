function _invert(node) {
  if (!node) {
    return null
  }

  let temp = node.right
  node.right = _invert(node.left)
  node.left = _invert(temp)

  return node
}

var invertTree = function(root) {
  root = _invert(root)
  return root
}