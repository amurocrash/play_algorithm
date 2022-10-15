var fizzBuzz = function(n) {
  const res = []
  for(let i = 1; i <= n; i++) {
    let str = ''
    if (i % 15 === 0) {
      str = 'FizzBuzz'
    } else if (i % 3 === 0) {
      str = 'Fizz'
    } else if (i % 5 === 0) {
      str = 'Buzz'
    } else {
      str = i + ''
    }

    res.push(str)
  }

  return res
}