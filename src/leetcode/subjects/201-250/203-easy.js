var removeElements = function(head, val) {
  let temp = head
  let prev = null

  while(temp !== null) {
    if (temp.val === val) {
      if (temp === head) {
        head = head.next
        temp = head
      } else {
        temp = temp.next
        prev.next = temp
      }
    } else {
      prev = temp
      temp = temp.next
    }
  }

  return head
}