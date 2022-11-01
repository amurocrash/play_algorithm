function _toLowerCase(s) {
  const c = s.charCodeAt()
  if (c >= 65 && c <= 90) {
    return String.fromCharCode(c + 32)
  }
  return s
}

var toLowerCase = function(s) {
  const temp = s.split('')
  for(let i = 0; i < s.length; i++) {
    temp[i] = _toLowerCase(temp[i])
  }

  return temp.join('')
}

const s = "Hello"
console.log(toLowerCase)