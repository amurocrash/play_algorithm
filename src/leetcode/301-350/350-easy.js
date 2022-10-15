function _intersect(nums1, nums2, length) {
  const map = new Map()

  for(let i = 0; i < length; i++) {
    const e = nums1[i]
    let counts = map.get(e)
    if (counts === undefined) {
      counts = { count1: 1 }
      map.set(e, counts)
    } else {
      counts.count1++
    }
  }

  for(let i = 0; i < nums2.length; i++) {
    const e = nums2[i]
    let counts = map.get(e)
    if (counts) {
      if (counts.count2 === undefined) {
        counts.count2 = 1
      } else {
        counts.count2++
      }
    }
  }

  const res = []
  for(const entry of map) {
    const key = entry[0]
    const value = entry[1]

    if (value.count2 !== undefined) {
      const count = Math.min(value.count1, value.count2)
      for(let i = 0; i < count; i++) {
        res.push(key)
      }
    }
  }

  return res
}

var intersect = function(nums1, nums2) {
  if (nums1.length <= nums2.length) {
    return _intersect(nums1, nums2, nums1.length)
  } else {
    return _intersect(nums2, nums1, nums2.length)
  }
}

// const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
const nums1 = [2, 2], nums2 = [1, 2, 2, 1]
console.log(intersect(nums1, nums2))