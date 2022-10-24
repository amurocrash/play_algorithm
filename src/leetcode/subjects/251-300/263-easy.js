function _ugly(n) {
  if (n === 1) {
    return true
  }

  if (n % 2 === 0) {
    return _ugly(n / 2)
  } else if (n % 3 === 0) {
    return _ugly(n / 3)
  } else if (n % 5 === 0) {
    return _ugly(n / 5)
  } else {
    return false
  }
}

var isUgly = function(n) {
  return _ugly(n)
}

console.log(-2 % 2)