const { arr2BinaryTree } = require('../../data-structure/binary-tree')

var averageOfLevels = function(root) {
  if (root === null) {
    return []
  }

  const res = []
  let queue = []
  queue.push(root)

  while(queue.length > 0) {

    const next = []
    const length = queue.length
    let sum = 0
    for(let i = 0; i < length; i++) {
      const node = queue.shift()
      sum += node.val

      if (node.left) {
        next.push(node.left)
      }

      if (node.right) {
        next.push(node.right)
      }
    }

    res.push(sum / length)
    queue = next

  }

  return res
}

const root = arr2BinaryTree([3,9,20,null,null,15,7])
console.log(averageOfLevels(root))