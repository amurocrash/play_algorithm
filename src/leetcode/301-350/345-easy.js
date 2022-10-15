function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function isVowels(e) {
  return e === 'a' || e === 'e' || e === 'i' || e === 'o' || e ==='u'
}

var reverseVowels = function(_s) {
  let l = 0
  let r = _s.length - 1
  const s = _s.split('')

  let leftVowelIndex = -1
  let rightVowelIndex = -1
  while(l < r) {
    if(isVowels(s[l].toLowerCase())) {
      leftVowelIndex = l
    } else {
      l++
    }

    if (isVowels(s[r].toLowerCase())) {
      rightVowelIndex = r
    } else {
      r--
    }

    if (leftVowelIndex >= 0 && rightVowelIndex >= 0) {
      swap(s, leftVowelIndex, rightVowelIndex)
      leftVowelIndex = -1
      rightVowelIndex = -1
      l++
      r--
    }
  }

  return s.join('')
}

const s = 'hello'
const r = reverseVowels(s)
console.log(r)

