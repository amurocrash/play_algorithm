var strStr = function(haystack, needle) {
  return indexOf(haystack, needle)
};

function indexOf(target, s) {
  for(let i = 0; i <= target.length - s.length; i++) {
    const l = i
    const r = i + s.length - 1

    let find = true
    for(let j = l; j <= r; j++) {
      if (target[j] !== s[j - i]) {
        find = false
        break
      }
    }

    if (find) {
      return i
    }
  }

  return -1
}

const haystack = 'hello', needle = 'll'
console.log(strStr(haystack, needle))