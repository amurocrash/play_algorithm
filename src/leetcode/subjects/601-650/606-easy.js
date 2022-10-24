const { arr2BinaryTree } = require('../../data-structure/binary-tree')

function _pre(node) {
  if (!node) {
    return ''
  }
  const cstr = node.val
  const _lstr = _pre(node.left)
  // const lstr = _lstr === '' ? '' : '(' + _lstr + ')' 
  const _rstr = _pre(node.right)
  const rstr = _rstr === '' ? '' : '(' + _rstr + ')'

  let lstr = ''
  if (_rstr !== '' || _lstr !== '') {
    lstr = '(' + _lstr  + ')'
  }

  return `${cstr}${lstr}${rstr}`
}

var tree2str = function(root) {
  return _pre(root)
}

const root = arr2BinaryTree([1, 2, 3, null, 4, null, null, 5])
console.log(tree2str(root))