var judgeCircle = function(moves) {
  const start = [0, 0] // x, y

  for(let i = 0; i < moves.length; i++) {
    const m = moves[i]
    if (m === 'U') {
      start[1]++
    } else if (m === 'D') {
      start[1]--
    } else if (m === 'L') {
      start[0]--
    } else if (m === 'R') {
      start[0]++
    }
  }

  const [x, y] = start
  return x === 0 && y === 0
}