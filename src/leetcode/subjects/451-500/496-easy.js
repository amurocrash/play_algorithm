var nextGreaterElement = function(nums1, nums2) {
  const res = []
  for(let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i]
    let find = false
    let hasLarger = false
    for(let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j]
      if (n2 === n1) {
        find = true
      } else if (find && n2 > n1) {
        res.push(n2)
        hasLarger = true
        break
      }
    }

    if (!hasLarger) {
      res.push(-1)
    }
  }

  return res
}

// const nums1 = [4,1,2], nums2 = [1,3,4,2]
const nums1 = [2, 4], nums2 = [1, 2, 3, 4]
console.log(nextGreaterElement(nums1, nums2))