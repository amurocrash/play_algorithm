var reverseList = function(head) {
  let temp = head
  let prev = null

  while(temp !== null) {
    const cur = temp
    temp = temp.next
    cur.next = prev
    prev = cur
  }

  head = prev
  return head
}

