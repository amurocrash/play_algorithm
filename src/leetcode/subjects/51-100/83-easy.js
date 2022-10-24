const { arr2Linkedlist, printLinkedlist } = require('../data-structure/linkedlist')

/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

    示例 1：

    输入：head = [1,1,2]
    输出：[1,2]

    示例 2：

    输入：head = [1,1,2,3,3]
    输出：[1,2,3]

 */

var deleteDuplicates = function(head) {
  let cur = head
  let prev = null
  let last = null
  while(cur !== null) {
    const val = cur.val
    if (last !== val) {
      last = val
      prev = cur
    } else {
      prev.next = cur.next
    }

    cur = cur.next
  }

  return head
}

const l = arr2Linkedlist([1, 1, 2, 3, 3])
printLinkedlist(deleteDuplicates(l))