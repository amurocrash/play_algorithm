function _post(node, res) {
  if (!node) {
    return
  }

  node.children.forEach(n => {
    _post(n, res)
  })
  res.push(node.val)
}

var postorder = function(root) {
  const res = []
  _post(root, res)
  return res
}