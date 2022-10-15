function toNumber(s) {
  const c = s.charCodeAt()
  return c - 48
}

function add(num1, num2) {
  let res = ''
  let carry = 0

  let l1 = num1.length - 1
  let l2 = num2.length - 1

  while(l1 >= 0) {
    const ns1 = num1[l1]
    const ns2 = num2[l2]

    const n1 = toNumber(ns1)
    const n2 = ns2 === undefined ? 0 : toNumber(ns2)

    const r = n1 + n2 + carry
    if (r >= 10) {
      res = (r - 10) + res
      carry = 1
    } else {
      res = r + res
      carry = 0
    }

    l1--
    l2--
  }

  if (carry > 0) {
    res = carry + res
  }

  return res
}

var addStrings = function(num1, num2) {
  if (num1.length >= num2.length) {
    return add(num1, num2)
  } else {
    return add(num2, num1)
  }
}

const num1 = '99'
const num2 = '99'
console.log(addStrings(num1, num2))