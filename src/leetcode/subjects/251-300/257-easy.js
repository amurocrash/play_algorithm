const { arr2BinaryTree } = require('../data-structure/binary-tree')

function _path(node) {
  if (!node) {
    return []
  }

  if (node.left || node.right) {
    const next = []
    let nextl, nextr

    if (node.left) {
      nextl = _path(node.left).map(str => {
        return node.val + '->' + str // arr => arr.unshift(node.val) 返回N条路径的数组
      })
      next.push(...nextl) // 不加...的话返回的就是数组
    }

    if (node.right) {
      nextr = _path(node.right).map(str => {
        return node.val + '->' + str
      })
      next.push(...nextr)
    }

    return next
  } else {
    return [node.val + ''] // [[node.val]]的话，返回N条路径的数组
  }

  
}

var binaryTreePaths = function(root) {
  const res = _path(root)
  return res
}

// const root = arr2BinaryTree([1, 2, 3])
// const root = arr2BinaryTree([1, 2, 3, null, 5])
const root = arr2BinaryTree([1, 2, 3, 4, 5, 6, null, 7, 8, 9])
const res = binaryTreePaths(root)
console.log(res)