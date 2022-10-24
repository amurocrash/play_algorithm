// 判断两棵树是否完全相同
function _compare(node1, node2) {
  if (node1 && node2) {
    if (node1.val === node2.val) {
      return _compare(node1.left, node2.left) && _compare(node1.right, node2.right)
    } else {
      return false
    }
  } else if (node1 || node2) {
    return false
  } else {
    return true
  }
}

function _traverse(node1, node2) {
  if (node1 === null) {
    return false
  }

  // 以node1为起点判断两棵树是否完全相同
  if (_compare(node1, node2)) {
    return true
  } 
  
  // 如果不相同，就继续向下看左右子树为根节点的，是否完全相同
  return _traverse(node1.left, node2) || _traverse(node1.right, node2)
}

// 双重递归
var isSubtree = function(root, subRoot) {
  return _traverse(root, subRoot)
}

// function dfs(n1, n2) {
//   if (!n1) {
//     return false
//   }

//   if (_compare(n1, n2)) {
//     return true
//   }

//   const rl = dfs(n1.left, n2)
//   const rr = dfs(n1.right, n2)
//   return rl || rr
// }