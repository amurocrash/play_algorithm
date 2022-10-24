const { arr2BinaryTree } = require('../data-structure/binary-tree')

function btree2arr(node, arr) {
  if(!node) {
    return
  }

  arr.push(node.val)
  btree2arr(node.left, arr)
  btree2arr(node.right, arr)
}

var getMinimumDifference = function(root) {
  const arr = []
  btree2arr(root, arr)
  arr.sort((a, b) => a - b)
  let min
  for(let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1]
    if (min === undefined || diff < min) {
      min = diff
    }
  }

  return min
}

const root = arr2BinaryTree([4, 2, 6, 1, 3])
// const root = arr2BinaryTree([1,0,48,null,null,12,49])
console.log(getMinimumDifference(root))
