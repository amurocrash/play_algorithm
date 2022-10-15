// 确保nums1.length <= nums2.length
function _intersection(nums1, nums2, length) {
  const res = new Set()
  const set = new Set()
  for(let i = 0; i < length; i++) {
    set.add(nums1[i])
  }

  for(let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      res.add(nums2[i])
    }
  }

  return Array.from(res)
}

var intersection = function(nums1, nums2) {
  if (nums1.length <= nums2.length) {
    return _intersection(nums1, nums2, nums1.length)
  } else {
    return _intersection(nums2, nums1, nums2.length)
  }
}

const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2))