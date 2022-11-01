const { arr2BinaryTree } = require('../../data-structure/binary-tree')

// function _find(node, arr) {
//   if (!node) {
//     return
//   }

//   _find(node.left, arr)
//   arr.push(node.val)
//   _find(node.right, arr)
// }

// var findSecondMinimumValue = function(root) {
//   const arr = []
//   _find(root, arr)
//   let min1, min2
//   arr.forEach(n => {
//     if (min1 === undefined || n < min1) {
//       min2 = min1
//       min1 = n
//     } else if (min1 < n && (min2 === undefined || n < min2)) {
//       min2 = n
//     }
//   })

//   return min2 === undefined ? -1 : min2
// }

// 根节点一定是最小节点，找到下一个比根节点大的节点就可
let min1
let min2
function _dfs(node) {
  if (!node) {
    return
  }

  const val = node.val
  if (val >= min2 && min2 !== -1) {
    return
  }

  if (val > min1) { // 隐含了条件val < min2
    min2 = val
  }

  _dfs(node.left)
  _dfs(node.right)
}

var findSecondMinimumValue = function(root) {
  min1 = root.val
  min2 = -1

  _dfs(root)

  return min2
}


const arr = [2,2,5,null,null,5,7]
const root = arr2BinaryTree(arr)
console.log(findSecondMinimumValue(root))



