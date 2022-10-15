function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null: next
}

function arr2Linkedlist(arr) {
  let header = null
  let temp
  arr.forEach(item => {
    if (!header) {
      header = new ListNode(item)
      temp = header
    } else {
      temp.next = new ListNode(item)
      temp = temp.next
    }
  })

  return header
}

function printLinkedlist(h) {
  let temp = h
  let str = ''
  while(true) {
    if (temp.next != null) {
      str += temp.val + ' -> '
      temp = temp.next
    } else {
      str += temp.val
      break
    }
  }

  console.log(str)
}

module.exports = {
  ListNode,
  arr2Linkedlist,
  printLinkedlist,
}