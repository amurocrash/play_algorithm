const { arr2BinaryTree } = require('../data-structure/binary-tree')

// function _find(node, map) {
//   if (!node) {
//     return
//   }

//   const val = node.val
//   let count = map.get(val)
//   if (count === undefined) {
//     map.set(val, 1)
//   } else {
//     map.set(val, count + 1)
//   }
//   _find(node.left, map)
//   _find(node.right, map)
// }

// var findMode = function(root) {
//   const map = new Map()
//   _find(root, map)

//   const res = []
//   let maxCount = 0
//   for(const entry of map) {
//     const [val, count] = entry
//     if (count > maxCount) {
//       res.length = 0
//       res.push(val)
//       maxCount = count
//     } else if (count === maxCount) {
//       res.push(val)
//     }
//   }

//   return res
// }

function _find(node, callback) {
  if (!node) {
    return
  }

  _find(node.left, callback)
  callback(node.val)
  _find(node.right, callback)
}

// 一棵二叉搜索树的中序遍历序列是一个非递减的有序序列
var findMode = function(root) {
  const res = []
  let last
  let maxCount = 0
  let count = 0
  _find(root, v => {
    if (v !== last) {
      if (count > maxCount) {
        res.length = 0
        maxCount = count
        res.push(last)
      } else if (count === maxCount) {
        res.push(last)
      }

      count = 1
      last = v
    } else {
      count++
    }
  })

  if (count > maxCount) {
    res.length = 0
    maxCount = count
    res.push(last)
  } else if (count === maxCount) {
    res.push(last)
  }

  return res
}

console.log(findMode(arr2BinaryTree([1, null, 2, 2])))
