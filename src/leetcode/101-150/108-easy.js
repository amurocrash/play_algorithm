/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
    高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

    示例 1：

    输入：nums = [-10,-3,0,5,9]
    输出：[0,-3,9,-10,null,5]
    解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

    示例 2：

    输入：nums = [1,3]
    输出：[3,1]
    解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。

 */

const { TreeNode } = require("../data-structure/binary-tree")

function _invoke(nums, l, r) {
  if (l > r) {
    return null
  }

  const mid = l + Math.floor((r - l) / 2)
  const node = new TreeNode(nums[mid])
  node.left = _invoke(nums, l, mid - 1)
  node.right = _invoke(nums, mid + 1, r)

  return node
}

var sortedArrayToBST = function(nums) {
  return _invoke(nums, 0, nums.length - 1)
}

const arr = [-10,-3,0,5,9]
const root = sortedArrayToBST(arr)
console.log(root)
