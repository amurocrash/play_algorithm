// var maxDepth = function(root) {
//   if (!root) {
//     return 0
//   }

//   return (root.children && root.children.length > 0) ? Math.max(root.children.map(child => maxDepth(child))) + 1 : 1
// }

var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  if (!root.children || root.children.length === 0) {
    return 1
  }

  let max
  root.children.forEach(node => {
    const d = maxDepth(node)
    if (max === undefined || d > max) {
      max = d
    }
  })

  return max + 1
}

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function Node(val, children) {
  this.val = val
  this.children = children
}

const root = new Node(1, [])
const node3 = new Node(3, [])
node3.children.push(new Node(5, []))
node3.children.push(new Node(6, []))
root.children.push(node3)
root.children.push(new Node(2, []))
root.children.push(new Node(4, []))

console.log(maxDepth(root))