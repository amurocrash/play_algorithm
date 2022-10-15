const { arr2Linkedlist } = require('../data-structure/linkedlist')

var isPalindrome = function(head) {
  let temp = head
  let arr = []
  while (temp != null) {
    arr.push(temp.val)
    temp = temp.next
  }

  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    if (arr[l] === arr[r]) {
      l++
      r--
    } else {
      return false
    }
  }

  return true
}

const head = arr2Linkedlist([1, 2, 2, 1])
console.log(isPalindrome(head))