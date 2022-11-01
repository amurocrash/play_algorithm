var searchBST = function(root, val) {
  let node = root
  while(node != null) {
    if (node.val === val) {
      return node
    } else if (val < node.val) {
      node = node.left
    } else {
      node = node.right
    }
  }

  return null
}