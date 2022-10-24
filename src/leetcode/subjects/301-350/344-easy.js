function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var reverseString = function(s) {
  let l = 0
  let r = s.length - 1

  while(l < r) {
    swap(arr, l, r)
    l++
    r--
  }
}