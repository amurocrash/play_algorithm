function reverse(arr, l, r) {
  while(l < r) {
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    l++
    r--
  }
}

var reverseWords = function(s_) {
  const s = s_.split(' ')
  for(let i = 0; i < s.length; i++) {
    const cur = s[i].split('')
    reverse(cur, 0, cur.length - 1)
    s[i] = cur.join('')
  }

  return s.join(' ')
}

const s = "Let's take LeetCode contest"
console.log(reverseWords(s))