function _pre(node, res) {
  if (!node) {
    return
  }

  res.push(node.val)
  node.children.forEach(n => {
    _pre(n, res)
  })
}

var preorder = function(root) {
  const res = []
  _pre(root, res)
  return res
}