const { arr2BinaryTree } = require('../data-structure/binary-tree')

// 递归版本
function _sum(node) {
  if (!node) {
    return 0
  }

  let sum = 0
  if (node.left) {
    if (!node.left.left && !node.left.right) {
      sum += node.left.val
    } else {
      sum += _sum(node.left)
    }
  }

  if (node.right) {
    sum += _sum(node.right)
  }

  return sum
}

var sumOfLeftLeaves = function(root) {
  let sum = 0

  const queue = []
  queue.push(root)
  while(queue.length > 0) {
    const node = queue.shift()

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val
      }
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }

  return sum
}

const bt = arr2BinaryTree([1, 2, 3, 4, 5])
console.log(_sum(bt))