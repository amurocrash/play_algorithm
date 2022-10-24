function list2Map(list) {
  const map = new Map()
  list.forEach((name, index) => {
    map.set(name, index)
  })

  return map
}

// list1.length <= list2.length
function _find(list1, list2) {
  const map = list2Map(list1)

  let res = []
  let minIndexSum
  list2.forEach((name, index) => {
    if (map.has(name)) {
      const sum = map.get(name) + index
      if (minIndexSum === undefined || sum <= minIndexSum) {
        if (sum < minIndexSum) {
          res.length = []
        }
        res.push(name)
        minIndexSum = sum
      } 
      // else if (sum === minIndexSum) {
      //   res.push(name)
      // } else if (sum < minIndexSum) {
      //   res.length = 0
      //   res.push(name)
      //   minIndexSum = sum
      // }
    }
  })

  return res
}

var findRestaurant = function(list1, list2) {
  if (list1.length <= list2.length) {
    return _find(list1, list2)
  } else {
    return _find(list2, list1)
  }
}

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["KFC", "Shogun", "Burger King"]

const list1 = ["Shogun","Piatti","Tapioca Express","Burger King","KFC"]
const list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
console.log(findRestaurant(list1, list2))

