function reverse(arr, from, to) {
  while(from < to) {
    let temp = arr[from]
    arr[from] = arr[to]
    arr[to] = temp
    from++
    to--
  }
}

var reverseStr = function(s_, k) {
  const s = s_.split('')
  let from = -1
  let to = -1
  for(let i = 0; i < s.length; i++) {
    if (from === -1) {
      from = i
      to = i
    } else {
      if (i - from <= (k - 1)) {
        to++
        if (i - from === (k - 1)) {
          reverse(s, from, to)
          to = -1
        }
      } else if (i - from === (k * 2 - 1)) {
        from = -1
      }
    }
  }

  if (from >= 0 && to > 0) {
    reverse(s, from, to)
  }

  return s.join('')
}

const s = "abcdefg", k = 2
console.log(reverseStr(s, k))
