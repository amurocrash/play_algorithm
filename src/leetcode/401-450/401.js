function calLightsArrange(turnedOn) {
  const lightsArrange = []

  const length = Math.min(turnedOn, 4)
  let up = 0

  while(up <= length) {
    const down = turnedOn - up
    if (down <= 6) {
      lightsArrange.push([up, down])
    }

    up++
  }

  return lightsArrange
}

function calFullPermutation(data, from, to, selected) {
  if (selected === 0) {
    return []
  }

  if (selected === 1) {
    const res = []
    for(let i = from; i <= to; i++) {
      res.push([data[i]])
    }
    return res
  }

  const res = []
  while(from <= to - selected + 1) {
    const arr = calFullPermutation(data, from + 1, to, selected - 1)
    arr.forEach(eArr => {
      res.push([data[from], ...eArr])
    })
    from++
  }
  
  return res
}

function upToHour(arr) {
  let hour = 0

  arr.forEach((e) => {
    hour += Math.pow(2, e)
  })

  if (hour > 11) {
    hour = -1
  }

  return hour
}

function downToMinute(arr) {
  let minute = 0
  arr.forEach(e => {
    minute += Math.pow(2, e)
  })

  if (minute > 59) {
    return -1
  }

  return minute
}

// 上面4个灯，下面6个灯
const _UP = [3, 2, 1, 0]
const _DOWN = [5, 4, 3, 2, 1, 0]
var readBinaryWatch = function(turnedOn) {

  const lightsArrange = calLightsArrange(turnedOn)

  const res = []
  lightsArrange.forEach(arrange => {
    const [up, down] = arrange
    let arrUp = calFullPermutation(_UP, 0, _UP.length - 1, up)
    let arrDown = calFullPermutation(_DOWN, 0, _DOWN.length - 1, down)
    if (arrUp.length === 0) {
      arrUp = [[]]
    }
    if (arrDown.length === 0) {
      arrDown = [[]]
    }

    const arrHours = arrUp.map(_arr => upToHour(_arr))
    arrHours.forEach(hour => {
      if (hour >= 0) {
        const arrMinutes = arrDown.map(_arr => downToMinute(_arr))
        arrMinutes.forEach(minute => {
          if (minute >= 0) {
            if (minute < 10) {
              minute = '0' + minute
            }
            res.push(hour + ':' + minute)
          }
        })
      }
    })
  })

  return res
}

console.log(readBinaryWatch(1))

// console.log(calFullPermutation([1, 2, 3, 4], 0, 3, 3))