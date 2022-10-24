var licenseKeyFormatting = function(s, k) {
  let res = []
  let substr = ''
  for(let i = s.length - 1; i >= 0; i--) {
    const c = s[i]
    if (c !== '-') {
      substr = c.toUpperCase() + substr
      if (substr.length === k) {
        res.unshift(substr)
        substr = ''
      }
    }
  }
  if (substr.length > 0) {
    res.unshift(substr)
  }

  return res.join('-')
}

const S = "5F3Z-2e-9-w", k = 4
// const S = "2-5g-3-J", k = 2
// const S = "2-4A0r7-4k", k = 4
console.log(licenseKeyFormatting(S, k))