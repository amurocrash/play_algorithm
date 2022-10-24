var constructRectangle = function(area) {
  let w = 1
  let res_w = 1
  let l = area
  let res_l = area
  let distance = l - w
  while(true) {
    w++
    l = area / w

    if (w > l) {
      break
    }

    if (area % w === 0) {
      const newDistance = l - w
      if (newDistance < distance) {
        distance = newDistance
        res_w = w
        res_l = l
      }
    }
  }

  return [res_l, res_w]
}

console.log(constructRectangle(122122))