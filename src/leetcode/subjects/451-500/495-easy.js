var findPoisonedDuration = function(timeSeries, duration) {
  let count = 0
  let last = timeSeries[0]
  for(let i = 1; i < timeSeries.length; i++) {
    const cur = timeSeries[i]
    const gap = cur - last

    if (gap <= duration) {
      count += gap
    } else {
      count += duration
    }

    last = cur
  }

  return count + duration
}

const timeSeries = [1,2], duration = 2
console.log(findPoisonedDuration(timeSeries, duration))