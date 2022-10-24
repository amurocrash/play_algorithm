function isUpper(s) {
  const c = s.charCodeAt()
  return c >= 65 && c <= 90
}

var detectCapitalUse = function(word) {

  let isFirstUpper = false
  let isSecondUpper = false
  for(let i = 0; i < word.length; i++) {
    const s = word[i]
    if (i === 0 && isUpper(s)) {
      isFirstUpper = true
    } else {
      if (isFirstUpper === true) {
        if (i === 1 && isUpper(s)) {
          isSecondUpper = true
        } else if (i === 1 && !isUpper(s)) {
          isSecondUpper = false
        } else {
          if (isUpper(s) !== isSecondUpper) {
            return false // 首字母大写时，看第二个字符是否为大写，如果大写，后面必须全部大写，否则，全部小写
          }
        }
      } else {
        if(isUpper(s)) {
          return false // 首字母小写，后面必须全部小写
        }
      }
    }
  }

  return true
}

const word = 'UAaa'
console.log(detectCapitalUse(word))