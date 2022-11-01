const { arr2BinaryTree } = require('../../data-structure/binary-tree')

// function _inOrder(node, arr) {
//   if (!node) {
//     return
//   }

//   _inOrder(node.left, arr)
//   arr.push(node.val)
//   _inOrder(node.right, arr)
// }

// var findTarget = function(root, k) {
//   const arr = []
//   _inOrder(root, arr)

//   let i = 0
//   while(i < arr.length - 1) {
//     const n = arr[i]
//     for(let j = i + 1; j < arr.length; j++) {
//       if (n + arr[j] === k) {
//         return true
//       }
//     }
//     i++
//   }

//   return false
// }

function _preOrder(node, set) {
  if (!node) {
    return
  }

  set.add(node.val)
  _preOrder(node.left, set)
  _preOrder(node.right, set)
}

var findTarget = function(root, k) {
  const set = new Set()
  _preOrder(root, set)
  for(const v of set) {
    if (k - v !== v && set.has(k - v)) {
      return true
    }
  }

  return false
}

// const arr = [5,3,6,2,4,null,7], k = 9
// const arr = [5,3,6,2,4,null,7], k = 28
// const arr = [2, 1, 3], k = 4
// const arr = [1], k = 1
const arr = [1], k = 2
const root = arr2BinaryTree(arr)
console.log(findTarget(root, k))
