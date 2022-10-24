const { arr2Linkedlist, printLinkedlist } = require('../../base/linkedlist')

/**
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

    示例 1：

    输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
    示例 2：

    输入：l1 = [], l2 = []
    输出：[]
    示例 3：

    输入：l1 = [], l2 = [0]
    输出：[0]
 
 * 
 */

var mergeTwoLists = function(list1, list2) {
  if (list1 == null && list2 == null) {
    return null
  }

  let v1 = list1 ? list1.val : undefined
  let v2 = list2 ? list2.val: undefined
  
  if (v1 !== undefined && v2 !== undefined) {
    if (v1 <= v2) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
    } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
    }
  } else {
    if (v1 === undefined) {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
    } else if (v2 === undefined) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
    } else {
      return null
    }
  }
}

function test() {
  // const l1 = arr2Linkedlist([1, 2, 4])
  // const l2 = arr2Linkedlist([1, 3, 4])
  // const l = mergeTwoLists(l1, l2)
  // printLinkedlist(l)

  const l = arr2Linkedlist([])
  console.log(l)
}

test()